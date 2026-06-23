# CareerSwitchKit — Design System

## Brand Overview

**Product:** CareerSwitchKit — a career switch system for US career switchers applying to fields they've never formally worked in. Sells at $37 as an instant download.

**Operator:** Zorby&Co  
**Domain:** careerswitchkit.org  
**Tone:** Direct, confident, empathetic. Not cheerful. Not corporate.

---

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#3792E8` | Primary CTA buttons, links, highlights |
| `--accent-hover` | `#6EB0EE` | Hover state for accent elements |
| `--bg-dark` | `#070719` | Primary dark background (hero, sections) |
| `--bg-secondary` | `#10102D` | Secondary dark background, cards |
| `--bg-light` | `#FFFFFF` | Light background sections |
| `--border-subtle` | `rgba(255,255,255,0.1)` | Borders, dividers on dark backgrounds |

**Design direction:** Sleek, minimal, premium, SaaS-like. Confident and trustworthy — never busy, cartoony, or cluttered. Dark-first aesthetic with blue accent.

---

## Typography

**Heading font:** Geist (geometric sans) — clean, modern, premium  
**Body font:** DM Sans — highly readable, neutral, professional

**Font scale:**
- `text-6xl / 72px` — Hero headline (bold)
- `text-4xl / 48px` — Section headings (semibold)
- `text-2xl / 30px` — Subheadings (medium)
- `text-lg / 18px` — Body copy, feature descriptions
- `text-base / 16px` — UI text, labels
- `text-sm / 14px` — Captions, footnotes

**Banned fonts:** Inter, Roboto, Arial, Space Grotesk — these make the site look generic.

---

## Locked Copy

**Headline:** "Your background isn't the problem. Your resume is."  
**Subheadline:** "Stop explaining yourself. Start getting interviews."

---

## Component Styles

### Primary CTA Button
- Background: `#3792E8`
- Hover: `#6EB0EE`
- Text: white, semibold
- Border radius: `8px`
- Padding: `16px 32px`
- Font size: `18px`
- No shadows — flat and confident

### Secondary Button
- Background: transparent
- Border: `1px solid rgba(255,255,255,0.3)`
- Text: white
- Same radius and padding as primary
- Hover: border opacity increases

### Cards / Feature Blocks
- Background: `#10102D`
- Border: `1px solid rgba(255,255,255,0.1)`
- Border radius: `12px`
- Padding: `32px`
- No drop shadows on dark bg

### Stage Indicator (4-stage system)
- Numbered label: accent blue `#3792E8`, small caps
- Stage title: white, bold, large
- Stage description: `rgba(255,255,255,0.7)`, readable body size

---

## Layout

- Max content width: `1200px`
- Section vertical padding: `96px` top/bottom
- Grid: 12-column, with `24px` gutters
- Mobile breakpoint: `640px`
- Tablet breakpoint: `768px`

---

## Page Structure

### Home (landing page)
1. **Hero** — Locked headline + subheadline, product visual, primary CTA + "See how it works" secondary button
2. **The 4 Stages** — Stage 1–4 walked through with outcomes (not file names)
3. **How it works** — The transformation sequence
4. **Proof** — Before/after showing the translation problem solved
5. **Pricing** — ONE plan, $37
6. **FAQ**
7. **Contact**
8. **Footer** — Links to /terms and /preview, "© 2026 CareerSwitchKit"

### /preview
Gallery of real product screenshots, square (1:1) with labels and repeated CTA.

### /terms
Combined Terms of Service + Refund Policy + Privacy Policy.

---

## The 4 Stages (use this framing everywhere)

- **Stage 1 — Map your transfer** (START HERE doc)
- **Stage 2 — Build your materials** (CV templates + Cover letter templates)
- **Stage 3 — Optimize and score** (ATS Checklist + AI Prompt Pack)
- **Stage 4 — Apply with proof** (Completed Example)

---

## Motion / Animation

- Subtle only — no animation for its own sake
- Entrance: `fade-up` on scroll, `200ms` delay between staggered items
- Hover transitions: `150ms ease`
- No bouncy, cartoony, or attention-grabbing motion
- Motion intensity: moderate (4–6 out of 10)

---

## Language Rules

**Use:** system, sequence, career switch framework, stages, outcomes, transformation  
**Never use:** kit, bundle, pack, "8 files", "download and use", generic job search language

---

## Emotional Positioning

Target buyer is experiencing **impostor syndrome** — they feel like a fraud applying for a role without a traditional background. The design and copy must reframe this: *you're not unqualified, you're just not presenting yourself correctly yet.* The system fixes that.
