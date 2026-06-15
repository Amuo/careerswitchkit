import { Reveal } from "./Reveal";

const stats = [
  {
    number: "50",
    label: "AI Prompts",
    explanation:
      "Organized across 8 categories — from keyword extraction to final review. Not a generic list. A complete system.",
  },
  {
    number: "30 days",
    label: "Money-back guarantee",
    explanation:
      "If CareerSwitchKit doesn't work for you, email us within 30 days for a full refund. No questions asked.",
  },
  {
    number: "4 stages",
    label: "One complete sequence",
    explanation:
      "Every stage builds on the last. Skip one and the next won't land. Follow the sequence and you arrive with a submission-ready application.",
  },
];

export default function Trust() {
  return (
    <section className="relative bg-[#10102D] pt-28 pb-24">
      {/* Gradient fade from Proof (#F0F4FA) into this dark section */}
      <div
        className="absolute top-0 left-0 right-0 h-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #F0F4FA, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-0">
            Why CareerSwitchKit
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <span
                  className="font-sora text-5xl md:text-6xl font-black leading-none text-[#3792E8] whitespace-nowrap"
                >
                  {s.number}
                </span>
                <span className="font-sora text-base font-bold text-white mt-1">
                  {s.label}
                </span>
                <p className="text-sm text-white/45 leading-relaxed max-w-[24ch] mx-auto">
                  {s.explanation}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-14 text-center font-sora text-lg font-semibold text-white/60 leading-snug max-w-[44ch] mx-auto">
            &ldquo;Designed in sequence, not assembled at random. Every stage follows from the one before it.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
