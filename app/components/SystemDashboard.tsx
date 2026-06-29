"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

// Always play animations — this is a marketing demo, motion is intentional
const useReducedMotion = () => false;

type StageId = "stage01" | "stage02" | "stage03" | "stage04";

interface FileItem {
  name: string;
  description: string;
  icon: string;
  view: string;
}

interface StageConfig {
  id: StageId;
  icon: string;
  label: string;
  status: string;
  defaultFile: string;
  defaultView: string;
  files: FileItem[];
}

const STAGES: StageConfig[] = [
  {
    id: "stage01",
    icon: "map",
    label: "Stage 1: Map your transfer",
    status: "Mapping Transferable Skills",
    defaultFile: "Start Here Guide.pdf",
    defaultView: "stage01",
    files: [
      { name: "Start Here Guide.pdf", description: "Core system sequence and blueprint.", icon: "description", view: "stage01" },
    ],
  },
  {
    id: "stage02",
    icon: "construction",
    label: "Stage 2: Build your materials",
    status: "Constructing Narrative",
    defaultFile: "One Page CV Template",
    defaultView: "one-page",
    files: [
      { name: "One Page CV Template",   description: "ATS-optimized high-impact layout.", icon: "article",      view: "one-page" },
      { name: "Hybrid CV Template",    description: "For unconventional pivots.",        icon: "history_edu",  view: "hybrid"   },
      { name: "Two-Page CV Template",  description: "For extensive experience.",         icon: "description",  view: "two-page" },
    ],
  },
  {
    id: "stage03",
    icon: "analytics",
    label: "Stage 3: Optimize and score",
    status: "Optimizing for Scanners",
    defaultFile: "ATS Compatibility Engine",
    defaultView: "ats",
    files: [
      { name: "ATS Checker",    description: "Interactive standalone HTML app.", icon: "checklist",    view: "ats"    },
      { name: "AI Prompt Pack", description: "50 prompts — PDF.",                 icon: "auto_awesome", view: "prompt" },
    ],
  },
  {
    id: "stage04",
    icon: "rocket_launch",
    label: "Stage 4: Apply with proof",
    status: "Ready for Deployment",
    defaultFile: "Verified Success",
    defaultView: "stage04",
    files: [
      { name: "Verified Success", description: "Final deployment reference.", icon: "task_alt", view: "stage04" },
    ],
  },
];

const SPRING = { type: "spring", stiffness: 380, damping: 30 } as const;
const EASE   = [0.22, 1, 0.36, 1] as const;

// Counts from 0 to `to` on mount
function AnimatedNumber({ to, duration = 1.4, delay = 0 }: { to: number; duration?: number; delay?: number }) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) { setValue(to); return; }
    let raf: number;
    const timer = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(eased * to));
        if (t < 1) raf = requestAnimationFrame(tick);
        else setValue(to);
      };
      raf = requestAnimationFrame(tick);
    }, delay * 1000);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [to, duration, delay, reduce]);

  return <>{value}</>;
}

// ─── Typewriter ──────────────────────────────────────────────────────────────

function TypewriterText({ text, speed = 15, onComplete }: { text: string; speed?: number; onComplete?: () => void }) {
  const [count, setCount] = useState(0);
  const reduce = useReducedMotion();
  const firedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    firedRef.current = false;
    setCount(0);
    if (reduce) {
      setCount(text.length);
      onCompleteRef.current?.();
      return;
    }
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setCount(i);
      if (i >= text.length && !firedRef.current) {
        firedRef.current = true;
        clearInterval(iv);
        onCompleteRef.current?.();
      }
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed, reduce]);

  return (
    <>
      {text.slice(0, count)}
      {count < text.length && (
        <span
          className="inline-block animate-pulse"
          style={{ width: 2, height: "0.85em", background: "#a0c9ff", opacity: 0.8, marginLeft: 2, verticalAlign: "middle" }}
        />
      )}
    </>
  );
}

// ─── Stage 01: Translation Engine ────────────────────────────────────────────

const BEFORE_ITEMS = [
  { text: "Managed front desk team of 8 and handled daily check-in and check-out operations.", flag: "Managed front desk team" },
  { text: "Resolved customer complaints and escalated issues to management when needed.", flag: "escalated issues to management" },
  { text: "Managed room inventory and used booking software to optimise occupancy rates.", flag: "used booking software" },
];

const AFTER_ITEMS = [
  { text: "Directed 8-person guest operations team, coordinating cross-functional workflows across facilities, housekeeping, and scheduling to maintain daily service SLAs.", highlight: "cross-functional workflows" },
  { text: "Owned stakeholder escalation protocols under time-critical conditions, consistently resolving issues within SLA windows.", highlight: "stakeholder escalation protocols" },
  { text: "Managed dynamic capacity planning across 200+ daily reservations using live inventory systems, building direct competency in resource allocation and operational forecasting.", highlight: "dynamic capacity planning" },
];

function InlineFlag({ text, phrase }: { text: string; phrase: string }) {
  const i = text.indexOf(phrase);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="rounded px-0.5" style={{ background: "rgba(239,68,68,0.18)", color: "#fca5a5", textDecoration: "underline", textDecorationStyle: "wavy", textDecorationColor: "rgba(239,68,68,0.6)" }}>
        {phrase}
      </span>
      {text.slice(i + phrase.length)}
    </>
  );
}

function InlineHighlight({ text, phrase }: { text: string; phrase: string }) {
  const i = text.indexOf(phrase);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="rounded px-0.5 font-semibold" style={{ background: "rgba(160,201,255,0.18)", color: "#a0c9ff" }}>
        {phrase}
      </span>
      {text.slice(i + phrase.length)}
    </>
  );
}

function Stage01Content({ autoKey }: { autoKey: number }) {
  const reduce = useReducedMotion();
  const [activeBullet, setActiveBullet] = useState(-1);

  useEffect(() => {
    setActiveBullet(-1);
    const t = setTimeout(() => setActiveBullet(0), reduce ? 0 : 900);
    return () => clearTimeout(t);
  }, [autoKey, reduce]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white/60 font-bold text-xs uppercase tracking-widest">Translation Engine</h3>
        <motion.span
          className="text-[10px] font-medium px-2.5 py-1 rounded-full"
          style={{ background: "rgba(160,201,255,0.1)", color: "#a0c9ff", border: "1px solid rgba(160,201,255,0.2)" }}
          initial={{ opacity: 0, scale: reduce ? 1 : 0.85 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.4, ease: EASE } }}
        >
          Hospitality Supervisor → Operations Coordinator
        </motion.span>
      </div>

      <div className="flex-1 grid gap-3 min-h-0" style={{ gridTemplateColumns: "1fr 44px 1fr" }}>

        {/* LEFT — Before */}
        <motion.div
          className="flex flex-col rounded-2xl overflow-hidden"
          style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.2)" }}
          initial={{ opacity: 0, x: reduce ? 0 : -80 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } }}
        >
          <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(239,68,68,0.12)" }}>
            <span className="material-symbols-outlined text-red-400" style={{ fontSize: 14 }}>warning</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">Before — Generic Language</span>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
            {BEFORE_ITEMS.map(({ text, flag }, i) => (
              <motion.div
                key={flag}
                className="flex gap-2.5"
                initial={{ opacity: 0, x: reduce ? 0 : -20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.15 + i * 0.09, duration: 0.4, ease: EASE } }}
              >
                <span className="material-symbols-outlined text-red-500/60 shrink-0 mt-0.5" style={{ fontSize: 14 }}>cancel</span>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  <InlineFlag text={text} phrase={flag} />
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CENTER — Transform arrow */}
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.3 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.55, duration: 0.55, type: "spring", stiffness: 220, damping: 16 } }}
          >
            <div style={{ background: "linear-gradient(to bottom, transparent, rgba(160,201,255,0.35))", width: 1, height: 80 }} />
            <motion.div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "rgba(160,201,255,0.14)", border: "1px solid rgba(160,201,255,0.45)" }}
              animate={reduce ? {} : {
                boxShadow: [
                  "0 0 12px rgba(160,201,255,0.2), 0 0 0px rgba(160,201,255,0)",
                  "0 0 32px rgba(160,201,255,0.7), 0 0 60px rgba(55,146,232,0.3)",
                  "0 0 18px rgba(160,201,255,0.35), 0 0 8px rgba(160,201,255,0.1)",
                  "0 0 32px rgba(160,201,255,0.7), 0 0 60px rgba(55,146,232,0.3)",
                  "0 0 12px rgba(160,201,255,0.2), 0 0 0px rgba(160,201,255,0)",
                ],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <motion.span
                className="material-symbols-outlined"
                style={{ fontSize: 20, color: "#a0c9ff" }}
                animate={reduce ? {} : { scale: [1, 1.2, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                arrow_forward
              </motion.span>
            </motion.div>
            <div style={{ background: "linear-gradient(to top, transparent, rgba(160,201,255,0.35))", width: 1, height: 80 }} />
          </motion.div>
        </div>

        {/* RIGHT — After (typewriter) */}
        <motion.div
          className="flex flex-col rounded-2xl overflow-hidden"
          style={{ background: "rgba(160,201,255,0.04)", border: "1px solid rgba(160,201,255,0.2)" }}
          initial={{ opacity: 0, x: reduce ? 0 : 80 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE, delay: 0.1 } }}
        >
          <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(160,201,255,0.12)" }}>
            <motion.span
              className="material-symbols-outlined"
              style={{ fontSize: 14, color: "#a0c9ff" }}
              animate={reduce ? {} : { scale: activeBullet >= 0 ? [1, 1.4, 1] : 1 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              check_circle
            </motion.span>
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#a0c9ff" }}>After — Career Switch Narrative</span>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
            {AFTER_ITEMS.map(({ text, highlight }, i) => (
              <div key={highlight} className="flex gap-2.5" style={{ minHeight: "2.8rem" }}>
                <motion.span
                  className="material-symbols-outlined shrink-0 mt-0.5"
                  style={{ fontSize: 14, color: activeBullet > i ? "#a0c9ff" : "rgba(160,201,255,0.3)" }}
                  animate={{ color: activeBullet > i ? "#a0c9ff" : "rgba(160,201,255,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  check
                </motion.span>
                <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {activeBullet > i ? (
                    <InlineHighlight text={text} phrase={highlight} />
                  ) : activeBullet === i ? (
                    <TypewriterText
                      text={text}
                      speed={14}
                      onComplete={() => setActiveBullet(i + 1)}
                    />
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Stage 02: CV Wireframes ──────────────────────────────────────────────────

const GRID_BG: React.CSSProperties = {
  backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
  backgroundSize: "20px 20px",
};

function Stage02Content({ view }: { view: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-white/60 font-bold text-xs uppercase tracking-widest mb-6">CV Template: Layout Preview</h3>

      {/* ── One Page ── */}
      {view === "one-page" && (
        <div className="flex-1 flex items-center justify-center p-8 bg-[#0a0a16] rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0" style={GRID_BG} />
          <div className="relative flex items-center z-10">
            <motion.div
              className="cv-wireframe w-[340px] h-[480px] rounded-lg p-6 flex flex-col gap-4 bg-black/40 backdrop-blur-sm"
              initial={reduce ? {} : { opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } }}
            >
              <div className="flex flex-col items-center gap-2 border-b border-white/10 pb-4">
                <div className="w-32 h-4 bg-primary/40 rounded-full" />
                <div className="w-48 h-2 bg-white/20 rounded-full" />
                <div className="flex gap-2 mt-1">
                  <div className="w-12 h-2 bg-white/10 rounded-full" />
                  <div className="w-12 h-2 bg-white/10 rounded-full" />
                  <div className="w-12 h-2 bg-white/10 rounded-full" />
                </div>
              </div>
              <div className="wire-block p-3">
                <div className="w-20 h-3 bg-white/20 rounded-full mb-3" />
                <div className="wire-text w-full" /><div className="wire-text w-[90%]" /><div className="wire-text w-[80%]" />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="w-24 h-3 bg-primary/40 rounded-full mb-1" />
                <div className="wire-block p-3">
                  <div className="flex justify-between mb-2">
                    <div className="w-32 h-3 bg-white/30 rounded-full" /><div className="w-16 h-2 bg-white/10 rounded-full" />
                  </div>
                  <div className="w-24 h-2 bg-white/20 rounded-full mb-3" />
                  <div className="flex items-start gap-2 mb-2"><div className="w-1 h-1 rounded-full bg-primary/50 mt-1" /><div className="wire-text flex-1" /></div>
                  <div className="flex items-start gap-2 mb-2"><div className="w-1 h-1 rounded-full bg-primary/50 mt-1" /><div className="wire-text flex-1 w-[85%]" /></div>
                </div>
                <div className="wire-block p-3 opacity-60">
                  <div className="flex justify-between mb-2">
                    <div className="w-28 h-3 bg-white/30 rounded-full" /><div className="w-16 h-2 bg-white/10 rounded-full" />
                  </div>
                  <div className="flex items-start gap-2 mb-2"><div className="w-1 h-1 rounded-full bg-white/30 mt-1" /><div className="wire-text flex-1" /></div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="ml-4 w-48 p-4 liquid-glass rounded-xl border border-primary/20 shadow-2xl shrink-0"
              initial={reduce ? {} : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.4, ease: EASE } }}
            >
              <div className="flex items-center gap-2 mb-2" style={{ color: "#a0c9ff" }}>
                <span className="material-symbols-outlined text-sm">view_agenda</span>
                <span className="text-xs font-bold uppercase tracking-widest">One-Page Focus</span>
              </div>
              <p className="text-[11px] text-white/70 leading-relaxed">Aggressive curation. Highlights only the most relevant transferrable skills for rapid ATS scanning.</p>
            </motion.div>
          </div>
        </div>
      )}

      {/* ── Hybrid ── */}
      {view === "hybrid" && (
        <div className="flex-1 flex items-center justify-center p-8 bg-[#0a0a16] rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0" style={GRID_BG} />
          <div className="relative flex items-center z-10">
            <motion.div
              className="cv-wireframe w-[400px] h-[480px] rounded-lg p-6 grid gap-6 bg-black/40 backdrop-blur-sm"
              style={{ gridTemplateColumns: "1fr 2fr" }}
              initial={reduce ? {} : { opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } }}
            >
              <div className="flex flex-col gap-4 border-r border-white/10 pr-4">
                <div className="w-16 h-16 rounded-full bg-white/10 mx-auto mb-2" />
                <div className="w-full h-3 bg-primary/40 rounded-full mb-1" />
                <div className="w-3/4 h-2 bg-white/20 rounded-full mx-auto mb-4" />
                <div className="w-16 h-2 bg-white/30 rounded-full mb-2" />
                <div className="wire-block p-2 mb-1"><div className="w-full h-1.5 bg-white/20 rounded-full" /></div>
                <div className="wire-block p-2 mb-1"><div className="w-5/6 h-1.5 bg-white/20 rounded-full" /></div>
                <div className="wire-block p-2 mb-4"><div className="w-4/5 h-1.5 bg-white/20 rounded-full" /></div>
                <div className="w-16 h-2 bg-white/30 rounded-full mb-2 mt-auto" />
                <div className="w-full h-1.5 bg-white/10 rounded-full mb-1" />
                <div className="w-full h-1.5 bg-white/10 rounded-full" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="wire-block p-3">
                  <div className="w-24 h-3 bg-white/30 rounded-full mb-3" />
                  <div className="wire-text w-full" /><div className="wire-text w-full" /><div className="wire-text w-[70%]" />
                </div>
                <div className="w-32 h-3 bg-primary/40 rounded-full mt-2" />
                <div className="wire-block p-3 border-l-2 border-primary/50 rounded-l-none bg-primary/5">
                  <div className="w-40 h-3 bg-white/40 rounded-full mb-2" />
                  <div className="flex items-start gap-2 mb-2"><div className="w-1.5 h-1.5 rounded-sm bg-primary mt-1" /><div className="wire-text flex-1" /></div>
                  <div className="flex items-start gap-2 mb-2"><div className="w-1.5 h-1.5 rounded-sm bg-primary mt-1" /><div className="wire-text flex-1" /></div>
                </div>
                <div className="wire-block p-3">
                  <div className="w-32 h-3 bg-white/30 rounded-full mb-2" />
                  <div className="flex items-start gap-2 mb-2"><div className="w-1 h-1 rounded-full bg-white/30 mt-1" /><div className="wire-text flex-1" /></div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="ml-4 w-48 p-4 liquid-glass rounded-xl border border-primary/20 shadow-2xl shrink-0"
              initial={reduce ? {} : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.4, ease: EASE } }}
            >
              <div className="flex items-center gap-2 mb-2" style={{ color: "#a0c9ff" }}>
                <span className="material-symbols-outlined text-sm">dashboard</span>
                <span className="text-xs font-bold uppercase tracking-widest">Hybrid Layout</span>
              </div>
              <p className="text-[11px] text-white/70 leading-relaxed">Balances skills-first sidebar with chronological narrative. Best for major career shifts.</p>
            </motion.div>
          </div>
        </div>
      )}

      {/* ── Two Page ── */}
      {view === "two-page" && (
        <div className="flex-1 flex items-center justify-center p-8 bg-[#0a0a16] rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0" style={GRID_BG} />
          <div className="flex gap-4 relative z-10">
            <motion.div
              className="cv-wireframe w-[260px] h-[360px] rounded-lg p-5 flex flex-col gap-3 bg-black/40 backdrop-blur-sm origin-bottom-right"
              initial={{ opacity: 0, x: -28, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: -2, transition: { duration: 0.45, ease: EASE } }}
              whileHover={{ rotate: 0, transition: { duration: 0.25 } }}
            >
              <div className="w-24 h-3 bg-primary/40 rounded-full mx-auto mb-2" />
              <div className="w-32 h-1.5 bg-white/20 rounded-full mx-auto mb-4" />
              <div className="wire-block p-2"><div className="wire-text w-full" /><div className="wire-text w-[90%]" /></div>
              <div className="w-20 h-2 bg-white/30 rounded-full mt-2" />
              <div className="wire-block p-2"><div className="w-24 h-2 bg-white/40 rounded-full mb-2" /><div className="wire-text w-full" /><div className="wire-text w-full" /></div>
              <div className="wire-block p-2"><div className="w-20 h-2 bg-white/40 rounded-full mb-2" /><div className="wire-text w-full" /></div>
            </motion.div>
            <motion.div
              className="cv-wireframe w-[260px] h-[360px] rounded-lg p-5 flex flex-col gap-3 bg-black/40 backdrop-blur-sm origin-bottom-left translate-y-4"
              initial={{ opacity: 0, x: 28, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: 2, transition: { delay: 0.08, duration: 0.45, ease: EASE } }}
              whileHover={{ rotate: 0, transition: { duration: 0.25 } }}
            >
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                <div className="w-16 h-1.5 bg-white/20 rounded-full" /><div className="w-8 h-1.5 bg-white/10 rounded-full" />
              </div>
              <div className="wire-block p-2"><div className="w-24 h-2 bg-white/40 rounded-full mb-2" /><div className="wire-text w-full" /><div className="wire-text w-[80%]" /></div>
              <div className="wire-block p-2"><div className="w-28 h-2 bg-white/40 rounded-full mb-2" /><div className="wire-text w-full" /></div>
              <div className="w-20 h-2 bg-primary/30 rounded-full mt-auto mb-1" />
              <div className="flex gap-2">
                <div className="w-10 h-8 rounded bg-white/5" />
                <div className="w-10 h-8 rounded bg-white/5" />
                <div className="w-10 h-8 rounded bg-white/5" />
              </div>
            </motion.div>

            {/* Info patch — floats centered over the two papers */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 p-4 rounded-xl border border-primary/20 shadow-2xl z-20"
              style={{ background: "rgba(10,10,22,0.85)", backdropFilter: "blur(16px)" }}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.4, ease: EASE } }}
            >
              <div className="flex items-center gap-2 mb-2" style={{ color: "#a0c9ff" }}>
                <span className="material-symbols-outlined text-sm">layers</span>
                <span className="text-xs font-bold uppercase tracking-widest">Two-Page Depth</span>
              </div>
              <p className="text-[11px] text-white/70 leading-relaxed">For candidates with 10+ years. Both pages work together to tell your full transfer story without sacrificing depth.</p>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Stage 03: Prompt Vault ───────────────────────────────────────────────────

const PROMPT_ITEMS = ["Achievement Quantifier", "Bullet Point Condenser", "JD Alignment Scanner", "Cover Letter Generator"];

function Stage03PromptContent() {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-white/60 font-bold text-xs uppercase tracking-widest mb-6">AI Architecture: Prompt Vault</h3>
      <div className="flex-1 rounded-2xl border border-white/10 bg-[#0a0a16] p-6 flex gap-6 overflow-hidden">
        {/* Left: prompt menu */}
        <div className="w-1/3 flex flex-col gap-2 border-r border-white/10 pr-6 overflow-y-auto">
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">System Prompts</div>
          {/* Active item */}
          <motion.div
            className="px-3 py-2.5 rounded-lg cursor-pointer flex items-center justify-between"
            style={{ background: "rgba(160,201,255,0.1)", border: "1px solid rgba(160,201,255,0.2)" }}
            initial={reduce ? {} : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.3, ease: EASE } }}
          >
            <span className="text-xs font-bold" style={{ color: "#a0c9ff" }}>Semantic Rewrite Engine</span>
            <span className="material-symbols-outlined text-[14px]" style={{ color: "#a0c9ff", fontSize: 14 }}>arrow_forward_ios</span>
          </motion.div>
          {/* Other items stagger in */}
          {PROMPT_ITEMS.map((p, i) => (
            <motion.div
              key={p}
              className="px-3 py-2.5 rounded-lg hover:bg-white/5 cursor-pointer flex items-center justify-between transition-colors"
              initial={reduce ? {} : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.06 + i * 0.05, duration: 0.28, ease: EASE } }}
            >
              <span className="text-xs font-medium text-white/60">{p}</span>
            </motion.div>
          ))}
        </div>
        {/* Right: code editor */}
        <motion.div
          className="w-2/3 flex flex-col h-full relative"
          initial={reduce ? {} : { opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
        >
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined" style={{ color: "#a0c9ff" }}>terminal</span>
              <span className="font-mono text-sm text-white/90">PROMPT 13</span>
            </div>
            <button className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-xs font-bold transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>content_copy</span> Copy
            </button>
          </div>
          <div className="flex-1 bg-black/40 rounded-xl border border-white/5 p-4 font-mono text-[12px] leading-relaxed text-white/70 overflow-hidden" style={{ filter: "blur(4px)" }}>
            <div><span style={{ color: "#c084fc" }}>Act as</span> an expert ATS resume writer and career transition coach.</div>
            <br />
            <span style={{ color: "#60a5fa" }}>Context:</span> I am pivoting from [CURRENT_ROLE] to [TARGET_ROLE]. I need to rewrite my experience to highlight transferable skills.<br /><br />
            <span style={{ color: "#4ade80" }}>Task:</span> Rewrite the following raw bullet points using the XYZ format (Accomplished [X] as measured by [Y], by doing [Z]).<br /><br />
            <span style={{ color: "#facc15" }}>Constraints:</span><br />
            - Keep each bullet under 2 lines.<br />
            - Start with strong action verbs (avoid &apos;helped&apos;, &apos;assisted&apos;).<br />
            - Quantify impact where possible.<br />
            - Align terminology with standard [TARGET_ROLE] jargon.<br /><br />
            <span className="text-white/40">// Input Data:</span><br />
            [PASTE_RAW_BULLETS_HERE]
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Stage 03: ATS Engine ─────────────────────────────────────────────────────

function Stage03ATSContent({ autoKey }: { autoKey: number }) {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-white/60 font-bold text-xs uppercase tracking-widest mb-6">ATS Compatibility Engine</h3>
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Before */}
        <motion.div
          className="p-5 rounded-2xl"
          style={{ background: "rgba(248,113,113,0.05)", border: "1px solid rgba(248,113,113,0.2)" }}
          initial={{ opacity: 0, x: reduce ? 0 : -60 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Initial Scan</span>
            <div className="text-2xl font-black text-red-400 font-geist">
              <AnimatedNumber key={`ats-before-${autoKey}`} to={23} duration={1.4} delay={0.3} />
              <span className="text-[10px] font-normal opacity-60">/100</span>
            </div>
          </div>
          <div className="space-y-2">
            <motion.div
              className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-red-400/10"
              initial={reduce ? {} : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.25, ease: EASE } }}
            >
              <span className="material-symbols-outlined text-red-400 text-sm">cancel</span>
              <span className="text-[11px] font-medium text-red-200">No keywords</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-red-400/10"
              initial={reduce ? {} : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.38, duration: 0.25, ease: EASE } }}
            >
              <span className="material-symbols-outlined text-red-400 text-sm">cancel</span>
              <span className="text-[11px] font-medium text-red-200">No metrics</span>
            </motion.div>
          </div>
        </motion.div>

        {/* After */}
        <motion.div
          className="p-5 rounded-2xl"
          style={{ background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.2)", boxShadow: "0 0 40px rgba(74,222,128,0.15)" }}
          initial={{ opacity: 0, x: reduce ? 0 : 60 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.6, ease: EASE } }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">System Optimized</span>
            <div className="text-2xl font-black text-green-400 font-geist">
              <AnimatedNumber key={`ats-after-${autoKey}`} to={87} duration={1.8} delay={0.4} />
              <span className="text-[10px] font-normal opacity-60">/100</span>
            </div>
          </div>
          <div className="space-y-2">
            <motion.div
              className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-green-400/10"
              initial={reduce ? {} : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.35, duration: 0.25, ease: EASE } }}
            >
              <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span className="text-[11px] font-medium text-green-200">Keyword Match</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-green-400/10"
              initial={reduce ? {} : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.43, duration: 0.25, ease: EASE } }}
            >
              <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span className="text-[11px] font-medium text-green-200">Impact Metrics</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Transformation block */}
      <div className="flex-1 rounded-2xl border border-white/10 bg-black/20 p-6 font-mono text-[13px] leading-relaxed overflow-hidden flex flex-col justify-center" style={{ color: "#c0c7d3" }}>
        <motion.div
          className="text-white/40 mb-4"
          initial={reduce ? {} : { opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.3 } }}
        >
          // System Output: Semantic Transformation
        </motion.div>
        <motion.div
          className="p-4 rounded-lg mb-4"
          style={{ background: "rgba(127,29,29,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}
          initial={reduce ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.3, ease: EASE } }}
        >
          <span className="text-red-400 block mb-1 text-xs font-bold uppercase tracking-wider">Previous:</span>
          <span className="opacity-80">&ldquo;Helped customers find products and managed the back stock room.&rdquo;</span>
        </motion.div>
        <motion.div
          className="flex justify-center mb-4"
          initial={reduce ? {} : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.65, duration: 0.25, ease: EASE } }}
        >
          <span className="material-symbols-outlined text-white/30">arrow_downward</span>
        </motion.div>
        <motion.div
          className="p-4 rounded-lg"
          style={{ background: "rgba(20,83,45,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
          initial={reduce ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.72, duration: 0.35, ease: EASE } }}
        >
          <span className="text-green-400 block mb-1 text-xs font-bold uppercase tracking-wider">Optimized Outcome:</span>
          <span className="opacity-90">&ldquo;Managed inventory lifecycle for high-volume retail operations, implementing a new restocking sequence that improved retrieval efficiency by 30%.&rdquo;</span>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Stage 04: Deployment Ready ───────────────────────────────────────────────

function Stage04Content() {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-white/60 font-bold text-xs uppercase tracking-widest mb-6">System Status: Deployment</h3>
      <div
        className="flex-1 rounded-2xl overflow-hidden relative flex flex-col items-center justify-center p-8 text-center"
        style={{ border: "1px solid rgba(160,201,255,0.2)", background: "rgba(160,201,255,0.05)", boxShadow: "inset 0 0 100px rgba(160,201,255,0.05)" }}
      >
        {/* Radar rings — pulsing signal, not spinning decoration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[
            { size: 420, delay: 0,    opacity: 0.12 },
            { size: 300, delay: 0.65, opacity: 0.18 },
            { size: 190, delay: 1.3,  opacity: 0.25 },
          ].map(({ size, delay, opacity }) => (
            <motion.div
              key={size}
              className="rounded-full border border-primary/40 absolute"
              style={{ width: size, height: size }}
              initial={reduce ? {} : { scale: 0.5, opacity: 0 }}
              animate={{
                scale: [null, 1, 1.06, 1],
                opacity: [0, opacity * 2, opacity * 0.4, opacity],
              }}
              transition={{
                duration: reduce ? 0 : 0.9,
                delay,
                ease: EASE,
                times: [0, 0.5, 0.75, 1],
                opacity: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 2.8,
                  delay: delay + 0.9,
                  ease: "easeInOut",
                },
              }}
            />
          ))}
        </div>

        {/* Verified badge */}
        <div className="relative z-10 mb-8">
          <motion.div
            className="w-28 h-28 mx-auto rounded-full flex items-center justify-center border-2 animate-pulse"
            style={{ background: "rgba(160,201,255,0.2)", backdropFilter: "blur(12px)", borderColor: "rgba(160,201,255,0.5)", boxShadow: "0 0 40px rgba(160,201,255,0.3)" }}
            initial={reduce ? {} : { scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 18, delay: 0.2 } }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 60, color: "#a0c9ff", fontVariationSettings: "'FILL' 1" }}>verified</span>
          </motion.div>
          <motion.div
            className="absolute -right-4 -bottom-2 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full border-2 shadow-lg flex items-center gap-1"
            style={{ borderColor: "#111124" }}
            initial={reduce ? {} : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 360, damping: 20, delay: 0.55 } }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 12 }}>done_all</span> 87/100 ATS Match
          </motion.div>
        </div>

        <motion.h4
          className="text-4xl font-black font-geist text-white mb-3 tracking-tight"
          initial={reduce ? {} : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.48, duration: 0.35, ease: EASE } }}
        >
          Deployment Ready
        </motion.h4>

        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-green-400 text-sm font-medium mb-6"
          style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}
          initial={reduce ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.58, duration: 0.3, ease: EASE } }}
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Ready to Apply
        </motion.div>

        <motion.p
          className="max-w-md text-sm leading-relaxed mb-8"
          style={{ color: "#c0c7d3" }}
          initial={reduce ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.66, duration: 0.3, ease: EASE } }}
        >
          Your experience is reframed for the new field. Your resume reads the way hiring managers expect: specific, credible, and built for the role.
        </motion.p>

        <motion.div
          className="flex gap-4 w-full max-w-sm"
          initial={reduce ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.74, duration: 0.3, ease: EASE } }}
        >
          <button
            className="flex-1 py-3 px-4 rounded-xl font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
            style={{ background: "#a0c9ff", color: "#003259", boxShadow: "0 0 20px rgba(160,201,255,0.2)" }}
          >
            <span className="material-symbols-outlined text-sm">download</span> Final Export
          </button>
          <button className="py-3 px-4 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center">
            Review PDF
          </button>
        </motion.div>
      </div>
    </div>
  );
}

const STAGE_ORDER: StageId[] = ["stage01", "stage02", "stage03", "stage04"];

const STAGE_DURATIONS: Record<StageId, number> = {
  stage01: 10000,
  stage02: 7500,
  stage03: 9000,
  stage04: 6000,
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function SystemDashboard() {
  const [activeStage, setActiveStage] = useState<StageId>("stage01");
  const [activeFile, setActiveFile] = useState<string>("Start Here Guide.pdf");
  const [activeView, setActiveView] = useState<string>("stage01");
  const [currentFilename, setCurrentFilename] = useState<string>("Start_Here_Guide.pdf");
  const [systemStatus, setSystemStatus] = useState<string>("Mapping Transferable Skills");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [autoKey, setAutoKey] = useState(0);

  const reduce = useReducedMotion();
  const currentStage = STAGES.find((s) => s.id === activeStage)!;

  // Auto-advance timer (loops)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const idx = STAGE_ORDER.indexOf(activeStage);
    const nextId = STAGE_ORDER[(idx + 1) % STAGE_ORDER.length];
    const t = setTimeout(() => {
      setAutoKey((k) => k + 1);
      switchStage(nextId);
    }, STAGE_DURATIONS[activeStage]);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStage, isAutoPlaying]);

  // Within-stage file cycling during auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const stage = STAGES.find((s) => s.id === activeStage)!;
    if (stage.files.length <= 1) return;
    const timePerFile = STAGE_DURATIONS[activeStage] / stage.files.length;
    const timers = stage.files.slice(1).map((file, i) =>
      setTimeout(() => {
        setActiveFile(file.name);
        setActiveView(file.view);
        setCurrentFilename(file.name.replace(/\s+/g, "_"));
      }, timePerFile * (i + 1))
    );
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStage, isAutoPlaying]);

  function switchStage(stageId: StageId) {
    const stage = STAGES.find((s) => s.id === stageId)!;
    setActiveStage(stageId);
    setActiveFile(stage.defaultFile);
    setActiveView(stage.defaultView);
    setSystemStatus(stage.status);
    setCurrentFilename(stage.defaultFile.replace(/\s+/g, "_"));
  }

  function handleManualStage(stageId: StageId) {
    setIsAutoPlaying(false);
    setAutoKey((k) => k + 1);
    switchStage(stageId);
  }

  function switchFile(file: FileItem) {
    setIsAutoPlaying(false);
    setActiveFile(file.name);
    setActiveView(file.view);
    setCurrentFilename(file.name.replace(/\s+/g, "_"));
  }

  function renderContent() {
    if (activeStage === "stage01") return <Stage01Content autoKey={autoKey} />;
    if (activeStage === "stage02") return <Stage02Content view={activeView} />;
    if (activeStage === "stage03") {
      if (activeView === "prompt") return <Stage03PromptContent />;
      return <Stage03ATSContent autoKey={autoKey} />;
    }
    return <Stage04Content />;
  }

  return (
    <div className="w-full">
      {/* ── Title bar ── */}
      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-t-xl px-4 py-2 flex items-center justify-between text-[13px] font-medium text-white/90 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="traffic-light" style={{ backgroundColor: "#FF5F56" }} />
            <div className="traffic-light" style={{ backgroundColor: "#FFBD2E" }} />
            <div className="traffic-light" style={{ backgroundColor: "#27C93F" }} />
          </div>
          <span className="material-symbols-outlined leading-none" style={{ fontSize: 16 }}>grid_view</span>
          <span className="font-bold">System Dashboard</span>
          <span className="opacity-60 hidden sm:inline">Sequence</span>
          <span className="opacity-60 hidden sm:inline">Output</span>
          <span className="opacity-60 hidden sm:inline">Materials</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>cloud_done</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentFilename}
              className="opacity-90 text-xs font-mono truncate max-w-[180px]"
              initial={reduce ? {} : { opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.2, ease: EASE } }}
              exit={{ opacity: 0, y: 4, transition: { duration: 0.1 } }}
            >
              {currentFilename}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Main panel ── */}
      <div className="liquid-glass rounded-b-xl overflow-hidden shadow-2xl" style={{ display: "grid", gridTemplateColumns: "260px 320px 1fr", height: 720 }}>

        {/* Panel 1: Sidebar */}
        <aside className="border-r border-white/5 p-6 flex flex-col gap-8" style={{ background: "rgba(0,0,0,0.2)" }}>
          <nav className="space-y-1 flex-1">
            <div className="text-[11px] font-bold uppercase tracking-widest mb-4 px-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Lifecycle Stages
            </div>
            {STAGES.map((stage) => {
              const isActive = activeStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => handleManualStage(stage.id)}
                  className="relative w-full flex items-center gap-3 px-3 py-3 rounded-lg"
                  style={stage.id === "stage01" ? {
                    boxShadow: isActive
                      ? "0 0 0 1px rgba(55,146,232,0.45), 0 0 18px rgba(55,146,232,0.18)"
                      : "0 0 0 1px rgba(55,146,232,0.2), 0 0 10px rgba(55,146,232,0.08)",
                  } : undefined}
                >
                  {isActive && (
                    <motion.div
                      layoutId="stage-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(160,201,255,0.15)" }}
                      initial={false}
                      transition={reduce ? { duration: 0 } : SPRING}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 rounded-lg hover:bg-white/5 transition-colors" />
                  )}
                  <span
                    className="material-symbols-outlined relative z-10"
                    style={{
                      fontSize: 20,
                      fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                      color: isActive ? "#a0c9ff" : "rgba(255,255,255,0.5)",
                      transition: "color 0.2s, font-variation-settings 0.2s",
                    }}
                  >
                    {stage.icon}
                  </span>
                  <span
                    className="text-sm font-semibold leading-tight relative z-10"
                    style={{
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                      transition: "color 0.2s",
                    }}
                  >
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Status widget */}
          <div className="mt-auto">
            <div className="rounded-xl p-4" style={{ background: "rgba(160,201,255,0.05)", border: "1px solid rgba(160,201,255,0.2)" }}>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#a0c9ff" }}>Status</div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={systemStatus}
                  className="text-xs"
                  style={{ color: "#e2e0fa" }}
                  initial={reduce ? {} : { opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.2, ease: EASE } }}
                  exit={{ opacity: 0, y: -5, transition: { duration: 0.1 } }}
                >
                  {systemStatus}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </aside>

        {/* Panel 2: File list */}
        <div className="flex flex-col" style={{ background: "rgba(0,0,0,0.1)", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="p-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <h2 className="font-bold text-sm uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)" }}>Stage Files</h2>
            <span className="material-symbols-outlined" style={{ color: "rgba(255,255,255,0.4)", fontSize: 18 }}>folder_open</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              className="flex flex-col flex-1 overflow-y-auto"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: reduce ? 0 : 0.05 } },
              }}
            >
              {currentStage.files.map((file) => {
                const isActive = activeFile === file.name;
                return (
                  <motion.div
                    key={file.name}
                    variants={{
                      hidden: reduce ? {} : { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.22, ease: EASE } },
                    }}
                    onClick={() => switchFile(file)}
                    className="p-4 cursor-pointer relative transition-colors hover:bg-white/5"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      background: isActive ? "rgba(255,255,255,0.05)" : undefined,
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="file-bar"
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
                        style={{ backgroundColor: "#a0c9ff" }}
                        initial={false}
                        transition={reduce ? { duration: 0 } : SPRING}
                      />
                    )}
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 16,
                          color: isActive ? "#a0c9ff" : "rgba(255,255,255,0.4)",
                          transition: "color 0.2s",
                        }}
                      >
                        {file.icon}
                      </span>
                      <span
                        className="font-bold text-sm"
                        style={{
                          color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                          transition: "color 0.2s",
                        }}
                      >
                        {file.name}
                      </span>
                    </div>
                    <div className="text-xs pl-7" style={{ color: "rgba(255,255,255,0.4)" }}>{file.description}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Panel 3: Main content */}
        <div className="flex flex-col overflow-hidden relative" style={{ background: "#111124" }}>
          {/* Progress bar */}
          <AnimatePresence>
            {isAutoPlaying && (
              <motion.div
                key={`progress-${activeStage}-${autoKey}`}
                className="absolute top-0 left-0 right-0 h-[2px] origin-left z-20"
                style={{ background: "linear-gradient(to right, #3792E8, #a0c9ff)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: STAGE_DURATIONS[activeStage] / 1000, ease: "linear" }}
              />
            )}
          </AnimatePresence>

          <div className="flex-1 p-8 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeView}-${autoKey}`}
                className="flex flex-col flex-1 min-h-0"
                initial={{ opacity: 0, y: reduce ? 0 : 70, scale: reduce ? 1 : 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } }}
                exit={{ opacity: 0, y: reduce ? 0 : -50, scale: reduce ? 1 : 0.97, transition: { duration: 0.22, ease: "easeIn" } }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next-stage navigation */}
          {(() => {
            const idx = STAGE_ORDER.indexOf(activeStage);
            const nextId = idx < STAGE_ORDER.length - 1 ? STAGE_ORDER[idx + 1] : null;
            const nextStage = nextId ? STAGES.find((s) => s.id === nextId) : null;
            if (!nextStage) return null;
            return (
              <div
                className="shrink-0 flex items-center justify-between px-6 py-3"
                style={{
                  borderTop: "1px solid rgba(55,146,232,0.15)",
                  background: "rgba(55,146,232,0.05)",
                }}
              >
                <span style={{ fontSize: "0.7rem", color: "rgba(160,201,255,0.45)", letterSpacing: "0.06em" }}>
                  Stage {idx + 1} of 4
                </span>
                <button
                  onClick={() => switchStage(nextId!)}
                  className="flex items-center gap-2 group"
                >
                  <span
                    className="text-xs font-semibold transition-colors group-hover:text-white"
                    style={{ color: "#a0c9ff" }}
                  >
                    Continue: {nextStage.label.replace(/Stage \d: /, "")}
                  </span>
                  <span
                    className="material-symbols-outlined group-hover:translate-x-0.5 transition-transform"
                    style={{ fontSize: 16, color: "#3792E8" }}
                  >
                    arrow_forward
                  </span>
                </button>
              </div>
            );
          })()}
        </div>

      </div>
    </div>
  );
}
