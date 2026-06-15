"use client";

import { motion, useReducedMotion } from "motion/react";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { handleCheckout } from "@/lib/checkout";

const bullets = [
  "A résumé that explains your switch — without you having to",
  "Cover letters that make non-linear careers look intentional",
  "An ATS score above the filter line, before you submit",
];

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  const fadeLeft = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section className="relative bg-[#070719] min-h-screen flex items-center overflow-hidden">
      {/* Noise texture */}
      <div
        className="absolute inset-0 noise-texture pointer-events-none select-none"
        style={{ opacity: 0.025 }}
        aria-hidden="true"
      />

      {/* Orb 1 — top-left, slow float */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "rgba(55,146,232,0.05)",
          filter: "blur(100px)",
          borderRadius: "9999px",
          top: "-100px",
          left: "-150px",
          animation: "float 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* Orb 2 — bottom-right, slower float reverse */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background: "rgba(55,146,232,0.08)",
          filter: "blur(80px)",
          borderRadius: "9999px",
          bottom: "-50px",
          right: "-80px",
          animation: "float 10s ease-in-out infinite reverse",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <motion.p
              suppressHydrationWarning
              {...fadeUp(0)}
              className="text-sm font-bold uppercase tracking-widest text-accent"
            >
              Career Switcher&apos;s Toolkit
            </motion.p>

            {/* Headline */}
            <motion.h1
              suppressHydrationWarning
              {...fadeUp(0.1)}
              className="font-sora font-black leading-tight text-4xl text-white"
            >
              Your background isn&apos;t the problem.{" "}
              <span className="text-[#3792E8]">
                Your resume is.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              suppressHydrationWarning
              {...fadeUp(0.3)}
              className="text-xl text-white/70 leading-relaxed max-w-lg"
            >
              Stop explaining yourself. Start getting interviews.
            </motion.p>

            {/* Bullets — each staggered from left */}
            <ul className="flex flex-col gap-3" aria-label="Kit includes">
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  suppressHydrationWarning
                  {...fadeLeft(0.4 + i * 0.1)}
                  className="flex items-center gap-3"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 bg-[#3792E8] rounded-sm flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <IconCheck size={11} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-white/90 text-base font-medium">{b}</span>
                </motion.li>
              ))}
            </ul>

            {/* Buttons */}
            <motion.div
              suppressHydrationWarning
              {...fadeUp(0.7)}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={handleCheckout}
                className="bg-[#3792E8] hover:bg-[#6EB0EE] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 active:scale-[0.98] shadow-[0_0_30px_rgba(55,146,232,0.4)] hover:shadow-[0_0_50px_rgba(55,146,232,0.6)]"
              >
                Get the System — $19
              </button>
              <Link
                href="/preview"
                className="border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-8 py-4 rounded-xl backdrop-blur-sm bg-white/5 text-base transition-all duration-200 font-medium"
              >
                Preview what&apos;s inside
              </Link>
            </motion.div>
          </div>

          {/* Right column: resume document mockup */}
          <motion.div
            suppressHydrationWarning
            initial={reduce ? {} : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: EASE }}
            className="hidden lg:flex items-center justify-center"
            aria-label="Resume template preview"
          >
            {/* Badge + card wrapper */}
            <div className="relative max-w-sm w-full">
              {/* ATS-Optimized badge */}
              <div
                className="absolute -top-3 -right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(55,146,232,0.18)",
                  border: "1px solid rgba(55,146,232,0.40)",
                  color: "#3792E8",
                  backdropFilter: "blur(8px)",
                }}
              >
                <IconCheck size={11} strokeWidth={3} aria-hidden="true" />
                ATS-Optimized
              </div>

              {/* Resume card */}
              <div
                className="rounded-2xl p-6 relative overflow-hidden flex flex-col gap-4"
                style={{
                  background: "#10102D",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(55,146,232,0.08)",
                  aspectRatio: "3/4",
                }}
              >
                {/* Ambient glow */}
                <div
                  className="absolute top-4 right-4 w-32 h-32 rounded-full pointer-events-none"
                  style={{
                    background: "rgba(55,146,232,0.20)",
                    filter: "blur(48px)",
                    animation: "pulse 3s ease-in-out infinite",
                  }}
                  aria-hidden="true"
                />

                {/* Name block */}
                <div className="flex flex-col gap-2 relative z-10">
                  <div className="w-32 h-3 bg-white/80 rounded" />
                  <div className="w-24 h-2 bg-white/30 rounded" />
                  <div className="w-20 h-2 bg-white/30 rounded" />
                </div>

                {/* Accent divider */}
                <div className="w-full h-px bg-accent/40 relative z-10" />

                {/* Section 1 */}
                <div className="flex flex-col gap-2 relative z-10">
                  <div className="w-16 h-2 bg-accent/60 rounded" />
                  <div className="w-full h-2 bg-white/20 rounded" />
                  <div className="w-4/5 h-2 bg-white/20 rounded" />
                  <div className="w-3/4 h-2 bg-white/20 rounded" />
                </div>

                {/* Section 2 */}
                <div className="flex flex-col gap-2 relative z-10">
                  <div className="w-16 h-2 bg-accent/60 rounded" />
                  <div className="w-full h-2 bg-white/20 rounded" />
                  <div className="w-4/5 h-2 bg-white/20 rounded" />
                  <div className="w-3/4 h-2 bg-white/20 rounded" />
                </div>

                {/* Section 3 */}
                <div className="flex flex-col gap-2 relative z-10">
                  <div className="w-20 h-2 bg-accent/60 rounded" />
                  <div className="w-full h-2 bg-white/20 rounded" />
                  <div className="w-4/5 h-2 bg-white/20 rounded" />
                  <div className="w-3/4 h-2 bg-white/20 rounded" />
                </div>

                {/* Skills pills */}
                <div className="flex flex-wrap gap-2 relative z-10 mt-auto pt-2">
                  {["ATS-Ready", "Keyword-Rich", "Career Switch"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(55,146,232,0.12)",
                        border: "1px solid rgba(55,146,232,0.30)",
                        color: "#3792E8",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
