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
      "No kit can guarantee a job offer, and we won't pretend otherwise. What this kit does: helps your resume clear ATS filters, makes your cover letter sound like a real person wrote it, and gives you a prompt workflow so you can tailor both documents to each role - fast. The tools are real. The outcome depends on your effort and the roles you're applying to.",
  },
  {
    question: "Do I need experience in my new field?",
    answer:
      "No. The templates and prompts are built specifically for career switchers - people who have real skills from a previous field and need to reframe them for a new one. The AI prompts help you find the language that connects what you've already done to what the new role actually requires. That's the hard part. The kit walks you through it.",
  },
  {
    question: "What is an ATS?",
    answer:
      "ATS stands for Applicant Tracking System. Most companies with more than 20 employees use software to filter resumes automatically before a recruiter reads a single one. Common failure points: nonstandard formatting, missing keywords, tables, graphics, and unusual fonts. The kit's templates are formatted to avoid all of those. The checklist helps you catch anything specific to the job you're applying for.",
  },
  {
    question: "What AI tool do I need?",
    answer:
      "Any of the major free tools work: ChatGPT, Claude, Gemini, or Microsoft Copilot. The 50 prompts are written in plain language and have been tested on all of them. You don't need a paid plan - the free tier is enough for everything in this kit.",
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
