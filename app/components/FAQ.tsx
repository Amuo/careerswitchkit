"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import { IconPlus } from "@tabler/icons-react";
import { Reveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    question: "Will this system get me a job?",
    answer:
      "No system can guarantee that, and anyone who claims otherwise is lying to you. What CareerSwitchKit does is remove the most common reason career switchers get filtered out before a human ever sees their application: a resume and cover letter that doesn't translate their background correctly. The rest is on you.",
  },
  {
    question: "Do I need experience in my target field?",
    answer:
      "No. The system is built specifically for people who don't have direct experience yet. That's the whole point. Stage 2 shows you how to frame what you've already done in language that maps to your target role, without lying, without padding, and without leaving it to the recruiter to figure out the connection.",
  },
  {
    question: "What is an ATS?",
    answer:
      "ATS stands for Applicant Tracking System: software that most companies use to filter applications before a recruiter sees them. It scans for keywords, checks formatting, and scores your resume against the job description. Most resumes get eliminated here. Stage 3 of the system (the AI Prompt Pack and ATS Checklist) exists specifically to make sure yours doesn't.",
  },
  {
    question: "What AI tool do I need?",
    answer:
      "Any of the major ones: ChatGPT, Claude, Gemini, or Copilot. The prompts in Stage 3 are written to work with all of them. You don't need a paid plan, though a paid plan gives better results on the rewrite prompts. If you don't use AI tools yet, the START HERE guide walks you through exactly how to use them for this specific process.",
  },
  {
    question: "How is this different from a resume template I can find for free?",
    answer:
      "A template gives you a blank form. CareerSwitchKit gives you the logic behind filling it, specifically for someone switching into a field they haven't formally worked in. Stage 1 maps what actually transfers from your old career. Stage 2 shows you how to frame that experience in your target field's language. Stage 3 scores your resume before you submit. Stage 4 shows you a finished example from start to finish. A template can't do any of that. It can only give you the shape.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.12 });
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="relative bg-[#10102D] py-28 lg:py-36 overflow-hidden">

      {/* Noise texture */}
      <div
        className="absolute inset-0 noise-texture pointer-events-none select-none"
        style={{ opacity: 0.025 }}
        aria-hidden="true"
      />

      {/* Gradient fade from Pricing (white) */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #ffffff, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="mb-14">
          <h2 className="font-sora text-4xl md:text-5xl font-bold text-white tracking-tight">
            Before you buy.
          </h2>
          <p
            className="mt-3 text-[15px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            Everything worth knowing, answered directly.
          </p>
        </Reveal>

        {/* FAQ list */}
        <div ref={listRef}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                suppressHydrationWarning
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.52, delay: i * 0.07, ease: EASE }}
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                <button
                  className="w-full flex items-start justify-between gap-6 py-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[17px] font-semibold leading-snug"
                    style={{
                      color: isOpen ? "#FFFFFF" : "rgba(255,255,255,0.78)",
                      transition: "color 0.18s ease",
                    }}
                  >
                    {faq.question}
                  </span>

                  {/* + rotates to × when open */}
                  <motion.span
                    suppressHydrationWarning
                    animate={reduce ? {} : { rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.22, ease: EASE }}
                    className="flex-shrink-0 mt-[3px]"
                    style={{
                      color: isOpen ? "#3792E8" : "rgba(255,255,255,0.28)",
                      transition: "color 0.18s ease",
                    }}
                    aria-hidden="true"
                  >
                    <IconPlus size={20} strokeWidth={1.75} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      suppressHydrationWarning
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="text-[15px] leading-[1.78] pb-7"
                        style={{ color: "rgba(255,255,255,0.52)" }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* Closing border */}
          <div
            aria-hidden="true"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          />
        </div>

      </div>
    </section>
  );
}
