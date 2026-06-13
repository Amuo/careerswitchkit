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
    number: "8 files",
    label: "In one download",
    explanation:
      "Everything in one ZIP. No accounts, no subscriptions, no drip-feeding content. You get it all immediately.",
  },
];

export default function Trust() {
  return (
    <section className="bg-white pt-16 pb-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="font-sora text-5xl md:text-6xl font-black leading-none text-[#3792E8]/80 whitespace-nowrap"
                >
                  {s.number}
                </span>
                <span className="font-sora text-base font-bold text-[#070719] mt-1">
                  {s.label}
                </span>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[24ch] mx-auto">
                  {s.explanation}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-14 text-center font-sora text-lg font-semibold text-[#334155] leading-snug max-w-[44ch] mx-auto">
            &ldquo;Built specifically for career switchers — not adapted from a
            generic resume template pack.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
