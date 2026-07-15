import { createClient } from "npm:@supabase/supabase-js@2";

const defaultOrigins = [
  "https://lokeshsukhwal.github.io",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

const configuredOrigins = (Deno.env.get("ALLOWED_ORIGINS") || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedOrigins = new Set([...defaultOrigins, ...configuredOrigins]);

function corsHeaders(origin: string | null) {
  const allowedOrigin = origin && allowedOrigins.has(origin) ? origin : defaultOrigins[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
    Vary: "Origin",
  };
}

function jsonResponse(body: Record<string, unknown>, status: number, origin: string | null) {
  return new Response(JSON.stringify(body), { status, headers: corsHeaders(origin) });
}

function clean(value: unknown) {
  return typeof value === "string" ? value.replaceAll("\u0000", "").trim() : "";
}

function validationError(payload: Record<string, unknown>) {
  const name = clean(payload.name);
  const email = clean(payload.email).toLowerCase();
  const subject = clean(payload.subject);
  const message = clean(payload.message);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2 || name.length > 100) return "Name must be between 2 and 100 characters.";
  if (email.length > 254 || !emailPattern.test(email)) return "Enter a valid email address.";
  if (subject.length < 3 || subject.length > 160) return "Subject must be between 3 and 160 characters.";
  if (message.length < 20 || message.length > 5000) return "Message must be between 20 and 5000 characters.";
  return null;
}

async function hashIp(ip: string) {
  const salt = Deno.env.get("RATE_LIMIT_SALT");
  if (!salt) throw new Error("RATE_LIMIT_SALT is not configured");
  const data = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (request) => {
  const origin = request.headers.get("origin");

  if (request.method === "OPTIONS") {
    if (origin && !allowedOrigins.has(origin)) return jsonResponse({ success: false, error: "Origin not allowed." }, 403, origin);
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }

  if (request.method !== "POST") return jsonResponse({ success: false, error: "Method not allowed." }, 405, origin);
  if (origin && !allowedOrigins.has(origin)) return jsonResponse({ success: false, error: "Origin not allowed." }, 403, origin);

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) return jsonResponse({ success: false, error: "Request is too large." }, 413, origin);

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ success: false, error: "Invalid JSON payload." }, 400, origin);
  }

  // Honeypot: bots see a successful response, but nothing is stored.
  if (clean(payload.website)) return jsonResponse({ success: true }, 200, origin);

  const invalid = validationError(payload);
  if (invalid) return jsonResponse({ success: false, error: invalid }, 400, origin);

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) return jsonResponse({ success: false, error: "Contact service is unavailable." }, 503, origin);

  try {
    const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const ip = request.headers.get("cf-connecting-ip") || forwarded || "unknown";
    const ipHash = await hashIp(ip);
    const source = clean(payload.source).slice(0, 500) || null;
    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const { data, error } = await supabase.rpc("accept_contact_message", {
      p_ip_hash: ipHash,
      p_name: clean(payload.name),
      p_email: clean(payload.email).toLowerCase(),
      p_subject: clean(payload.subject),
      p_message: clean(payload.message),
      p_source: source,
    });

    if (error) {
      if (error.message.includes("rate_limit_exceeded")) {
        return jsonResponse({ success: false, error: "Too many messages. Please try again in 10 minutes." }, 429, origin);
      }
      console.error("Contact insert failed", error.code, error.message);
      return jsonResponse({ success: false, error: "Message could not be stored." }, 500, origin);
    }

    return jsonResponse({ success: true, id: data }, 201, origin);
  } catch (error) {
    console.error("Contact function failed", error instanceof Error ? error.message : error);
    return jsonResponse({ success: false, error: "Contact service is temporarily unavailable." }, 500, origin);
  }
});
