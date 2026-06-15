# CLAUDE.md — CareerSwitchKit website

This file gives Claude Code permanent context for this project.
Read it fully before doing any work, and follow it in every session.

---

## What we're building

CareerSwitchKit is a digital product for US career switchers — people applying
to a field they've never formally worked in. It sells at **$19** as an instant
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
   - Pricing: ONE plan, $19
   - FAQ
   - Contact
   - Footer: links to /terms and /preview, and "© 2026 CareerSwitchKit"

2. Preview page (/preview)
   - A gallery of real product screenshots, square (1:1), with labels and a
     repeated CTA button

3. Terms page (/terms)
   - Combined Terms + Refund + Privacy

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
- The primary CTA button will trigger Polar's checkout (a hosted link or an
  embedded overlay). Polar product details to be provided once approved.
- For now, keep the button a clearly-marked placeholder so the layout is ready
  to wire up later.

---

## How to work with me

- I'm a beginner at coding. Explain what you're doing in plain language as you go.
- Before any big or destructive change, tell me the plan in one or two sentences
  first, then do it.
- Prefer simple, readable solutions over clever ones.
- After you make a change, tell me exactly how to see the result.
