"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Cinematic "watch the translation happen" section. On scroll-in it plays a timeline:
// the BEFORE résumé types itself out → its low ATS score counts up → the AFTER card
// lights up and types itself out → its high ATS score + keyword match count up.
// The illustrative ATS scores mirror what the product's ATS Checker actually does.

const KEYWORDS = ["cross-functional", "stakeholder", "service SLAs", "capacity planning"];

const BEFORE = [
  "Managed the front desk team of 8 and handled daily check-in and check-out operations.",
  "Resolved customer complaints and escalated issues to management when needed.",
  "Managed room inventory and used booking software to optimize occupancy rates.",
];

type Seg = { t: string; hl?: boolean };

// "after" bullets, split into segments so the matched keywords can be highlighted.
const AFTER: Seg[][] = [
  [
    { t: "Directed an 8-person guest-operations team, coordinating " },
    { t: "cross-functional", hl: true },
    { t: " workflows across facilities, housekeeping, and scheduling to maintain daily " },
    { t: "service SLAs", hl: true },
    { t: "." },
  ],
  [
    { t: "Owned " },
    { t: "stakeholder", hl: true },
    { t: " escalation protocols under time-critical conditions, consistently resolving issues within SLA windows." },
  ],
  [
    { t: "Managed dynamic " },
    { t: "capacity planning", hl: true },
    { t: " across 200+ daily reservations using live inventory systems." },
  ],
];

const BEFORE_SEGS: Seg[][] = BEFORE.map((t) => [{ t }]);

const hlStyle: React.CSSProperties = {
  background: "rgba(160,201,255,0.18)",
  color: "#dbeafe",
  fontWeight: 600,
  padding: "0 4px",
  borderRadius: 4,
  boxShadow: "0 0 12px rgba(160,201,255,0.15)",
};

const segLen = (segs: Seg[]) => segs.reduce((n, s) => n + s.t.length, 0);
const BEFORE_TOTAL = BEFORE_SEGS.reduce((n, s) => n + segLen(s), 0);
const AFTER_TOTAL = AFTER.reduce((n, s) => n + segLen(s), 0);
const BEFORE_SCORE = 19;
const AFTER_SCORE = 94;

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

// Render a bullet's segments up to `shown` characters, preserving highlight styling.
function renderTyped(segs: Seg[], shown: number) {
  let remaining = shown;
  const out: React.ReactNode[] = [];
  for (let i = 0; i < segs.length; i++) {
    if (remaining <= 0) break;
    const s = segs[i];
    const slice = s.t.slice(0, Math.max(0, remaining));
    out.push(
      s.hl ? (
        <span key={i} style={hlStyle}>{slice}</span>
      ) : (
        <span key={i}>{slice}</span>
      )
    );
    remaining -= s.t.length;
  }
  return out;
}

function TypedBullets({
  list,
  typed,
  total,
  icon,
  iconColor,
  textColor,
}: {
  list: Seg[][];
  typed: number;
  total: number;
  icon: string;
  iconColor: string;
  textColor: string;
}) {
  let offset = 0;
  return (
    <ul className="space-y-3" aria-hidden="true">
      {list.map((segs, bi) => {
        const start = offset;
        const len = segLen(segs);
        offset += len;
        const shown = Math.max(0, Math.min(typed - start, len));
        const reached = typed > start;
        const isCurrent = typed > start && typed < start + len && typed < total;
        return (
          <li
            key={bi}
            className="flex gap-2.5"
            style={{ opacity: reached ? 1 : 0.18, transition: "opacity 0.25s ease" }}
          >
            <span className="material-symbols-outlined shrink-0 mt-0.5" style={{ fontSize: 14, color: iconColor }}>
              {icon}
            </span>
            <p className="text-[13px] leading-relaxed" style={{ color: textColor }}>
              {renderTyped(segs, shown)}
              {isCurrent && <span className="tw-cursor">|</span>}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default function ProofExample() {
  const rootRef = useRef<HTMLElement>(null);
  const done = useRef(false);
  const [started, setStarted] = useState(false);
  const [bChars, setBChars] = useState(0);
  const [aChars, setAChars] = useState(0);
  const [bScore, setBScore] = useState(0);
  const [aScore, setAScore] = useState(0);
  const [matched, setMatched] = useState(0);
  const [aActive, setAActive] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done.current) {
          done.current = true;
          setStarted(true);
          const start = performance.now();
          const loop = (now: number) => {
            const t = (now - start) / 1000;
            setBChars(Math.round(BEFORE_TOTAL * clamp01((t - 0.2) / 1.2)));
            setBScore(Math.round(BEFORE_SCORE * clamp01((t - 1.4) / 0.6)));
            if (t >= 2.2) setAActive(true);
            setAChars(Math.round(AFTER_TOTAL * clamp01((t - 2.2) / 1.4)));
            const sp = clamp01((t - 3.6) / 0.8);
            setAScore(Math.round(AFTER_SCORE * sp));
            setMatched(Math.round(4 * sp));
            if (t < 4.6) {
              raf = requestAnimationFrame(loop);
            } else {
              setBChars(BEFORE_TOTAL);
              setAChars(AFTER_TOTAL);
              setBScore(BEFORE_SCORE);
              setAScore(AFTER_SCORE);
              setMatched(4);
            }
          };
          raf = requestAnimationFrame(loop);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={rootRef} id="example" className="max-w-6xl mx-auto px-6 mb-40 fade-up visible">
      <div className="text-center mb-3">
        <span className="section-eyebrow">See the method</span>
        <h2 className="text-4xl font-black font-geist mb-6">
          The same experience. <span style={{ color: "#a0c9ff" }}>Translated.</span>
        </h2>

        {/* their current role -> the role it becomes */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div
            className="inline-flex items-center gap-2.5 rounded-full pl-2 pr-4 py-2"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full shrink-0" style={{ background: "rgba(255,255,255,0.06)" }}>
              <span className="material-symbols-outlined" style={{ fontSize: 19, color: "rgba(255,255,255,0.6)" }}>concierge</span>
            </span>
            <span className="text-left leading-tight">
              <span className="block text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>From</span>
              <span className="block text-sm font-semibold" style={{ color: "rgba(255,255,255,0.88)" }}>Front Desk Supervisor</span>
            </span>
          </div>

          <span className="material-symbols-outlined rotate-90 sm:rotate-0" style={{ fontSize: 24, color: "#a0c9ff" }}>arrow_forward</span>

          <div
            className="inline-flex items-center gap-2.5 rounded-full pl-2 pr-4 py-2"
            style={{ background: "rgba(160,201,255,0.08)", border: "1px solid rgba(160,201,255,0.3)", boxShadow: "0 0 28px rgba(160,201,255,0.08)" }}
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full shrink-0" style={{ background: "rgba(160,201,255,0.15)" }}>
              <span className="material-symbols-outlined" style={{ fontSize: 19, color: "#a0c9ff" }}>hub</span>
            </span>
            <span className="text-left leading-tight">
              <span className="block text-[10px] uppercase tracking-widest" style={{ color: "rgba(160,201,255,0.7)" }}>To</span>
              <span className="block text-sm font-semibold" style={{ color: "#cfe4ff" }}>Operations Coordinator</span>
            </span>
          </div>
        </div>
      </div>

      <p className="text-center text-xs mb-8 mt-5" style={{ color: "rgba(255,255,255,0.5)" }}>
        Illustrative example — a sample career switch, not a real customer.
      </p>

      {/* Shared keyword row — staggers in when the section arrives */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <span className="text-[11px] font-bold uppercase tracking-widest mr-1" style={{ color: "rgba(255,255,255,0.55)" }}>
          Target role scans for:
        </span>
        {KEYWORDS.map((k, i) => (
          <span
            key={k}
            className="text-[12px] px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(160,201,255,0.1)",
              border: "1px solid rgba(160,201,255,0.25)",
              color: "#a0c9ff",
              opacity: started ? 1 : 0,
              transform: started ? "translateY(0) scale(1)" : "translateY(6px) scale(0.92)",
              transition: `opacity 0.45s ease ${0.1 + i * 0.1}s, transform 0.45s ease ${0.1 + i * 0.1}s`,
            }}
          >
            {k}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        {/* BEFORE */}
        <div
          className="lift-card rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: "rgba(28,12,15,0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(239,68,68,0.25)",
          }}
        >
          <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: "1px solid rgba(239,68,68,0.12)" }}>
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-400">Before — generic language</span>
            <span className="material-symbols-outlined text-red-400" style={{ fontSize: 16 }}>warning</span>
          </div>

          {/* ATS score + keyword status */}
          <div className="flex items-center justify-between px-5 py-4" style={{ background: "rgba(239,68,68,0.06)", borderBottom: "1px solid rgba(239,68,68,0.1)" }}>
            <div className="flex items-baseline gap-1.5">
              <span className="font-geist font-black" style={{ fontSize: 30, color: "#f87171", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{bScore}</span>
              <span className="text-sm font-bold" style={{ color: "rgba(248,113,113,0.55)" }}>/100</span>
              <span className="text-[9px] uppercase tracking-widest ml-1.5 self-center" style={{ color: "rgba(255,255,255,0.4)" }}>ATS score</span>
            </div>
            <div className="text-right">
              <div className="text-[12px] font-bold text-red-300">0 of 4 keywords</div>
              <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>Filtered before a human sees it</div>
            </div>
          </div>

          <div className="p-5 flex-1">
            <div className="mb-4">
              <div className="font-geist font-bold text-white">Jordan Bennett</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Front Desk Supervisor · chronological resume</div>
            </div>
            <span className="sr-only">{BEFORE.join(" ")}</span>
            <TypedBullets list={BEFORE_SEGS} typed={bChars} total={BEFORE_TOTAL} icon="cancel" iconColor="rgba(248,113,113,0.6)" textColor="rgba(255,255,255,0.5)" />
          </div>
        </div>

        {/* AFTER — lights up when its turn comes */}
        <div
          className="lift-card rounded-2xl overflow-hidden flex flex-col liquid-glass"
          style={{
            border: "1px solid rgba(160,201,255,0.35)",
            boxShadow: aActive ? "0 0 62px rgba(160,201,255,0.28)" : "0 0 40px rgba(160,201,255,0.1)",
            transition: "box-shadow 0.6s ease",
          }}
        >
          <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: "1px solid rgba(160,201,255,0.14)" }}>
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#a0c9ff" }}>After — career-switch narrative</span>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: "#a0c9ff" }}>check_circle</span>
          </div>

          {/* ATS score + keyword status */}
          <div className="flex items-center justify-between px-5 py-4" style={{ background: "rgba(160,201,255,0.08)", borderBottom: "1px solid rgba(160,201,255,0.12)" }}>
            <div className="flex items-baseline gap-1.5">
              <span className="stat-num font-geist font-black" style={{ fontSize: 30, lineHeight: 1 }}>{aScore}</span>
              <span className="text-sm font-bold" style={{ color: "rgba(160,201,255,0.6)" }}>/100</span>
              <span className="text-[9px] uppercase tracking-widest ml-1.5 self-center" style={{ color: "rgba(255,255,255,0.4)" }}>ATS score</span>
            </div>
            <div className="text-right">
              <div className="text-[12px] font-bold" style={{ color: "#cfe4ff" }}>{matched} of 4 keywords</div>
              <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>Passes — a recruiter reads it</div>
            </div>
          </div>

          <div className="p-5 flex-1">
            <div className="mb-4">
              <div className="font-geist font-bold text-white">Jordan Bennett</div>
              <div className="text-xs" style={{ color: "#a0c9ff" }}>Operations Coordinator · hybrid, skills-led</div>
            </div>
            <span className="sr-only">{AFTER.map((segs) => segs.map((s) => s.t).join("")).join(" ")}</span>
            <TypedBullets list={AFTER} typed={aChars} total={AFTER_TOTAL} icon="check" iconColor="#a0c9ff" textColor="rgba(255,255,255,0.85)" />
          </div>
        </div>
      </div>

      {/* The mechanism — kept brief, and no longer the final beat (so the
          section doesn't read as a conclusion people close the tab on). */}
      <p className="text-center text-[13px] mt-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "58ch", margin: "1.75rem auto 0" }}>
        An ATS scans each posting for the exact terms a role expects, then ranks resumes by how many they hit.
        Same career, same facts — only the language changed.
      </p>

      {/* ── Seam into the offer ──────────────────────────────────────────────
          This is where engaged readers were leaving (right after the proof,
          before pricing). Carry the momentum: reframe as a repeatable system,
          reassure with honest risk-reversal, then pull them into the offer. */}
      <div
        className="relative max-w-2xl mx-auto mt-12 rounded-2xl px-8 py-9 text-center liquid-glass overflow-hidden"
        style={{ border: "1px solid rgba(160,201,255,0.28)", boxShadow: "0 0 44px rgba(160,201,255,0.1)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(160,201,255,0.08) 0%, transparent 60%)" }}
          aria-hidden="true"
        />

        <h3 className="font-geist font-black leading-snug relative z-10" style={{ fontSize: "clamp(22px, 3.2vw, 30px)" }}>
          This isn&rsquo;t a one-off rewrite.{" "}
          <span style={{ color: "#a0c9ff" }}>It&rsquo;s a system you run on your own experience.</span>
        </h3>
        <p className="text-sm md:text-base leading-relaxed mt-4 relative z-10" style={{ color: "#c0c7d3", maxWidth: "46ch", margin: "1rem auto 0" }}>
          The 50 prompts, templates, and built-in ATS Checker do the translation for you — for every role you
          apply to, as many times as you need.
        </p>

        {/* Honest reassurance — risk reversal + what they get. No fabricated proof. */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-6 relative z-10">
          {[
            { icon: "verified_user", text: "7-day money-back" },
            { icon: "bolt", text: "Instant download" },
            { icon: "workspace_premium", text: "Works for any field" },
          ].map(({ icon, text }) => (
            <span key={text} className="flex items-center gap-1.5 text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: "#a0c9ff" }}>{icon}</span>
              {text}
            </span>
          ))}
        </div>

        {/* Send engaged readers into the interactive preview to explore the system */}
        <Link
          href="/preview"
          className="group inline-flex items-center gap-2 mt-8 px-9 py-4 rounded-xl font-bold bg-white transition-all hover:scale-[1.02] relative z-10"
          style={{ color: "#000", boxShadow: "0 8px 30px rgba(0,0,0,0.35)" }}
        >
          See what&rsquo;s included in the system
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{ fontSize: 18 }}>arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
