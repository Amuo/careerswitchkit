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
    label: "Stage 01 — Map Transfer",
    status: "Mapping Transferable Skills",
    defaultFile: "Start Here Guide.pdf",
    defaultView: "stage01",
    files: [
      {
        name: "Start Here Guide.pdf",
        description: "Core system sequence and blueprint.",
        icon: "picture_as_pdf",
        view: "stage01",
      },
    ],
  },
  {
    id: "stage02",
    icon: "construction",
    label: "Stage 02 — Build Materials",
    status: "Constructing Narrative",
    defaultFile: "CV Template Library",
    defaultView: "one-page",
    files: [
      {
        name: "CV Template Library",
        description: "ATS-optimized high-impact layout.",
        icon: "description",
        view: "one-page",
      },
      {
        name: "Hybrid CV Template",
        description: "For unconventional pivots.",
        icon: "description",
        view: "hybrid",
      },
      {
        name: "Two-Page CV Template",
        description: "For extensive experience.",
        icon: "description",
        view: "two-page",
      },
    ],
  },
  {
    id: "stage03",
    icon: "analytics",
    label: "Stage 03 — Optimize & Score",
    status: "Optimizing for Scanners",
    defaultFile: "ATS Compatibility Engine",
    defaultView: "ats",
    files: [
      {
        name: "AI Prompt Pack",
        description: "ChatGPT/Claude templates.",
        icon: "auto_awesome",
        view: "prompt",
      },
      {
        name: "ATS Compatibility Engine",
        description: "Final compatibility engine.",
        icon: "speed",
        view: "ats",
      },
    ],
  },
  {
    id: "stage04",
    icon: "rocket_launch",
    label: "Stage 04 — Apply With Proof",
    status: "Ready for Deployment",
    defaultFile: "Verified Success",
    defaultView: "stage04",
    files: [
      {
        name: "Verified Success",
        description: "Final deployment reference.",
        icon: "verified",
        view: "stage04",
      },
    ],
  },
];

// ─── Content views ────────────────────────────────────────────────────────────

function Stage01Content() {
  return (
    <div className="relative w-full h-full node-map-bg overflow-hidden" style={{ minHeight: 400 }}>
      {/* SVG connecting paths */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} aria-hidden="true">
        <line
          x1="50%" y1="18%" x2="22%" y2="45%"
          stroke="rgba(160,201,255,0.2)" strokeWidth="1" strokeDasharray="4 4"
          style={{ animation: "dash 20s linear infinite" }}
        />
        <line
          x1="50%" y1="18%" x2="78%" y2="45%"
          stroke="rgba(160,201,255,0.2)" strokeWidth="1" strokeDasharray="4 4"
          style={{ animation: "dash 20s linear infinite" }}
        />
        <line
          x1="22%" y1="55%" x2="50%" y2="78%"
          stroke="rgba(160,201,255,0.2)" strokeWidth="1" strokeDasharray="4 4"
          style={{ animation: "dash 20s linear infinite" }}
        />
        <line
          x1="78%" y1="55%" x2="50%" y2="78%"
          stroke="rgba(160,201,255,0.2)" strokeWidth="1" strokeDasharray="4 4"
          style={{ animation: "dash 20s linear infinite" }}
        />
      </svg>

      {/* Nodes */}
      {/* Top — Past Experience */}
      <div className="absolute" style={{ left: "50%", top: "10%", transform: "translateX(-50%)" }}>
        <div className="bg-surface-container-low border border-primary/20 rounded-xl px-5 py-3 text-center glow-pulse whitespace-nowrap">
          <p className="text-badge-caps text-primary/60 uppercase tracking-widest mb-1">Your history</p>
          <p className="text-sm text-on-surface font-semibold">Past Experience</p>
        </div>
      </div>

      {/* Left — Skill Extraction */}
      <div className="absolute" style={{ left: "10%", top: "43%" }}>
        <div className="bg-surface-container-low border border-primary/20 rounded-xl px-4 py-3 text-center">
          <p className="text-badge-caps text-primary/60 uppercase tracking-widest mb-1">Identify</p>
          <p className="text-xs text-on-surface font-medium">Skill Extraction</p>
        </div>
      </div>

      {/* Right — Impact Metrics */}
      <div className="absolute" style={{ right: "10%", top: "43%" }}>
        <div className="bg-surface-container-low border border-primary/20 rounded-xl px-4 py-3 text-center">
          <p className="text-badge-caps text-primary/60 uppercase tracking-widest mb-1">Quantify</p>
          <p className="text-xs text-on-surface font-medium">Impact Metrics</p>
        </div>
      </div>

      {/* Bottom — Target Role Narrative */}
      <div className="absolute" style={{ left: "50%", bottom: "10%", transform: "translateX(-50%)" }}>
        <div className="bg-[#0d1f3c] border border-accent-blue/40 rounded-xl px-5 py-3 text-center whitespace-nowrap">
          <p className="text-badge-caps text-accent-blue uppercase tracking-widest mb-1">Output</p>
          <p className="text-sm text-on-surface font-semibold">Target Role Narrative</p>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-3 right-4 text-[10px] text-primary/30 font-mono">
        Semantic Transfer Mapping
      </div>
    </div>
  );
}

function Stage02Content({ view }: { view: string }) {
  const titles: Record<string, string> = {
    "one-page": "One-Page CV Template",
    "hybrid": "Hybrid CV Template",
    "two-page": "Two-Page CV Template",
  };
  const title = titles[view] ?? "CV Template";

  return (
    <div className="w-full h-full flex items-center justify-center p-8 overflow-auto" style={{ minHeight: 400 }}>
      <div className="relative w-full max-w-sm">
        {/* Floating tooltip */}
        <div className="absolute -top-3 -right-3 z-10 bg-accent-blue/90 backdrop-blur-sm rounded-lg px-3 py-2 text-[10px] text-white font-medium shadow-lg">
          ✓ ATS-Optimized
        </div>

        <p className="text-badge-caps text-primary/50 uppercase tracking-widest mb-3 text-center">{title}</p>

        {view === "two-page" ? (
          /* Two pages side by side */
          <div className="flex gap-3">
            <div className="cv-wireframe rounded-xl p-4 flex-1">
              <div className="wire-block h-8 w-1/2 mx-auto mb-3" />
              <div className="wire-text w-2/3 mx-auto" />
              <div className="wire-text w-1/3 mx-auto mb-4" />
              <div className="wire-block h-4 w-1/3 mb-2" />
              <div className="wire-text" />
              <div className="wire-text w-5/6" />
              <div className="wire-text w-4/6 mb-3" />
              <div className="wire-block h-4 w-2/5 mb-2" />
              <div className="wire-text" />
              <div className="wire-text w-5/6" />
            </div>
            <div className="cv-wireframe rounded-xl p-4 flex-1" style={{ transform: "rotate(1deg)" }}>
              <div className="wire-block h-4 w-2/5 mb-2" />
              <div className="wire-text" />
              <div className="wire-text w-5/6" />
              <div className="wire-text w-3/6 mb-3" />
              <div className="wire-block h-4 w-1/3 mb-2" />
              <div className="wire-text" />
              <div className="wire-text w-4/6 mb-3" />
              <div className="wire-block h-4 w-2/5 mb-2" />
              <div className="wire-text" />
              <div className="wire-text w-5/6" />
            </div>
          </div>
        ) : view === "hybrid" ? (
          /* Hybrid: two-column layout */
          <div className="cv-wireframe rounded-xl p-5">
            <div className="wire-block h-10 w-1/2 mx-auto mb-3" />
            <div className="wire-text w-2/3 mx-auto" />
            <div className="wire-text w-1/3 mx-auto mb-4" />
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="wire-block h-4 w-3/4 mb-2" />
                <div className="wire-text" />
                <div className="wire-text w-4/5" />
                <div className="wire-text w-3/5 mb-3" />
                <div className="wire-block h-4 w-1/2 mb-2" />
                <div className="wire-text" />
                <div className="wire-text w-3/4" />
              </div>
              <div className="w-px bg-white/5" />
              <div className="w-28 shrink-0">
                <div className="wire-block h-4 w-full mb-2" />
                <div className="wire-text" />
                <div className="wire-text w-4/5" />
                <div className="mb-3" />
                <div className="wire-block h-4 w-full mb-2" />
                <div className="wire-text" />
                <div className="wire-text w-3/5" />
              </div>
            </div>
          </div>
        ) : (
          /* One-page */
          <div className="cv-wireframe rounded-xl p-5">
            <div className="wire-block h-10 w-1/2 mx-auto mb-3" />
            <div className="wire-text w-2/3 mx-auto" />
            <div className="wire-text w-1/3 mx-auto mb-4" />
            <div className="wire-block h-4 w-1/3 mb-2" />
            <div className="wire-text" />
            <div className="wire-text w-5/6" />
            <div className="wire-text w-4/6 mb-3" />
            <div className="wire-block h-4 w-2/5 mb-2" />
            <div className="wire-text" />
            <div className="wire-text w-5/6" />
            <div className="wire-text w-3/6 mb-3" />
            <div className="wire-block h-4 w-1/3 mb-2" />
            <div className="wire-text" />
            <div className="wire-text w-4/6" />
          </div>
        )}

        <p className="text-[10px] text-primary/25 font-mono mt-3 text-center">Google Docs + PDF export</p>
      </div>
    </div>
  );
}

function Stage03ATSContent() {
  return (
    <div className="w-full h-full p-6 overflow-auto" style={{ minHeight: 400 }}>
      <p className="text-badge-caps text-primary/50 uppercase tracking-widest mb-5">ATS Compatibility Engine</p>

      {/* Score comparison */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 bg-[#1a0a0a] border border-red-500/20 rounded-xl p-4 text-center">
          <p className="text-[9px] text-red-400/60 uppercase tracking-widest mb-2">Before</p>
          <p className="text-4xl font-bold text-red-400 font-mono">23</p>
          <p className="text-[9px] text-red-400/50">/100</p>
          <p className="text-[10px] text-white/40 mt-2">Generic resume</p>
        </div>
        <div className="flex items-center justify-center text-primary/30">
          <span className="material-symbols-outlined" style={{ fontSize: 22 }}>arrow_forward</span>
        </div>
        <div className="flex-1 bg-[#0a1a0f] border border-emerald-500/20 rounded-xl p-4 text-center">
          <p className="text-[9px] text-emerald-400/60 uppercase tracking-widest mb-2">After</p>
          <p className="text-4xl font-bold text-emerald-400 font-mono">87</p>
          <p className="text-[9px] text-emerald-400/50">/100</p>
          <p className="text-[10px] text-white/40 mt-2">System-optimized</p>
        </div>
      </div>

      {/* Before/after text transformation */}
      <div className="space-y-3">
        <div>
          <p className="text-[9px] text-red-400/60 uppercase tracking-widest mb-1.5">Original bullet</p>
          <div className="bg-[#1a0a0a] border border-red-500/10 rounded-lg p-3">
            <p className="text-xs text-white/50 leading-relaxed">
              &ldquo;Helped customers with various tasks and improved team efficiency through better communication.&rdquo;
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="material-symbols-outlined text-primary/30" style={{ fontSize: 16 }}>keyboard_arrow_down</span>
        </div>
        <div>
          <p className="text-[9px] text-emerald-400/60 uppercase tracking-widest mb-1.5">System-translated</p>
          <div className="bg-[#0a1a0f] border border-emerald-500/10 rounded-lg p-3">
            <p className="text-xs text-on-surface/80 leading-relaxed">
              &ldquo;Managed cross-functional stakeholder communication for 30+ accounts, reducing escalation rate by 40% through structured triage protocol.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stage03PromptContent() {
  const prompts = [
    { id: "P-001", label: "Reframe experience bullet", category: "Translation" },
    { id: "P-002", label: "Extract transferable skills", category: "Mapping" },
    { id: "P-003", label: "ATS keyword injection", category: "Optimization" },
    { id: "P-004", label: "Cover letter opener", category: "Writing" },
    { id: "P-005", label: "Role alignment audit", category: "Review" },
  ];

  return (
    <div className="w-full h-full p-6 overflow-auto" style={{ minHeight: 400 }}>
      <div className="flex items-center justify-between mb-5">
        <p className="text-badge-caps text-primary/50 uppercase tracking-widest">AI Prompt Pack — 50 prompts</p>
        <span className="text-[9px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">Copy + paste ready</span>
      </div>

      {/* Code editor UI */}
      <div className="bg-[#0d0d1a] border border-white/5 rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.02] border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          <span className="ml-2 text-[10px] text-white/30 font-mono">prompt_library.md</span>
        </div>
        <div className="p-4 space-y-1.5 relative">
          {/* Blur overlay for teaser effect */}
          <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{
            background: "linear-gradient(to bottom, transparent, rgba(13,13,26,0.95))"
          }} aria-hidden="true" />
          {prompts.map((p, i) => (
            <div
              key={p.id}
              className={`flex items-center gap-3 p-2.5 rounded-lg transition-colors ${
                i === 2 ? "bg-primary/10 border border-primary/15" : "hover:bg-white/[0.03]"
              }`}
              style={i >= 4 ? { filter: "blur(3px)", opacity: 0.4 } : undefined}
            >
              <span className="text-[9px] font-mono text-primary/40 w-10 shrink-0">{p.id}</span>
              <span className="text-[11px] text-on-surface/80 flex-1">{p.label}</span>
              <span className="text-[9px] text-primary/40 shrink-0">{p.category}</span>
            </div>
          ))}
          <p className="text-[9px] text-white/20 font-mono pl-2 pt-1">+ 45 more...</p>
        </div>
      </div>
    </div>
  );
}

function Stage04Content() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center" style={{ minHeight: 400 }}>
      {/* Radar rings */}
      <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${i * 33}%`,
              height: `${i * 33}%`,
              border: `1px solid rgba(52,211,153,${0.18 - i * 0.04})`,
              animation: `pulse-glow ${2 + i}s ease-in-out infinite alternate`,
            }}
          />
        ))}
        {/* Verified badge with pulse */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-emerald-400/20 animate-ping" style={{ animationDuration: "2s" }} />
          <span
            className="material-symbols-outlined text-emerald-400"
            style={{ fontSize: 30, fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
        </div>
      </div>

      <p className="text-badge-caps text-emerald-400/60 uppercase tracking-widest mb-2">Stage 4 complete</p>
      <h3 className="text-xl font-bold text-on-surface mb-2">Deployment Ready</h3>
      <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "ping 1.5s ease-in-out infinite" }} />
        <span className="text-xs text-emerald-400 font-medium">System Complete &amp; Cleared for Submission</span>
      </div>
      <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed mb-6">
        A completed example showing every stage applied — from raw experience to submitted application.
      </p>

      {/* Decorative buttons */}
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-on-surface-variant cursor-default">
          <span className="material-symbols-outlined mr-1.5 align-middle" style={{ fontSize: 14 }}>download</span>
          Final Export
        </button>
        <button className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-xs text-primary cursor-default">
          <span className="material-symbols-outlined mr-1.5 align-middle" style={{ fontSize: 14 }}>picture_as_pdf</span>
          Review PDF
        </button>
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
    <div
      className="w-full rounded-2xl overflow-hidden border border-white/10 h-[720px] flex flex-col"
      style={{
        background: "rgba(10,10,28,0.8)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* macOS title bar */}
      <div
        className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] shrink-0"
        style={{ background: "rgba(255,255,255,0.025)" }}
      >
        <div className="traffic-light bg-red-500/70" />
        <div className="traffic-light bg-yellow-500/70" />
        <div className="traffic-light bg-green-500/70" />
        <span className="ml-4 text-[11px] text-white/30 font-mono tracking-tight flex-1">
          CareerSwitchKit — {currentFilename}
        </span>
        <span className="text-[10px] text-on-surface-variant/50 font-mono">{systemStatus}</span>
      </div>

      {/* 3-panel grid */}
      <div className="flex flex-1 overflow-hidden" style={{ display: "grid", gridTemplateColumns: "260px 320px 1fr" }}>

        {/* Panel 1: Sidebar — stage navigation */}
        <aside className="border-r border-white/5 flex flex-col overflow-y-auto" style={{ background: "rgba(0,0,0,0.2)" }}>
          <div className="px-5 pt-5 pb-3">
            <p className="text-[9px] text-primary/35 uppercase tracking-widest font-medium">Lifecycle Stages</p>
          </div>

          <div className="flex flex-col gap-1 px-3 flex-1">
            {STAGES.map((stage) => {
              const isActive = activeStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => switchStage(stage.id)}
                  className={`sidebar-item flex items-center gap-3 w-full text-left px-3 py-3 rounded-xl transition-all duration-200 ${
                    isActive ? "active" : "text-on-surface-variant/60 hover:text-on-surface hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className="material-symbols-outlined shrink-0"
                    style={{
                      fontSize: 18,
                      fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                      color: isActive ? "#a0c9ff" : undefined,
                    }}
                  >
                    {stage.icon}
                  </span>
                  <span className="text-[12px] font-medium leading-tight">{stage.label}</span>
                </button>
              );
            })}
          </div>

          {/* Status widget */}
          <div className="p-4 mt-auto">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "ping 2s ease-in-out infinite" }} />
                <span className="text-[10px] text-emerald-400/70 font-medium">System Active</span>
              </div>
              <p className="text-[11px] text-on-surface-variant/60 leading-snug">{systemStatus}</p>
            </div>
          </div>
        </aside>

        {/* Panel 2: File list */}
        <div className="border-r border-white/5 flex flex-col overflow-y-auto" style={{ background: "rgba(0,0,0,0.1)" }}>
          <div className="px-5 pt-5 pb-3">
            <p className="text-[9px] text-primary/35 uppercase tracking-widest font-medium">Stage Files</p>
          </div>

          <div className="flex flex-col gap-1 px-3">
            {currentStage.files.map((file) => {
              const isActive = activeFile === file.name;
              return (
                <button
                  key={file.name}
                  onClick={() => switchFile(file)}
                  className={`file-item flex items-start gap-3 w-full text-left px-3 py-3 rounded-xl transition-all duration-200 ${
                    isActive ? "active" : "hover:bg-white/[0.03]"
                  }`}
                >
                  {/* Left indicator bar */}
                  <div
                    className={`file-indicator w-0.5 h-full self-stretch rounded-full shrink-0 mt-1 ${
                      isActive ? "bg-primary" : "bg-white/10"
                    }`}
                    style={{ minHeight: 32 }}
                  />
                  <span
                    className={`material-symbols-outlined shrink-0 file-icon ${isActive ? "text-primary" : "text-on-surface-variant/40"}`}
                    style={{ fontSize: 18, fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {file.icon}
                  </span>
                  <div className="min-w-0">
                    <p className={`file-text text-[12px] font-medium leading-tight mb-0.5 ${isActive ? "text-white" : "text-on-surface-variant/70"}`}>
                      {file.name}
                    </p>
                    <p className="text-[11px] text-on-surface-variant/40 leading-tight">{file.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel 3: Main content */}
        <div className="overflow-y-auto" style={{ background: "#111124" }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
