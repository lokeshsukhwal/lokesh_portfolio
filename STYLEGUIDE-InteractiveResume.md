Interactive Resume — Style Guide

Overview
- Concept: Fast single-page resume with interactive demos (playgrounds) showcasing projects and infra automation.
- Tone: Clean, technical, product-focused.

Core tokens
- Background: #0f1724 (charcoal)
- Accent: #06b6d4 (cyan) and #f59e0b (amber)
- Surface: #0b1220 with glass UI

Typography
- Headline: Inter or Space Grotesk
- Mono: SF Mono / Source Code Pro for code blocks

Key features
- Downloadable PDF resume
- Live demos: small embeddable sandboxes (dashboards, terminal replay)
- Timeline/resume section with copy and achievements

Performance
- Pre-render important content
- Lazy-load sandboxes and iframes

Accessibility
- keyboard navigation for sandbox controls
- reduced-motion support

Files to create
- `src/components/InteractiveResume.js`
- `src/components/Playground.js`
- `public/resume.pdf` (user-supplied)

