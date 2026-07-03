"use client";
import dynamic from "next/dynamic";
import SystemStagesMobile from "./SystemStagesMobile";

const SystemDashboard = dynamic(() => import("./SystemDashboard"), {
  ssr: false,
  loading: () => (
    <div
      className="rounded-b-xl"
      style={{
        minWidth: 900,
        height: 764,
        background: "rgba(17,17,36,0.6)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderTop: "none",
      }}
    />
  ),
});

export default function SystemDashboardLoader() {
  return (
    <div>
      {/* Desktop (lg+): the full interactive dashboard mockup */}
      <div className="hidden lg:block overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
        <SystemDashboard />
      </div>

      {/* Mobile / tablet (<lg): a clean single-column walkthrough — no sideways scroll */}
      <div className="lg:hidden">
        <SystemStagesMobile />
      </div>
    </div>
  );
}
