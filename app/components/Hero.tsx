"use client";

import { motion } from "motion/react";
import { IconCheck } from "@tabler/icons-react";
import { handleCheckout } from "@/lib/checkout";

const EASE = [0.16, 1, 0.3, 1] as const;

const bullets = [
  "A résumé that explains your career switch, without you having to",
  "Cover letters that make non-linear careers look intentional",
  "An ATS score above the filter line, before you submit",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Noise texture */}
      <div
        className="absolute inset-0 noise-texture pointer-events-none select-none"
        style={{ opacity: 0.04 }}
        aria-hidden="true"
      />

      {/* Left ambient glow */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "1000px",
          height: "800px",
          background:
            "radial-gradient(ellipse at center, rgba(55,146,232,0.18) 0%, transparent 68%)",
          top: "-280px",
          left: "-320px",
        }}
        animate={{ x: [0, 55, 0], y: [0, -35, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Right-side glow */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "700px",
          background:
            "radial-gradient(ellipse at center, rgba(55,146,232,0.12) 0%, transparent 70%)",
          top: "10%",
          right: "-120px",
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Center-bottom glow — anchors the hero visually */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "800px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(55,146,232,0.08) 0%, transparent 70%)",
          bottom: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-7">

            {/* HEADLINE */}
            <h1 className="hero-h1-enter font-sora font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-white text-balance">
              Your background isn&apos;t the problem.{" "}
              <span className="shiny-text">Your resume is.</span>
            </h1>

            {/* SUBHEADLINE */}
            <motion.p
              suppressHydrationWarning
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="text-xl md:text-2xl leading-relaxed max-w-lg"
              style={{ color: "rgba(255,255,255,0.58)" }}
            >
              Stop explaining yourself. Start getting interviews.
            </motion.p>

            {/* BULLETS */}
            <ul
              className="flex flex-col gap-3 mt-1"
              aria-label="What the system delivers"
            >
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  suppressHydrationWarning
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.48 + i * 0.09,
                    ease: EASE,
                  }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-sm flex items-center justify-center mt-0.5"
                    style={{ background: "#3792E8" }}
                    aria-hidden="true"
                  >
                    <IconCheck size={11} className="text-white" strokeWidth={3.5} />
                  </span>
                  <span
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.80)" }}
                  >
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* BUTTONS */}
            <motion.div
              suppressHydrationWarning
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.76, ease: EASE }}
              className="flex flex-wrap gap-3 mt-2"
            >
              {/* Primary CTA */}
              <motion.button
                suppressHydrationWarning
                onClick={handleCheckout}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#6EB0EE",
                  boxShadow: "0 0 64px rgba(55,146,232,0.65)",
                }}
                whileTap={{ scale: 0.975 }}
                transition={{
                  scale: { duration: 0.18 },
                  backgroundColor: { duration: 0.2 },
                  boxShadow: { duration: 0.25 },
                }}
                className="text-white font-bold px-8 py-4 rounded-xl text-base"
                style={{
                  background: "#3792E8",
                  boxShadow: "0 0 36px rgba(55,146,232,0.38)",
                }}
                aria-label="Get CareerSwitchKit for $19"
              >
                Get the System for $19
              </motion.button>

              {/* Secondary CTA */}
              <motion.a
                suppressHydrationWarning
                href="#included"
                whileHover={{
                  borderColor: "rgba(255,255,255,0.38)",
                  color: "rgba(255,255,255,0.95)",
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center px-8 py-4 rounded-xl text-base font-medium"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.65)",
                  backdropFilter: "blur(8px)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                See how it works
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Translation card ── */}
          <motion.div
            suppressHydrationWarning
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: EASE }}
            className="hidden lg:block"
            aria-label="What Stage 3 of the system produces"
          >
            {/* Subtle floating */}
            <motion.div
              suppressHydrationWarning
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity }}
            >
              <div
                className="rounded-2xl p-6 flex flex-col gap-5"
                style={{
                  background: "linear-gradient(150deg, #10102D 0%, #070719 100%)",
                  border: "1.5px solid rgba(55,146,232,0.24)",
                }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between gap-3">
                  <p
                    className="text-[10px] font-bold tracking-[0.2em] uppercase"
                    style={{ color: "#3792E8" }}
                  >
                    Stage 3 · Optimize
                  </p>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{
                      color: "#3792E8",
                      background: "rgba(55,146,232,0.08)",
                      border: "1px solid rgba(55,146,232,0.20)",
                    }}
                  >
                    50 AI Prompts
                  </span>
                </div>

                {/* Thin rule */}
                <div
                  style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
                  aria-hidden="true"
                />

                {/* BEFORE block */}
                <div>
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: "rgba(255,255,255,0.22)" }}
                  >
                    Before
                  </p>
                  <p
                    className="font-mono text-[13px] leading-relaxed"
                    style={{
                      color: "rgba(255,255,255,0.28)",
                      textDecoration: "line-through",
                      textDecorationColor: "rgba(255,255,255,0.12)",
                    }}
                  >
                    &ldquo;Managed customer service team at retail store.&rdquo;
                  </p>
                </div>

                {/* Transform indicator */}
                <div className="flex items-center gap-3">
                  <div
                    className="h-px flex-1"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-[11px] font-medium px-3 py-1 rounded-full whitespace-nowrap"
                    style={{
                      color: "rgba(55,146,232,0.80)",
                      background: "rgba(55,146,232,0.07)",
                      border: "1px solid rgba(55,146,232,0.16)",
                    }}
                    aria-hidden="true"
                  >
                    ↓ Prompt 12 applied
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                    aria-hidden="true"
                  />
                </div>

                {/* AFTER block */}
                <motion.div
                  suppressHydrationWarning
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.2, ease: EASE }}
                >
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: "#3792E8" }}
                  >
                    After
                  </p>
                  <p
                    className="font-mono text-[13px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.82)" }}
                  >
                    &ldquo;Led 8-person team; reduced escalation rate 18% over two quarters.&rdquo;
                  </p>
                </motion.div>

                {/* ATS score */}
                <motion.div
                  suppressHydrationWarning
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: 1.55, ease: EASE }}
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  >
                    ATS score
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="font-sora font-black text-3xl leading-none"
                      style={{ color: "#3792E8" }}
                    >
                      87
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "rgba(255,255,255,0.28)" }}
                    >
                      / 100
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
