---
name: project-slepajme-website
description: ŠlepajMe towing startup landing page — Next.js 16, Tailwind v4, all sections built
metadata:
  type: project
---

Built a full premium landing page for ŠlepajMe (roadside assistance/towing app targeting Montenegro).

**Why:** User requested complete startup website similar to Uber/Bolt quality.

**How to apply:** When making changes, keep the dark navy + yellow accent brand, and note Tailwind v4 CSS-first config (no tailwind.config.ts).

Stack:
- Next.js 16.2.6 (App Router, static output)
- Tailwind CSS v4 (`@import "tailwindcss"` in globals.css, `@theme` for custom tokens)
- lucide-react installed for icons (but components use inline SVGs)
- Inter font via next/font/google

Project path: `c:\Users\mneht\Desktop\SlepajMeWebsite\slepajme-website`

Sections built:
1. Navbar (glassmorphism on scroll, mobile hamburger)
2. Hero (animated phone mockup, floating cards, social proof)
3. HowItWorks (3 steps, connecting line)
4. DriverSection (driver dashboard mockup, benefits list, income highlight)
5. Features (6-card grid)
6. AppPreview (Request + Tracking phone mockups side-by-side)
7. TrustSection (stats, trust points, CTA banner)
8. ContactSection (contact info + working form with success state)
9. Footer (logo, nav cols, social icons)

Colors: bg `#050D1F`, accent `#F5C518`/`#E6A800`, cards `#0F1E36`/`#162033`

Scroll animations: `hooks/useScrollAnimation.ts` (IntersectionObserver) + CSS classes `.reveal`/`.visible` in globals.css.

Build: clean, 0 warnings, static prerender.
