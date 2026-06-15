"use client";

import { IconCheck } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import { Reveal } from "./Reveal";

export default function Proof() {
  return (
    <section className="bg-[#F0F4FA] py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
            SEE IT IN ACTION
          </p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#070719] tracking-tight">
            Before the system. After the system.
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-[50ch]">
            One résumé bullet, rewritten using Stage 3. This is what the translation problem looks like — solved.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_56px_1fr] gap-4 md:gap-0 items-start">
          {/* Before — slides from left */}
          <Reveal direction="left">
            <div className="rounded-xl p-6 bg-white border border-red-200/70 shadow-sm h-full flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" aria-hidden="true" />
                  Before
                </span>
                <span className="text-[11px] font-semibold text-red-400 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
                  ATS: likely filtered
                </span>
              </div>
              <blockquote className="font-mono text-[14px] leading-relaxed text-gray-700 border-l-2 border-red-200 pl-4">
                &ldquo;Helped customers with various tasks and worked with the
                team to meet goals.&rdquo;
              </blockquote>
              <div className="flex flex-wrap gap-3 mt-auto pt-2">
                {["No keywords", "No metrics", "Too vague"].map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-xs text-red-400">
                    <IconX size={10} strokeWidth={3} aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* VS badge */}
          <div className="flex items-center justify-center py-4 md:py-0 md:pt-12" aria-hidden="true">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "#070719",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
              }}
            >
              <span className="text-[10px] font-black tracking-widest text-white/50">VS</span>
            </div>
          </div>

          {/* After — slides from right */}
          <Reveal direction="right" delay={0.2}>
            <div
              className="rounded-xl p-6 bg-white h-full flex flex-col gap-4"
              style={{
                border: "1px solid rgba(55,146,232,0.25)",
                boxShadow: "0 0 28px rgba(55,146,232,0.08)",
              }}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#3792E8] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3792E8] inline-block" aria-hidden="true" />
                  After
                </span>
                <span
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    color: "#3792E8",
                    background: "rgba(55,146,232,0.08)",
                    border: "1px solid rgba(55,146,232,0.20)",
                  }}
                >
                  ATS: passes filters
                </span>
              </div>
              <blockquote className="font-mono text-[14px] leading-relaxed text-gray-700 border-l-2 pl-4" style={{ borderColor: "rgba(55,146,232,0.35)" }}>
                &ldquo;Resolved 40+ daily customer inquiries via Salesforce;
                reduced escalation rate by 18% over two quarters.&rdquo;
              </blockquote>
              <div className="flex flex-wrap gap-3 mt-auto pt-2">
                {["Salesforce keyword", "18% metric", "Quantified impact"].map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-xs text-[#185FA5]">
                    <IconCheck size={10} strokeWidth={3} aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Disclaimer */}
        <Reveal delay={0.35} className="mt-6">
          <div className="flex items-start gap-2.5 bg-white/70 border border-gray-200/60 rounded-xl px-5 py-4">
            <p className="text-sm text-gray-500 leading-relaxed">
              <strong className="text-gray-700 font-medium">Example only.</strong>{" "}
              This rewrite uses Prompt 12 from Stage 3. Results depend on your background, your target role, and how you work through the system. The system gives you the process — you do the work.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
