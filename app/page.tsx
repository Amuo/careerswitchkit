import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "./components/PageShell";
import CheckoutLink from "./components/CheckoutLink";
import FAQAccordion from "./components/FAQAccordion";
import FinalCTA from "./components/FinalCTA";
import ProblemSection from "./components/ProblemSection";
import ProofExample from "./components/ProofExample";
import Typewriter from "./components/Typewriter";
import { FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Resume System for Career Switchers | CareerSwitchKit",
  description:
    "Career switchers get filtered out before a human reads their resume. CareerSwitchKit is the 4-stage system that fixes that — $37, instant download.",
};

// Built from the same FAQS the accordion renders, so the structured data always
// matches the visible text (a Google requirement).
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "CareerSwitchKit",
  description: "A 4-stage career switch system built for US career switchers. $37, instant download.",
  url: "https://careerswitchkit.org",
  brand: { "@type": "Brand", name: "CareerSwitchKit" },
  offers: { "@type": "Offer", price: "37.00", priceCurrency: "USD", availability: "https://schema.org/InStock", priceValidUntil: "2027-12-31", seller: { "@type": "Organization", name: "Zorby&Co" } },
};

// A few free guides, linked from the homepage — helps readers and passes link
// equity to the blog posts so they can rank. Keyword-rich anchor text on purpose.
const guides = [
  { slug: "how-to-write-a-career-change-resume", icon: "description", tag: "Resume", title: "How to write a career-change resume" },
  { slug: "what-is-ats-career-switchers", icon: "filter_alt", tag: "ATS", title: "What is ATS — and how to pass it" },
  { slug: "transferable-skills-career-change", icon: "insights", tag: "Skills", title: "Find your transferable skills" },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <PageShell>

          {/* ── Hero ─────────────────────────────────────────────────────── */}
          <section className="max-w-5xl mx-auto text-center px-6 mb-32 fade-up visible relative">
            {/* Aurora glow behind hero text */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 blur-3xl"
                style={{
                  width: "150%",
                  height: "500px",
                  background: "radial-gradient(50% 50% at 50% 0%, rgba(160,201,255,0.18) 0%, transparent 100%)",
                  opacity: 0.7,
                }}
              />
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#a0c9ff" }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a0c9ff" }}>
                Now updated for 2026 hiring
              </span>
            </div>

            {/* Headline — large, tight, Stitch-scale */}
            <h1
              className="font-geist font-black mb-8 leading-[1.05] tracking-tighter"
              style={{ fontSize: "clamp(44px, 7.5vw, 96px)" }}
            >
              <span className="reveal-line-1 block mb-2">Your background isn&apos;t the problem.</span>
              <span
                className="reveal-line-2 hero-headline-gradient"
                data-text="Your resume is."
              >
                Your resume is.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: "#c0c7d3" }}
            >
              <Typewriter text="Stop explaining yourself. Start getting interviews." />
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary — white with shimmer on hover */}
              <CheckoutLink
                className="group relative w-full sm:w-auto px-10 py-4 bg-white font-semibold rounded-xl transition-all duration-500 active:scale-95 overflow-hidden font-geist tracking-[0.02em] flex items-center justify-center hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(160,201,255,0.4)]"
                style={{ color: "#000", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 24px rgba(0,0,0,0.3)" }}
              >
                {/* Mouse-glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 50%, rgba(160,201,255,0.35) 0%, transparent 60%)" }} />
                {/* Accent shine — auto-sweeps like the navbar CTA */}
                <span className="white-cta-shimmer" aria-hidden="true" />
                <span className="relative z-10 flex items-center gap-2">
                  Claim Lifetime Access — <strong>$37</strong>
                </span>
              </CheckoutLink>
              {/* Secondary — liquid glass; sends people into the interactive preview */}
              <Link
                href="/preview"
                className="w-full sm:w-auto px-10 py-4 font-bold rounded-xl transition-all text-center border border-white/10 hover:border-white/20 hover:bg-white/5"
                style={{ color: "#e2e0fa" }}
              >
                See how it works
              </Link>
            </div>

            <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.62)" }}>
              $37 one-time · Instant download · 7-day refund
            </p>

          </section>

          {/* ── The problem (agitation + real, cited evidence) ───────────── */}
          <ProblemSection />

          {/* ── Proof: worked example ────────────────────────────────────── */}
          {/* Proof section ends with its own "See what's included in the system"
              CTA (in ProofExample's seam card) that leads into /preview. */}
          <ProofExample />

          {/* ── Pricing ──────────────────────────────────────────────────── */}
          <section id="pricing" className="relative py-32 overflow-hidden fade-up visible">
            {/* Noise layer for this section */}
            <div className="grain absolute inset-0 pointer-events-none opacity-30" aria-hidden="true" />
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
              <span className="watermark-text text-white select-none">Lifetime Access.</span>
            </div>
            {/* Top edge light */}
            <div
              className="absolute top-0 inset-x-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(160,201,255,0.25) 50%, transparent 100%)" }}
              aria-hidden="true"
            />

            <div className="relative max-w-7xl mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-5xl font-black mb-6 font-geist">
                  One payment. <span style={{ color: "#a0c9ff" }}>No coach required.</span>
                </h2>
                <p style={{ color: "#c0c7d3" }} className="max-w-xl mx-auto">
                  Lifetime updates. No monthly subscriptions or hidden fees.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10">
                {/* Bad card */}
                <div className="p-12 flex flex-col" style={{ border: "1px solid rgba(239,68,68,0.2)" }}>
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-2 font-geist" style={{ color: "rgba(255,255,255,0.6)" }}>The &ldquo;Other&rdquo; Way</h3>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Career Coaching</p>
                  </div>
                  <div className="mb-10">
                    <div className="font-geist font-black tracking-tighter" style={{ fontSize: "clamp(48px,5vw,72px)", color: "#f87171" }}>
                      $2,500<span style={{ fontSize: "1.5rem", opacity: 0.6 }}>+</span>
                    </div>
                  </div>
                  <ul className="space-y-6 mb-12 flex-1">
                    {[
                      { icon: "dangerous",     label: "$2,500+",          text: "for sessions that may or may not lead to interviews." },
                      { icon: "timer_off",     label: "4–6 months",       text: "of scheduled calls and back-and-forth revisions." },
                      { icon: "broken_image",  label: "One-off service.", text: "When it ends, you're on your own." },
                    ].map(({ icon, label, text }) => (
                      <li key={icon} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-xl" style={{ color: "#f87171" }}>{icon}</span>
                        <div className="text-sm font-medium leading-tight" style={{ color: "rgba(255,255,255,0.6)" }}>
                          <span style={{ color: "#fff", fontWeight: 700 }}>{label}</span> {text}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-center italic" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Most coaches never show you how to translate your background into language the new field understands.
                  </div>
                </div>

                {/* Good card */}
                <div
                  className="relative p-10 flex flex-col liquid-glass rounded-2xl overflow-hidden group"
                  style={{ border: "1px solid rgba(160,201,255,0.35)", boxShadow: "0 0 40px rgba(160,201,255,0.12)" }}
                >
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(160,201,255,0.1) 0%, transparent 60%)" }} />
                  <div className="absolute top-0 right-0 p-6 pointer-events-none" style={{ opacity: 0.1 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 120, color: "#a0c9ff" }}>verified</span>
                  </div>

                  <div className="mb-8 relative z-10">
                    <h3 className="text-2xl font-black mb-1 font-geist tracking-tight">The CareerSwitchKit System</h3>
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: 10, letterSpacing: "0.2em", fontWeight: 700, textTransform: "uppercase", color: "#a0c9ff" }}>One-time payment</span>
                      <span className="h-px w-8" style={{ backgroundColor: "rgba(160,201,255,0.3)" }} />
                    </div>
                  </div>

                  <div className="mb-10 relative z-10 flex items-center gap-5">
                    {/* Our price */}
                    <div>
                      <span className="font-geist font-black tracking-tighter" style={{ fontSize: "clamp(48px,5vw,72px)" }}>$37</span>
                      <div className="text-[10px] font-bold uppercase tracking-widest mt-0.5" style={{ color: "#a0c9ff" }}>CareerSwitchKit</div>
                    </div>

                    {/* vs divider */}
                    <div className="flex flex-col items-center self-stretch justify-center gap-1.5 py-1">
                      <div className="flex-1 w-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>vs</span>
                      <div className="flex-1 w-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                    </div>

                    {/* Coach price */}
                    <div>
                      <span className="font-geist font-black tracking-tighter" style={{ fontSize: "clamp(28px,3vw,40px)", color: "rgba(255,255,255,0.2)" }}>$150–$300</span>
                      <div className="text-[10px] font-bold uppercase tracking-widest mt-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>1hr career coach</div>
                    </div>
                  </div>

                  {/* Each tile links to the matching part of the interactive preview. */}
                  <div className="grid grid-cols-2 gap-3 mb-8 flex-1 content-start relative z-10">
                    {[
                      { icon: "map", title: "4-stage system", sub: "the full method, start to apply", href: "/preview#tour" },
                      { icon: "description", title: "6 templates", sub: "3 CV + 3 cover letters", href: "/preview#included" },
                      { icon: "auto_awesome", title: "50 AI prompts", sub: "sharpen every line", href: "/preview#prompts" },
                      { icon: "all_inclusive", title: "Lifetime updates", sub: "yours forever, no subscription", href: "/preview#included" },
                    ].map(({ icon, title, sub, href }) => (
                      <Link
                        key={title}
                        href={href}
                        className="lift-card group flex flex-col gap-2.5 rounded-xl p-3.5"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(160,201,255,0.14)" }}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className="flex items-center justify-center w-9 h-9 rounded-lg"
                            style={{ background: "rgba(160,201,255,0.1)", border: "1px solid rgba(160,201,255,0.2)" }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 19, color: "#a0c9ff" }}>{icon}</span>
                          </span>
                          <span
                            className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ fontSize: 16, color: "#a0c9ff" }}
                          >
                            arrow_outward
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-bold leading-tight" style={{ color: "#fff" }}>{title}</div>
                          <div className="text-[11px] leading-snug mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{sub}</div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <CheckoutLink
                    className="group/btn w-full py-5 rounded-2xl bg-white font-black hover:scale-[1.02] transition-all shadow-xl text-lg flex items-center justify-center gap-2 relative overflow-hidden z-10"
                    style={{ color: "#000" }}
                  >
                    <span className="white-cta-shimmer" aria-hidden="true" />
                    <span className="relative z-10">Claim Lifetime Access — $37</span>
                    <span className="material-symbols-outlined relative z-10 transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                  </CheckoutLink>

                  <div
                    className="flex items-center justify-center gap-2.5 mt-5 px-4 py-3 rounded-xl relative z-10"
                    style={{ background: "rgba(160,201,255,0.06)", border: "1px solid rgba(160,201,255,0.22)" }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#a0c9ff" }}>verified_user</span>
                    <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.78)" }}>
                      7-day money-back guarantee — no questions asked.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section id="faq" className="max-w-4xl mx-auto px-6 mb-40 fade-up visible">
            <h2 className="text-4xl font-black text-center mb-16 font-geist">
              Common <span style={{ color: "#a0c9ff" }}>questions.</span>
            </h2>
            <FAQAccordion />
          </section>

          {/* ── Final CTA ────────────────────────────────────────────────── */}
          <FinalCTA />

          {/* ── Free guides (keep reading) ───────────────────────────────── */}
          <section className="max-w-5xl mx-auto px-6 pb-32 fade-up">
            <div className="text-center mb-10">
              <span className="section-eyebrow">Free guides</span>
              <h2 className="text-3xl font-black font-geist mb-3">Keep reading.</h2>
              <p style={{ color: "#c0c7d3", maxWidth: "44ch", margin: "0 auto" }}>
                Practical walkthroughs for career switchers: resumes, ATS, and reframing your background.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {guides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/blog/${g.slug}`}
                  className="guide-card group flex flex-col rounded-2xl p-7"
                >
                  <span className="guide-icon flex items-center justify-center w-11 h-11 rounded-xl mb-6">
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#a0c9ff" }}>
                      {g.icon}
                    </span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: "rgba(160,201,255,0.7)" }}>
                    {g.tag}
                  </span>
                  <div className="font-geist font-bold text-white leading-snug mb-7 flex-1" style={{ fontSize: "1.1rem" }}>
                    {g.title}
                  </div>
                  <span className="guide-read self-start">
                    Read
                    <span className="material-symbols-outlined guide-arrow" style={{ fontSize: 15 }}>arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-1 text-sm font-medium text-white/55 hover:text-white transition-colors"
              >
                View all career-switch guides
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-0.5" style={{ fontSize: 15 }}>arrow_forward</span>
              </Link>
            </div>
          </section>

      </PageShell>
    </>
  );
}
