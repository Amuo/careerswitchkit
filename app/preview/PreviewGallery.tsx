"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import CheckoutButton from "./CheckoutButton";

const EASE = [0.16, 1, 0.3, 1] as const;

type ItemData = {
  id: string;
  name: string;
  format: string;
  description: string;
};

export type StageGroupData = {
  number: string;
  name: string;
  description: string;
  insight?: ReactNode;
  items: ItemData[];
};

function DocumentLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      {/* Title line */}
      <rect x="28" y="36" width="144" height="3" rx="1.5" fill="rgba(55,146,232,0.22)" />
      <rect x="28" y="46" width="96" height="2" rx="1" fill="rgba(55,146,232,0.12)" />
      {/* Section divider */}
      <rect x="28" y="60" width="144" height="1" rx="0.5" fill="rgba(255,255,255,0.10)" />
      {/* Body lines */}
      <rect x="28" y="72" width="144" height="2" rx="1" fill="rgba(255,255,255,0.09)" />
      <rect x="28" y="82" width="118" height="2" rx="1" fill="rgba(255,255,255,0.09)" />
      <rect x="28" y="92" width="136" height="2" rx="1" fill="rgba(255,255,255,0.09)" />
      <rect x="28" y="102" width="88" height="2" rx="1" fill="rgba(255,255,255,0.09)" />
      {/* Second paragraph */}
      <rect x="28" y="116" width="144" height="1.5" rx="0.75" fill="rgba(255,255,255,0.06)" />
      <rect x="28" y="126" width="110" height="1.5" rx="0.75" fill="rgba(255,255,255,0.06)" />
      <rect x="28" y="136" width="130" height="1.5" rx="0.75" fill="rgba(255,255,255,0.06)" />
      <rect x="28" y="146" width="76" height="1.5" rx="0.75" fill="rgba(255,255,255,0.06)" />
      {/* Faint third paragraph */}
      <rect x="28" y="160" width="144" height="1" rx="0.5" fill="rgba(255,255,255,0.04)" />
      <rect x="28" y="168" width="100" height="1" rx="0.5" fill="rgba(255,255,255,0.04)" />
    </svg>
  );
}

function PlaceholderZone({ format }: { format: string }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "1 / 1",
        background: "linear-gradient(145deg, #111135 0%, #0c0c2a 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: 0,
          width: "65%",
          height: "65%",
          background:
            "radial-gradient(ellipse at top right, rgba(55,146,232,0.11), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <DocumentLines />

      {/* Centered "screenshot coming" label */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <span
          className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 rounded"
          style={{
            color: "rgba(55,146,232,0.45)",
            background: "rgba(55,146,232,0.06)",
            border: "1px solid rgba(55,146,232,0.12)",
          }}
        >
          Screenshot coming
        </span>
      </div>

      <div className="absolute bottom-4 right-4">
        <span
          className="font-mono text-[10px] tracking-[0.18em] uppercase"
          style={{ color: "rgba(55,146,232,0.35)" }}
        >
          {format}
        </span>
      </div>
    </div>
  );
}

function PreviewCard({
  item,
  index,
  inView,
}: {
  item: ItemData;
  index: number;
  inView: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      suppressHydrationWarning
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: EASE }}
      whileHover={
        reduce
          ? undefined
          : {
              y: -4,
              transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
            }
      }
      className="rounded-xl overflow-hidden border border-white/[0.06] hover:border-accent/25 transition-colors duration-200"
      style={{ background: "#0c0c26" }}
    >
      <PlaceholderZone format={item.format} />

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <h3
            className="font-sora font-semibold text-base leading-snug"
            style={{ color: "rgba(255,255,255,0.90)" }}
          >
            {item.name}
          </h3>
          <span
            className="flex-shrink-0 font-mono text-[9px] tracking-[0.14em] uppercase px-2 py-0.5 rounded-full mt-0.5"
            style={{
              color: "rgba(55,146,232,0.80)",
              background: "rgba(55,146,232,0.08)",
              border: "1px solid rgba(55,146,232,0.14)",
            }}
          >
            {item.format}
          </span>
        </div>
        <p
          className="text-[13px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function StageSection({ stage }: { stage: StageGroupData }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.04 });
  const reduce = useReducedMotion();

  const isSingle = stage.items.length === 1;

  return (
    <section
      id={`stage-${stage.number}`}
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <motion.div
        ref={headerRef}
        suppressHydrationWarning
        initial={reduce ? false : { opacity: 0, x: -14 }}
        animate={headerInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, ease: EASE }}
        className="mb-10"
      >
        <p
          className="font-mono text-[10px] tracking-[0.18em] uppercase mb-1.5"
          style={{ color: "#3792E8" }}
        >
          Stage {stage.number}
        </p>
        <h2 className="font-sora font-bold text-2xl md:text-3xl text-white tracking-tight text-balance">
          {stage.name}
        </h2>
        {stage.description && (
          <p
            className="mt-2 text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.36)", maxWidth: "52ch" }}
          >
            {stage.description}
          </p>
        )}
        {stage.insight && (
          <div className="mt-6">{stage.insight}</div>
        )}
      </motion.div>

      <div
        ref={cardsRef}
        className={isSingle ? "max-w-[420px]" : "grid gap-4 sm:grid-cols-2"}
      >
        {stage.items.map((item, i) => (
          <PreviewCard
            key={item.id}
            item={item}
            index={i}
            inView={cardsInView}
          />
        ))}
      </div>
    </section>
  );
}

export default function PreviewGallery({
  stageGroups,
}: {
  stageGroups: StageGroupData[];
}) {
  return (
    <div className="max-w-4xl mx-auto">
      {stageGroups.map((stage) => (
        <div key={stage.number}>
          <StageSection stage={stage} />

          {stage.number === "02" && (
            <div
              className="py-10 px-4 sm:px-6 lg:px-8 text-center"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              <p
                className="font-sora text-sm font-medium mb-5"
                style={{ color: "rgba(255,255,255,0.30)" }}
              >
                Two more stages to go. Get the full system now.
              </p>
              <CheckoutButton />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
