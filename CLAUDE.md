# CLAUDE.md — CareerSwitchKit website

This file gives Claude Code permanent context for this project.
Read it fully before doing any work, and follow it in every session.

---

## What we're building

CareerSwitchKit is a digital product: a US-focused job-application toolkit for
people changing careers. It includes ATS-friendly resume templates, cover letter
templates, a 50-prompt AI pack, and an ATS keyword checklist.

- Operator: Zorby&Co
- Domain: careerswitchkit.org
- The website's ONLY job is to sell the kit: explain it clearly, build trust,
  and get the visitor to click buy. It is a marketing site, not an app.

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
   - Hero: headline + 3 small product visuals + primary button "Get the Kit"
     + secondary button "Preview what's inside"
   - What's included: cards for resume templates, cover letters, AI prompt pack,
     ATS checklist, and the completed example
   - How it works: 3 steps (pick a template → run the prompts → check ATS + apply)
   - Proof: a before/after bullet rewrite, using real screenshots
   - Pricing: ONE plan, $49
   - FAQ
   - Contact
   - Footer: links to /terms and /preview, and "© 2026 CareerSwitchKit"

2. Preview page (/preview)
   - A gallery of real product screenshots, square (1:1), with labels and a
     repeated "Get the Kit" button

3. Terms page (/terms)
   - Combined Terms + Refund + Privacy

---

## Content rules (important — these protect us)

- Use REAL product screenshots for product visuals. Never AI-generated art.
- NO fake testimonials or reviews. Only real proof.
- NO job or interview guarantees. We sell tools and templates only.
- The AI Prompt Pack is exactly 50 prompts. Never claim "100+".
- Audience: US career switchers. Tone: professional, clear, and empathetic to
  someone nervously changing fields.

---

## Payments

- Processor: Polar (acts as Merchant of Record).
- The "Get the Kit" button will trigger Polar's checkout (a hosted link or an
  embedded overlay). I'll give you the Polar product details once approved.
- For now, make the button a clearly-marked placeholder so the layout is ready
  to wire up later.

---

## How to work with me

- I'm a beginner at coding. Explain what you're doing in plain language as you go.
- Before any big or destructive change, tell me the plan in one or two sentences
  first, then do it.
- Prefer simple, readable solutions over clever ones.
- After you make a change, tell me exactly how to see the result.
