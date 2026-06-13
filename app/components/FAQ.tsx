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
    question: "Will this kit get me a job?",
    answer:
      "No — and we will not pretend otherwise. CareerSwitchKit gives you the tools to build a stronger application: ATS-optimized templates, 50 tailored AI prompts, and a keyword checklist. What you do with those tools, the roles you apply to, and the decisions hiring managers make are outside our control. What this kit does is make sure your application gets seen.",
  },
  {
    question: "Do I need experience in my new field?",
    answer:
      "No. The kit is specifically built for people without direct experience in their target field. The AI prompts are designed to surface transferable skills from your existing background and frame them in language that resonates with hiring managers in your new field. The Hybrid CV template is built exactly for this situation.",
  },
  {
    question: "What is an ATS?",
    answer:
      "ATS stands for Applicant Tracking System — the software most US companies use to screen resumes before a human reads them. It scans for keywords, checks formatting, and filters out applications that don't match. Our templates are built to pass ATS screening: single-column layout, standard headings, no tables or graphics, and plain-text contact information.",
  },
  {
    question: "What AI tool do I need?",
    answer:
      "None in particular — the prompts work with any major AI tool. ChatGPT, Claude, Gemini, and Microsoft Copilot all work well. The free tier of any of these is sufficient for resume work. You do not need a paid subscription.",
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
