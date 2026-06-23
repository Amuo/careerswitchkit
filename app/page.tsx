import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingBackground from "./components/LandingBackground";
import SystemDashboard from "./components/SystemDashboard";
import FAQAccordion from "./components/FAQAccordion";
import CheckoutButton from "./components/CheckoutButton";

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

      <div className="relative min-h-screen text-[#e2e0fa] overflow-x-hidden">
        <LandingBackground />

        {/* Vertical guides — decorative layout rails */}
        <div className="vertical-guide guide-left hidden lg:block" aria-hidden="true" />
        <div className="vertical-guide guide-right hidden lg:block" aria-hidden="true" />

        <Navbar />

        <main className="relative pt-32 pb-64">

          {/* ── Hero ──────────────────────────────────────────────────────── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#a0c9ff]/60 mb-6">
                Career Switch System — $19
              </p>

              {/* Headline */}
              <h1
                className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-[-0.02em] mb-6"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                <span className="reveal-line-1">Your background isn&apos;t the problem.</span>
                <span className="reveal-line-2 text-[#a0c9ff]">Your resume is.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-[#c0c7d3]/80 leading-relaxed mb-4 max-w-xl">
                Stop explaining yourself. Start getting interviews.
              </p>
              <p className="text-base text-[#c0c7d3]/55 leading-relaxed mb-10 max-w-xl">
                CareerSwitchKit is a structured 4-stage system that translates your existing experience into the language hiring managers in your new field actually understand.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <CheckoutButton
                  label="Claim Lifetime Access — $19"
                  className="bg-[#3792E8] hover:bg-[#6EB0EE] text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 active:scale-[0.97] hover:shadow-[0_0_32px_rgba(55,146,232,0.5)]"
                />
                <a
                  href="#how-it-works"
                  className="text-sm text-[#a0c9ff]/70 hover:text-[#a0c9ff] transition-colors duration-200 flex items-center gap-1.5"
                >
                  See how it works
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_downward</span>
                </a>
              </div>

              {/* Micro trust */}
              <p className="mt-5 text-xs text-[#c0c7d3]/35">
                Instant access after checkout. No subscription. Works with any AI tool.
              </p>
            </div>
          </section>

          {/* ── System Dashboard ──────────────────────────────────────────── */}
          <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 scroll-mt-20">
            <div className="mb-10 max-w-xl">
              <h2
                className="font-sora text-3xl sm:text-4xl font-bold text-white tracking-[-0.02em] mb-3"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Four stages. One clear sequence.
              </h2>
              <p className="text-base text-[#c0c7d3]/60 leading-relaxed">
                Every stage has a specific job. Together they take you from "I don't know how to frame my background" to "submitted and confident."
              </p>
            </div>
            <SystemDashboard />
          </section>

          {/* ── Pricing ──────────────────────────────────────────────────── */}
          <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 scroll-mt-20">
            <div className="mb-10 max-w-xl">
              <h2
                className="font-sora text-3xl sm:text-4xl font-bold text-white tracking-[-0.02em] mb-3"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                One system. One price.
              </h2>
              <p className="text-base text-[#c0c7d3]/60 leading-relaxed">
                No subscription. No upsell. Pay once and own it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {/* Bad card — the alternative */}
              <div className="rounded-2xl border border-red-500/15 p-8" style={{ background: "rgba(40,10,10,0.4)" }}>
                <p className="text-[10px] uppercase tracking-widest text-red-400/60 mb-4">The usual approach</p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Generic template that says nothing about your switch",
                    "Hoping the recruiter figures out the connection",
                    "ATS rejects you before anyone reads it",
                    "Cover letter explaining why you're changing fields",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/40">
                      <span className="material-symbols-outlined text-red-500/50 shrink-0 mt-0.5" style={{ fontSize: 16 }}>close</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-white/20 font-mono">Free</p>
                <p className="text-xs text-white/25 mt-1">Costs you the job</p>
              </div>

              {/* Good card — our system */}
              <div
                className="rounded-2xl border border-[#3792E8]/30 p-8 relative overflow-hidden pricing-card-glow"
                style={{ background: "rgba(7,20,50,0.6)" }}
              >
                {/* Glow accent */}
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(55,146,232,0.15) 0%, transparent 70%)" }}
                  aria-hidden="true"
                />

                <p className="text-[10px] uppercase tracking-widest text-[#a0c9ff]/60 mb-4">CareerSwitchKit</p>
                <ul className="space-y-3 mb-6">
                  {[
                    "4-stage system built for non-traditional backgrounds",
                    "Semantic transfer mapping for your specific field change",
                    "ATS Compatibility Engine + 50 AI prompts",
                    "Cover letter framework for career switchers",
                    "Completed example from start to submission",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#e2e0fa]/80">
                      <span className="material-symbols-outlined text-[#a0c9ff] shrink-0 mt-0.5" style={{ fontSize: 16, fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-white font-sora">$19</span>
                  <span className="text-sm text-[#c0c7d3]/50">one-time</span>
                </div>

                <CheckoutButton
                  label="Claim Lifetime Access — $19"
                  className="w-full bg-[#3792E8] hover:bg-[#6EB0EE] text-white font-semibold py-3.5 rounded-xl text-sm transition-all duration-200 active:scale-[0.97] hover:shadow-[0_0_32px_rgba(55,146,232,0.5)]"
                />
                <p className="text-[10px] text-[#c0c7d3]/35 text-center mt-3">
                  Instant access. No subscription. 30-day guarantee.
                </p>
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 scroll-mt-20">
            <div className="max-w-2xl">
              <h2
                className="font-sora text-3xl sm:text-4xl font-bold text-white tracking-[-0.02em] mb-10"
                style={{ textWrap: "balance" } as React.CSSProperties}
              >
                Questions
              </h2>
              <FAQAccordion />
            </div>
          </section>

          {/* ── Final CTA ────────────────────────────────────────────────── */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden border border-[#3792E8]/20 p-12 sm:p-16 text-center"
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
                  className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.02em] mb-4"
                  style={{ textWrap: "balance" } as React.CSSProperties}
                >
                  Stop wishing. Start applying.
                </h2>
                <p className="text-base text-[#c0c7d3]/60 mb-8 max-w-md mx-auto leading-relaxed">
                  The system is $19. The cost of getting filtered out again is much higher.
                </p>
                <CheckoutButton
                  label="Claim Lifetime Access — $19"
                  className="inline-block bg-[#3792E8] hover:bg-[#6EB0EE] text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-200 active:scale-[0.97] hover:shadow-[0_0_40px_rgba(55,146,232,0.6)]"
                />
                <p className="mt-4 text-xs text-[#c0c7d3]/30">
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
