"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Start With the Guide",
    description:
      "Open the START HERE doc first — always. It maps your background to the right format and tells you exactly what to build and in what order.",
    insight:
      "Most people skip this. That's why their applications feel scattered.",
  },
  {
    number: "02",
    title: "Build and Optimize",
    description:
      "Fill your chosen CV template, write your cover letter, then run the AI prompts to tailor every line to the specific job post.",
    insight:
      "The prompts do the translation work — turning your background into language hiring managers in your target field understand.",
  },
  {
    number: "03",
    title: "Score, Then Submit",
    description:
      "Before every application, run the ATS checklist. Fix any flags. Then submit knowing your resume will clear automated filters and reach a human.",
    insight:
      "Most applicants skip this step. The ones who don't are the ones who get through.",
  },
];

export default function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stepsRef, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="relative bg-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 noise-texture pointer-events-none select-none"
        style={{ opacity: 0.025 }}
        aria-hidden="true"
      />

      {/* Gradient fade from Stage 04 dark */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #070719, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="mb-16 lg:mb-20">
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#070719] tracking-tight">
            How it works.
          </h2>
          <p
            className="mt-3 text-lg max-w-[44ch]"
            style={{ color: "rgba(7,7,25,0.50)" }}
          >
            Download once. Follow the sequence. Apply with confidence.
          </p>
        </Reveal>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col md:pr-10 lg:pr-16"
            >
              {/* Connecting rule between steps — desktop only */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute right-0 top-[26px] w-px"
                  style={{
                    height: "40px",
                    background:
                      "linear-gradient(to bottom, rgba(55,146,232,0.30), transparent)",
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Step number */}
              <motion.p
                suppressHydrationWarning
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                className="font-sora font-black leading-none tabular-nums mb-6"
                style={{
                  fontSize: "clamp(2.75rem, 5vw, 3.75rem)",
                  color: "#3792E8",
                }}
                aria-hidden="true"
              >
                {step.number}
              </motion.p>

              {/* Content */}
              <motion.div
                suppressHydrationWarning
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: EASE }}
                className="flex flex-col gap-3 flex-1"
              >
                <h3
                  className="font-sora text-2xl font-bold tracking-tight"
                  style={{ color: "#070719" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(7,7,25,0.55)" }}
                >
                  {step.description}
                </p>
                <p
                  className="text-sm font-semibold leading-relaxed"
                  style={{ color: "#3792E8" }}
                >
                  {step.insight}
                </p>
              </motion.div>

              {/* Mobile divider between steps */}
              {i < steps.length - 1 && (
                <div
                  className="mt-12 mb-12 md:hidden h-px"
                  style={{ background: "rgba(7,7,25,0.08)" }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
