"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import CheckoutButton from "./CheckoutButton";

const EASE = [0.16, 1, 0.3, 1] as const;

// ── Types ───────────────────────────────────────────────────────────────────

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

type StageTheme = {
  sectionBg: string;
  isDark: boolean;
  topGradient: string;
  cardBg: string;
  cardBorder: string;
  cardHoverBorder: string;
  cardHoverShadow: string;
  heading: string;
  body: string;
  label: string;
  ghost: string;
  docHi: string;
  docLo: string;
  placeholderBg: string;
  badgeColor: string;
  badgeBg: string;
  badgeBorder: string;
  formatColor: string;
};

// ── Stage design tokens ──────────────────────────────────────────────────────

const themes: StageTheme[] = [
  // 01 — light blue-grey · hero above is #070719
  {
    sectionBg: "#F0F4FA",
    isDark: false,
    topGradient: "linear-gradient(to bottom, #070719, rgba(240,244,250,0))",
    cardBg: "#FFFFFF",
    cardBorder: "rgba(7,7,25,0.08)",
    cardHoverBorder: "rgba(55,146,232,0.30)",
    cardHoverShadow: "0 10px 32px rgba(7,7,25,0.10)",
    heading: "#070719",
    body: "rgba(7,7,25,0.52)",
    label: "#3792E8",
    ghost: "rgba(55,146,232,0.075)",
    docHi: "rgba(55,146,232,0.22)",
    docLo: "rgba(7,7,25,0.07)",
    placeholderBg: "linear-gradient(145deg, #EEF2FA 0%, #E4EAF5 100%)",
    badgeColor: "rgba(7,7,25,0.40)",
    badgeBg: "rgba(7,7,25,0.04)",
    badgeBorder: "rgba(7,7,25,0.10)",
    formatColor: "rgba(7,7,25,0.25)",
  },
  // 02 — near-black · stage 01 (#F0F4FA) above
  {
    sectionBg: "#070719",
    isDark: true,
    topGradient: "linear-gradient(to bottom, #F0F4FA, rgba(7,7,25,0))",
    cardBg: "#0c0c26",
    cardBorder: "rgba(255,255,255,0.06)",
    cardHoverBorder: "rgba(55,146,232,0.30)",
    cardHoverShadow: "0 10px 32px rgba(55,146,232,0.10)",
    heading: "#FFFFFF",
    body: "rgba(255,255,255,0.42)",
    label: "#3792E8",
    ghost: "rgba(55,146,232,0.055)",
    docHi: "rgba(55,146,232,0.22)",
    docLo: "rgba(255,255,255,0.08)",
    placeholderBg: "linear-gradient(145deg, #111135 0%, #0c0c2a 100%)",
    badgeColor: "rgba(55,146,232,0.80)",
    badgeBg: "rgba(55,146,232,0.08)",
    badgeBorder: "rgba(55,146,232,0.14)",
    formatColor: "rgba(55,146,232,0.35)",
  },
  // 03 — white · stage 02 (#070719) above
  {
    sectionBg: "#FFFFFF",
    isDark: false,
    topGradient: "linear-gradient(to bottom, #070719, rgba(255,255,255,0))",
    cardBg: "#F5F8FC",
    cardBorder: "rgba(7,7,25,0.07)",
    cardHoverBorder: "rgba(24,95,165,0.30)",
    cardHoverShadow: "0 10px 32px rgba(4,44,83,0.10)",
    heading: "#042C53",
    body: "rgba(4,44,83,0.52)",
    label: "#185FA5",
    ghost: "rgba(24,95,165,0.06)",
    docHi: "rgba(24,95,165,0.18)",
    docLo: "rgba(4,44,83,0.06)",
    placeholderBg: "linear-gradient(145deg, #EAF0FA 0%, #E0EAF5 100%)",
    badgeColor: "rgba(4,44,83,0.45)",
    badgeBg: "rgba(4,44,83,0.04)",
    badgeBorder: "rgba(4,44,83,0.10)",
    formatColor: "rgba(4,44,83,0.28)",
  },
  // 04 — dark navy · stage 03 (#FFFFFF) above
  {
    sectionBg: "#10102D",
    isDark: true,
    topGradient: "linear-gradient(to bottom, #FFFFFF, rgba(16,16,45,0))",
    cardBg: "#0a0a22",
    cardBorder: "rgba(255,255,255,0.06)",
    cardHoverBorder: "rgba(55,146,232,0.30)",
    cardHoverShadow: "0 10px 32px rgba(55,146,232,0.10)",
    heading: "#FFFFFF",
    body: "rgba(255,255,255,0.40)",
    label: "#3792E8",
    ghost: "rgba(55,146,232,0.05)",
    docHi: "rgba(55,146,232,0.20)",
    docLo: "rgba(255,255,255,0.07)",
    placeholderBg: "linear-gradient(145deg, #111130 0%, #0c0c28 100%)",
    badgeColor: "rgba(55,146,232,0.80)",
    badgeBg: "rgba(55,146,232,0.08)",
    badgeBorder: "rgba(55,146,232,0.14)",
    formatColor: "rgba(55,146,232,0.35)",
  },
];

// ── Document placeholder ─────────────────────────────────────────────────────

function DocumentLines({ hi, lo }: { hi: string; lo: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <rect x="28" y="36" width="144" height="3" rx="1.5" fill={hi} />
      <rect x="28" y="46" width="96" height="2" rx="1" fill={hi} opacity="0.55" />
      <rect x="28" y="60" width="144" height="1" rx="0.5" fill={lo} opacity="1.4" />
      <rect x="28" y="72" width="144" height="2" rx="1" fill={lo} />
      <rect x="28" y="82" width="118" height="2" rx="1" fill={lo} />
      <rect x="28" y="92" width="136" height="2" rx="1" fill={lo} />
      <rect x="28" y="102" width="88" height="2" rx="1" fill={lo} />
      <rect x="28" y="116" width="144" height="1.5" rx="0.75" fill={lo} opacity="0.65" />
      <rect x="28" y="126" width="110" height="1.5" rx="0.75" fill={lo} opacity="0.65" />
      <rect x="28" y="136" width="130" height="1.5" rx="0.75" fill={lo} opacity="0.65" />
      <rect x="28" y="146" width="76" height="1.5" rx="0.75" fill={lo} opacity="0.65" />
      <rect x="28" y="160" width="144" height="1" rx="0.5" fill={lo} opacity="0.35" />
      <rect x="28" y="168" width="100" height="1" rx="0.5" fill={lo} opacity="0.35" />
    </svg>
  );
}

function PlaceholderZone({ format, theme }: { format: string; theme: StageTheme }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "1 / 1",
        background: theme.placeholderBg,
        borderBottom: `1px solid ${theme.cardBorder}`,
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: 0,
          width: "65%",
          height: "65%",
          background: theme.isDark
            ? "radial-gradient(ellipse at top right, rgba(55,146,232,0.11), transparent 65%)"
            : "radial-gradient(ellipse at top right, rgba(55,146,232,0.07), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <DocumentLines hi={theme.docHi} lo={theme.docLo} />
      <div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <span
          className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 rounded"
          style={{
            color: theme.badgeColor,
            background: theme.badgeBg,
            border: `1px solid ${theme.badgeBorder}`,
          }}
        >
          Screenshot coming
        </span>
      </div>
      <div className="absolute bottom-4 right-4">
        <span
          className="font-mono text-[10px] tracking-[0.18em] uppercase"
          style={{ color: theme.formatColor }}
        >
          {format}
        </span>
      </div>
    </div>
  );
}

// ── Preview card ─────────────────────────────────────────────────────────────

function PreviewCard({
  item,
  index,
  inView,
  theme,
}: {
  item: ItemData;
  index: number;
  inView: boolean;
  theme: StageTheme;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      suppressHydrationWarning
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
      whileHover={
        reduce
          ? undefined
          : {
              y: -4,
              borderColor: theme.cardHoverBorder,
              boxShadow: theme.cardHoverShadow,
              transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
            }
      }
      className="rounded-xl overflow-hidden"
      style={{
        background: theme.cardBg,
        border: `1px solid ${theme.cardBorder}`,
      }}
    >
      <PlaceholderZone format={item.format} theme={theme} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <h3
            className="font-sora font-semibold text-base leading-snug"
            style={{ color: theme.heading }}
          >
            {item.name}
          </h3>
          <span
            className="flex-shrink-0 font-mono text-[9px] tracking-[0.14em] uppercase px-2 py-0.5 rounded-full mt-0.5"
            style={{
              color: theme.badgeColor,
              background: theme.badgeBg,
              border: `1px solid ${theme.badgeBorder}`,
            }}
          >
            {item.format}
          </span>
        </div>
        <p
          className="text-[13px] leading-relaxed"
          style={{ color: theme.body }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

// ── Stage section ─────────────────────────────────────────────────────────────

function StageSection({
  stage,
  theme,
}: {
  stage: StageGroupData;
  theme: StageTheme;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ghostInView = useInView(sectionRef, { once: true, amount: 0.12 });
  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.04 });
  const reduce = useReducedMotion();
  const isSingle = stage.items.length === 1;

  return (
    <section
      ref={sectionRef}
      id={`stage-${stage.number}`}
      className="relative overflow-hidden"
      style={{ background: theme.sectionBg }}
    >
      {/* Gradient: transitions from previous section's background color */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: theme.topGradient }}
        aria-hidden="true"
      />

      {/* Ghost stage number watermark */}
      <motion.span
        suppressHydrationWarning
        className="absolute right-[-1%] top-1/2 -translate-y-1/2 select-none pointer-events-none font-sora font-black leading-none"
        style={{
          fontSize: "clamp(110px, 18vw, 200px)",
          color: theme.ghost,
          letterSpacing: "-0.04em",
        }}
        initial={reduce ? false : { opacity: 0, scale: 1.06 }}
        animate={ghostInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.0, ease: EASE }}
        aria-hidden="true"
      >
        {stage.number}
      </motion.span>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

        {/* Stage header */}
        <motion.div
          ref={headerRef}
          suppressHydrationWarning
          initial={reduce ? false : { opacity: 0, x: -16 }}
          animate={headerInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.58, ease: EASE }}
          className="mb-10"
        >
          <p
            className="font-mono text-[10px] tracking-[0.18em] uppercase mb-1.5"
            style={{ color: theme.label }}
          >
            Stage {stage.number}
          </p>
          <h2
            className="font-sora font-bold text-2xl md:text-3xl tracking-tight text-balance"
            style={{ color: theme.heading }}
          >
            {stage.name}
          </h2>
          {stage.description && (
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: theme.body, maxWidth: "52ch" }}
            >
              {stage.description}
            </p>
          )}
          {stage.insight && (
            <div className="mt-6">{stage.insight}</div>
          )}
        </motion.div>

        {/* Card grid */}
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
              theme={theme}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Gallery ───────────────────────────────────────────────────────────────────

export default function PreviewGallery({
  stageGroups,
}: {
  stageGroups: StageGroupData[];
}) {
  return (
    <div>
      {stageGroups.map((stage, i) => (
        <div key={stage.number}>
          <StageSection stage={stage} theme={themes[i]} />

          {/* Mid-page CTA after Stage 02 */}
          {stage.number === "02" && (
            <div
              className="py-10 px-4 sm:px-6 lg:px-8 text-center bg-[#070719]"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
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
