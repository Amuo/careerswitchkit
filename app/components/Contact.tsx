"use client";

import { motion, useReducedMotion } from "motion/react";
import { handleCheckout } from "@/lib/checkout";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-[#070719] py-28 lg:py-36 border-t border-white/10 overflow-hidden">
      {/* Ambient orb — breathes slowly behind the CTA */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "#3792E8",
          opacity: 0.04,
          filter: "blur(100px)",
          borderRadius: "9999px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={reduce ? {} : { scale: [1, 1.18, 1] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 noise-texture pointer-events-none select-none"
        style={{ opacity: 0.025 }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          suppressHydrationWarning
          initial={reduce ? {} : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0, ease: EASE }}
          className="font-sora text-5xl font-bold text-white tracking-tight leading-tight"
        >
          The job won&apos;t wait.
          <br />
          Neither should you.
        </motion.h2>

        <motion.p
          suppressHydrationWarning
          initial={reduce ? {} : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          className="mt-5 text-white/70 text-lg leading-relaxed max-w-[42ch] mx-auto"
        >
          Four stages. One system. Download CareerSwitchKit, follow the sequence, and submit applications that don&apos;t get filtered out before a human sees them.
        </motion.p>

        <motion.div
          suppressHydrationWarning
          initial={reduce ? {} : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.3, ease: EASE }}
          className="mt-10"
        >
          <button
            onClick={handleCheckout}
            className="bg-accent hover:bg-accent-hover text-white font-semibold px-12 py-5 rounded-xl transition-all duration-200 active:scale-[0.98] text-lg hover:shadow-[0_0_40px_rgba(55,146,232,0.35)]"
          >
            Start the System for $19
          </button>
        </motion.div>

        <motion.p
          suppressHydrationWarning
          initial={reduce ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
          className="mt-6 text-white/60 text-sm"
        >
          Questions before you buy?{" "}
          <a
            href="mailto:support@careerswitchkit.com"
            className="text-white/80 hover:text-white underline underline-offset-4 transition-colors"
          >
            support@careerswitchkit.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
