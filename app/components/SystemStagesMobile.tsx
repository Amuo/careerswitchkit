// Mobile / tablet version of the "how it works" section.
// The desktop SystemDashboard is a fixed-width interactive app mockup that can
// only sideways-scroll on small screens, so below `lg` we show this instead:
// a clean, single-column, touch-friendly walkthrough of the same four stages.

const STAGES = [
  {
    n: "01",
    icon: "map",
    title: "Map your transfer",
    doc: "Start Here Guide",
    desc: "Translate your existing experience into the exact language your new field understands. This is the foundation — do it first.",
    start: true,
  },
  {
    n: "02",
    icon: "description",
    title: "Build your materials",
    doc: "CV + cover letter templates",
    desc: "Career-switcher templates that frame your background as an advantage, not a liability.",
  },
  {
    n: "03",
    icon: "tune",
    title: "Optimize & score",
    doc: "ATS Checker + AI Prompt Pack",
    desc: "Score your resume against the ATS and sharpen every line until it clears the filter and still reads right to a human.",
  },
  {
    n: "04",
    icon: "rocket_launch",
    title: "Apply with proof",
    doc: "Completed example",
    desc: "The finished system applied to a real switch, end to end — see exactly how it comes together.",
  },
];

export default function SystemStagesMobile() {
  return (
    <div className="flex flex-col gap-3">
      {STAGES.map((s) => (
        <div
          key={s.n}
          className="relative rounded-2xl p-5"
          style={{
            background: "rgba(22,22,52,0.55)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: s.start ? "1px solid rgba(55,146,232,0.35)" : "1px solid rgba(255,255,255,0.1)",
            boxShadow: s.start ? "0 0 24px rgba(55,146,232,0.12)" : "none",
          }}
        >
          {s.start && (
            <div className="absolute -top-2.5 left-5">
              <span
                className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider text-white"
                style={{ background: "#3792E8" }}
              >
                START HERE
              </span>
            </div>
          )}

          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
              style={{
                background: s.start ? "rgba(55,146,232,0.15)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${s.start ? "rgba(55,146,232,0.3)" : "rgba(255,255,255,0.08)"}`,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 22, color: s.start ? "#a0c9ff" : "rgba(255,255,255,0.55)" }}
              >
                {s.icon}
              </span>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span
                  className="text-[11px] font-bold tracking-widest"
                  style={{ color: s.start ? "#3792E8" : "rgba(255,255,255,0.4)" }}
                >
                  STAGE {s.n}
                </span>
                <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
                <span className="text-[11px]" style={{ color: "rgba(160,201,255,0.7)" }}>
                  {s.doc}
                </span>
              </div>
              <h3 className="font-geist font-bold text-white mb-1.5" style={{ fontSize: "1.05rem" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                {s.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
