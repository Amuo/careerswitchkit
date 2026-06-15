"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { IconCheck, IconX } from "@tabler/icons-react";
import { Reveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const beforeFlaws = ["No keywords", "No metrics", "Too vague"];
const afterWins = ["Salesforce keyword", "18% metric", "Quantified impact"];

function ATSCounter({
  active,
  target,
  startDelay,
}: {
  active: boolean;
  target: number;
  startDelay: number;
}) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    if (reduce) {
      setCount(target);
      return;
    }

    const duration = 1300;
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [active, target, startDelay, reduce]);

  return <>{count}</>;
}

export default function Proof() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, amount: 0.25 });
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#F0F4FA] py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
            SEE IT IN ACTION
          </p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#070719] tracking-tight">
            Before the system. After the system.
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-[50ch]">
            One résumé bullet, rewritten using Stage 3. This is what the
            translation problem looks like — solved.
          </p>
        </Reveal>

        {/* Grid — single inView ref drives all child animations */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-[1fr_120px_1fr] gap-6 md:gap-0 items-center"
        >
          {/* ── BEFORE card ── */}
          <motion.div
            suppressHydrationWarning
            initial={reduce ? false : { opacity: 0, x: -44 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.72, ease: EASE }}
            className="h-full"
          >
            <div
              className="rounded-2xl p-6 bg-white h-full flex flex-col gap-5"
              style={{
                border: "1px solid rgba(239,68,68,0.28)",
                boxShadow: "0 0 40px rgba(239,68,68,0.07)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500 flex items-center gap-2">
                  {/* Pulsing live indicator */}
                  <motion.span
                    suppressHydrationWarning
                    className="w-2 h-2 rounded-full bg-red-500 inline-block flex-shrink-0"
                    animate={
                      inView && !reduce
                        ? { scale: [1, 1.6, 1], opacity: [1, 0.35, 1] }
                        : {}
                    }
                    transition={{
                      duration: 1.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    aria-hidden="true"
                  />
                  Before
                </span>

                {/* Status badge — pops in after card arrives */}
                <motion.span
                  suppressHydrationWarning
                  initial={reduce ? false : { opacity: 0, scale: 0.75 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.38, delay: 0.58, ease: EASE }}
                  className="text-[11px] font-semibold text-red-400 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full whitespace-nowrap"
                >
                  ATS: likely filtered
                </motion.span>
              </div>

              {/* Live ATS score counter — red */}
              <motion.div
                suppressHydrationWarning
                initial={reduce ? false : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.58 }}
                className="flex items-center gap-4 rounded-xl px-4 py-3"
                style={{
                  background: "rgba(239,68,68,0.05)",
                  border: "1px solid rgba(239,68,68,0.14)",
                }}
              >
                <span
                  className="font-sora text-[42px] font-black text-red-500 leading-none tabular-nums"
                  style={{ minWidth: "3ch", textAlign: "right" }}
                >
                  <ATSCounter active={inView} target={23} startDelay={600} />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wide">
                    ATS Score
                  </span>
                  <span className="text-[11px] text-gray-400 leading-snug">
                    Below the 65-point filter line
                  </span>
                </div>
              </motion.div>

              {/* Quote */}
              <blockquote className="font-mono text-[13px] leading-relaxed text-gray-600 border-l-2 border-red-200 pl-4 flex-1">
                &ldquo;Helped customers with various tasks and worked with the
                team to meet goals.&rdquo;
              </blockquote>

              {/* Flaw tags — stagger in sequentially after card seats */}
              <div className="flex flex-wrap gap-2">
                {beforeFlaws.map((tag, i) => (
                  <motion.span
                    key={tag}
                    suppressHydrationWarning
                    initial={reduce ? false : { opacity: 0, y: 7 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.34,
                      delay: 0.64 + i * 0.09,
                      ease: EASE,
                    }}
                    className="flex items-center gap-1 text-xs text-red-400 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full"
                  >
                    <IconX size={10} strokeWidth={3} aria-hidden="true" />
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── VS badge — centrepiece ── */}
          <div className="flex items-center justify-center py-8 md:py-0">
            <div className="relative flex items-center justify-center">
              {/* Sonar ring 1 */}
              {inView && !reduce && (
                <motion.div
                  suppressHydrationWarning
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 80,
                    height: 80,
                    border: "1.5px solid rgba(55,146,232,0.45)",
                  }}
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 2.1, opacity: 0 }}
                  transition={{
                    duration: 1.7,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0,
                  }}
                  aria-hidden="true"
                />
              )}
              {/* Sonar ring 2 — offset phase */}
              {inView && !reduce && (
                <motion.div
                  suppressHydrationWarning
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 80,
                    height: 80,
                    border: "1.5px solid rgba(55,146,232,0.25)",
                  }}
                  initial={{ scale: 1, opacity: 0.35 }}
                  animate={{ scale: 2.8, opacity: 0 }}
                  transition={{
                    duration: 1.7,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.6,
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Main badge */}
              <motion.div
                suppressHydrationWarning
                initial={reduce ? false : { opacity: 0, scale: 0.65 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
                className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(145deg, #0F1535 0%, #070719 100%)",
                  border: "2px solid rgba(55,146,232,0.65)",
                  boxShadow:
                    "0 0 0 5px rgba(55,146,232,0.07), 0 0 32px rgba(55,146,232,0.40)",
                }}
              >
                <span className="font-sora text-lg font-black text-white tracking-wider leading-none">
                  VS
                </span>
              </motion.div>
            </div>
          </div>

          {/* ── AFTER card ── */}
          <motion.div
            suppressHydrationWarning
            initial={reduce ? false : { opacity: 0, x: 44 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.15, ease: EASE }}
            className="h-full"
          >
            <div
              className="rounded-2xl p-6 bg-white h-full flex flex-col gap-5"
              style={{
                border: "1px solid rgba(55,146,232,0.28)",
                boxShadow: "0 0 48px rgba(55,146,232,0.12)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-widest text-[#3792E8] flex items-center gap-2">
                  <motion.span
                    suppressHydrationWarning
                    className="w-2 h-2 rounded-full bg-[#3792E8] inline-block flex-shrink-0"
                    animate={
                      inView && !reduce
                        ? { scale: [1, 1.6, 1], opacity: [1, 0.35, 1] }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                    aria-hidden="true"
                  />
                  After
                </span>

                <motion.span
                  suppressHydrationWarning
                  initial={reduce ? false : { opacity: 0, scale: 0.75 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.38, delay: 0.72, ease: EASE }}
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                  style={{
                    color: "#3792E8",
                    background: "rgba(55,146,232,0.08)",
                    border: "1px solid rgba(55,146,232,0.22)",
                  }}
                >
                  ATS: passes filters
                </motion.span>
              </div>

              {/* Live ATS score counter */}
              <motion.div
                suppressHydrationWarning
                initial={reduce ? false : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.62 }}
                className="flex items-center gap-4 rounded-xl px-4 py-3"
                style={{
                  background: "rgba(55,146,232,0.06)",
                  border: "1px solid rgba(55,146,232,0.14)",
                }}
              >
                <span
                  className="font-sora text-[42px] font-black text-[#3792E8] leading-none tabular-nums"
                  style={{ minWidth: "3ch", textAlign: "right" }}
                >
                  <ATSCounter active={inView} target={87} startDelay={680} />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-[#3792E8] uppercase tracking-wide">
                    ATS Score
                  </span>
                  <span className="text-[11px] text-gray-400 leading-snug">
                    Above the 65-point filter line
                  </span>
                </div>
              </motion.div>

              {/* Quote */}
              <blockquote
                className="font-mono text-[13px] leading-relaxed text-gray-700 border-l-2 pl-4 flex-1"
                style={{ borderColor: "rgba(55,146,232,0.40)" }}
              >
                &ldquo;Resolved 40+ daily customer inquiries via Salesforce;
                reduced escalation rate by 18% over two quarters.&rdquo;
              </blockquote>

              {/* Win tags — stagger in */}
              <div className="flex flex-wrap gap-2">
                {afterWins.map((tag, i) => (
                  <motion.span
                    key={tag}
                    suppressHydrationWarning
                    initial={reduce ? false : { opacity: 0, y: 7 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.34,
                      delay: 0.78 + i * 0.09,
                      ease: EASE,
                    }}
                    className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      color: "#185FA5",
                      background: "rgba(55,146,232,0.08)",
                      border: "1px solid rgba(55,146,232,0.20)",
                    }}
                  >
                    <IconCheck size={10} strokeWidth={3} aria-hidden="true" />
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <Reveal delay={0.35} className="mt-6">
          <div className="flex items-start gap-2.5 bg-white/70 border border-gray-200/60 rounded-xl px-5 py-4">
            <p className="text-sm text-gray-500 leading-relaxed">
              <strong className="text-gray-700 font-medium">Example only.</strong>{" "}
              This rewrite uses Prompt 12 from Stage 3. Results depend on your
              background, your target role, and how you work through the system.
              The system gives you the process — you do the work.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
