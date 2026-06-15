import { Reveal } from "./Reveal";

const stats = [
  { number: "50", label: "AI Prompts" },
  { number: "30 days", label: "Money-back guarantee" },
  { number: "4 stages", label: "One complete sequence" },
];

export default function Trust() {
  return (
    <section className="relative bg-[#10102D] pt-28 pb-24">
      {/* Gradient fade from HowItWorks white into this dark section */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #ffffff, rgba(16,16,45,0))" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-white/[0.08] gap-10 md:gap-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={[
                  "flex flex-col gap-3",
                  i > 0 ? "md:pl-10 lg:pl-14" : "",
                  i < stats.length - 1 ? "md:pr-10 lg:pr-14" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="font-sora text-5xl lg:text-6xl font-bold text-white leading-none">
                  {s.number}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#3792E8]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-14 text-center font-sora text-xl font-bold text-white/70 leading-snug max-w-[30ch] mx-auto">
            Not underqualified. Just untranslated.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
