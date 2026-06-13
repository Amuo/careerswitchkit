"use client";

import { useRef, useState } from "react";
import {
  IconFileDescription,
  IconMail,
  IconBulb,
  IconListCheck,
  IconEye,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: IconFileDescription,
    title: "Resume Templates",
    lead: "Built for the career switcher's specific problem: looking credible in a field you don't have a title in yet.",
    bullets: [
      "3 formats: chronological, two-page, hybrid",
      "Formatted to pass ATS keyword scans",
      "Ready to fill in - no design tools needed",
    ],
    variant: "featured" as const,
  },
  {
    icon: IconMail,
    title: "Cover Letter Templates",
    lead: "Three scenarios: standard application, no direct experience, and referral. Because your situation isn't standard.",
    bullets: [
      "3 opening-to-close templates",
      "Written to pass automated screening",
      "Sounds human to a hiring manager",
    ],
    variant: "default" as const,
  },
  {
    icon: IconBulb,
    title: "AI Prompt Pack",
    subtitle: "50 prompts",
    lead: "The prompts that do the heavy lifting — keyword extraction, bullet rewrites, ATS scoring, cover letter drafting, and final review.",
    bullets: [
      "50 prompts for any major AI tool",
      "Tailors every line to a specific job post",
      "Tested on ChatGPT, Claude, and Gemini",
    ],
    variant: "default" as const,
  },
  {
    icon: IconListCheck,
    title: "ATS Checklist",
    lead: "The ten-minute check that's the difference between your resume being read and it never being seen.",
    bullets: [
      "Scored checklist before every submission",
      "Catches formatting that gets filtered out",
      "Keyword gap analysis included",
    ],
    variant: "default" as const,
  },
  {
    icon: IconEye,
    title: "Completed Example",
    lead: "Read this first. Before the templates, before the prompts. See what the finished product looks like.",
    bullets: [
      "Full career-switch resume + cover letter",
      "Real-world scenario, filled in completely",
      "Shows exactly how finished work looks",
    ],
    variant: "default" as const,
  },
];

function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((s) => ({ ...s, visible: false }))}
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(55,146,232,0.40)",
        boxShadow: "0 0 30px rgba(55,146,232,0.08)",
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Cursor spotlight */}
      {spotlight.visible && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl z-0"
          style={{
            background: `radial-gradient(200px circle at ${spotlight.x}px ${spotlight.y}px, rgba(55,146,232,0.05), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </motion.div>
  );
}

export default function WhatsIncluded() {
  return (
    <section id="included" className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
            WHAT&apos;S INSIDE
          </p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#070719] tracking-tight">
            What&apos;s Included
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-[48ch]">
            Everything you need to apply confidently — no extra tools, no guesswork.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isFeatured = item.variant === "featured";

            return (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className={isFeatured ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <SpotlightCard
                  className="group relative h-full rounded-2xl p-8 border border-white/10 overflow-hidden cursor-default bg-[#10102D]"
                >
                  {/* Watermark number */}
                  <span
                    className="absolute top-4 right-6 font-sora font-black text-white/5 select-none leading-none pointer-events-none z-0"
                    style={{ fontSize: "72px" }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div
                    className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(55,146,232,0.10)" }}
                  >
                    <Icon size={22} strokeWidth={1.75} className="text-accent" />
                  </div>

                  {/* Title + optional badge */}
                  <h3 className="relative z-10 font-sora text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <span className="relative z-10 inline-block mt-1.5 mb-0.5 text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                      {item.subtitle}
                    </span>
                  )}

                  {/* Lead sentence */}
                  <p className="relative z-10 mt-3 mb-1 text-sm text-white/60 italic leading-relaxed">
                    {item.lead}
                  </p>

                  {/* Bullets */}
                  <ul className="relative z-10 mt-4 flex flex-col gap-2">
                    {item.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-white/60 leading-snug flex items-start gap-2"
                      >
                        <span
                          className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent/50"
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
