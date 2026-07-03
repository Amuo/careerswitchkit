"use client";

// Mobile / tablet "how it works" — a self-playing product demo (shown below `lg`,
// where the desktop SystemDashboard can only sideways-scroll). It re-tells the
// desktop dashboard's exact journey with the same real data: Map -> Build ->
// Optimize (ATS 23 -> 87) -> Apply (verified, deployment-ready). Each stage
// PERFORMS its process — the Map line types itself, the CV assembles, the ATS
// score climbs from a red low to a green high — then hands off to the next.
//
// Robustness (the hard-won reduce-motion rule): state initialises to the FINISHED
// frame, so server-render / JS-off render the verified payoff (nothing is ever
// hidden behind the animation). Like the desktop dashboard, it plays regardless
// of the OS Reduce-Motion setting — that's a deliberate call (see `reduced`).

import { useCallback, useEffect, useRef, useState } from "react";

const ACCENT = "#3792E8";
const HIGHLIGHT = "#a0c9ff";
const RED = "#f87171";
const GREEN = "#4ade80";

const STAGES = [
  { n: "01", icon: "map", title: "Map your transfer" },
  { n: "02", icon: "construction", title: "Build your materials" },
  { n: "03", icon: "analytics", title: "Optimize & score" },
  { n: "04", icon: "rocket_launch", title: "Apply with proof" },
];

// Beat durations (ms) — each is long enough for its inner process to finish.
const T = [3000, 2900, 3800, 900];

const kw: React.CSSProperties = {
  background: "rgba(160,201,255,0.18)",
  color: "#dbeafe",
  fontWeight: 600,
  padding: "0 4px",
  borderRadius: 4,
};

export default function SystemJourneyMobile() {
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const started = useRef(false);

  // Initialise to the FINISHED state → correct static fallback for SSR / JS-off.
  const [step, setStep] = useState(3); // 0..3 = active beat; 3 = verified finale
  const [done, setDone] = useState(true);

  // Plays regardless of OS Reduce Motion, like the desktop dashboard, because iOS
  // Low Power Mode silently enables it for many phone users. Flip to detect the
  // media query if we'd rather honour it. Still visible-by-default safe.
  const reduced = false;

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const play = useCallback(() => {
    clearTimers();
    setDone(false);
    setStep(0);
    const marks: [number, number][] = [
      [T[0], 1],
      [T[0] + T[1], 2],
      [T[0] + T[1] + T[2], 3],
    ];
    marks.forEach(([t, s]) => timers.current.push(setTimeout(() => setStep(s), t)));
    timers.current.push(setTimeout(() => setDone(true), T[0] + T[1] + T[2] + T[3]));
  }, []);

  // Rewind to the first beat and play once when scrolled into view.
  useEffect(() => {
    setStep(0);
    setDone(false);
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      started.current = true;
      play();
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          play();
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimers();
    };
  }, [play]);

  const replay = () => {
    started.current = true;
    play();
  };

  const beatStyle = (i: number): React.CSSProperties => ({
    position: "absolute",
    inset: 0,
    padding: "22px 20px",
    opacity: step === i ? 1 : 0,
    transform: step === i ? "translateY(0)" : "translateY(8px)",
    transition: reduced ? "none" : "opacity 0.5s ease, transform 0.5s ease",
    pointerEvents: step === i ? "auto" : "none",
  });

  return (
    <div
      ref={rootRef}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(12,12,32,0.72)",
        border: "1px solid rgba(55,146,232,0.18)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* ── Title bar (app-window chrome, echoes the desktop dashboard) ── */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <span className="text-[11px] font-bold tracking-wide" style={{ color: "rgba(255,255,255,0.75)" }}>
          System Dashboard
        </span>
        <span
          className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest"
          style={{ color: done ? GREEN : HIGHLIGHT }}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${done ? "" : "animate-pulse"}`}
            style={{ background: done ? GREEN : HIGHLIGHT }}
          />
          {done ? "Ready" : "Live"}
        </span>
      </div>

      {/* ── Screen: the active beat, cross-fading ── */}
      <div className="relative" style={{ minHeight: 306 }}>
        <div style={beatStyle(0)}>
          <MapBeat active={step === 0} />
        </div>
        <div style={beatStyle(1)}>
          <BuildBeat active={step === 1} />
        </div>
        <div style={beatStyle(2)}>
          <OptimizeBeat active={step === 2} />
        </div>
        <div style={beatStyle(3)} className="flex flex-col items-center justify-center text-center">
          <ApplyBeat />
        </div>
      </div>

      {/* ── Progress rail ── */}
      <div className="px-4 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
        <div className="flex items-center justify-between">
          {STAGES.map((s, i) => {
            const isActive = step === i;
            const isDoneStep = i < step || (done && i <= step);
            const color = isActive ? HIGHLIGHT : isDoneStep ? ACCENT : "rgba(255,255,255,0.3)";
            return (
              <div key={s.n} className="flex items-center" style={{ flex: i < STAGES.length - 1 ? 1 : "0 0 auto" }}>
                <div className="flex flex-col items-center gap-1" style={{ width: 46 }}>
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                    style={{
                      background: isActive || isDoneStep ? "rgba(55,146,232,0.14)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${isActive ? "rgba(160,201,255,0.5)" : isDoneStep ? "rgba(55,146,232,0.35)" : "rgba(255,255,255,0.08)"}`,
                      boxShadow: isActive ? "0 0 16px rgba(55,146,232,0.35)" : "none",
                      transition: "all 0.4s ease",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 17, color }}>
                      {isDoneStep && !isActive ? "check" : s.icon}
                    </span>
                  </div>
                  <span className="text-[8.5px] font-bold uppercase tracking-wider text-center leading-tight" style={{ color }}>
                    {s.title.split(" ")[0]}
                  </span>
                </div>
                {i < STAGES.length - 1 && (
                  <div className="flex-1 h-px mx-1 -mt-4" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="h-full" style={{ width: i < step ? "100%" : "0%", background: ACCENT, transition: "width 0.5s ease" }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {done && (
          <div className="flex justify-center mt-4">
            <button
              onClick={replay}
              className="inline-flex items-center gap-1.5 text-[12px] font-medium px-4 py-2 rounded-full transition-colors"
              style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>replay</span>
              Replay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Beat 1 — Map: the translated line types itself out ───────────────────────
const AFTER_SEGMENTS = [
  { t: "Directed an 8-person guest-operations team, coordinating " },
  { t: "cross-functional", hl: true },
  { t: " workflows to maintain " },
  { t: "service SLAs", hl: true },
  { t: "." },
];
const AFTER_LEN = AFTER_SEGMENTS.reduce((n, s) => n + s.t.length, 0);

function MapBeat({ active }: { active: boolean }) {
  const [showBefore, setShowBefore] = useState(false);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (!active) return;
    setShowBefore(false);
    setTyped(0);
    let raf = 0;
    const t1 = setTimeout(() => setShowBefore(true), 150);
    const t2 = setTimeout(() => {
      const start = performance.now();
      const dur = 1800;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        setTyped(Math.round(AFTER_LEN * p));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  const typing = typed < AFTER_LEN;
  let cum = 0;

  return (
    <>
      <BeatLabel n="01" title="Map your transfer" />
      <div
        className="rounded-xl p-3 mb-3"
        style={{
          background: "rgba(248,113,113,0.06)",
          border: "1px solid rgba(248,113,113,0.2)",
          opacity: showBefore ? 1 : 0,
          transform: showBefore ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <div className="text-[9px] font-bold uppercase tracking-widest mb-1.5" style={{ color: RED }}>Before — generic</div>
        <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
          Managed the front desk team and handled daily check-in operations.
        </p>
      </div>

      <div className="flex justify-center mb-3" style={{ opacity: showBefore ? 1 : 0, transition: "opacity 0.4s ease" }}>
        <span className="material-symbols-outlined" style={{ fontSize: 20, color: "rgba(255,255,255,0.35)" }}>arrow_downward</span>
      </div>

      <div
        className="rounded-xl p-3"
        style={{ background: "rgba(160,201,255,0.07)", border: "1px solid rgba(160,201,255,0.3)", minHeight: 92 }}
      >
        <div className="text-[9px] font-bold uppercase tracking-widest mb-1.5" style={{ color: HIGHLIGHT }}>After — translated</div>
        <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
          {AFTER_SEGMENTS.map((seg, i) => {
            const start = cum;
            cum += seg.t.length;
            const shown = Math.max(0, Math.min(seg.t.length, typed - start));
            if (shown <= 0) return null;
            const text = seg.t.slice(0, shown);
            return seg.hl ? <span key={i} style={kw}>{text}</span> : <span key={i}>{text}</span>;
          })}
          {typing && showBefore && (
            <span className="animate-pulse" style={{ color: HIGHLIGHT, fontWeight: 700 }}>▍</span>
          )}
        </p>
      </div>
    </>
  );
}

// ─── Beat 2 — Build: the CV assembles line-by-line, template settles ──────────
const CV_LINES = [
  { w: "55%", accent: true, big: true }, // name
  { w: "35%" },                          // title
  { gap: true },
  { w: "94%" },
  { w: "88%" },
  { w: "80%" },
  { w: "28%", accent: true },            // section label
  { w: "90%" },
  { w: "70%" },
];
const TEMPLATES = ["One-Page", "Hybrid", "Two-Page"];

function BuildBeat({ active }: { active: boolean }) {
  const [revealed, setRevealed] = useState(0);
  const [tpl, setTpl] = useState(0);
  const [labelIn, setLabelIn] = useState(false);

  useEffect(() => {
    if (!active) return;
    setRevealed(0);
    setLabelIn(false);
    const timers: ReturnType<typeof setTimeout>[] = [];
    // "consult templates" — cycle the tabs a couple times, then settle on One-Page
    [0, 1, 2, 0, 1, 0].forEach((v, i) => timers.push(setTimeout(() => setTpl(v), 180 * i)));
    // assemble the CV lines top-to-bottom
    for (let i = 1; i <= CV_LINES.length; i++) timers.push(setTimeout(() => setRevealed(i), 220 * i + 400));
    timers.push(setTimeout(() => setLabelIn(true), 220 * CV_LINES.length + 700));
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return (
    <>
      <BeatLabel n="02" title="Build your materials" />

      {/* Template tabs being consulted */}
      <div className="flex items-center justify-center gap-1.5 mb-3">
        {TEMPLATES.map((name, i) => (
          <span
            key={name}
            className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
            style={{
              color: tpl === i ? HIGHLIGHT : "rgba(255,255,255,0.35)",
              background: tpl === i ? "rgba(55,146,232,0.14)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${tpl === i ? "rgba(160,201,255,0.4)" : "rgba(255,255,255,0.06)"}`,
              transition: "all 0.2s ease",
            }}
          >
            {name}
          </span>
        ))}
      </div>

      <div
        className="rounded-xl p-4 mx-auto"
        style={{
          maxWidth: 258,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
        }}
      >
        {CV_LINES.map((l, i) =>
          l.gap ? (
            <div key={i} style={{ height: 10 }} />
          ) : (
            <div
              key={i}
              className="rounded-full mb-2"
              style={{
                height: l.big ? 9 : 6,
                width: revealed > i ? l.w : "0%",
                opacity: revealed > i ? 1 : 0,
                background: l.accent ? "rgba(160,201,255,0.5)" : "rgba(255,255,255,0.12)",
                transition: "width 0.4s ease, opacity 0.3s ease",
              }}
            />
          )
        )}
      </div>

      <div
        className="flex items-center justify-center gap-1.5 mt-4 text-[11px] font-medium"
        style={{ color: HIGHLIGHT, opacity: labelIn ? 1 : 0, transform: labelIn ? "translateY(0)" : "translateY(4px)", transition: "opacity 0.4s ease, transform 0.4s ease" }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 15 }}>check_circle</span>
        One-Page CV — ATS-optimized layout
      </div>
    </>
  );
}

// ─── Beat 3 — Optimize: low red score -> counts up to high green, ✗ flip to ✓ ──
function OptimizeBeat({ active }: { active: boolean }) {
  const [score, setScore] = useState(23);

  useEffect(() => {
    if (!active) return;
    setScore(23); // start on the bad initial scan
    let raf = 0;
    const startCount = setTimeout(() => {
      const start = performance.now();
      const dur = 2000;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setScore(Math.round(23 + (87 - 23) * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, 950); // hold on the red 23 for a beat first
    return () => {
      clearTimeout(startCount);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  const scoreColor = score >= 55 ? GREEN : RED;
  const good1 = score >= 45;
  const good2 = score >= 68;

  const Check = ({ good, bad, ok }: { good: boolean; bad: string; ok: string }) => (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-lg"
      style={{
        background: good ? "rgba(74,222,128,0.08)" : "rgba(248,113,113,0.08)",
        border: `1px solid ${good ? "rgba(74,222,128,0.25)" : "rgba(248,113,113,0.22)"}`,
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: 16, color: good ? GREEN : RED }}>
        {good ? "check_circle" : "cancel"}
      </span>
      <span className="text-[12px] font-medium" style={{ color: good ? "#bbf7d0" : "#fecaca" }}>
        {good ? ok : bad}
      </span>
    </div>
  );

  return (
    <>
      <BeatLabel n="03" title="Optimize & score" />
      <div className="text-center mb-4">
        <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
          ATS Compatibility
        </div>
        <div className="font-geist font-black leading-none" style={{ fontSize: 56, color: scoreColor, transition: "color 0.5s ease" }}>
          {score}
          <span className="text-lg font-normal" style={{ color: "rgba(255,255,255,0.4)" }}>/100</span>
        </div>
      </div>
      <div className="rounded-full h-2.5 overflow-hidden mb-5" style={{ background: "rgba(255,255,255,0.08)" }}>
        <div
          className="h-full rounded-full"
          style={{ width: `${score}%`, background: `linear-gradient(90deg, ${RED}, ${scoreColor})`, transition: "width 0.2s linear" }}
        />
      </div>
      <div className="space-y-2">
        <Check good={good1} bad="No keywords" ok="Keyword match" />
        <Check good={good2} bad="No metrics" ok="Impact metrics" />
      </div>
    </>
  );
}

// ─── Beat 4 — Apply: verified, deployment ready (kept as-is) ───────────────────
function ApplyBeat() {
  return (
    <>
      <div
        className="relative flex items-center justify-center w-20 h-20 rounded-full mb-5 animate-pulse"
        style={{ background: "rgba(160,201,255,0.15)", border: "2px solid rgba(160,201,255,0.5)", boxShadow: "0 0 40px rgba(160,201,255,0.3)" }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 44, color: HIGHLIGHT, fontVariationSettings: "'FILL' 1" }}>verified</span>
        <span
          className="absolute -right-2 -bottom-1 flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: "#22c55e", color: "#04140a", border: "2px solid #0c0c20" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 11 }}>done_all</span>87/100
        </span>
      </div>
      <div className="font-geist font-black text-white mb-2" style={{ fontSize: 24 }}>Deployment Ready</div>
      <div
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium mb-4"
        style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: GREEN }}
      >
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GREEN }} />
        Ready to Apply
      </div>
      <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "34ch" }}>
        Your experience is reframed for the new field — specific, credible, and built for the role.
      </p>
    </>
  );
}

function BeatLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-[10px] font-bold tracking-widest" style={{ color: ACCENT }}>STAGE {n}</span>
      <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
      <span className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>{title}</span>
    </div>
  );
}
