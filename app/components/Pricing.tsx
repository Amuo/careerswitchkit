"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import { IconCheck } from "@tabler/icons-react";
import { Reveal } from "./Reveal";
import { handleCheckout } from "@/lib/checkout";

const features = [
  "3 ATS-friendly resume templates (chronological, two-page, hybrid)",
  "3 cover letter templates, customizable for any role",
  "50 AI prompts for tailoring every application",
  "ATS keyword checklist + scoring sheet",
  "1 completed career-switch example (resume + cover letter)",
  "Works with ChatGPT, Claude, Gemini, or any AI tool",
  "Instant download — no subscription, no account required",
];

function PriceCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const target = 49;
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
  }, [inView]);

  return (
    <span ref={ref} className="font-sora text-8xl font-black text-white leading-none">
      ${count}
    </span>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#EBF4FD] py-28 lg:py-36">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
            PRICING
          </p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#070719] tracking-tight">
            One kit. Everything you need.
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            No tiers, no upsells, no subscriptions.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Premium dark card with breathing glow */}
          <div
            className="rounded-3xl overflow-hidden pricing-card-glow"
            style={{
              background: "linear-gradient(135deg, #10102D 0%, #070719 100%)",
              border: "1px solid rgba(55,146,232,0.30)",
              padding: "48px",
            }}
          >
            {/* One-time label + price */}
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-2">
                one-time payment
              </p>
              <p className="text-white/40 text-sm mb-2">
                Less than one hour of a career coach. Yours to keep forever.
              </p>
              <PriceCounter />
              <p className="mt-2 text-white/45 text-[15px]">
                Career-switch kit — instant download
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-8" />

            {/* Feature list */}
            <ul className="flex flex-col gap-4 mb-10" aria-label="What's included in the kit">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-sm flex items-center justify-center mt-0.5"
                    style={{ background: "#3792E8" }}
                    aria-hidden="true"
                  >
                    <IconCheck size={11} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-white/70 leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={handleCheckout}
              className="w-full bg-accent text-white font-semibold py-4 rounded-xl transition-all duration-200 active:scale-[0.98] text-base hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(55,146,232,0.4)]"
              aria-label="Get the CareerSwitchKit for $49"
            >
              Get the Kit — $49
            </button>
          </div>

          {/* Trust row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <IconCheck size={13} strokeWidth={2.5} className="text-accent" aria-hidden="true" />
              Instant download
            </span>
            <span className="flex items-center gap-1.5">
              <IconCheck size={13} strokeWidth={2.5} className="text-accent" aria-hidden="true" />
              30-day money-back guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <IconCheck size={13} strokeWidth={2.5} className="text-accent" aria-hidden="true" />
              Works with ChatGPT, Claude, Gemini
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
