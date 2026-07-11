import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutLink from "../components/CheckoutLink";
import FadeUpObserver from "../components/FadeUpObserver";
import PreviewTour from "./PreviewTour";
import AtsCheckerDemo from "./AtsCheckerDemo";
import PromptSample from "./PromptSample";

export const metadata: Metadata = {
  title: "See the System — Interactive Preview | CareerSwitchKit",
  description:
    "Walk the 4-stage career-switch system, run the real ATS Score Checker live in your browser, and read the actual AI prompts — before you buy. $37, instant download.",
  alternates: { canonical: "https://careerswitchkit.org/preview" },
  openGraph: {
    title: "See the System — Interactive Preview | CareerSwitchKit",
    description:
      "A working preview of CareerSwitchKit: the 4 stages, the live ATS checker, and the real prompts. No signup.",
    url: "https://careerswitchkit.org/preview",
    type: "website",
  },
};

// What the system includes — described by outcome, shown as tiles (never "files").
const includes = [
  { icon: "menu_book", title: "Start Here Guide", sub: "The full sequence and action plan — do it in order." },
  { icon: "description", title: "3 CV templates", sub: "One-page, two-page, and the switcher-first Hybrid." },
  { icon: "mail", title: "3 cover letters", sub: "Standard, career-gap, and referral scenarios." },
  { icon: "bolt", title: "ATS Score Checker", sub: "The live tool you just used — score before every send." },
  { icon: "auto_awesome", title: "50 AI prompts", sub: "Six stages, research to negotiation. Any AI tool." },
  { icon: "fact_check", title: "Completed example", sub: "A real retail-to-operations switch, decisions and all." },
];

export default function PreviewPage() {
  return (
    <>
      {/* Noise texture overlay — same baked grain as the landing page */}
      <div className="grain fixed inset-0 pointer-events-none opacity-50" style={{ zIndex: 1 }} aria-hidden="true" />

      <div className="relative min-h-screen" style={{ color: "#e2e0fa", overflowX: "clip" }}>
        <FadeUpObserver />

        <div className="vertical-guide guide-left hidden lg:block" aria-hidden="true" />
        <div className="vertical-guide guide-right hidden lg:block" aria-hidden="true" />

        <Navbar />

        <main className="relative pt-32" style={{ position: "relative", zIndex: 2 }}>
          {/* ── Hero ──────────────────────────────────────────────────────── */}
          <section className="max-w-4xl mx-auto text-center px-6 mb-24 fade-up visible relative">
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 blur-3xl"
                style={{
                  width: "150%", height: "440px",
                  background: "radial-gradient(50% 50% at 50% 0%, rgba(160,201,255,0.18) 0%, transparent 100%)",
                  opacity: 0.7,
                }}
              />
            </div>

            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#a0c9ff" }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a0c9ff" }}>
                Interactive preview
              </span>
            </div>

            <h1 className="font-geist font-black mb-7 leading-[1.05] tracking-tighter" style={{ fontSize: "clamp(40px, 6.5vw, 78px)" }}>
              <span className="block mb-2">See the whole system.</span>
              <span style={{ color: "#a0c9ff" }}>Before you pay a cent.</span>
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-9 leading-relaxed" style={{ color: "#c0c7d3" }}>
              This is CareerSwitchKit, running live. Walk the four stages, score a résumé in the real ATS checker,
              and read the actual prompts — no signup, nothing to download yet.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm" style={{ color: "rgba(255,255,255,0.62)" }}>
              {["4-stage walkthrough", "Live ATS checker", "Real AI prompts"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: "#a0c9ff" }}>check_circle</span>
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* ── The interactive tour ──────────────────────────────────────── */}
          <section id="tour" className="max-w-6xl mx-auto px-6 mb-32 fade-up scroll-mt-28">
            <div className="text-center mb-12">
              <span className="section-eyebrow">The walkthrough</span>
              <h2 className="text-4xl font-black font-geist mb-3">
                One path, <span style={{ color: "#a0c9ff" }}>four stages.</span>
              </h2>
              <p style={{ color: "#c0c7d3", maxWidth: "52ch", margin: "0 auto" }}>
                The system runs in sequence — each stage builds on the last. Click through to see exactly what you do,
                and which part of the kit does the heavy lifting.
              </p>
            </div>
            <PreviewTour />
          </section>

          {/* ── Live ATS checker ──────────────────────────────────────────── */}
          <section id="ats-checker" className="max-w-4xl mx-auto px-6 mb-32 fade-up scroll-mt-28">
            <div className="text-center mb-10">
              <span className="section-eyebrow">Try it yourself</span>
              <h2 className="text-4xl font-black font-geist mb-3">
                The ATS checker, <span style={{ color: "#a0c9ff" }}>running now.</span>
              </h2>
              <p style={{ color: "#c0c7d3", maxWidth: "52ch", margin: "0 auto" }}>
                Stage 3 of the system, unlocked here in full. Same engine that ships inside — score a real résumé and
                see the flags it raises.
              </p>
            </div>
            <AtsCheckerDemo />
          </section>

          {/* ── AI Prompt Pack sample ─────────────────────────────────────── */}
          <section id="prompts" className="max-w-5xl mx-auto px-6 mb-32 fade-up scroll-mt-28">
            <div className="text-center mb-10">
              <span className="section-eyebrow">Inside the prompts</span>
              <h2 className="text-4xl font-black font-geist mb-3">
                50 prompts that do <span style={{ color: "#a0c9ff" }}>the heavy lifting.</span>
              </h2>
              <p style={{ color: "#c0c7d3", maxWidth: "52ch", margin: "0 auto" }}>
                Real prompts from the pack — one per stage. You bring your experience; these turn it into the language
                the new field recognises.
              </p>
            </div>
            <PromptSample />
          </section>

          {/* ── What's inside ─────────────────────────────────────────────── */}
          <section id="included" className="max-w-5xl mx-auto px-6 mb-32 fade-up scroll-mt-28">
            <div className="text-center mb-10">
              <span className="section-eyebrow">Everything included</span>
              <h2 className="text-4xl font-black font-geist mb-3">
                What you <span style={{ color: "#a0c9ff" }}>walk away with.</span>
              </h2>
              <p style={{ color: "#c0c7d3", maxWidth: "48ch", margin: "0 auto" }}>
                A complete system you keep and reuse for every application — no subscription, no login.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {includes.map((item) => (
                <div key={item.title} className="pv-card lift-card p-6 flex flex-col gap-3">
                  <span
                    className="flex items-center justify-center w-11 h-11 rounded-xl"
                    style={{ background: "rgba(160,201,255,0.1)", border: "1px solid rgba(160,201,255,0.2)" }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 21, color: "#a0c9ff" }}>{item.icon}</span>
                  </span>
                  <div>
                    <div className="font-geist font-bold text-white" style={{ fontSize: "1.05rem" }}>{item.title}</div>
                    <div className="text-sm mt-1 leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Closing CTA ───────────────────────────────────────────────── */}
          <section className="relative py-28 overflow-hidden fade-up mb-16">
            <div className="grain absolute inset-0 pointer-events-none opacity-30" aria-hidden="true" />
            <div
              className="absolute top-0 inset-x-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(160,201,255,0.25) 50%, transparent 100%)" }}
              aria-hidden="true"
            />
            <div className="relative max-w-2xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-black font-geist mb-5 leading-tight">
                You&apos;ve seen it work. <span style={{ color: "#a0c9ff" }}>Now run it on your switch.</span>
              </h2>
              <p className="text-lg mb-9 max-w-xl mx-auto leading-relaxed" style={{ color: "#c0c7d3" }}>
                The preview is the real thing, on a sample. Get the full system — every template, all 50 prompts,
                the checker, and the completed example — and point it at the job you actually want.
              </p>

              <CheckoutLink
                className="group relative inline-flex w-full sm:w-auto px-10 py-5 bg-white font-black rounded-2xl transition-all duration-500 active:scale-95 overflow-hidden font-geist text-lg items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(160,201,255,0.4)]"
                style={{ color: "#000", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 24px rgba(0,0,0,0.3)" }}
              >
                <span className="white-cta-shimmer" aria-hidden="true" />
                <span className="relative z-10 flex items-center gap-2">
                  Claim Lifetime Access — $37
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </span>
              </CheckoutLink>

              <div
                className="flex items-center justify-center gap-2.5 mt-6 mx-auto max-w-sm px-4 py-3 rounded-xl"
                style={{ background: "rgba(160,201,255,0.06)", border: "1px solid rgba(160,201,255,0.22)" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#a0c9ff" }}>verified_user</span>
                <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.78)" }}>
                  $37 one-time · Instant download · 7-day money-back guarantee
                </span>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
