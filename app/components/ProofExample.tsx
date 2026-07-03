// The four terms a real Operations Coordinator posting scans for.
// Each is LITERALLY absent from the "before" text and LITERALLY present in
// the "after" text — the match counts below are mechanical, not invented.
const KEYWORDS = ["cross-functional", "stakeholder", "service SLAs", "capacity planning"];

const BEFORE = [
  "Managed the front desk team of 8 and handled daily check-in and check-out operations.",
  "Resolved customer complaints and escalated issues to management when needed.",
  "Managed room inventory and used booking software to optimize occupancy rates.",
];

// "after" bullets, split into segments so the matched keywords can be highlighted.
// hl:true marks a term the ATS is scanning for.
const AFTER: { t: string; hl?: boolean }[][] = [
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

const hlStyle: React.CSSProperties = {
  background: "rgba(160,201,255,0.18)",
  color: "#dbeafe",
  fontWeight: 600,
  padding: "0 4px",
  borderRadius: 4,
  boxShadow: "0 0 12px rgba(160,201,255,0.15)",
};

export default function ProofExample() {
  return (
    <section id="example" className="max-w-6xl mx-auto px-6 mb-40 fade-up visible">
      <div className="text-center mb-3">
        <span className="section-eyebrow">See the method</span>
        <h2 className="text-4xl font-black font-geist mb-4">
          The same experience. <span style={{ color: "#a0c9ff" }}>Translated.</span>
        </h2>
        <p style={{ color: "#c0c7d3", maxWidth: "48ch", margin: "0 auto" }}>
          A hospitality worker applying for an Operations Coordinator role. Same jobs, same
          person — rewritten into the language the new field (and its ATS) recognizes.
        </p>
      </div>

      <p className="text-center text-xs mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
        Illustrative example — the system applied to a sample career switch. Not a real customer.
      </p>

      {/* Shared keyword row — what the target role's ATS is scanning for */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <span
          className="text-[11px] font-bold uppercase tracking-widest mr-1"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Target role scans for:
        </span>
        {KEYWORDS.map((k) => (
          <span
            key={k}
            className="text-[12px] px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(160,201,255,0.1)",
              border: "1px solid rgba(160,201,255,0.25)",
              color: "#a0c9ff",
            }}
          >
            {k}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        {/* BEFORE */}
        <div
          className="rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: "rgba(28,12,15,0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(239,68,68,0.25)",
          }}
        >
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{ borderBottom: "1px solid rgba(239,68,68,0.12)" }}
          >
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-400">
              Before — generic language
            </span>
            <span className="material-symbols-outlined text-red-400" style={{ fontSize: 16 }}>
              warning
            </span>
          </div>

          {/* Match status */}
          <div
            className="flex items-center gap-2.5 px-5 py-3"
            style={{ background: "rgba(239,68,68,0.06)", borderBottom: "1px solid rgba(239,68,68,0.1)" }}
          >
            <span className="material-symbols-outlined text-red-400" style={{ fontSize: 20 }}>
              block
            </span>
            <div>
              <div className="text-[13px] font-bold text-red-300">0 of 4 keywords matched</div>
              <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                Filtered by the ATS before a human sees it
              </div>
            </div>
          </div>

          <div className="p-5 flex-1">
            <div className="mb-4">
              <div className="font-geist font-bold text-white">Jordan Bennett</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                Front Desk Supervisor · chronological résumé
              </div>
            </div>
            <ul className="space-y-3">
              {BEFORE.map((t) => (
                <li key={t} className="flex gap-2.5">
                  <span
                    className="material-symbols-outlined shrink-0 mt-0.5"
                    style={{ fontSize: 14, color: "rgba(248,113,113,0.6)" }}
                  >
                    cancel
                  </span>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {t}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AFTER */}
        <div
          className="rounded-2xl overflow-hidden flex flex-col liquid-glass"
          style={{ border: "1px solid rgba(160,201,255,0.35)", boxShadow: "0 0 40px rgba(160,201,255,0.1)" }}
        >
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{ borderBottom: "1px solid rgba(160,201,255,0.14)" }}
          >
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#a0c9ff" }}>
              After — career-switch narrative
            </span>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: "#a0c9ff" }}>
              check_circle
            </span>
          </div>

          {/* Match status */}
          <div
            className="flex items-center gap-2.5 px-5 py-3"
            style={{ background: "rgba(160,201,255,0.08)", borderBottom: "1px solid rgba(160,201,255,0.12)" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#a0c9ff" }}>
              check_circle
            </span>
            <div>
              <div className="text-[13px] font-bold" style={{ color: "#cfe4ff" }}>
                4 of 4 keywords matched
              </div>
              <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                Passes the filter — a recruiter actually reads it
              </div>
            </div>
          </div>

          <div className="p-5 flex-1">
            <div className="mb-4">
              <div className="font-geist font-bold text-white">Jordan Bennett</div>
              <div className="text-xs" style={{ color: "#a0c9ff" }}>
                Operations Coordinator · hybrid, skills-led
              </div>
            </div>
            <ul className="space-y-3">
              {AFTER.map((segs, i) => (
                <li key={i} className="flex gap-2.5">
                  <span
                    className="material-symbols-outlined shrink-0 mt-0.5"
                    style={{ fontSize: 14, color: "#a0c9ff" }}
                  >
                    check
                  </span>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {segs.map((s, j) =>
                      s.hl ? (
                        <span key={j} style={hlStyle}>
                          {s.t}
                        </span>
                      ) : (
                        <span key={j}>{s.t}</span>
                      )
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p
        className="text-center text-[13px] mt-8 leading-relaxed"
        style={{ color: "rgba(255,255,255,0.6)", maxWidth: "60ch", margin: "2rem auto 0" }}
      >
        An ATS scans each posting for role-specific terms, then ranks résumés by how many they hit.
        Same career, same facts — only the language changed.
      </p>
    </section>
  );
}
