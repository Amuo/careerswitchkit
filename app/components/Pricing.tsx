"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { IconCheck } from "@tabler/icons-react";
import { Reveal } from "./Reveal";
import { handleCheckout } from "@/lib/checkout";

const features = [
  "A résumé that explains your career switch — without you having to",
  "Cover letters for 3 scenarios: standard, no direct experience, referral",
  "50 AI prompts that translate your background into hiring manager language",
  "ATS keyword checklist — score your résumé before every submission",
  "A completed career-switch example, start to finish (Sara Mehić, retail → operations)",
  "Works with ChatGPT, Claude, Gemini, or any AI tool",
  "Instant download — no subscription, no account required",
];

function PriceCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    if (reduce) {
      setCount(19);
      return;
    }

    const target = 19;
    const duration = 800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, reduce]);

  return (
    <span ref={ref} className="font-sora text-8xl font-black text-white leading-none">
      ${count}
    </span>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white py-24 lg:py-32">
      {/* Gradient fade from Trust dark into white */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #10102D, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
            PRICING
          </p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#070719] tracking-tight">
            One system. One price. No friction.
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            Everything in the system, delivered instantly.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Pricing card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(150deg, #10102D 0%, #070719 100%)",
              border: "1px solid rgba(55,146,232,0.22)",
              boxShadow: "0 0 0 1px rgba(55,146,232,0.06), 0 0 48px -8px rgba(55,146,232,0.18)",
              padding: "40px",
            }}
          >
            {/* Price block */}
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                ONE-TIME PAYMENT
              </p>
              <p className="text-white/45 text-sm mb-5">
                Instant download. Yours to keep. No account needed.
              </p>
              <PriceCounter />
              <p className="mt-2 text-white/50 text-sm">
                A career coach charges $150/hr. This is $19.
              </p>
            </div>

            {/* Divider */}
            <div
              className="mb-7"
              style={{ height: "1px", background: "#1A2D4A" }}
              aria-hidden="true"
            />

            {/* Feature list */}
            <ul className="space-y-3.5 mb-9" aria-label="What's included">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-sm flex items-center justify-center mt-0.5"
                    style={{ background: "#3792E8" }}
                    aria-hidden="true"
                  >
                    <IconCheck size={11} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-white/80 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={handleCheckout}
              className="w-full bg-accent text-white font-semibold py-4 rounded-xl transition-all duration-200 active:scale-[0.98] text-base hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(55,146,232,0.4)]"
              aria-label="Get the CareerSwitchKit for $19"
            >
              Get the System — $19
            </button>

            <p className="mt-3 text-center text-xs text-white/40">
              30-day money-back guarantee. No questions asked.
            </p>
          </div>

          {/* Trust row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <IconCheck size={13} strokeWidth={2.5} className="text-accent" aria-hidden="true" />
              Instant download
            </span>
            <span className="flex items-center gap-1.5">
              <IconCheck size={13} strokeWidth={2.5} className="text-accent" aria-hidden="true" />
              4 stages. 8 files. 1 career switch.
            </span>
            <span className="flex items-center gap-1.5">
              <IconCheck size={13} strokeWidth={2.5} className="text-accent" aria-hidden="true" />
              30-day money-back guarantee
            </span>
          </div>
        </Reveal>

        </div>
      </div>
    </section>
  );
}
