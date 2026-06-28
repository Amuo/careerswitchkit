"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What exactly do I get? Is this an app?",
    a: "CareerSwitchKit is an instant download, not an app or subscription. You get a Start Here Guide (PDF), three CV templates (Google Docs), three cover letter templates (Google Docs), an ATS Checklist, an AI Prompt Pack with 50 copy-paste prompts, and a completed example. No login, no account required. You work through the sequence and apply.",
  },
  {
    q: "Is this just for tech jobs?",
    a: "No. The system is built on how experience translates across fields, not on any one industry. It works in Healthcare, Finance, Operations, Marketing, and others. Your past experience is the raw material. The system shows you how to reframe it for the new field.",
  },
  {
    q: "Do I need a ChatGPT subscription?",
    a: "The prompts work with the free version of ChatGPT, Claude, and Gemini. However, GPT-4 or Claude 3.5 Sonnet will produce higher quality rewrites. Either way, the structure around the prompts is what does most of the work.",
  },
  {
    q: "How is this different from a resume template I can find for free?",
    a: "Free templates give you blank boxes. CareerSwitchKit tells you what to put in them. The AI prompts and semantic mapping are specifically designed to translate your past experience into the language hiring managers in your new field actually use.",
  },
  {
    q: "Will this system get me a job?",
    a: "No system can promise that. What CareerSwitchKit does is remove the most common reason career switchers get filtered out before a human ever reads their application: a resume that doesn't translate their background into the language of the new field.",
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
          key={i}
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
