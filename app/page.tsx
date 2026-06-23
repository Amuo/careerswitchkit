import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingBackground from "./components/LandingBackground";
import SystemDashboard from "./components/SystemDashboard";
import FAQAccordion from "./components/FAQAccordion";
import CheckoutButton from "./components/CheckoutButton";
import FadeUpObserver from "./components/FadeUpObserver";

export const metadata: Metadata = {
  title: "Resume System for Career Switchers | CareerSwitchKit",
  description:
    "Most career switchers get filtered out before a human reads their resume. CareerSwitchKit is the 4-stage system that fixes that — ATS-ready templates, 50 AI prompts, and a cover letter guide. $19, instant download.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this just for tech jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. While we include tech examples, the system is built on universal semantic transfer. We've seen success in Healthcare, Finance, Operations, and Marketing.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a ChatGPT subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The prompts work with the free version of ChatGPT, Claude, and Gemini. However, GPT-4 or Claude 3.5 Sonnet will provide higher quality structural rewrites.",
      },
    },
    {
      "@type": "Question",
      name: "What exactly do I get after paying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instant digital access to our member portal containing the PDF guides, Google Doc templates, and the AI prompt copy-paste library.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from a resume template I can find for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free templates are static shells. CareerSwitchKit is a transition protocol. We provide the specific semantic mapping and AI prompts needed to translate your past experience into the language of your new target field.",
      },
    },
    {
      "@type": "Question",
      name: "Will this system get me a job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No system can guarantee that, and anyone who claims otherwise is lying to you. What CareerSwitchKit does is remove the most common reason career switchers get filtered out before a human ever sees their application: a resume and cover letter that doesn't translate their background correctly.",
      },
    },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "CareerSwitchKit",
  description:
    "A 4-stage career switch system with ATS-ready resume templates, cover letter templates, 50 AI prompts, an ATS keyword checklist, and a completed example. Built for US career switchers.",
  url: "https://careerswitchkit.org",
  brand: {
    "@type": "Brand",
    name: "CareerSwitchKit",
  },
  offers: {
    "@type": "Offer",
    price: "19.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2027-12-31",
    seller: {
      "@type": "Organization",
      name: "Zorby&Co",
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="relative min-h-screen text-on-surface overflow-x-hidden">
        <LandingBackground />
        <FadeUpObserver />

        {/* Vertical guide rails */}
        <div className="vertical-guide guide-left hidden lg:block" aria-hidden="true" />
        <div className="vertical-guide guide-right hidden lg:block" aria-hidden="true" />

        <Navbar />

        <main className="relative pt-32 pb-64">

          {/* ── Hero ──────────────────────────────────────────────────────── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            <div className="max-w-3xl">

              {/* Eyebrow badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue" />
                </span>
                <p className="text-badge-caps font-semibold tracking-[0.18em] uppercase text-primary/60">
                  Now updated for 2026 hiring
                </p>
              </div>

              {/* Headline */}
              <h1
                className="font-geist text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-[-0.03em] mb-6"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                <span className="reveal-line-1">Your background isn&apos;t the problem.</span>
                <span className="reveal-line-2 shiny-text"> Your resume is.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-body-lg text-on-surface-variant/80 leading-relaxed mb-4 max-w-xl">
                Stop explaining yourself. Start getting interviews.
              </p>
              <p className="text-body-base text-on-surface-variant/55 leading-relaxed mb-10 max-w-xl">
                CareerSwitchKit is a structured 4-stage system that translates your existing
                experience into the language hiring managers in your new field actually understand.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary CTA — white button with mouse-tracking gradient */}
                <a
                  href="#pricing"
                  className="relative overflow-hidden group inline-flex items-center gap-2 bg-white text-[#070719] font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 active:scale-[0.97] hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)]"
                >
                  <span className="relative z-10">Claim Lifetime Access — $19</span>
                </a>

                {/* Secondary CTA — liquid glass */}
                <a
                  href="#system"
                  className="liquid-glass inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-on-surface/80 hover:text-white transition-all duration-200 active:scale-[0.97]"
                >
                  See The System
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_downward</span>
                </a>
              </div>

              {/* Micro trust */}
              <p className="mt-5 text-xs text-on-surface-variant/35">
                Instant access after checkout. No subscription. Works with any AI tool.
              </p>
            </div>
          </section>

          {/* ── System Dashboard ──────────────────────────────────────────── */}
          <section id="system" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 scroll-mt-20">
            <div className="mb-10 max-w-xl fade-up">
              <p className="text-badge-caps text-primary/50 uppercase tracking-widest mb-3">
                The 4-Stage System
              </p>
              <h2 className="font-geist text-headline-section font-bold text-white tracking-[-0.02em] mb-3">
                Four stages. One clear sequence.
              </h2>
              <p className="text-body-base text-on-surface-variant/60 leading-relaxed">
                Every stage has a specific job. Together they take you from &ldquo;I don&apos;t know how to
                frame my background&rdquo; to &ldquo;submitted and confident.&rdquo;
              </p>
            </div>
            <div className="fade-up">
              <SystemDashboard />
            </div>
          </section>

          {/* ── Pricing ──────────────────────────────────────────────────── */}
          <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 scroll-mt-20 relative">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none" aria-hidden="true">
              <span className="watermark-text text-white select-none">Lifetime Access.</span>
            </div>

            <div className="relative">
              <div className="mb-10 max-w-xl fade-up">
                <p className="text-badge-caps text-primary/50 uppercase tracking-widest mb-3">Pricing</p>
                <h2 className="font-geist text-headline-section font-bold text-white tracking-[-0.02em] mb-3">
                  One system. One price.
                </h2>
                <p className="text-body-base text-on-surface-variant/60 leading-relaxed">
                  No subscription. No upsell. Pay once and own it.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl fade-up">

                {/* Bad card — the usual approach */}
                <div
                  className="rounded-2xl border border-red-500/15 p-8"
                  style={{ background: "rgba(40,10,10,0.4)" }}
                >
                  <p className="text-badge-caps uppercase tracking-widest text-red-400/60 mb-4">
                    The usual approach
                  </p>
                  <div className="text-3xl font-black text-red-400/30 font-geist mb-1">$2,500+</div>
                  <p className="text-xs text-red-400/30 mb-5">career coach / trial and error</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Generic template that says nothing about your switch",
                      "Hoping the recruiter figures out the connection",
                      "ATS rejects you before anyone reads it",
                      "Cover letter explaining why you're changing fields",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/40">
                        <span
                          className="material-symbols-outlined text-red-500/50 shrink-0 mt-0.5"
                          style={{ fontSize: 16 }}
                        >
                          close
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Good card — our system */}
                <div
                  className="rounded-2xl border border-accent-blue/30 p-8 relative overflow-hidden pricing-card-glow"
                  style={{ background: "rgba(7,20,50,0.6)" }}
                >
                  {/* Glow accent */}
                  <div
                    className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(55,146,232,0.15) 0%, transparent 70%)" }}
                    aria-hidden="true"
                  />

                  <p className="text-badge-caps uppercase tracking-widest text-primary/60 mb-4">
                    CareerSwitchKit
                  </p>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-black text-white font-geist">$19</span>
                    <span className="text-sm text-on-surface-variant/50">one-time</span>
                  </div>
                  <p className="text-xs text-on-surface-variant/40 mb-5">lifetime access, instant download</p>

                  <ul className="space-y-3 mb-6">
                    {[
                      "4-stage system built for non-traditional backgrounds",
                      "Semantic transfer mapping for your specific field change",
                      "ATS Compatibility Engine + 50 AI prompts",
                      "Cover letter framework for career switchers",
                      "Completed example from start to submission",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-on-surface/80">
                        <span
                          className="material-symbols-outlined text-primary shrink-0 mt-0.5"
                          style={{ fontSize: 16, fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <CheckoutButton
                    label="Claim Lifetime Access — $19"
                    className="w-full bg-accent-blue hover:bg-accent-hover text-white font-bold py-3.5 rounded-xl text-sm transition-all duration-200 active:scale-[0.97] hover:shadow-[0_0_32px_rgba(55,146,232,0.5)]"
                  />
                  <p className="text-[10px] text-on-surface-variant/35 text-center mt-3">
                    Instant access. No subscription. 30-day guarantee.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 scroll-mt-20">
            <div className="max-w-2xl">
              <div className="fade-up mb-10">
                <p className="text-badge-caps text-primary/50 uppercase tracking-widest mb-3">FAQ</p>
                <h2 className="font-geist text-headline-section font-bold text-white tracking-[-0.02em]">
                  Questions
                </h2>
              </div>
              <div className="fade-up">
                <FAQAccordion />
              </div>
            </div>
          </section>

          {/* ── Final CTA ────────────────────────────────────────────────── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-up">
            <div
              className="relative rounded-3xl overflow-hidden border border-accent-blue/20 p-12 sm:p-16 text-center"
              style={{ background: "linear-gradient(135deg, rgba(7,7,25,0.9) 0%, rgba(10,20,50,0.9) 100%)" }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(55,146,232,0.12) 0%, transparent 60%)" }}
                aria-hidden="true"
              />
              <div className="relative">
                <h2
                  className="font-geist text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-[-0.02em] mb-4"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Stop wishing. Start applying.
                </h2>
                <p className="text-body-base text-on-surface-variant/60 mb-8 max-w-md mx-auto leading-relaxed">
                  The system is $19. The cost of getting filtered out again is much higher.
                </p>
                <CheckoutButton
                  label="Claim Lifetime Access — $19"
                  className="inline-block bg-accent-blue hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-xl text-sm transition-all duration-200 active:scale-[0.97] hover:shadow-[0_0_40px_rgba(55,146,232,0.6)]"
                />
                <p className="mt-4 text-xs text-on-surface-variant/30">
                  Instant access. Works with any AI tool. No subscription.
                </p>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}
