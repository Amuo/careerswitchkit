# CLAUDE.md — CareerSwitchKit website

Context for working on the CareerSwitchKit **marketing site** (Next.js).

The full brand + product source of truth lives in the vault:
`C:\Obsidian\the vault\wiki\Projects\careerswitchkit\brand.md` — read it before any brand,
copy, design, or product-file work. This file holds only the operational
essentials and the site's non-obvious code gotchas.

---

## What this is

CareerSwitchKit is a **career switch system** (never a "kit", "bundle", or "pack")
for US career switchers — people applying to a field they've never formally worked
in. $37, one-time, instant download. Operator: Zorby&Co · domain: careerswitchkit.org.
This repo is the marketing site; its only job is to sell the system: explain it,
build trust, get the click. It is not an app.

**The core insight (the whole positioning):** switchers don't fail because they're
unqualified — they fail because their resume doesn't *translate* their existing
experience into language the new field's hiring managers recognise. The product
solves that translation problem. Full buyer psychology (impostor-syndrome angle,
JTBD) is in the vault brand doc, Part 9.

## Locked copy — do not change without me

- Headline: **"Your background isn't the problem. Your resume is."**
- Subheadline: **"Stop explaining yourself. Start getting interviews."**
- Signature pattern: two-tone headings — a white line, then the turn in light-blue
  (`#a0c9ff`). Full pattern list in the vault brand doc, Part 7.

## Locked facts — keep identical everywhere (site AND product files)

- Price: **$37**, one-time.
- Refund/guarantee: **7 days**. (Not 30. The site is correctly 7-day; the brand
  doc's old "30-day" was an error, now fixed. Product files may still say 30 —
  flagged to fix.)
- AI Prompt Pack: **exactly 50 prompts**. Never "100+".
- There are 8 product files internally, but **never market it as "8 files."**

## Language rules — enforce on every piece of copy

- **Use:** "system", "sequence", "stages", "career switch framework"; outcomes and
  transformation.
- **Never:** "8 files", "bundle", "pack", "download and use", anything that sounds
  like selling Word docs, generic (non-switcher) job-search language, exclamation
  marks, or any interview/job **guarantee** (we promise a 7-day refund, not results).
- Always write "CareerSwitchKit" (one word). The domain is **.org**, never .com.

## Content rules — these protect us

- Real product screenshots only — never AI-generated art.
- No fake testimonials or reviews.
- No job/interview guarantees — outcomes depend on the user.
- Tone: direct, confident, empathetic to someone nervously switching fields.
  Not cheerful. Not corporate.

## The two "stage" systems — don't conflate

- The **website** sells a **4-stage** system in copy (map your transfer · build
  materials · optimize & score · apply with proof). Note: the old interactive
  dashboard that walked through these was **removed** on 2026-07-03 — the 4-stage
  framing now lives only as text in the pricing card, not as a live component.
- The **AI Prompt Pack** has its own internal **6 stages** (the 50 prompts).
  Different thing — never merge the two counts.

## Tech stack — don't substitute without asking

Next.js (App Router) · Tailwind CSS · shadcn/ui (use its primitives; don't
hand-roll what shadcn provides) · TypeScript · deployed on Vercel. Single marketing
site — no database, login, or backend unless I ask. (There is a blog under `/blog`.)

## Design rules — do not break

- **Never** use Inter, Roboto, Arial, or Space Grotesk.
- Fonts actually in use: **Geist** (all headings h1–h4 + the `font-geist` class),
  **DM Sans** (body default), **Sora** (logo wordmark). Material Symbols for icons.
- Dark-first, sleek, minimal, premium/SaaS. Motion only where it means something.
- Two blues are in play and are **not** interchangeable: `#3792E8` = accent/CTA blue;
  `#a0c9ff` = decorative highlight blue.

## Payments — Polar, LIVE (verified 2026-07-02)

Polar is Merchant of Record. Checkout is real and live at $37, not a placeholder.
`lib/checkout.ts` → `handleCheckout()` fires a GA4 `begin_checkout` event, then
redirects to the Polar URL. A `/thank-you` page exists. Don't revert checkout to a stub.

## How to work with me

Beginner coder — explain in plain language as you go. Before a big or destructive
change, give the one- or two-sentence plan first, then do it. Prefer simple over
clever. After a change, tell me exactly how to see the result.

---

## Non-obvious code gotchas — read before touching files

Regenerated from the live code on 2026-07-02. The site drifts; if this list and the
code ever disagree, **trust the code and fix this list** — never hand-maintain a
full mirror of the code.

- **The landing page is `app/page.tsx`, and much of it is inline.** The hero and
  the **entire pricing block** are written inline in `page.tsx`.
  The parts pulled out as components are: `Navbar`, `Footer`, `FAQAccordion`,
  `FadeUpObserver`, `FinalCTA`, `ProblemSection` (the problem/empathy beat with
  count-up stats), `ProofExample` (the before→after typewriter proof, client-only),
  and `Typewriter` (reusable char-by-char typing effect). So: to change the bottom
  CTA, edit `components/FinalCTA.tsx`; to change pricing, edit it inline in `page.tsx`.
- **The Polar checkout URL is hardcoded in 3 places** — `lib/checkout.ts`, and
  twice directly in `page.tsx` (the hero primary CTA and the pricing-card CTA use a
  raw `href=` to the Polar URL). If the URL changes, update all three.
- **Two CTA paths that behave differently for analytics.** The navbar CTAs and the
  FinalCTA call `handleCheckout()` — which fires the GA4 `begin_checkout` event,
  then redirects. The hero and pricing-card CTAs link straight to Polar via `href`
  and **skip** that event. Keep this in mind before trusting checkout-funnel data.
- **FAQ content lives in two places that must stay in sync**: the visible accordion
  (`components/FAQAccordion.tsx`, the `FAQS` array — currently 8 items) AND the
  JSON-LD `faqSchema` in `page.tsx` (for SEO). Edit both together.
- **Geist is loaded differently from the other fonts** — via a plain `<link>` to
  Google Fonts in `layout.tsx` `<head>`, not `next/font` (Sora + DM Sans use
  `next/font`). It resolves as `font-geist` via both `tailwind.config.js` and a
  `globals.css` rule (`h1,h2,h3,h4,.font-geist { font-family:'Geist' }`).
- **Colors have no single source of truth.** They live in `tailwind.config.js`
  (plus many leftover "Stitch"/Material tokens you can ignore), in `globals.css`
  `:root` vars (`--accent`), AND hardcoded as raw hex in inline `style=` props
  throughout (the inline styles do NOT use the CSS vars). Changing a brand color
  can mean touching all three.
- **Meta Pixel AND Microsoft Clarity are both placeholders** — `layout.tsx` calls
  `fbq('init','META_PIXEL_ID')` with that literal string, and the Clarity project ID
  is the placeholder `x84g7j2y7p`, so neither is actually live yet. Only GA4
  (`G-T395SJKKNW`) is wired. (Get the real Clarity ID from the Clarity dashboard.)
- Home-page anchors: `#problem` (the problem/empathy beat), `#example` (the
  before→after proof, labelled "How It Works" in the navbar), `#pricing`, and
  `#faq`. The old `#system` dashboard anchor no longer exists.
- Background stack: `LandingBackground` (a video, in `layout.tsx`) sits behind a
  fixed SVG-noise overlay (the `#c3-noise` filter, defined in `page.tsx`); page
  content sits above at `z-index:2`.
