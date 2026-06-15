"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    question: "Will this system get me a job?",
    answer:
      "No system can guarantee that — and anyone who claims otherwise is lying to you. What CareerSwitchKit does is remove the most common reason career switchers get filtered out before a human ever sees their application: a resume and cover letter that doesn't translate their background correctly. The rest is on you.",
  },
  {
    question: "Do I need experience in my target field?",
    answer:
      "No. The system is built specifically for people who don't have direct experience yet. That's the whole point. Stage 2 shows you how to frame what you've already done in language that maps to your target role — without lying, without padding, and without leaving it to the recruiter to figure out the connection.",
  },
  {
    question: "What is an ATS?",
    answer:
      "ATS stands for Applicant Tracking System — software that most companies use to filter applications before a recruiter sees them. It scans for keywords, checks formatting, and scores your resume against the job description. Most resumes get eliminated here. Stage 3 of the system — the AI Prompt Pack and ATS Checklist — exists specifically to make sure yours doesn't.",
  },
  {
    question: "What AI tool do I need?",
    answer:
      "Any of the major ones — ChatGPT, Claude, Gemini, or Copilot. The prompts in Stage 3 are written to work with all of them. You don't need a paid plan, though a paid plan gives better results on the rewrite prompts. If you don't use AI tools yet, the START HERE guide walks you through exactly how to use them for this specific process.",
  },
  {
    question: "How is this different from a resume template I can find for free?",
    answer:
      "A template gives you a blank form. CareerSwitchKit gives you the logic behind filling it — specifically for someone switching into a field they haven't formally worked in. Stage 1 maps what actually transfers from your old career. Stage 2 shows you how to frame that experience in your target field's language. Stage 3 scores your resume before you submit. Stage 4 shows you a finished example from start to finish. A template can't do any of that. It can only give you the shape.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-[#10102D] py-28 lg:py-36 overflow-hidden">
      {/* Noise texture */}
      <div
        className="absolute inset-0 noise-texture pointer-events-none select-none"
        style={{ opacity: 0.025 }}
        aria-hidden="true"
      />

      {/* Gradient fade from white sections above into dark */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #ffffff, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
            FAQ
          </p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-white tracking-tight">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-lg font-semibold leading-snug text-left pr-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
