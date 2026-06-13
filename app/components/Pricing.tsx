"use client";

import { IconCheck, IconDownload, IconShieldCheck, IconTool } from "@tabler/icons-react";
import { Reveal } from "./Reveal";
import { handleCheckout } from "@/lib/checkout";

const features = [
  "3 ATS-friendly resume templates (chronological, two-page, hybrid)",
  "3 cover letter templates, customizable for any role",
  "50 AI prompts for tailoring every application",
  "ATS keyword checklist + scoring sheet",
  "1 completed career-switch example (resume + cover letter)",
  "Works with ChatGPT, Claude, Gemini, or any AI tool",
  "Instant download — no subscription, no account required",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#EBF4FD] py-28 lg:py-36">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
            PRICING
          </p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#070719] tracking-tight">
            One kit. Everything you need.
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            No tiers, no upsells, no subscriptions.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Premium dark card */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #10102D 0%, #070719 100%)",
              border: "1px solid rgba(55,146,232,0.30)",
              boxShadow: "0 0 60px rgba(55,146,232,0.12)",
              padding: "48px",
            }}
          >
            {/* One-time label + price */}
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-2">
                one-time payment
              </p>
              <span className="font-sora text-8xl font-black text-white leading-none">
                $49
              </span>
              <p className="mt-2 text-white/45 text-[15px]">
                Career-switch kit — instant download
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-8" />

            {/* Feature list */}
            <ul className="flex flex-col gap-4 mb-10" aria-label="What's included in the kit">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-sm flex items-center justify-center mt-0.5"
                    style={{ background: "#3792E8" }}
                    aria-hidden="true"
                  >
                    <IconCheck size={11} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-white/70 leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={handleCheckout}
              className="w-full bg-accent text-white font-semibold py-5 rounded-xl transition-all duration-200 active:scale-[0.98] text-lg hover:bg-accent-hover hover:shadow-[0_0_32px_rgba(55,146,232,0.5)]"
              aria-label="Get the CareerSwitchKit for $49"
            >
              Get the Kit — $49
            </button>
          </div>

          {/* Trust row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <IconDownload size={14} strokeWidth={2} aria-hidden="true" />
              Instant download
            </span>
            <span className="flex items-center gap-1.5">
              <IconShieldCheck size={14} strokeWidth={2} aria-hidden="true" />
              30-day money-back guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <IconTool size={14} strokeWidth={2} aria-hidden="true" />
              Works with any AI tool
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
