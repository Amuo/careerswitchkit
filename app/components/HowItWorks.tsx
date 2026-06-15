"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

// ── Step 1 Visual: Transfer Map ───────────────────────────────────────

const transferRows = [
  { from: "Retail manager", to: "Operations coordinator" },
  { from: "Customer escalation", to: "Process improvement" },
  { from: "Team scheduling", to: "Resource planning" },
];

function TransferMapCard({ active }: { active: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div
      className="rounded-xl p-6 lg:p-7 flex flex-col gap-5"
      style={{
        background: "linear-gradient(145deg, #0f0f2e 0%, #070719 100%)",
        border: "1px solid rgba(55,146,232,0.20)",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#3792E8" }}
          aria-hidden="true"
        />
        <p
          className="font-mono text-[10px] uppercase tracking-[0.18em]"
          style={{ color: "#3792E8" }}
        >
          Transfer Map · Stage 1
        </p>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[1fr_28px_1fr] gap-x-3">
        <p
          className="text-[10px] font-semibold uppercase tracking-wider text-right"
          style={{ color: "rgba(255,255,255,0.22)" }}
        >
          Background
        </p>
        <span />
        <p
          className="text-[10px] font-semibold uppercase tracking-wider"
          style={{ color: "rgba(255,255,255,0.22)" }}
        >
          Target role
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        {transferRows.map((row, i) => (
          <motion.div
            key={row.from}
            suppressHydrationWarning
            className="grid grid-cols-[1fr_28px_1fr] gap-x-3 items-center"
            initial={reduce ? false : { opacity: 0 }}
            animate={active ? { opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.2 + i * 0.13, ease: EASE }}
          >
            <span
              className="text-[13px] text-right px-3 py-2 rounded-lg leading-snug"
              style={{
                color: "rgba(255,255,255,0.45)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {row.from}
            </span>
            <span
              className="text-center text-base select-none"
              style={{ color: "rgba(55,146,232,0.70)" }}
              aria-hidden="true"
            >
              →
            </span>
            <span
              className="text-[13px] font-medium px-3 py-2 rounded-lg leading-snug"
              style={{
                color: "rgba(255,255,255,0.88)",
                background: "rgba(55,146,232,0.10)",
                border: "1px solid rgba(55,146,232,0.18)",
              }}
            >
              {row.to}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Step 2 Visual: Template Picker ────────────────────────────────────

const templates = [
  {
    label: "One-Page",
    note: "Standard. Under 8 years.",
    lines: [100, 70, 90, 80, 60, 90, 75],
  },
  {
    label: "Two-Page",
    note: "Extended. 8+ years.",
    lines: [100, 70, 90, 80, 60, 90, 75, 55, 85, 65],
  },
  {
    label: "Hybrid",
    note: "Skills-forward layout.",
    lines: [100, 55, 100, 70, 90, 80],
    twoCol: true,
  },
];

function TemplatePickerCard({ active }: { active: boolean }) {
  const [selected, setSelected] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active || reduce) return;
    const id = setInterval(
      () => setSelected((p) => (p + 1) % templates.length),
      2200
    );
    return () => clearInterval(id);
  }, [active, reduce]);

  const tpl = templates[selected];

  return (
    <div
      className="rounded-xl p-6 lg:p-7 flex flex-col gap-5"
      style={{
        background: "linear-gradient(145deg, #0f0f2e 0%, #070719 100%)",
        border: "1px solid rgba(55,146,232,0.20)",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#3792E8" }}
          aria-hidden="true"
        />
        <p
          className="font-mono text-[10px] uppercase tracking-[0.18em]"
          style={{ color: "#3792E8" }}
        >
          Choose Your Format · Stage 2
        </p>
      </div>

      <motion.div
        suppressHydrationWarning
        initial={reduce ? false : { opacity: 0, y: 6 }}
        animate={active ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
        className="flex gap-2 flex-wrap"
      >
        {templates.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setSelected(i)}
            className="px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200"
            style={{
              background:
                selected === i
                  ? "rgba(55,146,232,0.14)"
                  : "rgba(255,255,255,0.04)",
              border:
                selected === i
                  ? "1px solid rgba(55,146,232,0.38)"
                  : "1px solid rgba(255,255,255,0.07)",
              color:
                selected === i ? "#3792E8" : "rgba(255,255,255,0.36)",
            }}
          >
            {t.label}
          </button>
        ))}
      </motion.div>

      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        className="pt-4"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            suppressHydrationWarning
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <p
              className="text-[11px] mb-3"
              style={{ color: "rgba(55,146,232,0.55)" }}
            >
              {tpl.note}
            </p>
            {tpl.twoCol ? (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: "80%",
                      background: "rgba(55,146,232,0.22)",
                    }}
                  />
                  {[60, 75, 50, 70].map((w, j) => (
                    <div
                      key={j}
                      className="h-1.5 rounded-full"
                      style={{
                        width: `${w}%`,
                        background: "rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {tpl.lines.map((w, j) => (
                    <div
                      key={j}
                      className="h-1.5 rounded-full"
                      style={{
                        width: `${w}%`,
                        background: "rgba(255,255,255,0.07)",
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {tpl.lines.map((w, j) => (
                  <div
                    key={j}
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${w}%`,
                      background:
                        j === 0
                          ? "rgba(55,146,232,0.22)"
                          : "rgba(255,255,255,0.07)",
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── Step 3 Visual: ATS Score ──────────────────────────────────────────

const checkItems = [
  "Keywords matched to job post",
  "Formatting passes ATS scan",
  "No tables or graphics",
  "Achievements quantified",
];

function ATSScoreCard({ active }: { active: boolean }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    if (reduce) {
      setCount(87);
      return;
    }
    const delay = setTimeout(() => {
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * 87));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, 500);
    return () => clearTimeout(delay);
  }, [active, reduce]);

  return (
    <div
      className="rounded-xl p-6 lg:p-7 flex flex-col gap-5"
      style={{
        background: "linear-gradient(145deg, #0f0f2e 0%, #070719 100%)",
        border: "1px solid rgba(55,146,232,0.20)",
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#3792E8" }}
          aria-hidden="true"
        />
        <p
          className="font-mono text-[10px] uppercase tracking-[0.18em]"
          style={{ color: "#3792E8" }}
        >
          ATS Check · Stage 3
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        {checkItems.map((item, i) => (
          <motion.div
            key={item}
            suppressHydrationWarning
            className="flex items-center gap-3"
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={active ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.1, ease: EASE }}
          >
            <motion.span
              suppressHydrationWarning
              initial={reduce ? false : { scale: 0.5, opacity: 0 }}
              animate={active ? { scale: 1, opacity: 1 } : {}}
              transition={{
                duration: 0.32,
                delay: 0.28 + i * 0.1,
                ease: EASE,
              }}
              className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{
                background: "rgba(34,197,94,0.13)",
                border: "1px solid rgba(34,197,94,0.28)",
              }}
            >
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 3.5L3.5 6L8 1"
                  stroke="#22c55e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
            <span
              className="text-[13px] leading-snug"
              style={{ color: "rgba(255,255,255,0.62)" }}
            >
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        suppressHydrationWarning
        initial={reduce ? false : { opacity: 0 }}
        animate={active ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
        className="flex items-end justify-between pt-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.28)" }}>
            ATS score
          </span>
          <span className="text-[11px]" style={{ color: "rgba(55,146,232,0.55)" }}>
            Above the 65-pt filter line
          </span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span
            className="font-sora font-black text-5xl leading-none tabular-nums"
            style={{ color: "#3792E8" }}
          >
            {count}
          </span>
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.28)" }}>
            / 100
          </span>
        </div>
      </motion.div>
    </div>
  );
}

// ── Step data ──────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Start With the Guide",
    description:
      "Open the START HERE doc first. Always. It maps your background to the right format and tells you exactly what to build and in what order.",
    insight:
      "Most people skip this. That's why their applications feel scattered.",
  },
  {
    number: "02",
    title: "Build and Optimize",
    description:
      "Fill your chosen CV template, write your cover letter, then run the AI prompts to tailor every line to the specific job post.",
    insight:
      "The prompts do the translation work, turning your background into the language hiring managers in your target field understand.",
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

function StepVisual({
  index,
  active,
}: {
  index: number;
  active: boolean;
}) {
  if (index === 0) return <TransferMapCard active={active} />;
  if (index === 1) return <TemplatePickerCard active={active} />;
  return <ATSScoreCard active={active} />;
}

function StepRow({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });
  const reduce = useReducedMotion();
  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} className="relative">
      {/* Ghost watermark number */}
      <div
        className="absolute select-none pointer-events-none"
        style={{
          fontSize: "clamp(7rem, 16vw, 13rem)",
          fontWeight: 900,
          fontFamily: "var(--font-sora, sans-serif)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(7,7,25,0.055)",
          lineHeight: 1,
          top: "-0.15em",
          right: isReversed ? "auto" : "-0.05em",
          left: isReversed ? "-0.05em" : "auto",
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {step.number}
      </div>

      <div
        className={`relative z-10 flex flex-col lg:items-center gap-10 lg:gap-16 ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* ── Copy ── */}
        <motion.div
          suppressHydrationWarning
          initial={reduce ? false : { opacity: 0, x: isReversed ? 28 : -28 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE }}
          className="flex-1 flex flex-col gap-5 lg:max-w-[46%]"
        >
          <span
            className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold"
            style={{ color: "#3792E8" }}
          >
            Step {step.number}
          </span>

          <h3
            className="font-sora text-3xl lg:text-[2.4rem] font-bold tracking-tight leading-tight"
            style={{ color: "#070719" }}
          >
            {step.title}
          </h3>

          <p
            className="text-[17px] leading-relaxed"
            style={{ color: "rgba(7,7,25,0.54)" }}
          >
            {step.description}
          </p>

          <p
            className="text-[15px] font-semibold leading-relaxed"
            style={{ color: "#3792E8" }}
          >
            {step.insight}
          </p>
        </motion.div>

        {/* ── Visual ── */}
        <motion.div
          suppressHydrationWarning
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.14, ease: EASE }}
          className="flex-1 w-full"
        >
          <StepVisual index={index} active={inView} />
        </motion.div>
      </div>

      {/* Connector between steps */}
      {!isLast && (
        <div className="relative flex items-center justify-center my-14 lg:my-18">
          <motion.div
            suppressHydrationWarning
            initial={reduce ? false : { scaleY: 0, opacity: 0 }}
            animate={inView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.5, ease: EASE }}
            style={{
              width: "1px",
              height: "52px",
              background:
                "linear-gradient(to bottom, rgba(55,146,232,0.40), rgba(55,146,232,0.04))",
              transformOrigin: "top",
            }}
          />
        </div>
      )}
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────

export default function HowItWorks() {
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
        <motion.div
          suppressHydrationWarning
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-20 lg:mb-24"
        >
          <h2
            className="font-sora text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#070719" }}
          >
            How it works.
          </h2>
          <p
            className="mt-3 text-lg max-w-[44ch]"
            style={{ color: "rgba(7,7,25,0.50)" }}
          >
            Download once. Follow the sequence. Apply with confidence.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <StepRow
              key={step.number}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
