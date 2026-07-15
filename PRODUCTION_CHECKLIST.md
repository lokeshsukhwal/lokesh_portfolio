Production Checklist — Interactive Resume

1. Replace `public/resume.pdf` with your final one-page PDF.
2. Verify all external links (GitHub, live demos) point to production URLs.
3. Test accessibility: keyboard navigation, color contrast, reduced-motion.
4. Run `npm run build` and audit bundle with `source-map-explorer` or `webpack-bundle-analyzer`.
5. Ensure images and media are optimized (WebP/AVIF where possible) and lazy-loaded.
6. Configure hosting: Vercel recommended. Connect GitHub repo, set Node version to v18+.
7. Add env vars and secrets securely in hosting provider if needed.
8. Enable analytics and Sentry/Datadog on production build if desired (only after privacy review).
9. Configure redirects, robots.txt, and sitemap.xml.
10. Run performance checks: Lighthouse scores, TTFB, Largest Contentful Paint.

Deployment steps (Vercel)
- Sign in at https://vercel.com, import repository.
- Set build command: `npm run build` and output: `build`.
- Deploy; verify preview, then production.
