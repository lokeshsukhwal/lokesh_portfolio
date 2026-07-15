# Building a Secure Supabase Contact Pipeline

> A practical lab note based on this portfolio's contact system. Last verified: July 2026.

## The problem

A browser form must accept untrusted input, store useful messages, protect private data, and remain usable without requiring visitors to sign in. Writing directly from React to a database makes validation and abuse controls easy to bypass.

## Architecture

```text
Visitor
  |
  | HTTPS POST (name, email, subject, message, honeypot)
  v
React contact form
  |
  | public project URL + publishable key only
  v
Supabase Edge Function
  |-- validate length, format, and content type
  |-- reject a filled honeypot
  |-- check allowed Origin
  |-- hash the client address and apply a rate limit
  |-- use the server-only service credential
  v
PostgreSQL RPC --> private contact_messages table
                       |
                       +-- RLS denies anonymous reads and writes
```

## Trust boundaries

| Layer | It may know | It must never know |
|---|---|---|
| React client | Supabase URL, publishable key | service-role key, rate-limit salt |
| Edge Function | validation rules, server secrets | unnecessary user data |
| Database | stored message and operational status | raw client IP address |

Environment variables prefixed with `REACT_APP_` are included in the browser bundle. They are configuration, not secrets.

## Request flow

```js
const response = await fetch(`${supabaseUrl}/functions/v1/contact-submit`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    apikey: publishableKey,
  },
  body: JSON.stringify({ name, email, subject, message, website: "" }),
});

if (!response.ok) throw new Error("Submission failed");
```

The `website` field is a honeypot: real users never see or complete it, while basic form bots often do.

## Validation strategy

Validate at the server boundary even when the browser already uses `required`, `type="email"`, and `minLength`.

```text
name     2..100 characters
email    valid shape, maximum 254 characters
subject  3..160 characters
message  20..5000 characters
body     JSON only, with a strict size limit
```

Client validation improves feedback. Server validation provides enforcement.

## CORS debugging checklist

1. Reply to `OPTIONS` before reading the request body.
2. Return `Access-Control-Allow-Origin` only for an allowed origin.
3. Include every requested header, especially `content-type` and `apikey`.
4. Add the same CORS headers to success and error responses.
5. Test localhost and the production origin independently.

```bash
curl -i -X OPTIONS \
  -H 'Origin: http://localhost:3000' \
  -H 'Access-Control-Request-Method: POST' \
  https://PROJECT.supabase.co/functions/v1/contact-submit
```

## Database protection

The public browser should not insert into or select from `contact_messages`. Enable RLS, create no anonymous table policy, and let a narrowly scoped server function perform the insert.

Useful operational fields include:

```text
id, created_at, name, email, subject, message,
source, status, user_agent, ip_hash
```

Use a status lifecycle such as `new -> reviewed -> replied -> archived`. This keeps workflow metadata separate from message content.

## Rate limiting without retaining an IP

```text
ip_hash = SHA-256(RATE_LIMIT_SALT + normalized_client_ip)
```

Store only the hash and a timestamp window. Rotate the salt if it is exposed. Remember that forwarded headers are trustworthy only when they come from your platform's known proxy.

## Failure map

| Symptom | Likely cause | Check |
|---|---|---|
| Function returns 404 | Function was not deployed | `supabase functions list` |
| Function returns 401 | JWT verification does not match a public form | function auth configuration |
| Browser reports CORS | Preflight or error response lacks headers | Network tab and `curl -X OPTIONS` |
| Function returns 500 | Missing secret, RPC, or migration | function logs and secrets list |
| UI says configuration missing | React environment variables were not loaded | restart the development server |

## Verification

```bash
curl -i -X POST \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:3000' \
  -H 'apikey: YOUR_PUBLISHABLE_KEY' \
  --data '{"name":"Portfolio Test","email":"test@example.com","subject":"Pipeline test","message":"This message verifies the complete storage path.","website":""}' \
  https://PROJECT.supabase.co/functions/v1/contact-submit
```

Success means more than HTTP 201: confirm the row exists, anonymous users cannot read it, repeated requests are limited, invalid origins fail, and no server secret appears in the compiled JavaScript.

## Key lesson

Treat even a small contact form as a production boundary. Separate public configuration from secrets, enforce validation server-side, deny direct database access, and verify the entire path rather than only the UI.

