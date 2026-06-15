"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const stages = [
  {
    number: "01",
    title: "Map Your Transfer",
    description:
      "Most applicants go straight to the template. That's why they sound generic. Map your background against your target role first — then write.",
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
      "See every stage applied to a real career switch: Sara Mehić, retail floor manager to operations coordinator. Blank page to submitted application.",
    files: ["Completed Example: Sara Mehić, Retail → Operations"],
  },
];

const stageStyles = [
  // Stage 01 — white
  {
    bg: "#FFFFFF",
    labelColor: "#3792E8",
    titleColor: "#070719",
    descColor: "rgba(7,7,25,0.5)",
    ghostColor: "rgba(55,146,232,0.06)",
    pillBg: "rgba(55,146,232,0.07)",
    pillBorder: "rgba(55,146,232,0.2)",
    pillText: "#185FA5",
  },
  // Stage 02 — dark navy (was light; swapped for contrast)
  {
    bg: "#10102D",
    labelColor: "#3792E8",
    titleColor: "#FFFFFF",
    descColor: "rgba(255,255,255,0.45)",
    ghostColor: "rgba(55,146,232,0.065)",
    pillBg: "rgba(55,146,232,0.08)",
    pillBorder: "rgba(55,146,232,0.22)",
    pillText: "#3792E8",
  },
  // Stage 03 — light grey-blue (was dark; swapped)
  {
    bg: "#F0F4FA",
    labelColor: "#185FA5",
    titleColor: "#042C53",
    descColor: "rgba(4,44,83,0.55)",
    ghostColor: "rgba(24,95,165,0.075)",
    pillBg: "rgba(24,95,165,0.1)",
    pillBorder: "rgba(24,95,165,0.22)",
    pillText: "#0C447C",
  },
  // Stage 04 — darkest
  {
    bg: "#070719",
    labelColor: "#3792E8",
    titleColor: "#FFFFFF",
    descColor: "rgba(255,255,255,0.4)",
    ghostColor: "rgba(55,146,232,0.05)",
    pillBg: "rgba(55,146,232,0.07)",
    pillBorder: "rgba(55,146,232,0.18)",
    pillText: "#3792E8",
  },
];

// ── Stage-specific right-column visuals ────────────────────────────────────

function Stage01Visual() {
  const pairs = [
    ["Retail manager", "Operations coordinator"],
    ["Customer escalation", "Process improvement"],
    ["Team scheduling", "Resource planning"],
  ];
  return (
    <div>
      <p
        className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
        style={{ color: "rgba(55,146,232,0.65)" }}
      >
        Transfer map
      </p>
      <div className="flex flex-col gap-4">
        {pairs.map(([from, to], i) => (
          <div key={i} className="flex flex-col gap-0.5">
            <span
              className="text-sm"
              style={{
                color: "rgba(7,7,25,0.30)",
                textDecoration: "line-through",
                textDecorationColor: "rgba(7,7,25,0.12)",
              }}
            >
              {from}
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: "#3792E8" }}
              aria-hidden="true"
            >
              ↓
            </span>
            <span
              className="text-sm font-semibold"
              style={{ color: "#070719" }}
            >
              {to}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stage02Visual() {
  const formats = [
    { name: "One-Page", desc: "Standard. Under 8 years." },
    { name: "Two-Page", desc: "Extended. 8+ years." },
    { name: "Hybrid", desc: "Skills-first. Non-linear career." },
  ];
  return (
    <div>
      <p
        className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
        style={{ color: "rgba(55,146,232,0.70)" }}
      >
        Choose your format
      </p>
      <div className="flex flex-col gap-4">
        {formats.map(({ name, desc }) => (
          <div key={name} className="flex flex-col gap-0.5">
            <span
              className="text-sm font-bold"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              {name}
            </span>
            <span
              className="text-sm leading-snug"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              {desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stage03Visual() {
  const categories = [
    "Foundation",
    "Resume Build",
    "ATS Scoring",
    "Cover Letter",
    "LinkedIn",
    "Interview Prep",
    "Networking",
    "Final Review",
  ];
  return (
    <div>
      <p
        className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
        style={{ color: "#185FA5" }}
      >
        8 prompt categories
      </p>
      <div className="grid grid-cols-2 gap-1.5">
        {categories.map((cat) => (
          <span
            key={cat}
            className="text-xs font-medium px-2.5 py-2 rounded-md text-center"
            style={{
              color: "#0C447C",
              background: "rgba(24,95,165,0.08)",
              border: "1px solid rgba(24,95,165,0.20)",
            }}
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}

function Stage04Visual() {
  return (
    <div>
      <p
        className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
        style={{ color: "#3792E8" }}
      >
        Completed example
      </p>
      <div className="flex flex-col gap-1.5">
        <span
          className="text-base font-semibold"
          style={{ color: "rgba(255,255,255,0.50)" }}
        >
          Sara Mehić
        </span>
        <div className="flex flex-col gap-1.5 mt-2 font-mono text-sm">
          <span
            style={{
              color: "rgba(255,255,255,0.25)",
              textDecoration: "line-through",
              textDecorationColor: "rgba(255,255,255,0.12)",
            }}
          >
            Retail Floor Manager
          </span>
          <span
            className="text-xs font-medium"
            style={{ color: "rgba(55,146,232,0.65)" }}
            aria-hidden="true"
          >
            ↓ complete application on file
          </span>
          <span
            className="font-semibold"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Operations Coordinator
          </span>
        </div>
      </div>
    </div>
  );
}

const stageVisuals = [
  <Stage01Visual key="v1" />,
  <Stage02Visual key="v2" />,
  <Stage03Visual key="v3" />,
  <Stage04Visual key="v4" />,
];

// ── Component ──────────────────────────────────────────────────────────────

export default function WhatsIncluded() {
  const reduce = useReducedMotion();

  return (
    <section id="included">

      {/* ── Section header ── */}
      <div className="bg-[#F0F4FA] pt-14 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#070719] tracking-tight">
              Four stages. One career switch.
            </h2>
            <p
              className="mt-3 text-lg max-w-[52ch]"
              style={{ color: "rgba(7,7,25,0.50)" }}
            >
              Most career switchers fail because they don&apos;t have a process.
              This is the process.
            </p>
          </Reveal>

          {/* Stage sequence indicator */}
          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap md:flex-nowrap items-center">
              {stages.map((stage, i) => (
                <div key={stage.number} className="flex items-center">
                  <div
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg"
                    style={{
                      background: "rgba(55,146,232,0.09)",
                      border: "1px solid rgba(55,146,232,0.22)",
                    }}
                  >
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: "#3792E8" }}
                    >
                      {stage.number}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "rgba(7,7,25,0.60)" }}
                    >
                      {stage.title}
                    </span>
                  </div>
                  {i < stages.length - 1 && (
                    <div
                      className="w-5 h-px hidden md:block flex-shrink-0"
                      style={{ background: "rgba(55,146,232,0.28)" }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Stage bands ── */}
      {stages.map((stage, i) => {
        const s = stageStyles[i];
        return (
          <div key={stage.number} className="relative overflow-hidden" style={{ background: s.bg }}>

            {/* Ghost watermark — bleeds to viewport right edge */}
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 font-sora font-black select-none pointer-events-none leading-none"
              style={{
                fontSize: "clamp(120px, 20vw, 230px)",
                color: s.ghostColor,
              }}
              aria-hidden="true"
            >
              {stage.number}
            </span>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 lg:gap-16 items-start">

                {/* LEFT: Stage info */}
                <motion.div
                  suppressHydrationWarning
                  initial={reduce ? {} : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-[0.18em] mb-4"
                    style={{ color: s.labelColor }}
                  >
                    Stage {stage.number}
                  </p>
                  <h3
                    className="font-sora text-3xl lg:text-4xl font-bold mb-4 tracking-tight"
                    style={{ color: s.titleColor }}
                  >
                    {stage.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed max-w-[48ch] mb-7"
                    style={{ color: s.descColor }}
                  >
                    {stage.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stage.files.map((file) => (
                      <span
                        key={file}
                        className="rounded-full px-5 py-2 text-sm font-medium border"
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
                </motion.div>

                {/* RIGHT: Stage visual (desktop only) */}
                <motion.div
                  suppressHydrationWarning
                  initial={reduce ? {} : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
                  className="hidden lg:block"
                >
                  {stageVisuals[i]}
                </motion.div>

              </div>
            </div>
          </div>
        );
      })}

    </section>
  );
}
