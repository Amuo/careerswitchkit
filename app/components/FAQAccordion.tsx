"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faqs";

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
