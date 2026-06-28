"use client";
import dynamic from "next/dynamic";

const SystemDashboard = dynamic(() => import("./SystemDashboard"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-b-xl"
      style={{
        height: 764,
        background: "rgba(17,17,36,0.6)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderTop: "none",
      }}
    />
  ),
});

export default function SystemDashboardLoader() {
  return <SystemDashboard />;
}
