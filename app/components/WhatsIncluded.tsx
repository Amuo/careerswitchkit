"use client";

import { Reveal } from "./Reveal";

const stages = [
  {
    number: "01",
    title: "Map Your Transfer",
    description:
      "Understand exactly how your background translates — before you write a single word.",
    files: ["START HERE Guide"],
  },
  {
    number: "02",
    title: "Build Your Materials",
    description:
      "Create a resume and cover letter that frames your experience for a field you haven't worked in yet.",
    files: [
      "CV Template: One-Page",
      "CV Template: Two-Page",
      "CV Template: Hybrid",
      "Cover Letter Templates",
    ],
  },
  {
    number: "03",
    title: "Optimize and Score",
    description:
      "Run every application through the system before you submit — so nothing gets filtered out.",
    files: ["AI Prompt Pack — 50 prompts", "ATS Checklist"],
  },
  {
    number: "04",
    title: "Apply With Proof",
    description:
      "See the full system applied to a real career switch, start to finish.",
    files: ["Completed Example: Sara Mehić, Retail → Operations"],
  },
];

export default function WhatsIncluded() {
  return (
    <section id="included" className="bg-white pt-16 pb-28 lg:pt-20 lg:pb-36">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
            THE SYSTEM
          </p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#070719] tracking-tight">
            Four stages. One career switch.
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-[52ch]">
            Most career switchers fail because they don&apos;t have a process.
            This is the process.
          </p>
        </Reveal>

        {/* Stage blocks — no stagger delay; vertical scroll timing sequences naturally */}
        <div>
          {stages.map((stage, i) => (
            <div key={stage.number}>
              <Reveal delay={0}>
                <div className="relative py-12 lg:py-16">

                  {/* Ghost watermark number — dramatic scale, low opacity */}
                  <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 font-sora font-black select-none pointer-events-none leading-none z-0"
                    style={{
                      fontSize: "clamp(120px, 20vw, 240px)",
                      color: "rgba(26,45,74,0.15)",
                    }}
                    aria-hidden="true"
                  >
                    {stage.number}
                  </span>

                  {/* Content */}
                  <div className={`relative z-10${i > 0 ? " mt-16" : ""}`}>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#3792E8] mb-3">
                      STAGE {stage.number}
                    </p>
                    <h3 className="font-sora text-3xl font-bold text-[#070719] mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-[#070719]/60 mb-6 max-w-[52ch] leading-relaxed">
                      {stage.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stage.files.map((file) => (
                        <span
                          key={file}
                          className="rounded-full px-4 py-1.5 text-xs border border-[#3792E8]/40 bg-[#10102D] text-[#3792E8] shadow-[0_0_8px_rgba(55,146,232,0.20)]"
                        >
                          {file}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </Reveal>

              {i < stages.length - 1 ? (
                <hr className="border-0 border-t border-[#E5E7EB]" />
              ) : null}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
