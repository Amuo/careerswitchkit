"use client";
import dynamic from "next/dynamic";

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
      <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
        <SystemDashboard />
      </div>
      <p className="text-center text-xs mt-3 lg:hidden" style={{ color: "rgba(160,201,255,0.5)" }}>
        Swipe to explore →
      </p>
    </div>
  );
}
