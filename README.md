# Lokesh Sukhwal — DevOps & Cloud Engineer Portfolio

A responsive, accessible portfolio focused on infrastructure automation, reliable delivery, observability, and platform engineering. The site presents verifiable public work, an honest project roadmap, and an interactive release-readiness simulator.

## Engineering Field Notes

Original notes and learning resources live in the repository so every article has a reviewable history and a stable source:

- [Secure Supabase contact pipeline](content/notes/secure-supabase-contact-pipeline.md)
- [GitHub Pages 404 deployment runbook](content/notes/github-pages-404-runbook.md)
- [DevOps incident troubleshooting method](content/notes/devops-incident-troubleshooting.md)
- [DevOps and cloud learning path](content/resources/devops-cloud-learning-path.md)

Each note is written around a problem, system diagram, practical commands or examples, failure diagnosis, verification, and reusable lessons. Commands should be tested in an appropriate non-production environment before use.

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

1. Create a Supabase project. The Supabase CLI is installed as a development dependency in this repository and should be run with `npx`.
2. Copy the frontend environment template:

```bash
cp .env.example .env.local
```

3. Add your project URL and public anon key to `.env.local`.
4. Authenticate, link the repository, and push the database migration:

```bash
npx supabase login
npx supabase link --project-ref YOUR_PROJECT_REF
npx supabase db push
```

Replace `YOUR_PROJECT_REF` with the first part of your project URL. For example, if the URL is `https://abcdefgh.supabase.co`, the project reference is `abcdefgh`. Do not type the placeholder literally.

5. Generate a long random rate-limit salt and deploy the function:

```bash
npx supabase secrets set RATE_LIMIT_SALT="YOUR_LONG_RANDOM_VALUE"
npx supabase secrets set ALLOWED_ORIGINS="https://lokeshsukhwal.github.io,http://localhost:3000"
npx supabase functions deploy contact-submit --no-verify-jwt
```

Replace `YOUR_LONG_RANDOM_VALUE` with a private random value and never commit it. One option is `openssl rand -hex 32`.

If interactive login is unavailable, create a personal access token in the Supabase dashboard and set it only in your terminal session:

```bash
export SUPABASE_ACCESS_TOKEN="YOUR_PERSONAL_ACCESS_TOKEN"
npx supabase projects list
```

Never put `SUPABASE_ACCESS_TOKEN`, `SUPABASE_SERVICE_ROLE_KEY`, or `RATE_LIMIT_SALT` in a React `.env` variable or commit them to Git.

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
