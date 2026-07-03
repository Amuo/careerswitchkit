# CareerSwitchKit — Marketing Context Export

This document gives full background on CareerSwitchKit, a live product, so you can help with marketing/copy/strategy questions without needing anything else explained. It was compiled directly from the founder's internal knowledge base and the live production website on 2026-07-01. Where something is genuinely unknown or undecided, that is stated explicitly rather than filled in.

---

## 1. What CareerSwitchKit Is

**Product:** A $37 digital career switch system, sold as an instant download at careerswitchkit.org. No login, no app, no subscription — buy once, download everything, keep it forever.

**Operator:** Zorby&Co (the founder is referred to here as "Dokta").

**One-line pitch:** "The only job application kit built specifically for career switchers."

**What it actually is:** A structured 4-stage sequence, not a generic template pack:

| Stage | Name | What it delivers |
|---|---|---|
| 1 | Map Your Transfer | A "transfer map" — a personal audit of which of the buyer's existing skills transfer to their new target field. This is the entry point every other stage builds on, and the thing no competitor product starts with. |
| 2 | Build Your Materials | 3 CV templates (One Page, Two Page, Hybrid) + 3 cover letter templates (Standard, Employment Gap, Referral scenario) |
| 3 | Optimize and Score | A standalone interactive ATS Score Checker (HTML app) + an AI Prompt Pack of exactly 50 prompts specific to career-switch writing (not generic writing prompts) |
| 4 | Apply With Proof | A completed, real-world example showing how Stages 1–3 come together. **Currently a placeholder file** — do not promise or feature a specific example until it's built; a real one is planned for a future update. |

**Core insight the whole product is built around:** Career switchers don't fail because they're unqualified. They fail because they don't know how to translate their existing experience into language a hiring manager in the *new* field recognizes. This is called "the translation problem" internally, and it's the single idea all copy should trace back to. The product is explicitly NOT a file pack, template bundle, or generic resume toolkit — it's a sequence that solves this one specific problem.

**Total file count:** 8 files. Sequence is designed to be completable in under 4 hours / one weekend.

**Pricing logic:** $37 sits deliberately in impulse-buy territory, anchored against professional resume writers ($200–500) and career coaches ($1,000–3,000+). One-time, not subscription. Price is not to be raised before "Month 4" of the launch.

**Guarantee:** 7-day refund if the system didn't work for the buyer's specific situation. This is a satisfaction/fit guarantee, not an outcome guarantee (see Section 5 — no job or interview guarantees, ever).

**Payment processor:** Polar, acting as Merchant of Record (handles tax/compliance). Checkout is live and functional — real purchases have gone through since 2026-06-28, along with a post-purchase `/thank-you` confirmation page.

**Tech stack (context only, not usually needed for marketing questions):** Next.js App Router, Tailwind CSS, shadcn/ui, TypeScript, hosted on Vercel.

---

## 2. Target Customer / Audience

**Who we serve:** US career switchers — people applying to a field they have never formally worked in. They've already decided to switch and believe they're capable, but have no idea how to build a resume/cover letter that credibly bridges their old field and their new target role.

**Market signals backing this (as documented internally):**
- 49% of US professionals are actively considering a career change (cited source: Boterview, 2025)
- 71% of workers applied outside their industry in 2025 (cited source: MPR Survey)
- Career switchers reportedly need 200+ applications vs. an average of 32 for standard job seekers
- Only 2–3% of submitted resumes result in an interview (cited source: ResumeGenius, 2026)
- Median time to first offer: 68.5 days
- Highest-churn sectors buyers come from: Retail (58%), Hospitality (56%), Construction (50%), Education (42%), Healthcare (40%)
- By generation: Gen Z 58%, Gen X 53%, Millennials 51%

**Three personas, in priority order:**

1. **The Desperate Applicant (highest priority).** Millennial/Gen X, 28–42. Currently employed but miserable, or recently laid off. From Retail, Hospitality, Education, or Admin. Has applied 30–150 times with near-zero callbacks. Emotional job: feel like their years of work still have value. Primary objection: "I've already tried everything — is this going to be different?" Closes on: proof of a real pivot, a fixable ATS score, and a real system (not more generic advice). Desperation overrides price sensitivity for this group.

2. **The Proactive Planner.** Gen Z/younger Millennial, 23–35. Just finished a certification or bootcamp in their target field, hasn't applied yet. Emotional job: not look like an outsider or entry-level candidate despite switching. Primary objection: "I can probably figure this out from free YouTube content." Closes on: time saved (20+ hours) framing.

3. **The Mid-Career Pivot.** Gen X, 38–52. 10+ years in one field, burned out/laid off/AI-displaced. Feels "starting over" most acutely — has the most experience but the widest perceived gap. Primary objection: "I'm too old to pivot; employers want someone who grew up in the field." Closes on: cover letters that handle the "why I'm switching" narrative directly, and the hybrid resume format leading with competencies instead of a timeline.

**Five documented pain themes** (in priority order for copy):
1. **Translating experience** — the core problem. They have real transferable skills but no vocabulary to present them credibly in a new field.
2. **The ATS black hole** — automated filters reject career-switcher resumes disproportionately because keyword patterns don't match the new field.
3. **Cover letter paralysis** — generic "explain your relevant experience" advice doesn't work when the experience is in a different field.
4. **Resume format confusion** — most people default to chronological (the worst format for switchers) because contradictory advice exists online. The hybrid format (skills-led) is correct for most, but not widely known.
5. **The "starting over" feeling** — an emotional/identity pain, not just a functional one. Internally, the reframe used everywhere is: "the problem is the format, not the person."

**Customer vocabulary (what to mirror in copy):**
- Problem language: "transferable skills," "career pivot"/"career change resume," "how to explain my career change," "ATS black hole"/"applications disappear," "no callbacks"/"no response after applying," "starting over"/"years of experience mean nothing," "feel like an imposter."
- Solution language: "hybrid resume"/"combination resume format," "career change cover letter template," "ATS-friendly resume," "resume template for career changers."
- Copy rule: lead with their pain phrase, not a product description. "Years of experience. Zero callbacks." beats "8 professional templates."

**Where this audience is found (documented "digital watering holes"):** r/careerguidance (2.1M), r/jobs (2.1M), r/resumes (500K), r/careerchange (6.2K, small but 100% target fit), LinkedIn, Facebook groups (Albert's List, Bossed Up), TikTok #careerchange (900M+ views).

**Honesty note:** This persona data reads as internally documented research/assumptions, not a report of a formal customer interview study or survey the founder personally ran — no notes describe primary research (e.g., interviews with actual buyers) beyond citing external market-size statistics. Treat the personas as a working model to write against, not as validated-by-real-customer-interviews fact.

---

## 3. Brand Voice and Positioning

**Positioning statement (locked):** "The only job application kit built specifically for career switchers." CareerSwitchKit is NOT a file pack, template bundle, or generic resume toolkit — it's a structured sequence solving the translation problem specifically.

**Voice principles:**
| Principle | Meaning |
|---|---|
| Direct | Say the thing. No preamble. |
| Confident | The system works. No hedging. |
| Validating | Acknowledge frustration before solving it. The problem is the format — not the person. |
| Simple | No jargon. Write like a smart, direct friend. |
| Not hype | No exclamation marks. No fake urgency. |

**Five copy patterns used consistently:**
1. **Two-tone headline** — a white/neutral line sets context, a second (accent-colored on the live site) line delivers the turn. Example: "Your background isn't the problem. Your resume is."
2. **The price anchor** — always show the expensive alternative before the price. "$37 vs $150–300 for 1 hour with a career coach" (used in ads) / "$37 vs $2,500+ for a full coaching engagement" (used on the landing page).
3. **The translation frame** — the product fixes a translation problem, not a skills gap. "Your experience is real. Your resume just doesn't know how to translate it."
4. **The negative comparison** — specific, concrete, always about the *alternative service*, never about the buyer. "4–6 months of scheduled calls and back-and-forth revisions." "$2,500+ for sessions that may or may not lead to interviews."
5. **Imperative pairs** — "Claim Lifetime Access — $37." "Stop explaining yourself. Start getting interviews."

**Psychology layer applied to every channel:**
1. Loss aversion over gain framing — lead with loss, not gain. ("Stop sending applications into a black hole" beats "Get more interviews.")
2. Anchoring — always show the high price first.
3. Specificity as social proof — concrete completed examples beat generic claims (though note: the actual completed example is currently a placeholder — see Section 6).
4. Reciprocity — give real help before mentioning the product (this governs the entire Reddit strategy).
5. Regret aversion — the 7-day guarantee removes the last objection; feature it, most buyers won't use it but its absence would suppress sales.

**Language rules — always use:**
"System" (not "kit"/"bundle"), "sequence" (not "files"/"documents"), "career switch framework" (not "template pack"), "stages" (not "items"/"files"). Sell outcomes and transformation, not deliverables and features.

**Language rules — never say:**
- Never guarantee interviews or a job (refund guarantee only — outcomes depend on the user)
- Never cite "75% of resumes are rejected by ATS" (unsubstantiated stat)
- Never say "careerswitchkit.com" (domain is .org)
- Never say "Career Switch Kit" (spaced) or "CSK" — always one word, "CareerSwitchKit"
- No exclamation marks
- Never say "8 files," "bundle," "pack," "download and use" — sounds like selling Word documents
- Never imply the buyer did something wrong — the problem is the format, not the person
- Never say "100+ prompts" or "50+ prompts" — it's exactly 50, always

**Visual brand (for context, not usually needed for copy work):** Dark navy (`#070719`) as the primary background across marketing materials and the site. Accent blue (`#3792E8`) marks exactly one word/element per heading. Fonts: Sora (display) and DM Sans (body) for web/marketing; never Inter, Roboto, Arial, or Space Grotesk. No generic purple-gradient-on-white layouts. Only real product screenshots, never AI-generated art. No fake testimonials or reviews, ever.

---

## 4. Current Marketing State — What Exists Today

**Status:** Site is live and launch-ready (has been since 2026-06-28). The product has real, functioning checkout — this is not a pre-launch mockup. As of this writing there is no confirmed record of real paying customers yet in the marketing notes (the goal is explicitly "get first paying customers" — see Section 6).

**Live site copy (confirmed against the actual production page.tsx on 2026-07-01):**
| Section | Copy |
|---|---|
| Hero headline | "Your background isn't the problem. **Your resume is.**" |
| Hero subheadline | "Stop explaining yourself. Start getting interviews." |
| Hero primary CTA | "Claim Lifetime Access — $37" |
| Pricing section headline | "One payment. No coach required." |
| Pricing anchor copy (one instance) | "$2,500+ ... for sessions that may or may not lead to interviews" compared against $37 |
| Pricing anchor copy (a second instance, same page) | "$150–$300" shown as a second comparison figure |
| FAQ objection handling | "I've been applying for months and getting nothing. Will this help?" → answered with the translation-gap framing, not an outcome promise |
| Refund FAQ | "If it doesn't work for your situation, email support@careerswitchkit.org within 7 days and we'll refund you." |
| Final CTA section | "Stop wishing. Start applying." |
| Meta description | "A 4-stage career switch system built for US career switchers. $37, instant download." |

Site structure, in order: Hero → interactive 4-stage product demo (a dashboard-style widget) → Pricing (two-column comparison) → FAQ accordion → Final CTA → Footer.

**Organic channels — planned/active:**
- **Reddit (primary channel, zero cost).** Strategy is entirely reciprocity-based: answer real questions in r/careerguidance, r/jobs, r/resumes, r/careerchange with genuinely useful advice; the product link is the last line of a comment, never the first, and the comment must be useful enough to be upvoted with the link removed. Cadence target: 1 value post/week + 3–5 detailed comments/week.
- **Facebook Groups** (Albert's List, Bossed Up, other career-change groups) — less restrictive than Reddit, product mentions acceptable alongside genuine help. Cap: once per group per 2 weeks.
- **Owned Instagram + Facebook Page** (@careerswitchkit) — started 2026-07-01, distinct from posting in other people's Facebook groups. First 30 days: seed posts, then 2–3 posts/week mixing educational content with repurposed high-performing Reddit/LinkedIn content.
- **LinkedIn** — 1 authority-building post/week; angles include "the resume mistake that kills ATS score," "why 'tailor your resume' fails career switchers," before/after resume breakdowns.
- **TikTok** — planned for week 3+ if bandwidth allows; screen-record reveal and POV-hook video formats, no face required.
- **Product Hunt** — planned one-time launch spike, week 3–4.

**Paid channels:**
- **Reddit Ads** — $75/month, planned to go live week 3, explicitly gated on the hero-copy question flagged in Section 6.
- **Google Search Ads** — $75/month, targeting high-intent keywords like "career change resume template," planned week 3.
- **Meta Ads (Instagram/Facebook)** — normally the plan is "don't start before Month 3, need 50+ pixel purchase events." This default was deliberately overridden: a first live test started 2026-07-01 at $5/day ($150/month) despite zero confirmed sales so far, because the founder judged that having zero sales changes the "wait for signal" calculus. This is a named, temporary deviation — the Month-3+ default is what the campaign reverts to if this early test is killed. Review/kill decision point: day 14, not before (Meta's own learning-phase minimum).

**Revenue targets:** Month 1 target is 10 sales / $370 revenue; Month 2 target is 25 sales / $925. 90-day north star: 30 paying customers and one clear winning acquisition channel.

---

## 5. Locked Values — Never Change Without Explicit Approval

These are treated as fixed facts across all copy, code, and materials. Do not alter, round, or approximate any of these without the founder's explicit sign-off:

| Field | Value |
|---|---|
| Product name | CareerSwitchKit — one word, no spaces, never "Career Switch Kit" or "CSK" |
| Domain | careerswitchkit.org (never .com) |
| Price | $37 one-time, lifetime access |
| Guarantee | 7-day refund if it didn't work for the buyer's situation |
| AI prompts | Exactly 50 — never "50+" or "100+" |
| Total files | 8 |
| CV templates | 3 (One Page, Two Page, Hybrid) |
| Cover letter scenarios | 3 (Standard, Employment Gap, Referral) |
| Hero headline | "Your background isn't the problem. Your resume is." |
| Hero subheadline | "Stop explaining yourself. Start getting interviews." |
| Sequence time | Under 4 hours / completable in one weekend |
| ATS score threshold | Send at 75+. Do not send below 70. |
| Payment processor | Polar (Merchant of Record) |
| No guarantees on outcomes | Never promise interviews or a job — only a refund if the system didn't fit the buyer's situation |
| No fake social proof | No fabricated testimonials, no invented statistics, no social-proof claims until backed by 10+ real sales |

These were verified directly against the live production website on 2026-07-01 and match exactly what is documented — no discrepancy found on any of the values above.

**Recent locked-value changes (for context, not currently in question):** Price was raised from $19 to $37 on 2026-06-23. The refund window was tightened from 30 days to 7 days on 2026-06-30. Both are stable as of this writing — treat $37 / 7-day as canonical, not the older figures.

---

## 6. Open Questions / Unresolved Decisions

Being explicit here because the internal notes flag these directly rather than letting them get papered over:

1. **Unresolved: does the current locked hero satisfy the "pain-first" requirement the marketing playbook sets for paid traffic?** The marketing playbook specifies the landing page hero should read pain-first, giving as its literal example "Years of experience. Zero callbacks." The actual locked, live hero is "Your background isn't the problem. Your resume is." — a validating reframe, not the literal pain-first line. It is explicitly noted internally as **not yet decided** whether the current hero satisfies this requirement, or whether Reddit paid traffic is still blocked pending a hero rewrite. This is a live open question for the founder (or whoever owns landing-page copy) to resolve before Reddit paid ads go live. It does not block the separate Meta ads test, which runs on interest-based targeting rather than depending on this specific headline converting.

2. **The completed real-world example (Stage 4 of the product) is a placeholder, not a real file yet.** Internal product notes are explicit: do not feature or promise a specific completed example in any copy until a real one is built. This also limits how strongly "specificity as social proof" (documented as psychology principle #3) can currently be used in marketing, since the concrete example that principle depends on doesn't exist yet.

3. **No confirmed record of any real paying customer yet in current marketing notes**, even though checkout has been live and functional since 2026-06-28. The 90-day goal is explicitly "get first paying customers" — treat marketing claims that assume any sales history, testimonials, or social proof as premature; the internal rule is that a social-proof section on the site should stay unused until there are 10+ real sales.

4. **Customer/persona research reads as desk research plus cited external statistics, not documented primary interviews with real buyers.** If a marketing or messaging decision needs validation from actual customer conversations, be aware that specific layer doesn't appear to exist yet in the internal notes — the personas are a working model, not a verified-by-interview finding.

5. **Two different price-anchor figures appear on the live pricing section** ($2,500+ in one comparison element and $150–$300 in another, on the same page) — both trace back to documented anchor patterns ("$37 vs $200–500 for a resume writer" and "$37 vs $2,500+ for a coaching engagement" are both legitimate documented patterns, used in different contexts: one for a single-session coach hourly rate, one for a full coaching engagement). This isn't necessarily a mistake, but if writing new anchor copy, be precise about which comparison (single session vs. full engagement) a given number refers to, since both are in play at once.

No other conflicts were found between the internal documentation and the live site — locked values, hero copy, pricing, guarantee terms, and FAQ content all matched exactly on inspection.
