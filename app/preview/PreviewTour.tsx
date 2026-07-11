"use client";

import { useState } from "react";
import ScoreGauge from "./ScoreGauge";

/* ────────────────────────────────────────────────────────────────────────
   The interactive walkthrough — the site's 4-stage system spine
   (Map → Build → Optimize → Apply), each stage revealing the real files,
   the concrete actions, and a small visual of what that stage produces.
   Click a stage on the rail, or use Back / Next.
   ──────────────────────────────────────────────────────────────────────── */

interface Stage {
  phase: string;
  title: string;
  titleAccent: string;
  time: string;
  icon: string;
  summary: string;
  actions: { icon: string; text: string }[];
  files: string[];
  visual: "keywords" | "cv" | "score" | "apply";
}

const STAGES: Stage[] = [
  {
    phase: "Stage 01 · Prepare",
    title: "Map your",
    titleAccent: "transfer.",
    time: "≈ 45 min",
    icon: "map",
    summary:
      "Before you write a word, you decode the role. Read 10–15 postings, pull every keyword that repeats, and map your existing experience onto what the new field is actually asking for.",
    actions: [
      { icon: "search", text: "Extract the hard requirements, soft skills, and repeated keywords from real job posts." },
      { icon: "compare_arrows", text: "Map your background to the role — including the non-obvious overlaps you'd miss yourself." },
      { icon: "translate", text: "Learn to name your experience in the target field's language, not your old one." },
    ],
    files: ["Start Here (File 00)", "AI Prompt Pack · Prompts 1–8"],
    visual: "keywords",
  },
  {
    phase: "Stage 02 · Build",
    title: "Build your",
    titleAccent: "materials.",
    time: "≈ 2 hours",
    icon: "description",
    summary:
      "You open the Hybrid CV — skills-led before chronology, the right shape for a switcher — and write a résumé that shows how your past applies to where you're going. Then the cover letter that names the switch head-on.",
    actions: [
      { icon: "badge", text: "Lead with a skills-first Hybrid CV built for people changing fields." },
      { icon: "edit_note", text: "Rewrite each bullet for outcomes and reframe past work in the new field's terms." },
      { icon: "mail", text: "Pick the cover-letter scenario that fits — standard, career gap, or referral." },
    ],
    files: ["3 CV templates", "3 cover-letter templates", "Prompts 9–21"],
    visual: "cv",
  },
  {
    phase: "Stage 03 · Optimize",
    title: "Optimize &",
    titleAccent: "score.",
    time: "≈ 15 min",
    icon: "verified",
    summary:
      "You run your résumé through the ATS Score Checker before every application. Below 70? Don't send it. Find the missing keywords, place them where they fit naturally, and push past 75.",
    actions: [
      { icon: "bolt", text: "Score your résumé against the exact job posting — instantly, in your browser." },
      { icon: "flag", text: "Fix each flag it raises: keywords, metrics, structure, switch-framing." },
      { icon: "trending_up", text: "Re-check until you clear 75+ — the line where a human, not a filter, reads it." },
    ],
    files: ["ATS Score Checker (File 06)", "Prompts 27–33"],
    visual: "score",
  },
  {
    phase: "Stage 04 · Apply",
    title: "Apply with",
    titleAccent: "proof.",
    time: "≈ 15 min",
    icon: "send",
    summary:
      "You read the completed example — a real retail-to-operations switch — as a calibration point, not a template. Then you apply, knowing your materials say what a hiring manager needs to hear.",
    actions: [
      { icon: "fact_check", text: "Calibrate your draft against a finished, real-world switch application." },
      { icon: "checklist", text: "Run the final checklist so nothing weak goes out the door." },
      { icon: "rocket_launch", text: "Apply with materials that translate your background — not bury it." },
    ],
    files: ["Completed example · retail → operations"],
    visual: "apply",
  },
];

const SEED_KEYWORDS = [
  "inventory management", "vendor coordination", "process improvement",
  "supply chain", "stakeholder", "KPIs", "cross-functional", "logistics",
];

const APPLY_CHECKS = [
  "Résumé scores 75+ on the target role",
  "Summary names the switch, confidently",
  "Every bullet leads with an outcome",
  "Cover letter answers “why this move?”",
];

function StageVisual({ kind }: { kind: Stage["visual"] }) {
  if (kind === "keywords") {
    return (
      <div className="pv-visual">
        <div className="pv-eyebrow" style={{ marginBottom: 14 }}>
          Keywords pulled from the posting
        </div>
        <div className="flex flex-wrap gap-2">
          {SEED_KEYWORDS.map((k, i) => (
            <span key={k} className="pv-kw seed" style={{ animationDelay: `${i * 70}ms` }}>{k}</span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-sm" style={{ color: "#a0c9ff" }}>
          <span className="material-symbols-outlined" style={{ fontSize: 17 }}>arrow_downward</span>
          <span style={{ color: "#c0c7d3" }}>These become your tailoring checklist for everything else.</span>
        </div>
      </div>
    );
  }
  if (kind === "cv") {
    return (
      <div className="pv-visual">
        <div className="pv-eyebrow" style={{ marginBottom: 14 }}>
          Skills-led Hybrid CV
        </div>
        <div className="pv-wire">
          <div className="pv-wire-line accent" style={{ width: "55%", height: 11, animationDelay: "0ms" }} />
          <div className="pv-wire-line" style={{ width: "32%", marginBottom: 14, animationDelay: "80ms" }} />
          <div className="pv-wire-line accent" style={{ width: "22%", animationDelay: "160ms" }} />
          <div className="flex gap-1.5 mb-3.5 mt-1">
            {["Inventory", "Vendors", "KPIs", "Excel"].map((t, i) => (
              <span key={t} className="pv-kw seed" style={{ fontSize: 10, padding: "2px 8px", animationDelay: `${200 + i * 60}ms` }}>{t}</span>
            ))}
          </div>
          <div className="pv-wire-line accent" style={{ width: "26%", animationDelay: "440ms" }} />
          <div className="pv-wire-line" style={{ width: "90%", animationDelay: "500ms" }} />
          <div className="pv-wire-line" style={{ width: "84%", animationDelay: "560ms" }} />
          <div className="pv-wire-line" style={{ width: "70%", animationDelay: "620ms" }} />
        </div>
      </div>
    );
  }
  if (kind === "score") {
    return (
      <div className="pv-visual" style={{ alignItems: "center", textAlign: "center" }}>
        <ScoreGauge fill={94} display={94} color="#22C55E" size={120} numberSize={34} className="mx-auto" />
        <div className="mt-3 flex items-center justify-center gap-2 text-sm">
          <span style={{ color: "rgba(255,255,255,0.4)", textDecoration: "line-through" }}>19</span>
          <span className="material-symbols-outlined" style={{ fontSize: 16, color: "#a0c9ff" }}>arrow_forward</span>
          <span style={{ color: "#86efac", fontWeight: 600 }}>Likely to pass ATS</span>
        </div>
        {/* SmoothScroll (mounted globally in layout) intercepts this hash link. */}
        <a
          href="#ats-checker"
          className="pv-chip mt-4 mx-auto"
          style={{ cursor: "pointer", borderColor: "rgba(160,201,255,0.35)", color: "#fff" }}
        >
          <span className="material-symbols-outlined">bolt</span>
          Try the live checker below
        </a>
      </div>
    );
  }
  // apply
  return (
    <div className="pv-visual">
      <div className="pv-eyebrow" style={{ marginBottom: 14 }}>
        Ready-to-send checklist
      </div>
      <div className="flex flex-col gap-2.5">
        {APPLY_CHECKS.map((c, i) => (
          <div key={c} className="flex items-center gap-3 pv-kw seed" style={{ borderRadius: 10, padding: "9px 12px", animationDelay: `${i * 90}ms` }}>
            <span className="material-symbols-outlined" style={{ fontSize: 17, color: "#86efac" }}>check_circle</span>
            <span style={{ color: "#e2e0fa", fontSize: 13, textDecoration: "none" }}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PreviewTour() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <div>
      <div className="pv-tour">
        {/* Left rail */}
        <div className="pv-rail" role="tablist" aria-label="System stages">
          {STAGES.map((s, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`pv-stage ${active === i ? "active" : ""} ${i < active ? "done" : ""}`}
            >
              <span className="pv-stage-num">
                {i < active ? <span className="material-symbols-outlined" style={{ fontSize: 18 }}>check</span> : i + 1}
              </span>
              <span>
                <span className="pv-stage-phase" style={{ display: "block" }}>{s.phase.split("·")[1].trim()}</span>
                <span className="pv-stage-title">{s.title} {s.titleAccent}</span>
                <span className="pv-stage-time" style={{ display: "block" }}>{s.time}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Right panel */}
        <div className="pv-card pv-panel">
          <div key={active} className="pv-panel-inner">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left column of panel: the words */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#a0c9ff" }}>{stage.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a0c9ff" }}>
                    {stage.phase}
                  </span>
                </div>
                <h3 className="font-geist font-black text-3xl leading-tight mb-4">
                  {stage.title} <span style={{ color: "#a0c9ff" }}>{stage.titleAccent}</span>
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#c0c7d3" }}>
                  {stage.summary}
                </p>

                <div className="mb-6">
                  {stage.actions.map((a) => (
                    <div key={a.text} className="pv-check-row">
                      <span className="pv-check-ico"><span className="material-symbols-outlined">{a.icon}</span></span>
                      <span className="text-sm leading-snug" style={{ color: "#e2e0fa" }}>{a.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {stage.files.map((f) => (
                    <span key={f} className="pv-chip">
                      <span className="material-symbols-outlined">folder_open</span>
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right column of panel: the visual */}
              <StageVisual kind={stage.visual} />
            </div>

            {/* Panel footer: progress + nav */}
            <div className="flex items-center justify-between mt-8 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-1.5">
                {STAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to stage ${i + 1}`}
                    style={{
                      width: i === active ? 26 : 8,
                      height: 8,
                      borderRadius: 999,
                      border: "none",
                      cursor: "pointer",
                      background: i === active ? "#a0c9ff" : "rgba(255,255,255,0.18)",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActive((a) => Math.max(0, a - 1))}
                  disabled={active === 0}
                  className="pv-chip"
                  style={{ cursor: active === 0 ? "not-allowed" : "pointer", opacity: active === 0 ? 0.4 : 1 }}
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                  Back
                </button>
                <button
                  onClick={() => setActive((a) => Math.min(STAGES.length - 1, a + 1))}
                  disabled={active === STAGES.length - 1}
                  className="pv-chip"
                  style={{
                    cursor: active === STAGES.length - 1 ? "not-allowed" : "pointer",
                    opacity: active === STAGES.length - 1 ? 0.4 : 1,
                    borderColor: "rgba(160,201,255,0.35)",
                    color: "#fff",
                  }}
                >
                  Next
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
