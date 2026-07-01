# CLAUDE.md — CareerSwitchKit website

This file gives Claude Code permanent context for this project.
Read it fully before doing any work, and follow it in every session.

---

## MANDATORY: Activate skills before any task

Before touching any code, file, or command, activate these skills in order.
This is non-negotiable — do not write a single line of code before all
relevant skills are loaded.

1. `frontend-design` — all visual and aesthetic decisions
2. `design-taste-frontend` (DESIGN_VARIANCE:7–8, MOTION_INTENSITY:4–6, VISUAL_DENSITY:2–3)
   — push design quality beyond defaults. Note: the user may refer to this as
   "taste-skill" — they are the same skill. (Renamed from the bare `design-taste`
   originally listed here — that directory was emptied at some point; this is
   the actual installed skill, sourced from `Leonxlnx/taste-skill` via the
   `skills` CLI, same pipeline as everything else in this list.)
3. `impeccable` — marketing-site craft and conversion copy quality
4. `vercel-react-best-practices` — all React/Next.js code decisions
5. `cro` — every layout and copy decision is a conversion decision on a
   single-product $37 sales page; informs CTA placement, proof hierarchy,
   section order, and friction reduction. (Reinstalled 2026-07-01 from
   `coreyhaines31/marketingskills` via the `skills` CLI — 28.5K installs,
   scanned Safe/Low-Risk — after the original copy of this skill was found
   emptied on disk.)
6. `ui-animation` — motion design; always activate for any task touching
   animations, transitions, or interactive states
7. `ui-ux-pro-max` — UI/UX quality control across accessibility, interaction,
   layout, typography, animation, and forms; always activate for any visual
   or design task

Invoke each with the Skill tool before proceeding. Skills 1–7 apply to every
design task. Never skip any of them.

---

## What we're building

CareerSwitchKit is a digital product for US career switchers — people applying
to a field they've never formally worked in. It sells at **$37** as an instant
download.

**Positioning (locked — never revert to old framing):**
This is NOT a file pack, toolkit, or bundle. It is a **career switch system** —
a structured, step-by-step process that takes someone with a non-traditional
background and gives them the exact sequence to present themselves credibly to
hiring managers in a new field.

**Core insight:** Career switchers don't fail because they're unqualified. They
fail because they don't know how to translate their existing experience into
language hiring managers in a new field understand. The product solves that
translation problem through a structured system.

- Operator: Zorby&Co
- Domain: careerswitchkit.org
- The website's ONLY job is to sell the system: explain it clearly, build trust,
  and get the visitor to click buy. It is a marketing site, not an app.

---

## Headline & subheadline (locked — do not change)

- Headline: **"Your background isn't the problem. Your resume is."**
- Subheadline: **"Stop explaining yourself. Start getting interviews."**

---

## Emotional angle

The buyer is experiencing **impostor syndrome** — they feel like a fraud applying
for a role they don't have a traditional background in. The product's job is to
reframe that: you're not unqualified, you're just not presenting yourself
correctly yet. The system fixes that.

**Buyer in one sentence:** Someone who has decided to switch careers, knows
they're capable, but has no idea how to make a resume and cover letter that
convincingly bridges their old field and their new target role — and is scared
they'll look like an impostor on paper.

---

## The 4 stages (product structure — use this framing everywhere)

- **Stage 1 — Map your transfer** (START HERE doc)
- **Stage 2 — Build your materials** (CV templates + Cover letter templates)
- **Stage 3 — Optimize and score** (ATS Checklist + AI Prompt Pack)
- **Stage 4 — Apply with proof** (Completed Example)

---

## Language rules (critical — enforce on every piece of copy)

**Use:**
- "System" not "kit" or "bundle"
- "Sequence" not "files" or "documents"
- "Career switch framework" not "template pack"
- "Stages" not "items" or "files"
- Outcomes and transformation, not deliverables and features

**Never use:**
- "8 files", "bundle", "pack", "download and use"
- Any copy that sounds like you're selling Word documents
- Generic job search language not specific to career switchers

---

## Tech stack (use these — don't substitute without asking me)

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Components: shadcn/ui — use existing shadcn primitives; do not hand-roll a
  component that shadcn already provides
- Language: TypeScript
- Deployment: Vercel

Keep it a single, simple marketing site. No database, login, or backend unless
I specifically ask for one.

---

## Brand colors (use these exact values, as CSS variables)

- Accent (primary):        #3792E8
- Accent (hover):          #6EB0EE
- Near-black (dark base):  #070719
- Secondary dark:          #10102D
- Light background:        #FFFFFF
- Subtle border / overlay: rgba(255, 255, 255, 0.1)

Design direction: sleek, minimal, premium, SaaS-like. Confident and trustworthy
— never busy, cartoony, or cluttered.

---

## Hard design rules (do not break these)

- NEVER use these fonts: Inter, Roboto, Arial, Space Grotesk. They are overused
  and make a site look AI-generated.
- Instead, commit to a distinctive, premium font pairing. A good starting point:
  a clean geometric sans for headings (for example General Sans or Geist) plus a
  highly readable sans for body text. You may refine the choice, but commit to a
  deliberate one.
- NO generic purple-gradient-on-white looks. NO cookie-cutter hero layouts.
- Use motion only where it adds meaning — subtle and professional. No animation
  for its own sake.
- Pick ONE clear aesthetic direction and apply it consistently across the site.

---

## Page structure

1. Home (the landing page)
   - Hero: locked headline/subheadline + product visuals + primary CTA
     + secondary button "See how it works"
   - The 4 stages: walk through Stage 1–4 with outcomes, not file names
   - How it works: the transformation sequence
   - Proof: before/after showing the translation problem being solved
   - Pricing: ONE plan, $37
   - FAQ
   - Footer: links to /terms, and "© 2026 CareerSwitchKit"

   Note (2026-07-01): this section list is stale beyond price — `/preview` was
   removed entirely, a `/thank-you` post-purchase page and a `/blog` route now
   exist, and there's no dedicated Contact section on the current page. See
   `C:\The Vault\the vault\projects\careerswitchkit\wiki\website.md` for the
   current real structure; this file needs a fuller pass to catch up, flagged
   here rather than silently rewritten.

2. Terms page (/terms)
   - Combined Terms + Refund + Privacy

3. Thank-you page (/thank-you)
   - Post-purchase confirmation, added 2026-06-28

(Note: /preview was removed entirely 2026-06-23 — do not recreate it or assume
it exists.)

---

## Content rules (important — these protect us)

- Use REAL product screenshots for product visuals. Never AI-generated art.
- NO fake testimonials or reviews. Only real proof.
- NO job or interview guarantees. We sell a system — outcomes depend on the user.
- The AI Prompt Pack is exactly 50 prompts. Never claim "100+".
- Audience: US career switchers. Tone: direct, confident, and empathetic to
  someone nervously changing fields. Not cheerful. Not corporate.

---

## Payments

- Processor: Polar (acts as Merchant of Record).
- **Live since 2026-06-28** — all landing-page CTAs are wired to real Polar
  checkout at $37, not a placeholder. A `/thank-you` post-purchase page exists.
  Do not treat checkout as unwired or revert it to a placeholder state.

---

## How to work with me

- I'm a beginner at coding. Explain what you're doing in plain language as you go.
- Before any big or destructive change, tell me the plan in one or two sentences
  first, then do it.
- Prefer simple, readable solutions over clever ones.
- After you make a change, tell me exactly how to see the result.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

---

## CRITICAL: How the landing page is actually built

**READ THIS BEFORE TOUCHING ANY FILE.**

### The single most important fact

The landing page (`app/page.tsx`) is almost entirely self-contained. Most
sections are written **inline directly in page.tsx** — they are NOT separate
components. Several component files exist in `app/components/` that look
relevant but are **orphaned** — they are not imported by page.tsx and editing
them has zero visible effect on the site.

### What page.tsx actually imports (the full list)

```
Navbar          → app/components/Navbar.tsx
Footer          → app/components/Footer.tsx
SystemDashboard → app/components/SystemDashboard.tsx
FAQAccordion    → app/components/FAQAccordion.tsx
FadeUpObserver  → app/components/FadeUpObserver.tsx
```

`layout.tsx` wraps everything and adds:
```
LandingBackground → app/components/LandingBackground.tsx  (video bg)
MotionProvider    → app/components/MotionProvider.tsx      (Framer Motion config)
```

### ORPHANED components — editing these does NOTHING to the landing page

```
app/components/Contact.tsx   ← was the old CTA section, no longer imported
app/components/MidCTA.tsx    ← not imported anywhere on page.tsx
app/components/Pricing.tsx   ← not imported; pricing is inline in page.tsx
app/components/Reveal.tsx    ← not imported on the landing page
```

Do NOT edit these to change the landing page. Find the section inline in page.tsx.

### Section map — exact line ranges in app/page.tsx

| Section | Lines | Notes |
|---|---|---|
| SVG noise filter definition | 42–49 | Defines `#c3-noise` filter used site-wide |
| Fixed noise overlay | 51 | `fixed inset-0 z-1 opacity-50 filter:url(#c3-noise)` |
| Vertical guide lines | 56–57 | Desktop-only fixed lines, hidden on mobile |
| **Hero** | 63–139 | Badge, h1, subheadline, 2 CTAs |
| **System Dashboard** | 141–156 | `<SystemDashboard />` component |
| **Pricing** | 158–291 | Fully inline — 2-column comparison card |
| **FAQ** | 293–299 | `<FAQAccordion />` component |
| **Final CTA** | 301–340 | Inline section — "Stop wishing. Start applying." |
| Footer | 344 | `<Footer />` component |

### Font system — three separate loading mechanisms

| Font | Loaded via | Tailwind class | Used for |
|---|---|---|---|
| Sora | `next/font` → CSS var `--font-sora` | `font-sora` | Logo, some headings |
| DM Sans | `next/font` → CSS var `--font-dm-sans` | `font-sans` (default body) | All body text |
| Geist | `<link>` tag in layout.tsx `<head>` | `font-geist` | All h1–h4, display headings |
| Material Symbols | `<link>` tag in layout.tsx `<head>` | `material-symbols-outlined` | Icons (text-based, not SVG) |

**Critical:** Geist is loaded via a plain `<link>` tag, NOT next/font. The class
`font-geist` works because `globals.css` has a rule:
`h1, h2, h3, h4, .font-geist { font-family: 'Geist', sans-serif }`.

### Color system — two sources of truth

**Tailwind config** (`tailwind.config.js`) — use as Tailwind classes:
- `accent` = `#3792E8` (the blue CTA color)
- `accent-hover` = `#6EB0EE`
- `primary` = `#a0c9ff` (light blue highlight — different from accent)
- `on-surface` = `#e2e0fa` (default body text)
- `on-surface-variant` = `#c0c7d3` (secondary text)
- `dark-base` = `#070719`

**CSS variables** (`globals.css`) — used in inline `style` props:
- `var(--accent)` = `#3792E8`
- `var(--accent-hover)` = `#6EB0EE`

**Note:** The page uses `#a0c9ff` (light blue) extensively in inline styles for
highlights. This is `brand-primary` / `primary` in Tailwind. It is NOT the same
as `accent` (#3792E8). Both blues are in play — accent is the CTA blue,
`#a0c9ff` is the decorative highlight blue.

### CSS utility classes to know

| Class | What it does |
|---|---|
| `.fade-up` | opacity:0, translateY(20px) — revealed by FadeUpObserver |
| `.fade-up.visible` | opacity:1, translateY(0) — FadeUpObserver adds `.visible` on scroll |
| `.liquid-glass` | Dark translucent card: `rgba(26,26,45,0.4)` bg + backdrop-blur-12 + subtle border |
| `.shiny-text` | Animated left-to-right gradient sweep on hero "Your resume is." |
| `.reveal-line-1` | Hero h1 line 1 entrance animation (fadeSlideUp) |
| `.reveal-line-2` | Hero h1 line 2 entrance animation, 0.3s delay, starts opacity:0 |
| `.noise-texture` | SVG fractal noise background (tiling 256×256) |
| `#c3-noise` | SVG filter in page.tsx — applied as `filter: url(#c3-noise)` for grain |
| `.watermark-text` | 12vw ultra-light text behind pricing ("Lifetime Access.") |
| `.node-map-bg` | Grid + radial bg for Stage01 transfer map visualization |
| `.nav-underline` | Nav link underline slides in from left on hover |
| `.faq-item-content` | CSS grid-template-rows trick for accordion (0fr → 1fr) |
| `.sidebar-item.active` | SystemDashboard stage highlight state |
| `.vertical-guide` | Fixed left/right structural guide lines (lg: only) |
| `.pricing-card-glow` | Continuous box-shadow breathe animation on pricing card |

### Background layer stack

1. `html { background: #070719 }` — base color always visible
2. `LandingBackground` (in layout.tsx) — CloudFront MP4 video at `opacity:0.2`,
   `position:absolute`, `z-index:-1`, with a gradient overlay that fades top and bottom
3. Fixed noise overlay in page.tsx — `position:fixed, inset-0, z-index:1`,
   `filter:url(#c3-noise)`, `opacity:0.5` — grain texture over everything
4. Page content at `z-index:2` inside `.relative.min-h-screen`

### The Final CTA section (page.tsx lines 301–340)

This is what renders at the bottom of the page — NOT `Contact.tsx`.
It is a `<section>` tag inline in page.tsx with:
- Class: `max-w-7xl mx-auto px-6 py-40 text-center relative overflow-hidden rounded-[3rem]`
- Three bg layers: aurora fill div, radial glow, noise div
- Heading: "Stop wishing. Start applying." — `font-geist font-black`, clamp(48px,8vw,96px)
- CTA button: links to `href="#pricing"` (anchor scroll, NOT `handleCheckout()`)
- Sub-text: "Instant Access. Risk-Free Guarantee."

### Checkout / payments

`lib/checkout.ts` exports `handleCheckout()`. Currently a stub:
- Fires a GA4 `begin_checkout` event
- Logs a console message
- Does NOT open Polar or any real checkout yet

Navbar CTA button, Navbar mobile button all call `handleCheckout()`.
The hero primary CTA and pricing card CTA link to `href="#pricing"` (scroll anchor).
The final CTA at the bottom links to `href="#pricing"` (not `handleCheckout()`).

### Interactive components

**SystemDashboard** (`app/components/SystemDashboard.tsx`):
- Full 3-panel IDE-style interface, 720px tall
- React `useState` controls active stage, active file, active view
- 4 stages, each with sub-views rendered by `renderContent()`
- Stage styles via `.sidebar-item.active` CSS class + inline conditional styles
- No external libraries — pure React state + inline styles

**FAQAccordion** (`app/components/FAQAccordion.tsx`):
- React `useState` for open index
- Expand/collapse via CSS grid-template-rows trick (`.faq-item-content`)
- Active state applies `.active` class for border/bg color change
- 5 hardcoded FAQ items

**FadeUpObserver** (`app/components/FadeUpObserver.tsx`):
- Mounts a single IntersectionObserver on all `.fade-up` elements
- Adds `.visible` class when element enters viewport (threshold: 0.1)
- Returns null — no rendered output

**Navbar** (`app/components/Navbar.tsx`):
- IntersectionObserver on a 1px sentinel div triggers glassmorphic bg on scroll
- Mobile hamburger menu with `menuOpen` state
- 2 nav links: "How It Works" (#how-it-works), "FAQ" (#faq)
- CTA button calls `handleCheckout()`
