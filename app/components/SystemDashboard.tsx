"use client";

import { useState } from "react";

type StageId = "stage01" | "stage02" | "stage03" | "stage04";

interface StageConfig {
  id: StageId;
  icon: string;
  label: string;
  shortLabel: string;
  files: string[];
  defaultFile: string;
}

const STAGES: StageConfig[] = [
  {
    id: "stage01",
    icon: "map",
    label: "Stage 1 — Map your transfer",
    shortLabel: "Map",
    files: ["Start_Here_Guide.pdf"],
    defaultFile: "Start_Here_Guide.pdf",
  },
  {
    id: "stage02",
    icon: "construction",
    label: "Stage 2 — Build your materials",
    shortLabel: "Build",
    files: ["CV Template Library", "Hybrid CV Template", "Two-Page CV Template"],
    defaultFile: "CV Template Library",
  },
  {
    id: "stage03",
    icon: "analytics",
    label: "Stage 3 — Optimize and score",
    shortLabel: "Optimize",
    files: ["AI Prompt Pack", "ATS Compatibility Engine"],
    defaultFile: "ATS Compatibility Engine",
  },
  {
    id: "stage04",
    icon: "rocket_launch",
    label: "Stage 4 — Apply with proof",
    shortLabel: "Apply",
    files: ["Verified Success"],
    defaultFile: "Verified Success",
  },
];

// Maps file names to sub-view keys
const FILE_TO_VIEW: Record<string, string> = {
  "Start_Here_Guide.pdf": "nodemap",
  "CV Template Library": "cv-one",
  "Hybrid CV Template": "cv-hybrid",
  "Two-Page CV Template": "cv-two",
  "AI Prompt Pack": "prompt",
  "ATS Compatibility Engine": "ats",
  "Verified Success": "success",
};

// ─── Sub-view components ──────────────────────────────────────────────────────

function NodeMapView() {
  return (
    <div className="relative w-full h-full node-map-bg overflow-hidden flex items-center justify-center p-6">
      {/* SVG connecting lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <line x1="50%" y1="15%" x2="25%" y2="45%" stroke="rgba(160,201,255,0.15)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "dash 20s linear infinite" }} />
        <line x1="50%" y1="15%" x2="75%" y2="45%" stroke="rgba(160,201,255,0.15)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "dash 20s linear infinite" }} />
        <line x1="25%" y1="45%" x2="50%" y2="75%" stroke="rgba(160,201,255,0.15)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "dash 20s linear infinite" }} />
        <line x1="75%" y1="45%" x2="50%" y2="75%" stroke="rgba(160,201,255,0.15)" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "dash 20s linear infinite" }} />
      </svg>

      {/* Node cards */}
      <div className="relative w-full max-w-md" style={{ zIndex: 1 }}>
        {/* Top center — Start */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#1a1a2d] border border-[#a0c9ff]/20 rounded-xl px-5 py-3 text-center glow-pulse">
            <p className="text-[10px] text-[#a0c9ff]/60 uppercase tracking-widest mb-1">Your history</p>
            <p className="text-sm text-[#e2e0fa] font-semibold">Old career experience</p>
          </div>
        </div>

        {/* Middle row */}
        <div className="flex justify-between mb-8">
          <div className="bg-[#1a1a2d] border border-[#a0c9ff]/20 rounded-xl px-4 py-3 text-center w-36">
            <p className="text-[10px] text-[#a0c9ff]/60 uppercase tracking-widest mb-1">Identify</p>
            <p className="text-xs text-[#e2e0fa] font-medium">Transferable skills</p>
          </div>
          <div className="bg-[#1a1a2d] border border-[#a0c9ff]/20 rounded-xl px-4 py-3 text-center w-36">
            <p className="text-[10px] text-[#a0c9ff]/60 uppercase tracking-widest mb-1">Map to</p>
            <p className="text-xs text-[#e2e0fa] font-medium">Target role language</p>
          </div>
        </div>

        {/* Bottom center — Output */}
        <div className="flex justify-center">
          <div className="bg-[#0d1f3c] border border-[#3792E8]/40 rounded-xl px-5 py-3 text-center">
            <p className="text-[10px] text-[#3792E8] uppercase tracking-widest mb-1">Output</p>
            <p className="text-sm text-[#e2e0fa] font-semibold">Credible application narrative</p>
          </div>
        </div>
      </div>

      {/* Corner label */}
      <div className="absolute bottom-3 right-4 text-[10px] text-[#a0c9ff]/30 font-mono">START_HERE_v2.pdf</div>
    </div>
  );
}

function CVWireframeView({ variant }: { variant: "one" | "hybrid" | "two" }) {
  const titles: Record<string, string> = {
    one: "One-Page CV Template",
    hybrid: "Hybrid CV Template",
    two: "Two-Page CV Template",
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-6 overflow-auto">
      <div className="w-full max-w-sm">
        <p className="text-[10px] text-[#a0c9ff]/50 uppercase tracking-widest mb-3 text-center">{titles[variant]}</p>
        <div className="cv-wireframe rounded-xl p-5">
          {/* Header block */}
          <div className="wire-block h-10 w-1/2 mx-auto mb-4" />
          <div className="wire-text w-2/3 mx-auto" />
          <div className="wire-text w-1/3 mx-auto mb-5" />

          {/* Section */}
          <div className="wire-block h-5 w-1/3 mb-3" />
          <div className="wire-text" />
          <div className="wire-text w-5/6" />
          <div className="wire-text w-4/6 mb-4" />

          {/* Section */}
          <div className="wire-block h-5 w-2/5 mb-3" />
          <div className="wire-text" />
          <div className="wire-text w-5/6" />
          <div className="wire-text w-3/6 mb-4" />

          {variant === "two" && (
            <>
              <div className="border-t border-white/5 my-4" />
              <div className="wire-block h-5 w-2/5 mb-3" />
              <div className="wire-text" />
              <div className="wire-text w-5/6" />
              <div className="wire-text w-4/6" />
            </>
          )}

          {variant === "hybrid" && (
            <div className="flex gap-3 mt-1">
              <div className="flex-1">
                <div className="wire-block h-5 w-full mb-3" />
                <div className="wire-text" />
                <div className="wire-text w-4/5" />
              </div>
              <div className="w-px bg-white/5" />
              <div className="flex-1">
                <div className="wire-block h-5 w-full mb-3" />
                <div className="wire-text" />
                <div className="wire-text w-3/5" />
              </div>
            </div>
          )}
        </div>
        <p className="text-[10px] text-[#a0c9ff]/25 font-mono mt-3 text-center">Google Docs + PDF export</p>
      </div>
    </div>
  );
}

function ATSView() {
  return (
    <div className="w-full h-full p-5 overflow-auto">
      <p className="text-[10px] text-[#a0c9ff]/50 uppercase tracking-widest mb-4">ATS Compatibility Engine</p>

      {/* Score comparison */}
      <div className="flex gap-3 mb-5">
        {/* Bad score */}
        <div className="flex-1 bg-[#1a0a0a] border border-red-500/20 rounded-xl p-4 text-center">
          <p className="text-[9px] text-red-400/60 uppercase tracking-widest mb-2">Before</p>
          <p className="text-3xl font-bold text-red-400 font-mono">23</p>
          <p className="text-[9px] text-red-400/50">/100</p>
          <p className="text-[10px] text-white/40 mt-2">Generic resume</p>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center text-[#a0c9ff]/30">
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
        </div>

        {/* Good score */}
        <div className="flex-1 bg-[#0a1a0f] border border-emerald-500/20 rounded-xl p-4 text-center">
          <p className="text-[9px] text-emerald-400/60 uppercase tracking-widest mb-2">After</p>
          <p className="text-3xl font-bold text-emerald-400 font-mono">87</p>
          <p className="text-[9px] text-emerald-400/50">/100</p>
          <p className="text-[10px] text-white/40 mt-2">System-optimized</p>
        </div>
      </div>

      {/* Before/after text transformation */}
      <div className="space-y-3">
        <div>
          <p className="text-[9px] text-red-400/60 uppercase tracking-widest mb-1.5">Original bullet</p>
          <div className="bg-[#1a0a0a] border border-red-500/10 rounded-lg p-3">
            <p className="text-xs text-white/50 leading-relaxed">"Helped customers with various tasks and improved team efficiency through better communication."</p>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="material-symbols-outlined text-[#a0c9ff]/30" style={{ fontSize: 16 }}>keyboard_arrow_down</span>
        </div>
        <div>
          <p className="text-[9px] text-emerald-400/60 uppercase tracking-widest mb-1.5">System-translated</p>
          <div className="bg-[#0a1a0f] border border-emerald-500/10 rounded-lg p-3">
            <p className="text-xs text-[#e2e0fa]/80 leading-relaxed">"Managed cross-functional stakeholder communication for 30+ accounts, reducing escalation rate by 40% through structured triage protocol."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromptView() {
  const prompts = [
    { id: "P-001", label: "Reframe experience bullet", category: "Translation" },
    { id: "P-002", label: "Extract transferable skills", category: "Mapping" },
    { id: "P-003", label: "ATS keyword injection", category: "Optimization" },
    { id: "P-004", label: "Cover letter opener", category: "Writing" },
    { id: "P-005", label: "Role alignment audit", category: "Review" },
  ];

  return (
    <div className="w-full h-full p-5 overflow-auto">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[10px] text-[#a0c9ff]/50 uppercase tracking-widest">AI Prompt Pack — 50 prompts</p>
        <span className="text-[9px] bg-[#a0c9ff]/10 text-[#a0c9ff] px-2 py-0.5 rounded-full">Copy + paste ready</span>
      </div>

      {/* Code editor UI */}
      <div className="bg-[#0d0d1a] border border-white/5 rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.02] border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          <span className="ml-2 text-[10px] text-white/30 font-mono">prompt_library.md</span>
        </div>
        <div className="p-4 space-y-2">
          {prompts.map((p, i) => (
            <div key={p.id} className={`flex items-center gap-3 p-2.5 rounded-lg transition-colors ${i === 2 ? "bg-[#a0c9ff]/10 border border-[#a0c9ff]/15" : "hover:bg-white/[0.03]"}`}>
              <span className="text-[9px] font-mono text-[#a0c9ff]/40 w-10 shrink-0">{p.id}</span>
              <span className="text-[11px] text-[#e2e0fa]/80 flex-1">{p.label}</span>
              <span className="text-[9px] text-[#a0c9ff]/40 shrink-0">{p.category}</span>
            </div>
          ))}
          <p className="text-[9px] text-white/20 font-mono pl-2 pt-1">+ 45 more...</p>
        </div>
      </div>
    </div>
  );
}

function SuccessView() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
      {/* Radar rings */}
      <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-emerald-400/10"
            style={{
              width: `${i * 40}%`,
              height: `${i * 40}%`,
              animation: `pulse-glow ${2 + i}s ease-in-out infinite alternate`,
              borderColor: `rgba(52,211,153,${0.15 - i * 0.04})`,
            }}
          />
        ))}
        {/* Verified badge */}
        <div className="relative z-10 w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
          <span className="material-symbols-outlined text-emerald-400" style={{ fontSize: 28, fontVariationSettings: "'FILL' 1" }}>verified</span>
        </div>
      </div>

      <p className="text-[10px] text-emerald-400/60 uppercase tracking-widest mb-2">Stage 4 complete</p>
      <p className="text-base text-[#e2e0fa] font-semibold mb-1">Apply with proof</p>
      <p className="text-xs text-[#c0c7d3]/70 max-w-48 leading-relaxed">
        A completed example showing every stage applied — from raw experience to submitted application.
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function SystemDashboard() {
  const [activeStage, setActiveStage] = useState<StageId>("stage03");
  const [activeFile, setActiveFile] = useState<string>("ATS Compatibility Engine");

  const currentStage = STAGES.find((s) => s.id === activeStage)!;
  const currentView = FILE_TO_VIEW[activeFile] ?? "ats";

  function handleStageChange(stageId: StageId) {
    setActiveStage(stageId);
    const stage = STAGES.find((s) => s.id === stageId)!;
    setActiveFile(stage.defaultFile);
  }

  function renderMainContent() {
    switch (currentView) {
      case "nodemap": return <NodeMapView />;
      case "cv-one": return <CVWireframeView variant="one" />;
      case "cv-hybrid": return <CVWireframeView variant="hybrid" />;
      case "cv-two": return <CVWireframeView variant="two" />;
      case "ats": return <ATSView />;
      case "prompt": return <PromptView />;
      case "success": return <SuccessView />;
      default: return <ATSView />;
    }
  }

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-white/10"
      style={{
        background: "rgba(10,10,28,0.8)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* macOS title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]"
        style={{ background: "rgba(255,255,255,0.025)" }}
      >
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/30 font-mono tracking-tight">
          CareerSwitchKit — {currentStage.label}
        </span>
      </div>

      {/* 3-panel layout */}
      <div className="flex" style={{ minHeight: 400 }}>
        {/* Sidebar — stage navigation */}
        <aside className="w-52 border-r border-white/[0.06] flex flex-col shrink-0" style={{ background: "rgba(255,255,255,0.015)" }}>
          <div className="px-3 pt-3 pb-2">
            <p className="text-[9px] text-[#a0c9ff]/35 uppercase tracking-widest px-2 mb-2">Stages</p>
          </div>
          {STAGES.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => handleStageChange(stage.id)}
                className={`flex items-center gap-2.5 w-full text-left px-3 py-2.5 mx-1 rounded-lg transition-all duration-150 ${
                  isActive
                    ? "bg-[#a0c9ff]/12 text-[#a0c9ff]"
                    : "text-[#c0c7d3]/60 hover:text-[#e2e0fa] hover:bg-white/[0.04]"
                }`}
                style={{ width: "calc(100% - 8px)" }}
              >
                <span
                  className="material-symbols-outlined shrink-0"
                  style={{
                    fontSize: 17,
                    fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  {stage.icon}
                </span>
                <span className="text-[11px] font-medium leading-tight">{stage.label}</span>
              </button>
            );
          })}
        </aside>

        {/* File list */}
        <div className="w-44 border-r border-white/[0.06] flex flex-col shrink-0" style={{ background: "rgba(255,255,255,0.01)" }}>
          <div className="px-3 pt-3 pb-2">
            <p className="text-[9px] text-[#a0c9ff]/35 uppercase tracking-widest px-2 mb-2">Files</p>
          </div>
          {currentStage.files.map((file) => {
            const isActive = activeFile === file;
            return (
              <button
                key={file}
                onClick={() => setActiveFile(file)}
                className={`flex items-center gap-2 w-full text-left px-4 py-2 transition-all duration-150 ${
                  isActive
                    ? "bg-[#a0c9ff]/10 text-[#e2e0fa]"
                    : "text-[#c0c7d3]/50 hover:text-[#e2e0fa] hover:bg-white/[0.03]"
                }`}
              >
                <span
                  className="material-symbols-outlined shrink-0"
                  style={{ fontSize: 14, color: isActive ? "#a0c9ff" : undefined }}
                >
                  {file.endsWith(".pdf") ? "picture_as_pdf" : "description"}
                </span>
                <span className="text-[10px] font-medium leading-tight">{file}</span>
              </button>
            );
          })}
        </div>

        {/* Main content area */}
        <div className="flex-1 overflow-auto">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
}
