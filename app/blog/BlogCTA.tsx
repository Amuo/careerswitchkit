"use client";

import { handleCheckout } from "@/lib/checkout";

export default function BlogCTA({ heading, body }: { heading: string; body: string }) {
  return (
    <div
      className="mt-16 rounded-2xl p-8 text-center"
      style={{
        background: "linear-gradient(150deg, #10102D 0%, #070719 100%)",
        border: "1.5px solid rgba(55,146,232,0.24)",
      }}
    >
      <p
        className="font-mono text-[10px] tracking-[0.18em] uppercase mb-3"
        style={{ color: "#3792E8" }}
      >
        CareerSwitchKit
      </p>
      <h3 className="font-sora text-xl font-bold text-white tracking-tight mb-3">
        {heading}
      </h3>
      <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
        {body}
      </p>
      <button
        onClick={handleCheckout}
        className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02]"
        style={{ background: "#3792E8", boxShadow: "0 0 28px rgba(55,146,232,0.35)" }}
      >
        Get the System for $37
      </button>
      <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
        7-day money-back guarantee
      </p>
    </div>
  );
}
