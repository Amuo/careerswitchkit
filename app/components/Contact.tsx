"use client";

import { motion, useReducedMotion } from "motion/react";
import { handleCheckout } from "@/lib/checkout";
import { IconCheck } from "@tabler/icons-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const reassurances = ["Instant download", "No subscription", "Works for any field"];

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-[#070719] py-32 lg:py-44 overflow-hidden">
      {/* Gradient top border — tapers from center */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 30%, rgba(55,146,232,0.45) 50%, rgba(255,255,255,0.12) 70%, transparent 100%)",
        }}
      />

      {/* Primary ambient orb */}
      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "720px",
          height: "720px",
          background: "#3792E8",
          opacity: 0.07,
          filter: "blur(130px)",
          borderRadius: "9999px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={reduce ? {} : { scale: [1, 1.15, 1] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Secondary orb — upper-right, cooler tone */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "340px",
          height: "340px",
          background: "#6EB0EE",
          opacity: 0.045,
          filter: "blur(90px)",
          borderRadius: "9999px",
          top: "-40px",
          right: "8%",
        }}
      />

      {/* Dot grid — masked to top-center, fades downward */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(55,146,232,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 45% at 50% 0%, black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 55% 45% at 50% 0%, black 0%, transparent 100%)",
        }}
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
          className="font-sora font-bold text-white leading-tight tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.75rem)" }}
        >
          The job won&apos;t wait.
          <br />
          <span style={{ color: "#6EB0EE" }}>Neither should you.</span>
        </motion.h2>

        <motion.p
          suppressHydrationWarning
          initial={reduce ? {} : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          className="mt-5 text-white/70 text-lg leading-relaxed max-w-[42ch] mx-auto"
        >
          Four stages. One system. Follow the sequence and submit applications
          that don&apos;t get filtered out before a human sees them.
        </motion.p>

        <motion.div
          suppressHydrationWarning
          initial={reduce ? {} : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.3, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <button
            onClick={handleCheckout}
            className="bg-accent hover:bg-accent-hover text-white font-semibold px-14 py-5 rounded-xl transition-all duration-200 active:scale-[0.98] text-lg hover:shadow-[0_0_52px_rgba(55,146,232,0.42)]"
          >
            Get the System for $19
          </button>

          {/* Reassurance strip */}
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {reassurances.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-white/50 text-sm"
              >
                <IconCheck
                  size={13}
                  strokeWidth={2.5}
                  className="shrink-0"
                  style={{ color: "rgba(55,146,232,0.7)" }}
                />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p
          suppressHydrationWarning
          initial={reduce ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.55, ease: EASE }}
          className="mt-8 text-white/60 text-sm"
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
