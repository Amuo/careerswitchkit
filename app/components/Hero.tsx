"use client";

import { motion, useReducedMotion } from "motion/react";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { handleCheckout } from "@/lib/checkout";

const bullets = [
  "3 ATS-friendly resume templates",
  "50 AI prompts to tailor every application",
  "ATS keyword checklist + scoring sheet",
];

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="relative bg-[#070719] min-h-screen flex items-center overflow-hidden">
      {/* Noise texture */}
      <div
        className="absolute inset-0 noise-texture pointer-events-none select-none"
        style={{ opacity: 0.025 }}
        aria-hidden="true"
      />

      {/* Glow 1 — top-left, 800×800 */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "800px",
          height: "800px",
          background: "rgba(55,146,232,0.08)",
          filter: "blur(150px)",
          borderRadius: "9999px",
          top: "-200px",
          left: "-200px",
        }}
        aria-hidden="true"
      />

      {/* Glow 2 — bottom-right, 600×600 */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "rgba(55,146,232,0.06)",
          filter: "blur(120px)",
          borderRadius: "9999px",
          bottom: "-100px",
          right: "-100px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left column */}
          <div className="max-w-xl flex flex-col gap-6">
            <motion.h1
              suppressHydrationWarning
              {...fadeUp(0.1)}
              className="font-sora text-5xl md:text-6xl lg:text-7xl font-black leading-tight max-w-2xl"
            >
              <span className="text-white">Switch careers in the US,</span>
              <br />
              <span style={{ color: "#3792E8" }}>without starting from zero.</span>
            </motion.h1>

            <motion.p
              suppressHydrationWarning
              {...fadeUp(0.2)}
              className="text-xl text-white/70 leading-relaxed max-w-lg mt-2"
            >
              Get an ATS-friendly resume, cover letter, and 50 AI prompts — ready in 30–60 minutes.
            </motion.p>

            <motion.ul
              suppressHydrationWarning
              {...fadeUp(0.3)}
              className="flex flex-col gap-3"
              aria-label="Kit includes"
            >
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 bg-[#3792E8] rounded-sm flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <IconCheck size={11} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-white/90 text-base font-medium">{b}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              suppressHydrationWarning
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={handleCheckout}
                className="bg-[#3792E8] hover:bg-[#6EB0EE] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 active:scale-[0.98] shadow-[0_0_30px_rgba(55,146,232,0.4)] hover:shadow-[0_0_50px_rgba(55,146,232,0.6)]"
              >
                Get the Kit — $49
              </button>
              <Link
                href="/preview"
                className="border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-8 py-4 rounded-xl backdrop-blur-sm bg-white/5 text-base transition-all duration-200 font-medium"
              >
                Preview what&apos;s inside
              </Link>
            </motion.div>
          </div>

          {/* Right column: product placeholder */}
          <motion.div
            suppressHydrationWarning
            initial={reduce ? {} : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center"
            aria-label="Product preview — real screenshots coming"
          >
            {/* Gradient border wrapper */}
            <div
              className="w-full max-w-lg rounded-2xl p-[1px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(55,146,232,0.4), transparent 50%, rgba(55,146,232,0.2))",
              }}
            >
              {/* Inner card */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-[#10102D] relative overflow-hidden flex flex-col p-6">
                {/* Stacked document cards */}
                <div className="relative flex-1 mb-6">
                  {/* Back document — rotated 2deg */}
                  <div
                    className="absolute inset-0 rounded-lg bg-white/5 border border-white/10 p-5"
                    style={{ transform: "rotate(2deg)" }}
                  >
                    <div className="flex flex-col gap-2.5 pt-1">
                      <div className="h-2 bg-white/10 rounded-full w-2/3" />
                      <div className="h-2 bg-white/10 rounded-full w-full" />
                      <div className="h-2 bg-white/10 rounded-full w-5/6" />
                      <div className="h-2 bg-white/10 rounded-full w-4/5" />
                    </div>
                  </div>

                  {/* Middle document — straight */}
                  <div className="absolute inset-0 rounded-lg bg-white/5 border border-white/10 p-5">
                    <div className="flex flex-col gap-2.5 pt-1">
                      <div className="h-2 bg-white/10 rounded-full w-1/2" />
                      <div className="h-2 bg-white/10 rounded-full w-full" />
                      <div className="h-2 bg-white/10 rounded-full w-5/6" />
                      <div className="h-2 bg-white/10 rounded-full w-4/5" />
                      <div className="h-2 bg-white/10 rounded-full w-3/4" />
                    </div>
                  </div>

                  {/* Front document — rotated -2deg */}
                  <div
                    className="absolute inset-0 rounded-lg p-5"
                    style={{
                      transform: "rotate(-2deg)",
                      background: "#0b0b22",
                      border: "1px solid rgba(55,146,232,0.25)",
                    }}
                  >
                    <div className="flex flex-col gap-2.5">
                      <div
                        className="h-2.5 rounded-sm w-2/5"
                        style={{ background: "rgba(255,255,255,0.28)" }}
                      />
                      <div
                        className="h-1.5 rounded-sm w-1/2"
                        style={{ background: "rgba(255,255,255,0.12)" }}
                      />
                      <div
                        className="mt-1 h-px w-full"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                      />
                      <div
                        className="mt-1 h-1.5 rounded-full w-full"
                        style={{ background: "rgba(55,146,232,0.20)" }}
                      />
                      <div
                        className="h-1.5 rounded-full w-5/6"
                        style={{ background: "rgba(255,255,255,0.10)" }}
                      />
                      <div
                        className="h-1.5 rounded-full w-4/5"
                        style={{ background: "rgba(255,255,255,0.10)" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom label */}
                <p className="text-center text-white/30 text-xs tracking-wider flex-shrink-0">
                  Product screenshots coming
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
