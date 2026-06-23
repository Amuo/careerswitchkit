"use client";

import { useState, useRef, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Is this just for tech jobs?",
    answer:
      "No. While we include tech examples, the system is built on universal semantic transfer. We've seen success in Healthcare, Finance, Operations, and Marketing. The framework works for any field where your past experience needs to be reframed, not discarded.",
  },
  {
    question: "Do I need a ChatGPT subscription?",
    answer:
      "The prompts work with the free version of ChatGPT, Claude, and Gemini. However, GPT-4 or Claude 3.5 Sonnet will provide higher quality structural rewrites. Either way, the framework around the prompts is what does most of the work.",
  },
  {
    question: "What exactly do I get after paying?",
    answer:
      "Instant digital access to our member portal containing the PDF guides, Google Doc templates, and the AI prompt copy-paste library. Everything is available immediately after checkout — no waiting, no shipping.",
  },
  {
    question: "How is this different from a resume template I can find for free?",
    answer:
      "Free templates are static shells. CareerSwitchKit is a transition protocol. We provide the specific semantic mapping and AI prompts needed to translate your past experience into the language of your new target field. A template can't tell you what to put in the boxes. The system does.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`border-b border-white/[0.07] transition-colors duration-200 ${isOpen ? "border-white/[0.12]" : ""}`}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 px-1 text-left group"
      >
        <div className="flex items-center gap-4">
          <span
            className="text-[11px] font-mono text-[#a0c9ff]/30 shrink-0 w-5 text-right"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-medium text-[#e2e0fa] group-hover:text-white transition-colors duration-150">
            {item.question}
          </span>
        </div>
        <span
          className={`material-symbols-outlined shrink-0 text-[#a0c9ff]/50 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
          style={{ fontSize: 20 }}
          aria-hidden="true"
        >
          add
        </span>
      </button>

      <div
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <div ref={contentRef} className="pb-5 pl-9 pr-8">
          <p className="text-sm text-[#c0c7d3]/80 leading-relaxed max-w-2xl">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {FAQS.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
