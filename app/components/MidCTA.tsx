"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { handleCheckout } from "@/lib/checkout";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function MidCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduce = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative bg-[#070719] py-20 lg:py-24 overflow-hidden"
    >
      {/* Gradient: fades from HowItWorks white above into this dark section */}
      <div
        className="absolute top-0 left-0 right-0 h-14 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #ffffff, rgba(7,7,25,0))" }}
        aria-hidden="true"
      />
      {/* Gradient: fades from this section into WhatsIncluded white below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
        style={{ background: "linear-gradient(to top, #ffffff, rgba(7,7,25,0))" }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "900px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(55,146,232,0.065) 0%, transparent 68%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      />

      {/* Noise texture — matches site-wide treatment */}
      <div
        className="absolute inset-0 noise-texture pointer-events-none select-none"
        style={{ opacity: 0.025 }}
        aria-hidden="true"
      />

      {/* Background watermark — barely visible, adds depth */}
      <div
        className="absolute right-[-2%] top-1/2 -translate-y-1/2 select-none pointer-events-none font-sora font-black leading-none"
        style={{
          fontSize: "clamp(10rem, 22vw, 18rem)",
          color: "rgba(55,146,232,0.04)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        $19
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">

          {/* Left: headline + support */}
          <motion.div
            suppressHydrationWarning
            className="flex-1 flex flex-col gap-4"
            initial={reduce ? false : { opacity: 0, x: -22 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <h2
              className="font-sora font-black text-4xl lg:text-[3.25rem] text-white leading-[1.06] tracking-tight"
            >
              Seen enough?
            </h2>
            <p
              className="text-[17px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.44)", maxWidth: "40ch" }}
            >
              Four stages. One download. Follow the sequence and get your
              application past the filters.
            </p>
          </motion.div>

          {/* Vertical divider — desktop only, draws itself in */}
          <motion.div
            suppressHydrationWarning
            className="hidden lg:block flex-shrink-0"
            style={{
              marginInline: "3.5rem",
              width: "1px",
              height: "88px",
              background:
                "linear-gradient(to bottom, transparent, rgba(55,146,232,0.38) 50%, transparent)",
              transformOrigin: "top center",
            }}
            initial={reduce ? false : { scaleY: 0, opacity: 0 }}
            animate={inView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 0.52, delay: 0.18, ease: EASE }}
          />

          {/* Right: price + button */}
          <motion.div
            suppressHydrationWarning
            className="flex flex-col items-start lg:items-end gap-4"
            initial={reduce ? false : { opacity: 0, x: 22 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
          >
            {/* Price display — featured as a design element */}
            <div className="flex items-baseline gap-2.5">
              <motion.span
                suppressHydrationWarning
                className="font-sora font-black leading-none"
                style={{
                  fontSize: "clamp(3rem, 5vw, 3.75rem)",
                  color: "#3792E8",
                }}
                initial={reduce ? false : { opacity: 0, scale: 0.84 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.26, ease: EASE }}
              >
                $19
              </motion.span>
              <span
                className="text-sm font-medium tracking-wide"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                one-time
              </span>
            </div>

            {/* CTA button */}
            <motion.button
              suppressHydrationWarning
              onClick={handleCheckout}
              whileHover={
                reduce
                  ? {}
                  : {
                      scale: 1.025,
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
              className="text-white font-bold px-8 py-4 rounded-xl text-base whitespace-nowrap cursor-pointer"
              style={{
                background: "#3792E8",
                boxShadow: "0 0 32px rgba(55,146,232,0.28)",
              }}
            >
              Get the System
            </motion.button>

            {/* Reassurance */}
            <p
              className="text-[12px] text-left lg:text-right"
              style={{ color: "rgba(255,255,255,0.22)" }}
            >
              Instant download · 30-day money-back guarantee
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
