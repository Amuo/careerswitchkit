import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SystemDashboardLoader from "./components/SystemDashboardLoader";
import FAQAccordion from "./components/FAQAccordion";
import FadeUpObserver from "./components/FadeUpObserver";
import FinalCTA from "./components/FinalCTA";
import ProofExample from "./components/ProofExample";
import WhoItsFor from "./components/WhoItsFor";

export const metadata: Metadata = {
  title: "Resume System for Career Switchers | CareerSwitchKit",
  description:
    "Career switchers get filtered out before a human reads their resume. CareerSwitchKit is the 4-stage system that fixes that — $37, instant download.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What's in the system?", acceptedAnswer: { "@type": "Answer", text: "CareerSwitchKit is an instant download: a Start Here Guide (PDF), three CV templates (.docx), three cover letter templates (.docx), an interactive ATS Checker (standalone HTML app), an AI Prompt Pack (PDF, 50 prompts), and a completed example. No login, no subscription." } },
    { "@type": "Question", name: "How long does it take to complete?", acceptedAnswer: { "@type": "Answer", text: "Most people finish the core sequence in a weekend. Stage 1 takes an hour or two. By the end you have a tailored resume, cover letter, and an ATS-ready checklist." } },
    { "@type": "Question", name: "I've been applying for months and getting nothing. Will this help?", acceptedAnswer: { "@type": "Answer", text: "Probably yes — and this is exactly who the system is built for. If you're getting no responses, the most likely cause is that your resume isn't translating your background into language the new field recognises. The system is specifically designed to fix that translation gap, not to give you a prettier version of what you already have." } },
    { "@type": "Question", name: "Is this just for tech jobs?", acceptedAnswer: { "@type": "Answer", text: "No. The system works across Healthcare, Finance, Operations, Marketing, and other fields. Your past experience is the raw material. The system shows you how to reframe it for the new field." } },
    { "@type": "Question", name: "How is this different from a resume template I can find for free?", acceptedAnswer: { "@type": "Answer", text: "Free templates give you blank boxes. CareerSwitchKit tells you what to put in them. The AI prompts and language guides translate your past experience into terms hiring managers in your new field actually use." } },
    { "@type": "Question", name: "How do I get it after I pay?", acceptedAnswer: { "@type": "Answer", text: "The moment you check out, you get an email with your download link — usually within a minute. No account to create, no software to install. Everything is yours to keep and reuse for every application." } },
    { "@type": "Question", name: "What if it doesn't help me land interviews?", acceptedAnswer: { "@type": "Answer", text: "If it doesn't work for your situation, email support@careerswitchkit.org within 7 days and we'll refund you." } },
  ],
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

      {/* SVG noise filter — same as Stitch */}
      <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
        <defs>
          <filter id="c3-noise">
            <feTurbulence baseFrequency="0.8" numOctaves={4} stitchTiles="stitch" type="fractalNoise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.15 0" />
          </filter>
        </defs>
      </svg>
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-50" style={{ zIndex: 1, filter: "url(#c3-noise)" }} aria-hidden="true" />

      <div className="relative min-h-screen" style={{ color: "#e2e0fa", overflowX: "clip" }}>
        <FadeUpObserver />

        <div className="vertical-guide guide-left hidden lg:block" aria-hidden="true" />
        <div className="vertical-guide guide-right hidden lg:block" aria-hidden="true" />

        <Navbar />

        <main className="relative pt-32" style={{ position: "relative", zIndex: 2 }}>

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
              Stop explaining yourself. Start getting interviews.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary — white with shimmer on hover */}
              <a
                href="https://buy.polar.sh/polar_cl_yp2D8rcrj84BMejvasXb4zDwa36czvOw21K2q4XtbWG"
                className="group relative w-full sm:w-auto px-10 py-4 bg-white font-semibold rounded-xl transition-all duration-500 active:scale-95 overflow-hidden font-geist tracking-[0.02em] flex items-center justify-center hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(160,201,255,0.4)]"
                style={{ color: "#000", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 24px rgba(0,0,0,0.3)" }}
              >
                {/* Mouse-glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 50%, rgba(160,201,255,0.35) 0%, transparent 60%)" }} />
                {/* Shimmer sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_ease-in-out]"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }} />
                <span className="relative z-10 flex items-center gap-2">
                  Claim Lifetime Access — <strong>$37</strong>
                </span>
              </a>
              {/* Secondary — liquid glass */}
              <a
                href="#system"
                className="w-full sm:w-auto px-10 py-4 font-bold rounded-xl transition-all text-center border border-white/10 hover:border-white/20 hover:bg-white/5"
                style={{ color: "#e2e0fa" }}
              >
                Walk Through the 4 Stages
              </a>
            </div>

            <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.62)" }}>
              $37 one-time · Instant download · 7-day refund
            </p>

          </section>

          {/* ── Proof: worked example ────────────────────────────────────── */}
          <ProofExample />

          {/* ── System Dashboard ─────────────────────────────────────────── */}
          <section id="system" className="max-w-7xl mx-auto px-6 mb-40 fade-up visible">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black font-geist mb-4">Walk through the system yourself.</h2>
              <p style={{ color: "#c0c7d3", maxWidth: "38ch", margin: "0 auto" }}>
                Start with Stage 01 and follow the four stages in order.
              </p>
            </div>
            <div className="relative">
              <SystemDashboardLoader />
              <p className="text-center text-xs mt-4" style={{ color: "rgba(255,255,255,0.3)" }}>
                Visual overview only. CareerSwitchKit is an instant download, not an app or subscription.
              </p>
            </div>
          </section>

          {/* ── Who it's for ─────────────────────────────────────────────── */}
          <WhoItsFor />

          {/* ── Trust strip ──────────────────────────────────────────────── */}
          <section className="relative px-6 max-w-4xl mx-auto mb-16 fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  icon: "verified_user",
                  title: "7-Day Guarantee",
                  desc: "Doesn't work for your situation? Email us within 7 days for a full refund.",
                  accent: "#3792E8",
                },
                {
                  icon: "bolt",
                  title: "Instant Download",
                  desc: "Pay once, access immediately. Files in your inbox within minutes.",
                  accent: "#a0c9ff",
                },
                {
                  icon: "all_inclusive",
                  title: "No Subscription",
                  desc: "$37 once. You own it forever. No renewals, no locked content.",
                  accent: "#3792E8",
                },
              ].map(({ icon, title, desc, accent }) => (
                <div
                  key={title}
                  className="relative flex flex-col items-center text-center px-7 py-8 rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(16,16,45,0.6)",
                    border: "1px solid rgba(55,146,232,0.15)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-px" style={{ background: `linear-gradient(to right, transparent, ${accent}66, transparent)` }} />
                  {/* Icon with glow container */}
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                    style={{
                      background: "rgba(55,146,232,0.1)",
                      border: "1px solid rgba(55,146,232,0.2)",
                      boxShadow: "0 0 20px rgba(55,146,232,0.12)",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: accent }}>
                      {icon}
                    </span>
                  </div>
                  <div
                    className="font-geist font-bold text-white mb-2"
                    style={{ fontSize: "1rem", letterSpacing: "-0.01em" }}
                  >
                    {title}
                  </div>
                  <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: "20ch" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Pricing ──────────────────────────────────────────────────── */}
          <section id="pricing" className="relative py-32 overflow-hidden fade-up visible">
            {/* Noise layer for this section */}
            <div className="absolute inset-0 pointer-events-none opacity-30" style={{ filter: "url(#c3-noise)" }} aria-hidden="true" />
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
                  One payment. Lifetime updates. No monthly subscriptions or hidden fees.
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
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f87171", marginBottom: 8 }}>CAREER COACHING</div>
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

                  <div className="grid grid-cols-2 gap-3 mb-10 relative z-10">
                    {[{ icon: "verified_user", text: "7-Day\nGuarantee" }, { icon: "bolt", text: "Instant\nDownload" }].map(({ icon, text }) => (
                      <div key={icon} className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                        style={{ background: "rgba(26,26,45,1)", border: "1px solid rgba(160,201,255,0.15)" }}>
                        <span className="material-symbols-outlined text-lg" style={{ color: "#a0c9ff" }}>{icon}</span>
                        <span className="text-[10px] font-bold leading-tight whitespace-pre-line">{text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6 mb-10 flex-1 relative z-10">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>Core System</div>
                      <ul className="space-y-3">
                        {["The full 4-stage career switch system", "3 CV templates + 3 cover letters, built to translate your experience"].map(t => (
                          <li key={t} className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-lg" style={{ color: "#a0c9ff" }}>check_circle</span>
                            <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>{t}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#a0c9ff" }}>Also included</div>
                      <ul className="space-y-3">
                        {["AI Prompt Pack — 50 prompts to sharpen every line", "Lifetime updates for 2026 hiring"].map(t => (
                          <li key={t} className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-lg" style={{ color: "#a0c9ff" }}>add_moderator</span>
                            <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>{t}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="https://buy.polar.sh/polar_cl_yp2D8rcrj84BMejvasXb4zDwa36czvOw21K2q4XtbWG"
                    className="group/btn w-full py-5 rounded-2xl bg-white font-black hover:scale-[1.02] transition-all shadow-xl text-lg flex items-center justify-center gap-2 relative overflow-hidden z-10"
                    style={{ color: "#000" }}
                  >
                    <span className="relative z-10">Claim Lifetime Access — $37</span>
                    <span className="material-symbols-outlined relative z-10 transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                  </a>
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

        </main>

        <Footer />
      </div>
    </>
  );
}
