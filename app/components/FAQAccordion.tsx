"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is this just for tech jobs?",
    a: "No. While we include tech examples, the system is built on universal semantic transfer. We've seen success in Healthcare, Finance, Operations, and Marketing. The framework works for any field where your past experience needs to be reframed, not discarded.",
  },
  {
    q: "Do I need a ChatGPT subscription?",
    a: "The prompts work with the free version of ChatGPT, Claude, and Gemini. However, GPT-4 or Claude 3.5 Sonnet will provide higher quality structural rewrites. Either way, the framework around the prompts is what does most of the work.",
  },
  {
    q: "What exactly do I get after paying?",
    a: "Instant digital access to our member portal containing the PDF guides, Google Doc templates, and the AI prompt copy-paste library. Everything is available immediately after checkout — no waiting, no shipping.",
  },
  {
    q: "How is this different from a resume template I can find for free?",
    a: "Free templates are static shells. CareerSwitchKit is a transition protocol. We provide the specific semantic mapping and AI prompts needed to translate your past experience into the language of your new target field. A template can't tell you what to put in the boxes. The system does.",
  },
  {
    q: "Will this system get me a job?",
    a: "No system can guarantee that, and anyone who claims otherwise is lying to you. What CareerSwitchKit does is remove the most common reason career switchers get filtered out before a human ever sees their application: a resume and cover letter that doesn't translate their background correctly.",
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
          className={`faq-item liquid-glass rounded-2xl border border-white/5 cursor-pointer hover:bg-white/5 transition-colors group ${openIndex === i ? "active" : ""}`}
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
