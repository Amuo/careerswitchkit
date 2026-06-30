"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What's in the system?",
    a: "CareerSwitchKit is an instant download: a Start Here Guide (PDF), three CV templates (.docx), three cover letter templates (.docx), an interactive ATS Checker (standalone HTML app), an AI Prompt Pack (PDF, 50 prompts), and a completed example showing the full switch in action. No login, no subscription. You work through the four stages in order and apply.",
  },
  {
    q: "How long does it take to complete?",
    a: "Most people finish the core sequence in a weekend. Stage 1 takes an hour or two — it's the thinking work, mapping what you've done to what the new field values. Stages 2 and 3 are faster once that's done. By the end you have a tailored resume, a cover letter, and a checklist confirming it's ATS-ready.",
  },
  {
    q: "I've been applying for months and getting nothing. Will this help?",
    a: "Probably yes — and this is exactly who the system is built for. If you're getting no responses, the most likely cause is that your resume isn't translating your background into language the new field recognises. The system is specifically designed to fix that translation gap, not to give you a prettier version of what you already have.",
  },
  {
    q: "Is this just for tech jobs?",
    a: "No. The system is built on how experience translates across fields, not on any one industry. It works in Healthcare, Finance, Operations, Marketing, and others. Your past experience is the raw material. The system shows you how to reframe it for the new field.",
  },
  {
    q: "How is this different from a resume template I can find for free?",
    a: "Free templates give you blank boxes. CareerSwitchKit tells you what to put in them. The AI prompts and language guides are specifically designed to translate your past experience into the terms hiring managers in your new field actually use.",
  },
  {
    q: "What if it doesn't help me land interviews?",
    a: "If it doesn't work for your situation, email support@careerswitchkit.org within 7 days and we'll refund you. We'd rather give you your money back than have you sitting on something that isn't working.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className="w-full space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={faq.q}
          className={`faq-item rounded-2xl border cursor-pointer hover:bg-white/5 transition-all duration-200 group ${openIndex === i ? "active" : ""}`}
          style={{ background: "rgba(8,8,20,0.75)", borderColor: openIndex === i ? "rgba(55,146,232,0.2)" : "rgba(255,255,255,0.06)" }}
        >
          <div className="p-6 flex items-center justify-between" onClick={() => toggle(i)}>
            <h4 className="font-bold text-white font-geist group-hover:text-primary transition-colors pr-4">
              {faq.q}
            </h4>
            <span
              className="material-symbols-outlined text-white/40 faq-icon group-hover:text-primary transition-colors shrink-0"
              aria-hidden="true"
            >
              expand_more
            </span>
          </div>
          <div className="faq-item-content">
            <div>
              <div className="px-6 pb-6 pt-0">
                <p className="text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
