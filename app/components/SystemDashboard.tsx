"use client";

import { useState } from "react";

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
    label: "Stage 1 — Map your transfer",
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
    label: "Stage 2 — Build your materials",
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
    label: "Stage 3 — Optimize and score",
    status: "Optimizing for Scanners",
    defaultFile: "ATS Compatibility Engine",
    defaultView: "ats",
    files: [
      { name: "AI Prompt Pack",          description: "ChatGPT/Claude templates.",   icon: "auto_awesome", view: "prompt" },
      { name: "ATS Compatibility Engine", description: "Final compatibility engine.", icon: "checklist",    view: "ats"    },
    ],
  },
  {
    id: "stage04",
    icon: "rocket_launch",
    label: "Stage 4 — Apply with proof",
    status: "Ready for Deployment",
    defaultFile: "Verified Success",
    defaultView: "stage04",
    files: [
      { name: "Verified Success", description: "Final deployment reference.", icon: "task_alt", view: "stage04" },
    ],
  },
];

// ─── Stage 01: Transfer Map ───────────────────────────────────────────────────

function Stage01Content() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-white/60 font-bold text-xs uppercase tracking-widest mb-6">System Blueprint: Transfer Map</h3>
      <div className="flex-1 rounded-2xl border border-white/10 bg-[#0a0a16] overflow-hidden relative node-map-bg flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* Animated SVG connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <path className="animate-[dash_20s_linear_infinite]" d="M 200 250 C 300 250, 400 150, 500 150" fill="none" stroke="rgba(160,201,255,0.3)" strokeDasharray="4,4" strokeWidth="2" />
            <path className="animate-[dash_20s_linear_infinite]" d="M 200 250 C 300 250, 400 350, 500 350" fill="none" stroke="rgba(160,201,255,0.3)" strokeDasharray="4,4" strokeWidth="2" />
            <path className="animate-[dash_20s_linear_infinite]" d="M 500 150 C 600 150, 700 250, 800 250" fill="none" stroke="rgba(160,201,255,0.3)" strokeDasharray="4,4" strokeWidth="2" />
            <path className="animate-[dash_20s_linear_infinite]" d="M 500 350 C 600 350, 700 250, 800 250" fill="none" stroke="rgba(160,201,255,0.3)" strokeDasharray="4,4" strokeWidth="2" />
            <circle cx="200" cy="250" r="4" fill="#a0c9ff" />
            <circle cx="500" cy="150" r="4" fill="#a0c9ff" />
            <circle cx="500" cy="350" r="4" fill="#a0c9ff" />
            <circle cx="800" cy="250" r="4" fill="#a0c9ff" />
          </svg>

          {/* Node: Past Experience */}
          <div className="absolute z-10 w-48 p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md shadow-xl text-center glow-pulse" style={{ left: "10%", top: "45%" }}>
            <div className="w-10 h-10 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-2 border border-white/10">
              <span className="material-symbols-outlined text-white/60 text-sm">history</span>
            </div>
            <div className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Past Experience</div>
            <div className="text-[10px] text-white/40">Raw unstructured data</div>
          </div>

          {/* Node: Skill Extraction (primary / glowing) */}
          <div className="absolute z-10 w-48 p-4 rounded-xl text-center" style={{ left: "45%", top: "20%", border: "1px solid rgba(160,201,255,0.3)", background: "rgba(160,201,255,0.1)", backdropFilter: "blur(12px)", boxShadow: "0 0 30px rgba(160,201,255,0.15)" }}>
            <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2" style={{ background: "rgba(160,201,255,0.2)", border: "1px solid rgba(160,201,255,0.3)" }}>
              <span className="material-symbols-outlined text-sm" style={{ color: "#a0c9ff" }}>transform</span>
            </div>
            <div className="text-xs font-bold mb-1 uppercase tracking-wider" style={{ color: "#a0c9ff" }}>Skill Extraction</div>
            <div className="text-[10px]" style={{ color: "rgba(160,201,255,0.7)" }}>Semantic mapping applied</div>
          </div>

          {/* Node: Impact Metrics */}
          <div className="absolute z-10 w-48 p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md shadow-xl text-center" style={{ left: "45%", top: "70%" }}>
            <div className="w-10 h-10 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-2 border border-white/10">
              <span className="material-symbols-outlined text-white/60 text-sm">trending_up</span>
            </div>
            <div className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Impact Metrics</div>
            <div className="text-[10px] text-white/40">Quantifiable outcomes</div>
          </div>

          {/* Node: Target Role Narrative (green) */}
          <div className="absolute z-10 w-48 p-4 rounded-xl text-center" style={{ right: "10%", top: "45%", border: "1px solid rgba(74,222,128,0.3)", background: "rgba(74,222,128,0.1)", backdropFilter: "blur(12px)", boxShadow: "0 0 30px rgba(74,222,128,0.15)" }}>
            <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2" style={{ background: "rgba(74,222,128,0.2)", border: "1px solid rgba(74,222,128,0.3)" }}>
              <span className="material-symbols-outlined text-sm" style={{ color: "#4ade80" }}>check_circle</span>
            </div>
            <div className="text-xs font-bold mb-1 uppercase tracking-wider" style={{ color: "#4ade80" }}>Target Role Narrative</div>
            <div className="text-[10px]" style={{ color: "rgba(74,222,128,0.7)" }}>Aligned to JD requirements</div>
          </div>
        </div>

        {/* Bottom overlay card */}
        <div className="absolute bottom-6 left-6 right-6 p-6 liquid-glass rounded-xl border border-white/10 z-20">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: "#a0c9ff" }}>Active Process</div>
              <div className="text-lg font-bold text-white">Semantic Transfer Mapping</div>
            </div>
            <span className="material-symbols-outlined" style={{ color: "#a0c9ff" }}>account_tree</span>
          </div>
        </div>
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
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-white/60 font-bold text-xs uppercase tracking-widest mb-6">Glassmorphic Blueprint: Architecture</h3>

      {/* ── One Page ── */}
      {view === "one-page" && (
        <div className="flex-1 flex items-center justify-center p-8 bg-[#0a0a16] rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0" style={GRID_BG} />
          {/* Wrapper centers wireframe+tooltip as a unit */}
          <div className="relative flex items-center z-10">
          <div className="cv-wireframe w-[340px] h-[480px] rounded-lg p-6 flex flex-col gap-4 bg-black/40 backdrop-blur-sm">
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
          </div>
          {/* Floating tooltip — inline sibling, not absolute, so both center together */}
          <div className="ml-4 w-48 p-4 liquid-glass rounded-xl border border-primary/20 shadow-2xl shrink-0">
            <div className="flex items-center gap-2 mb-2" style={{ color: "#a0c9ff" }}>
              <span className="material-symbols-outlined text-sm">view_agenda</span>
              <span className="text-xs font-bold uppercase tracking-widest">One-Page Focus</span>
            </div>
            <p className="text-[11px] text-white/70 leading-relaxed">Aggressive curation. Highlights only the most relevant transferrable skills for rapid ATS scanning.</p>
          </div>
          </div>{/* end wrapper */}
        </div>
      )}

      {/* ── Hybrid ── */}
      {view === "hybrid" && (
        <div className="flex-1 flex items-center justify-center p-8 bg-[#0a0a16] rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0" style={GRID_BG} />
          <div className="relative flex items-center z-10">
          <div className="cv-wireframe w-[400px] h-[480px] rounded-lg p-6 grid gap-6 bg-black/40 backdrop-blur-sm" style={{ gridTemplateColumns: "1fr 2fr" }}>
            {/* Sidebar column */}
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
            {/* Main column */}
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
          </div>
          <div className="ml-4 w-48 p-4 liquid-glass rounded-xl border border-primary/20 shadow-2xl shrink-0">
            <div className="flex items-center gap-2 mb-2" style={{ color: "#a0c9ff" }}>
              <span className="material-symbols-outlined text-sm">dashboard</span>
              <span className="text-xs font-bold uppercase tracking-widest">Hybrid Layout</span>
            </div>
            <p className="text-[11px] text-white/70 leading-relaxed">Balances skills-first sidebar with chronological narrative. Best for major career shifts.</p>
          </div>
          </div>{/* end wrapper */}
        </div>
      )}

      {/* ── Two Page ── */}
      {view === "two-page" && (
        <div className="flex-1 flex items-center justify-center p-8 bg-[#0a0a16] rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0" style={GRID_BG} />
          <div className="flex gap-4 relative z-10">
            {/* Page 1 */}
            <div className="cv-wireframe w-[260px] h-[360px] rounded-lg p-5 flex flex-col gap-3 bg-black/40 backdrop-blur-sm -rotate-2 origin-bottom-right transition-transform hover:rotate-0">
              <div className="w-24 h-3 bg-primary/40 rounded-full mx-auto mb-2" />
              <div className="w-32 h-1.5 bg-white/20 rounded-full mx-auto mb-4" />
              <div className="wire-block p-2"><div className="wire-text w-full" /><div className="wire-text w-[90%]" /></div>
              <div className="w-20 h-2 bg-white/30 rounded-full mt-2" />
              <div className="wire-block p-2"><div className="w-24 h-2 bg-white/40 rounded-full mb-2" /><div className="wire-text w-full" /><div className="wire-text w-full" /></div>
              <div className="wire-block p-2"><div className="w-20 h-2 bg-white/40 rounded-full mb-2" /><div className="wire-text w-full" /></div>
            </div>
            {/* Page 2 */}
            <div className="cv-wireframe w-[260px] h-[360px] rounded-lg p-5 flex flex-col gap-3 bg-black/40 backdrop-blur-sm rotate-2 origin-bottom-left transition-transform hover:rotate-0 translate-y-4">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Stage 03: Prompt Vault ───────────────────────────────────────────────────

function Stage03PromptContent() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-white/60 font-bold text-xs uppercase tracking-widest mb-6">AI Architecture: Prompt Vault</h3>
      <div className="flex-1 rounded-2xl border border-white/10 bg-[#0a0a16] p-6 flex gap-6 overflow-hidden">
        {/* Left: prompt menu */}
        <div className="w-1/3 flex flex-col gap-2 border-r border-white/10 pr-6 overflow-y-auto">
          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">System Prompts</div>
          <div className="px-3 py-2.5 rounded-lg cursor-pointer flex items-center justify-between" style={{ background: "rgba(160,201,255,0.1)", border: "1px solid rgba(160,201,255,0.2)" }}>
            <span className="text-xs font-bold" style={{ color: "#a0c9ff" }}>Semantic Rewrite Engine</span>
            <span className="material-symbols-outlined text-[14px]" style={{ color: "#a0c9ff", fontSize: 14 }}>arrow_forward_ios</span>
          </div>
          {["Achievement Quantifier", "Bullet Point Condenser", "JD Alignment Scanner", "Cover Letter Generator"].map((p) => (
            <div key={p} className="px-3 py-2.5 rounded-lg hover:bg-white/5 cursor-pointer flex items-center justify-between transition-colors">
              <span className="text-xs font-medium text-white/60">{p}</span>
            </div>
          ))}
        </div>
        {/* Right: code editor */}
        <div className="w-2/3 flex flex-col h-full relative">
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
        </div>
      </div>
    </div>
  );
}

// ─── Stage 03: ATS Engine ─────────────────────────────────────────────────────

function Stage03ATSContent() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-white/60 font-bold text-xs uppercase tracking-widest mb-6">ATS Compatibility Engine</h3>
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Before */}
        <div className="p-5 rounded-2xl" style={{ background: "rgba(248,113,113,0.05)", border: "1px solid rgba(248,113,113,0.2)" }}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Initial Scan</span>
            <div className="text-2xl font-black text-red-400 font-geist">23<span className="text-[10px] font-normal opacity-60">/100</span></div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-red-400/10">
              <span className="material-symbols-outlined text-red-400 text-sm">cancel</span>
              <span className="text-[11px] font-medium text-red-200">No keywords</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-red-400/10">
              <span className="material-symbols-outlined text-red-400 text-sm">cancel</span>
              <span className="text-[11px] font-medium text-red-200">No metrics</span>
            </div>
          </div>
        </div>
        {/* After */}
        <div className="p-5 rounded-2xl" style={{ background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.2)", boxShadow: "0 0 30px rgba(74,222,128,0.1)" }}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Kit Optimized</span>
            <div className="text-2xl font-black text-green-400 font-geist">87<span className="text-[10px] font-normal opacity-60">/100</span></div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-green-400/10">
              <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span className="text-[11px] font-medium text-green-200">Keyword Match</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-green-400/10">
              <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span className="text-[11px] font-medium text-green-200">Impact Metrics</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-2xl border border-white/10 bg-black/20 p-6 font-mono text-[13px] leading-relaxed overflow-hidden flex flex-col justify-center" style={{ color: "#c0c7d3" }}>
        <div className="text-white/40 mb-4">// System Output: Semantic Transformation</div>
        <div className="p-4 rounded-lg mb-4" style={{ background: "rgba(127,29,29,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
          <span className="text-red-400 block mb-1 text-xs font-bold uppercase tracking-wider">Previous:</span>
          <span className="opacity-80">&ldquo;Helped customers find products and managed the back stock room.&rdquo;</span>
        </div>
        <div className="flex justify-center mb-4">
          <span className="material-symbols-outlined text-white/30">arrow_downward</span>
        </div>
        <div className="p-4 rounded-lg" style={{ background: "rgba(20,83,45,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}>
          <span className="text-green-400 block mb-1 text-xs font-bold uppercase tracking-wider">Optimized Outcome:</span>
          <span className="opacity-90">&ldquo;Managed inventory lifecycle for high-volume retail operations, implementing a new restocking sequence that improved retrieval efficiency by 30%.&rdquo;</span>
        </div>
      </div>
    </div>
  );
}

// ─── Stage 04: Deployment Ready ───────────────────────────────────────────────

function Stage04Content() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-white/60 font-bold text-xs uppercase tracking-widest mb-6">System Status: Deployment</h3>
      <div className="flex-1 rounded-2xl overflow-hidden relative flex flex-col items-center justify-center p-8 text-center"
        style={{ border: "1px solid rgba(160,201,255,0.2)", background: "rgba(160,201,255,0.05)", boxShadow: "inset 0 0 100px rgba(160,201,255,0.05)" }}>
        {/* Radar rings */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[400px] h-[400px] rounded-full border border-primary/30 absolute" />
          <div className="w-[300px] h-[300px] rounded-full border border-primary/40 absolute" />
          <div className="w-[200px] h-[200px] rounded-full border border-primary/50 absolute animate-[spin_10s_linear_infinite] border-t-transparent" />
        </div>
        {/* Verified badge */}
        <div className="relative z-10 mb-8">
          <div className="w-28 h-28 mx-auto rounded-full flex items-center justify-center border-2 animate-pulse"
            style={{ background: "rgba(160,201,255,0.2)", backdropFilter: "blur(12px)", borderColor: "rgba(160,201,255,0.5)", boxShadow: "0 0 40px rgba(160,201,255,0.3)" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 60, color: "#a0c9ff", fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
          <div className="absolute -right-4 -bottom-2 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full border-2 shadow-lg flex items-center gap-1" style={{ borderColor: "#111124" }}>
            <span className="material-symbols-outlined" style={{ fontSize: 12 }}>done_all</span> 87/100 ATS Match
          </div>
        </div>
        <h4 className="text-4xl font-black font-geist text-white mb-3 tracking-tight">Deployment Ready</h4>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-green-400 text-sm font-medium mb-6" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          System Complete &amp; Cleared for Submission
        </div>
        <p className="max-w-md text-sm leading-relaxed mb-8" style={{ color: "#c0c7d3" }}>
          Your background has been semantically remapped. The narrative is constructed, quantified, and optimized to bypass automated gatekeepers.
        </p>
        <div className="flex gap-4 w-full max-w-sm">
          <button className="flex-1 py-3 px-4 rounded-xl font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2"
            style={{ background: "#a0c9ff", color: "#003259", boxShadow: "0 0 20px rgba(160,201,255,0.2)" }}>
            <span className="material-symbols-outlined text-sm">download</span> Final Export
          </button>
          <button className="py-3 px-4 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center">
            Review PDF
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function SystemDashboard() {
  const [activeStage, setActiveStage] = useState<StageId>("stage03");
  const [activeFile, setActiveFile] = useState<string>("ATS Compatibility Engine");
  const [activeView, setActiveView] = useState<string>("ats");
  const [currentFilename, setCurrentFilename] = useState<string>("ATS_Engine_Logic.json");
  const [systemStatus, setSystemStatus] = useState<string>("Optimizing for Scanners");

  const currentStage = STAGES.find((s) => s.id === activeStage)!;

  function switchStage(stageId: StageId) {
    const stage = STAGES.find((s) => s.id === stageId)!;
    setActiveStage(stageId);
    setActiveFile(stage.defaultFile);
    setActiveView(stage.defaultView);
    setSystemStatus(stage.status);
    setCurrentFilename(stage.defaultFile.replace(/\s+/g, "_"));
  }

  function switchFile(file: FileItem) {
    setActiveFile(file.name);
    setActiveView(file.view);
    setCurrentFilename(file.name.replace(/\s+/g, "_"));
  }

  function renderContent() {
    if (activeStage === "stage01") return <Stage01Content />;
    if (activeStage === "stage02") return <Stage02Content view={activeView} />;
    if (activeStage === "stage03") {
      if (activeView === "prompt") return <Stage03PromptContent />;
      return <Stage03ATSContent />;
    }
    return <Stage04Content />;
  }

  return (
    <div className="w-full">
      {/* ── Title bar: traffic lights LEFT of System Dashboard ── */}
      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-t-xl px-4 py-2 flex items-center justify-between text-[13px] font-medium text-white/90 shadow-2xl">
        <div className="flex items-center gap-4">
          {/* Traffic lights — user requested: left of System Dashboard */}
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
          <span className="opacity-90 text-xs font-mono truncate max-w-[180px]">{currentFilename}</span>
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
                  onClick={() => switchStage(stage.id)}
                  className={`sidebar-item w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                    isActive ? "active" : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 20, fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0", color: isActive ? "#a0c9ff" : undefined }}>
                    {stage.icon}
                  </span>
                  <span className="text-sm font-semibold leading-tight">{stage.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Status widget */}
          <nav className="mt-auto">
            <div className="rounded-xl p-4" style={{ background: "rgba(160,201,255,0.05)", border: "1px solid rgba(160,201,255,0.2)" }}>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#a0c9ff" }}>Status</div>
              <div className="text-xs" style={{ color: "#e2e0fa" }}>{systemStatus}</div>
            </div>
          </nav>
        </aside>

        {/* Panel 2: File list */}
        <div className="flex flex-col" style={{ background: "rgba(0,0,0,0.1)", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="p-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <h2 className="font-bold text-sm uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)" }}>Stage Files</h2>
            <span className="material-symbols-outlined" style={{ color: "rgba(255,255,255,0.4)", fontSize: 18 }}>folder_open</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            {currentStage.files.map((file) => {
              const isActive = activeFile === file.name;
              return (
                <div
                  key={file.name}
                  onClick={() => switchFile(file)}
                  className="p-4 cursor-pointer relative transition-colors hover:bg-white/5"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: isActive ? "rgba(255,255,255,0.05)" : undefined }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r" style={{ backgroundColor: isActive ? "#a0c9ff" : "transparent" }} />
                  <div className="flex items-center gap-3 mb-1">
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: isActive ? "#a0c9ff" : "rgba(255,255,255,0.4)" }}>{file.icon}</span>
                    <span className="font-bold text-sm" style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.6)" }}>{file.name}</span>
                  </div>
                  <div className="text-xs pl-7" style={{ color: "rgba(255,255,255,0.4)" }}>{file.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Panel 3: Main content */}
        <div className="flex flex-col p-8 overflow-y-auto" style={{ background: "#111124" }}>
          {renderContent()}
        </div>

      </div>
    </div>
  );
}
