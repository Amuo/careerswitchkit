import { Reveal } from "./Reveal";

const stats = [
  {
    number: "50",
    label: "AI Prompts",
    explanation:
      "Organized across 8 categories, from keyword extraction to final review. Not a generic list. A complete system.",
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
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-white/[0.08] gap-10 md:gap-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={[
                  "flex flex-col gap-2",
                  i > 0 ? "md:pl-10 lg:pl-14" : "",
                  i < stats.length - 1 ? "md:pr-10 lg:pr-14" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="font-sora text-3xl font-bold text-white leading-none">
                  {s.number}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#3792E8]">
                  {s.label}
                </span>
                <p className="text-sm text-white/40 leading-relaxed mt-0.5">
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
