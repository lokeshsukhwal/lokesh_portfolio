# Lokesh Sukhwal — DevOps & Cloud Engineer Portfolio

A responsive, accessible portfolio focused on infrastructure automation, reliable delivery, observability, and platform engineering. The site presents verifiable public work, an honest project roadmap, and an interactive release-readiness simulator.

## Live site

[lokeshsukhwal.github.io/lokesh_portfolio](https://lokeshsukhwal.github.io/lokesh_portfolio/)

## Highlights

- Capability-based DevOps skills rather than arbitrary proficiency scores
- Project-specific repository links and explicit project status
- Interactive release-gate simulator with deterministic decisions
- Keyboard-friendly navigation and accessible form feedback
- Responsive dark and light themes
- Lazy-loaded interactive content
- Reduced-motion support

## Stack

- React 19
- Tailwind CSS utilities
- Framer Motion
- React Icons
- Create React App
- GitHub Pages

## Run locally

```bash
git clone https://github.com/lokeshsukhwal/lokesh_portfolio.git
cd lokesh_portfolio
npm install
npm start
```

The development server runs at `http://localhost:3000`.

## Quality checks

```bash
npm test -- --watch=false
npm run build
```

## Deploy

```bash
npm run deploy
```

The deploy command creates an optimized production build and publishes the `build` directory to GitHub Pages.

## Contact storage with Supabase

Contact messages are stored privately in Supabase PostgreSQL through an Edge Function. The browser never receives the service-role key and cannot read the submissions table.

1. Create a Supabase project and install the [Supabase CLI](https://supabase.com/docs/guides/cli).
2. Copy the frontend environment template:

```bash
cp .env.example .env.local
```

3. Add your project URL and public anon key to `.env.local`.
4. Authenticate, link the repository, and push the database migration:

```bash
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
```

5. Generate a long random rate-limit salt and deploy the function:

```bash
supabase secrets set RATE_LIMIT_SALT="YOUR_LONG_RANDOM_VALUE"
supabase secrets set ALLOWED_ORIGINS="https://lokeshsukhwal.github.io,http://localhost:3000"
supabase functions deploy contact-submit --no-verify-jwt
```

6. Restart the React development server after changing environment variables.

Submissions appear in Supabase under **Table Editor → contact_messages**. The `status` field supports `new`, `reviewed`, `replied`, `archived`, and `spam`.

Security controls included in the repository:

- Private tables with Row Level Security and no anonymous policies
- Server-only service-role access
- Server-side length and email validation
- Origin allowlist
- Honeypot filtering
- Hashed-IP rate limiting: five attempts per ten minutes
- Atomic database function to prevent concurrent rate-limit bypass

## Project structure

```text
src/components/
├── InteractiveResume.js  # Hero and positioning
├── About.js              # Engineering mindset
├── Skills.js             # Capability-oriented toolchain
├── Projects.js           # Shipped work and roadmap
├── Playground.js         # Release-readiness simulator
├── Contact.js            # Recruiter contact flow
└── ...                   # Navigation and shared UI
```

Supabase resources are under `supabase/migrations` and `supabase/functions`.

## Accuracy policy

Completed work, planned work, and simulated interactions are labeled separately. Performance numbers or production claims are not presented without inspectable evidence.
