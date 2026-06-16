"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { IconCheck, IconArrowRight, IconShieldCheck, IconBolt, IconLock } from "@tabler/icons-react";
import { Reveal } from "./Reveal";
import { handleCheckout } from "@/lib/checkout";

const EASE = [0.16, 1, 0.3, 1] as const;

const featuresLeft = [
  "Résumé that explains your career switch",
  "Cover letters for 3 scenarios",
  "Completed example (Sara Mehić, retail → ops)",
];

const featuresRight = [
  "50 AI prompts for Stage 3",
  "ATS keyword checklist",
  "Works with any AI tool",
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
    const duration = 900;
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

  return <span ref={ref}>${count}</span>;
}

export default function Pricing() {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.15 });
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="relative bg-white py-24 lg:py-32">
      {/* Gradient fade from Trust dark */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #10102D, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — heading only, no eyebrow */}
        <Reveal className="text-center mb-10">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#070719] tracking-tight">
            One system. One price. No friction.
          </h2>
        </Reveal>

        {/* Card */}
        <div ref={cardRef}>
          <motion.div
            suppressHydrationWarning
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(150deg, #10102D 0%, #070719 100%)",
              border: "1.5px solid rgba(55,146,232,0.28)",
            }}
          >

            {/* ── Price comparison ── */}
            <div className="px-8 pt-8 pb-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-6">
                One-time payment
              </p>

              {/* $150 vs $19 — career coach anchor */}
              <div className="grid grid-cols-[1fr_1px_1fr] items-center">

                {/* Left: career coach */}
                <div className="pr-6">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-white/25 mb-2">
                    Career coach
                  </p>
                  <p
                    className="font-sora font-black leading-none"
                    style={{
                      fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
                      color: "rgba(255,255,255,0.18)",
                      textDecoration: "line-through",
                      textDecorationColor: "rgba(255,255,255,0.12)",
                    }}
                  >
                    $150
                  </p>
                  <p className="text-xs text-white/20 mt-2">per hour, ongoing</p>
                </div>

                {/* Vertical rule */}
                <div
                  className="h-16"
                  style={{ background: "rgba(255,255,255,0.09)" }}
                  aria-hidden="true"
                />

                {/* Right: actual price */}
                <div className="pl-6">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">
                    CareerSwitchKit
                  </p>
                  <p
                    className="font-sora font-black text-white leading-none tabular-nums"
                    style={{ fontSize: "clamp(2.5rem, 8vw, 3.5rem)" }}
                  >
                    <PriceCounter />
                  </p>
                  <p className="text-xs text-white/45 mt-2">one time, today</p>
                </div>
              </div>

              {/* The money line — prominent, not a footnote */}
              <p className="mt-5 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
                One session with a career coach costs $150 and doesn&apos;t leave you with a system.{" "}
                <span className="text-white/75 font-semibold">This does. For $19.</span>
              </p>
            </div>

            {/* Divider */}
            <div
              className="mx-8"
              style={{ height: "1px", background: "rgba(255,255,255,0.07)" }}
              aria-hidden="true"
            />

            {/* ── Features ── */}
            <div className="px-8 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">

                <div className="flex flex-col gap-2.5">
                  {featuresLeft.map((f, i) => (
                    <motion.div
                      key={f}
                      suppressHydrationWarning
                      initial={reduce ? false : { opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.38, delay: 0.28 + i * 0.07, ease: EASE }}
                      className="flex items-start gap-2.5"
                    >
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-sm flex items-center justify-center mt-[1px]"
                        style={{ background: "#3792E8" }}
                        aria-hidden="true"
                      >
                        <IconCheck size={9} className="text-white" strokeWidth={3.5} />
                      </span>
                      <span className="text-[13px] leading-snug" style={{ color: "rgba(255,255,255,0.65)" }}>
                        {f}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col gap-2.5">
                  {featuresRight.map((f, i) => (
                    <motion.div
                      key={f}
                      suppressHydrationWarning
                      initial={reduce ? false : { opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.38, delay: 0.28 + i * 0.07, ease: EASE }}
                      className="flex items-start gap-2.5"
                    >
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-sm flex items-center justify-center mt-[1px]"
                        style={{ background: "#3792E8" }}
                        aria-hidden="true"
                      >
                        <IconCheck size={9} className="text-white" strokeWidth={3.5} />
                      </span>
                      <span className="text-[13px] leading-snug" style={{ color: "rgba(255,255,255,0.65)" }}>
                        {f}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>

            {/* Divider */}
            <div
              className="mx-8"
              style={{ height: "1px", background: "rgba(255,255,255,0.07)" }}
              aria-hidden="true"
            />

            {/* ── CTA ── */}
            <div className="px-8 pb-8 pt-6">
              <motion.div
                suppressHydrationWarning
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.52, ease: EASE }}
              >
                <motion.button
                  suppressHydrationWarning
                  onClick={handleCheckout}
                  whileHover={
                    reduce
                      ? {}
                      : {
                          scale: 1.018,
                          backgroundColor: "#6EB0EE",
                          boxShadow: "0 0 52px rgba(55,146,232,0.55)",
                        }
                  }
                  whileTap={reduce ? {} : { scale: 0.975 }}
                  transition={{
                    scale: { duration: 0.18 },
                    backgroundColor: { duration: 0.2 },
                    boxShadow: { duration: 0.25 },
                  }}
                  className="w-full flex items-center justify-center gap-3 text-white font-bold text-base py-[18px] rounded-xl"
                  style={{ background: "#3792E8" }}
                  aria-label="Download CareerSwitchKit for $19"
                >
                  Get the System for $19
                  <IconArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </motion.button>
              </motion.div>

              <motion.div
                suppressHydrationWarning
                initial={reduce ? false : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.64, ease: EASE }}
                className="mt-5 flex flex-wrap items-center justify-center gap-3"
              >
                {[
                  { icon: <IconShieldCheck size={13} strokeWidth={2} aria-hidden="true" />, text: "30-day money-back guarantee" },
                  { icon: <IconBolt size={13} strokeWidth={2} aria-hidden="true" />, text: "Instant download" },
                  { icon: <IconLock size={13} strokeWidth={2} aria-hidden="true" />, text: "No account needed" },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span style={{ color: "#3792E8" }}>{icon}</span>
                    {text}
                  </div>
                ))}
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
