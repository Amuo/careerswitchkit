"use client";

import { motion, useReducedMotion } from "motion/react";
import { handleCheckout } from "@/lib/checkout";
import { IconCheck } from "@tabler/icons-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const reassurances = [
  "Instant download",
  "No subscription",
  "Works for any field",
];

export default function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="max-w-7xl mx-auto px-6 py-40 text-center relative overflow-hidden rounded-3xl">
      {/* Aurora fill */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(160,201,255,0.07)" }}
        aria-hidden="true"
      />

      {/* Radial glow — top centre, kept subtle */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-56 blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(160,201,255,0.14) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Gradient top border — peaks blue at centre */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(160,201,255,0.6) 50%, rgba(255,255,255,0.1) 75%, transparent 100%)",
        }}
      />

      {/* Dot grid — masked to upper half, fades down */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(160,201,255,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 0%, black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 0%, black 0%, transparent 100%)",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ filter: "url(#c3-noise)" }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Heading */}
        <motion.h2
          suppressHydrationWarning
          className="font-geist font-black mb-8 leading-none"
          style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
          initial={reduce ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          Stop wishing.
          <br />
          <span style={{ color: "#a0c9ff" }}>Start applying.</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          suppressHydrationWarning
          className="text-xl max-w-xl mx-auto mb-12 text-pretty"
          style={{ color: "#c0c7d3" }}
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.15, ease: EASE }}
        >
          Your resume is the only thing between you and the role.{" "}
          <span style={{ whiteSpace: "nowrap" }}>Fix it today.</span>
        </motion.p>

        {/* CTA group */}
        <motion.div
          suppressHydrationWarning
          className="flex flex-col items-center gap-5"
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.28, ease: EASE }}
        >
          <button
            onClick={handleCheckout}
            className="group relative w-full sm:w-auto px-14 py-6 bg-white font-bold rounded-2xl transition-all duration-300 text-xl overflow-hidden inline-flex items-center justify-center gap-2 active:scale-[0.98] hover:scale-[1.03] hover:shadow-[0_0_64px_rgba(160,201,255,0.35)]"
            style={{ color: "#000" }}
          >
            {/* Shimmer sweep */}
            <div
              className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_ease-in-out] pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              }}
            />
            <span className="relative z-10">Claim Lifetime Access — $37</span>
          </button>

          {/* Reassurance strip */}
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {reassurances.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-sm"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <IconCheck
                  size={13}
                  strokeWidth={2.5}
                  style={{ color: "rgba(160,201,255,0.8)", flexShrink: 0 }}
                />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
