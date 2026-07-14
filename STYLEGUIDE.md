Cinematic Storybook — Style Guide

Overview
- Concept: Long-form, narrative-driven portfolio with subtle 3D and motion.
- Tone: Editorial, warm-technical, crafted.

Core tokens
- Primary background: #0b1220
- Accent gradient: linear-gradient(90deg, #6D28D9, #F472B6, #06B6D4)
- Surface (glass): rgba(255,255,255,0.02)
- Muted text: #94a3b8

Typography
- Headline: Orbitron (heavy, display)
- Subhead / UI: Inter
- Code / Mono: Source Code Pro or SFMono

Spacing
- Base spacing: 16px
- Sections use wide gutters on desktop (max-width 1200-1400px)

Motion
- Entrance: 0.6s ease-out
- Stagger: 0.08s
- Scroll-synced timeline for case studies

Accessibility
- 4.5:1 contrast for body text
- Reduced-motion support

Assets & Illustration
- Use soft, hand-drawn vector illustrations for visual anchors
- Small 3D/Canvas scenes for hero background (lazy-loaded)

Implementation notes
- Keep landing fast: lazy-load heavy assets (Lottie, 3D)
- Use Framer Motion for choreography; keep reduced-motion checks
- Prepare image variants for 1x/2x and AV if needed

Files to create next
- `src/components/CinematicHero.js` — hero section (motion + subtle scene)
- `src/components/StorybookSections.js` — reusable section wrappers
- `src/styles/storybook.css` — small utilities for storytelling layout

Design rationale
- Long-form storytelling makes projects memorable
- Motion and small 3D elements add craft without being gimmicky

