import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SystemDashboard from "./components/SystemDashboard";
import FAQAccordion from "./components/FAQAccordion";
import FadeUpObserver from "./components/FadeUpObserver";
import FinalCTA from "./components/FinalCTA";

export const metadata: Metadata = {
  title: "Resume System for Career Switchers | CareerSwitchKit",
  description:
    "Most career switchers get filtered out before a human reads their resume. CareerSwitchKit is the 4-stage system that fixes that — ATS-ready templates, 50 AI prompts, and a cover letter guide. $19, instant download.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is this just for tech jobs?", acceptedAnswer: { "@type": "Answer", text: "No. While we include tech examples, the system is built on universal semantic transfer. We've seen success in Healthcare, Finance, Operations, and Marketing." } },
    { "@type": "Question", name: "Do I need a ChatGPT subscription?", acceptedAnswer: { "@type": "Answer", text: "The prompts work with the free version of ChatGPT, Claude, and Gemini. However, GPT-4 or Claude 3.5 Sonnet will provide higher quality structural rewrites." } },
    { "@type": "Question", name: "What exactly do I get after paying?", acceptedAnswer: { "@type": "Answer", text: "Instant digital access to our member portal containing the PDF guides, Google Doc templates, and the AI prompt copy-paste library." } },
    { "@type": "Question", name: "How is this different from a resume template I can find for free?", acceptedAnswer: { "@type": "Answer", text: "Free templates are static shells. CareerSwitchKit is a transition protocol. We provide the specific semantic mapping and AI prompts needed to translate your past experience into the language of your new target field." } },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "CareerSwitchKit",
  description: "A 4-stage career switch system built for US career switchers. $19, instant download.",
  url: "https://careerswitchkit.org",
  brand: { "@type": "Brand", name: "CareerSwitchKit" },
  offers: { "@type": "Offer", price: "19.00", priceCurrency: "USD", availability: "https://schema.org/InStock", priceValidUntil: "2027-12-31", seller: { "@type": "Organization", name: "Zorby&Co" } },
};

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

        <main className="relative pt-32 pb-64" style={{ position: "relative", zIndex: 2 }}>

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
              Stop explaining yourself. Start getting interviews. The ultimate kit to transition your career without starting over.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary — white with shimmer on hover */}
              <a
                href="#pricing"
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
                  Claim Lifetime Access — <strong>$19</strong>
                </span>
              </a>
              {/* Secondary — liquid glass */}
              <a
                href="#system"
                className="liquid-glass w-full sm:w-auto px-10 py-4 font-bold rounded-xl transition-all text-center hover:bg-white/5"
                style={{ color: "#e2e0fa" }}
              >
                See The System
              </a>
            </div>

          </section>

          {/* ── System Dashboard ─────────────────────────────────────────── */}
          <section id="system" className="max-w-7xl mx-auto px-6 mb-40 fade-up visible">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black font-geist mb-4">The CareerSwitchKit System Overview</h2>
              <p style={{ color: "#c0c7d3" }}>Click through the 4 stages to see the system in action.</p>
            </div>
            {/* Aurora behind the window */}
            <div className="relative">
              <div
                className="absolute -inset-x-20 -top-20 h-40 pointer-events-none blur-3xl -z-10"
                style={{ background: "radial-gradient(50% 100% at 50% 0%, rgba(160,201,255,0.1) 0%, transparent 100%)" }}
                aria-hidden="true"
              />
              <SystemDashboard />
              <p className="text-center text-xs mt-4" style={{ color: "rgba(255,255,255,0.3)" }}>
                Visual overview only &mdash; CareerSwitchKit is an instant-download document suite, not an app or subscription.
              </p>
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
            {/* Aurora top glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 blur-3xl pointer-events-none -z-10"
              style={{ background: "radial-gradient(50% 100% at 50% 0%, rgba(160,201,255,0.1) 0%, transparent 100%)" }}
              aria-hidden="true"
            />

            <div className="relative max-w-7xl mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-5xl font-black mb-6 font-geist">
                  Simple pricing for <span style={{ color: "#a0c9ff" }}>maximum ROI.</span>
                </h2>
                <p style={{ color: "#c0c7d3" }} className="max-w-xl mx-auto">
                  One payment. Lifetime updates. No monthly subscriptions or hidden fees.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10">
                {/* Bad card */}
                <div className="p-12 flex flex-col" style={{ border: "1px solid rgba(239,68,68,0.2)" }}>
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-2 font-geist" style={{ color: "rgba(255,255,255,0.6)" }}>The &ldquo;Other&rdquo; Way</h3>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Career Coaching</p>
                  </div>
                  <div className="mb-10">
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f87171", marginBottom: 8 }}>FINANCIAL SINKHOLE</div>
                    <div className="font-geist font-black tracking-tighter" style={{ fontSize: "clamp(48px,5vw,72px)", color: "#f87171" }}>
                      $2,500<span style={{ fontSize: "1.5rem", opacity: 0.6 }}>+</span>
                    </div>
                  </div>
                  <ul className="space-y-6 mb-12 flex-1">
                    {[
                      { icon: "dangerous",     label: "Blind Investment:",      text: "$2,500+ with zero guarantee of interview callbacks." },
                      { icon: "timer_off",     label: "Operational Friction:",  text: "4–6 months of scheduled calls and manual revisions." },
                      { icon: "broken_image",  label: "Fragile & Manual:",      text: "A one-off service that leaves you without a sustainable framework." },
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
                    Recruiter Reality: Most high-cost coaching fails to solve the semantic translation problem.
                  </div>
                </div>

                {/* Good card */}
                <div
                  className="relative p-10 flex flex-col liquid-glass rounded-[2.5rem] overflow-hidden group"
                  style={{ border: "1px solid rgba(160,201,255,0.4)", boxShadow: "0 0 80px rgba(160,201,255,0.25)" }}
                >
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(160,201,255,0.1) 0%, transparent 60%)" }} />
                  <div className="absolute top-0 right-0 p-6 pointer-events-none" style={{ opacity: 0.1 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 120, color: "#a0c9ff" }}>verified</span>
                  </div>

                  <div className="mb-8 relative z-10">
                    <h3 className="text-2xl font-black mb-1 font-geist tracking-tight">The CareerSwitchKit System</h3>
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: 10, letterSpacing: "0.2em", fontWeight: 700, textTransform: "uppercase", color: "#a0c9ff" }}>The Complete Kit</span>
                      <span className="h-px w-8" style={{ backgroundColor: "rgba(160,201,255,0.3)" }} />
                    </div>
                  </div>

                  <div className="mb-10 relative z-10">
                    <div className="flex items-baseline gap-1">
                      <span className="font-geist font-black tracking-tighter" style={{ fontSize: "clamp(48px,5vw,72px)" }}>$19</span>
                    </div>
                    <div
                      className="absolute -top-4 -right-2 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest animate-pulse"
                      style={{ background: "#a0c9ff", color: "#003259", boxShadow: "0 0 20px rgba(160,201,255,0.4)" }}
                    >
                      99% Less Expensive
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-10 relative z-10">
                    {[{ icon: "verified_user", text: "30-Day\nGuarantee" }, { icon: "bolt", text: "Instant\nDownload" }].map(({ icon, text }) => (
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
                        {["Complete end-to-end career pivot system", "ATS-Safe professional template library"].map(t => (
                          <li key={t} className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-lg" style={{ color: "#a0c9ff" }}>check_circle</span>
                            <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>{t}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#a0c9ff" }}>Premium Bonuses</div>
                      <ul className="space-y-3">
                        {["High-impact AI prompt vault (50 prompts)", "Lifetime updates for 2026 hiring"].map(t => (
                          <li key={t} className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-lg" style={{ color: "#a0c9ff" }}>add_moderator</span>
                            <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>{t}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="#pricing"
                    className="group/btn w-full py-5 rounded-2xl bg-white font-black hover:scale-[1.02] transition-all shadow-xl text-lg uppercase tracking-tighter flex items-center justify-center gap-2 relative overflow-hidden z-10"
                    style={{ color: "#000" }}
                  >
                    <span className="relative z-10">Claim Lifetime Access — $19</span>
                    <span className="material-symbols-outlined relative z-10 transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section id="faq" className="max-w-4xl mx-auto px-6 mb-40 fade-up visible">
            <h2 className="text-4xl font-black text-center mb-16 font-geist">
              Before you <span style={{ color: "#a0c9ff" }}>buy.</span>
            </h2>
            <FAQAccordion />
          </section>

          {/* ── Final CTA ────────────────────────────────────────────────── */}
          <FinalCTA />

        </main>

        <Footer />
      </div>
    </>
  );
}
