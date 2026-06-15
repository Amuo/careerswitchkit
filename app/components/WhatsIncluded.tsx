"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";

const stages = [
  {
    number: "01",
    title: "Map Your Transfer",
    description:
      "Understand exactly how your background translates — before you write a single word.",
    files: ["START HERE Guide"],
  },
  {
    number: "02",
    title: "Build Your Materials",
    description:
      "Create a resume and cover letter that frames your experience for a field you haven't worked in yet.",
    files: [
      "CV Template: One-Page",
      "CV Template: Two-Page",
      "CV Template: Hybrid",
      "Cover Letter Templates",
    ],
  },
  {
    number: "03",
    title: "Optimize and Score",
    description:
      "Run every application through the system before you submit — so nothing gets filtered out.",
    files: ["AI Prompt Pack — 50 prompts", "ATS Checklist"],
  },
  {
    number: "04",
    title: "Apply With Proof",
    description:
      "See the full system applied to a real career switch, start to finish.",
    files: ["Completed Example: Sara Mehić, Retail → Operations"],
  },
];

const stageStyles = [
  {
    bg: "#FFFFFF",
    labelColor: "#3792E8",
    titleColor: "#070719",
    descColor: "rgba(7,7,25,0.5)",
    ghostColor: "rgba(55,146,232,0.07)",
    pillBg: "rgba(55,146,232,0.07)",
    pillBorder: "rgba(55,146,232,0.2)",
    pillText: "#185FA5",
    divider: "1px solid rgba(7,7,25,0.06)",
    arrowColor: "#3792E8",
  },
  {
    bg: "#F0F4FA",
    labelColor: "#185FA5",
    titleColor: "#042C53",
    descColor: "rgba(4,44,83,0.55)",
    ghostColor: "rgba(24,95,165,0.09)",
    pillBg: "rgba(24,95,165,0.1)",
    pillBorder: "rgba(24,95,165,0.22)",
    pillText: "#0C447C",
    divider: "1px solid rgba(4,44,83,0.08)",
    arrowColor: "#185FA5",
  },
  {
    bg: "#10102D",
    labelColor: "#3792E8",
    titleColor: "#FFFFFF",
    descColor: "rgba(255,255,255,0.45)",
    ghostColor: "rgba(55,146,232,0.07)",
    pillBg: "rgba(55,146,232,0.08)",
    pillBorder: "rgba(55,146,232,0.22)",
    pillText: "#3792E8",
    divider: "1px solid rgba(55,146,232,0.1)",
    arrowColor: "#3792E8",
  },
  {
    bg: "#070719",
    labelColor: "#3792E8",
    titleColor: "#FFFFFF",
    descColor: "rgba(255,255,255,0.4)",
    ghostColor: "rgba(55,146,232,0.06)",
    pillBg: "rgba(55,146,232,0.07)",
    pillBorder: "rgba(55,146,232,0.18)",
    pillText: "#3792E8",
    divider: null,
    arrowColor: "#3792E8",
  },
];

const STAGE_EASE = [0.16, 1, 0.3, 1] as const;
const STAGGER_DELAYS = [0, 0.08, 0.16, 0.24] as const;

export default function WhatsIncluded() {
  const reduce = useReducedMotion();

  return (
    <section id="included">

      {/* Section header — dark navy band */}
      <div className="bg-[#070719] px-4 sm:px-8 lg:px-16 pt-14 pb-12">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-[#3792E8] mb-3">
            THE SYSTEM
          </p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-white tracking-tight">
            Four stages. One career switch.
          </h2>
          <p className="mt-3 text-lg max-w-[52ch]" style={{ color: "rgba(255,255,255,0.45)" }}>
            Most career switchers fail because they don&apos;t have a process.
            This is the process.
          </p>
        </Reveal>
      </div>

      {/* Stage bands */}
      {stages.map((stage, i) => {
        const s = stageStyles[i];
        return (
          <div key={stage.number}>
              {/* Background band is always visible — motion.div only wraps the content grid */}
              <div
                className="group relative overflow-hidden px-4 sm:px-8 lg:px-16 py-12"
                style={{ background: s.bg }}
              >
                {/* Left hover accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300 origin-center"
                  style={{ background: "#3792E8" }}
                  aria-hidden="true"
                />

                {/* Ghost watermark number */}
                <span
                  className="absolute right-0 top-1/2 -translate-y-1/2 font-sora font-black select-none pointer-events-none leading-none"
                  style={{
                    fontSize: "clamp(120px, 20vw, 240px)",
                    color: s.ghostColor,
                  }}
                  aria-hidden="true"
                >
                  {stage.number}
                </span>

                {/* 3-column grid — this is what animates in */}
                <motion.div
                  suppressHydrationWarning
                  initial={reduce ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: STAGGER_DELAYS[i], ease: STAGE_EASE }}
                  className="relative z-10 grid grid-cols-1 lg:grid-cols-[120px_1fr_auto] gap-4 lg:gap-8 items-center"
                >

                  {/* Left col: stage label */}
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: s.labelColor }}
                    >
                      STAGE {stage.number}
                    </p>
                  </div>

                  {/* Middle col: title, description, pills */}
                  <div>
                    <h3
                      className="font-sora text-2xl lg:text-3xl font-bold mb-3"
                      style={{ color: s.titleColor }}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className="text-sm mb-6 max-w-[52ch] leading-relaxed"
                      style={{ color: s.descColor }}
                    >
                      {stage.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stage.files.map((file) => (
                        <span
                          key={file}
                          className="rounded-full px-4 py-1.5 text-xs font-medium border"
                          style={{
                            background: s.pillBg,
                            borderColor: s.pillBorder,
                            color: s.pillText,
                          }}
                        >
                          {file}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right col: arrow — visible desktop only */}
                  <div className="hidden lg:flex items-center justify-end pr-2">
                    <span
                      className="text-2xl transition-transform duration-[250ms] ease-out group-hover:translate-x-1"
                      style={{ color: s.arrowColor, opacity: 0.35 }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                </motion.div>
              </div>

          </div>
        );
      })}

    </section>
  );
}
