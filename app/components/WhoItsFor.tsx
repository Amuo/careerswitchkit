// Honest "who it's for / who it isn't" qualifier. Builds trust by disqualifying
// rather than overselling — no fake testimonials, no guarantees (per brand rules).

const FOR = [
  "You're moving into a field you haven't formally worked in.",
  "You're capable and experienced — but the replies just aren't coming.",
  "Your background is real; it only reads wrong to the new field, not to you.",
  "You'll put in a focused weekend to do the reframing work yourself.",
];

const NOT_FOR = [
  "You're not actually changing fields — this is built only for the translation problem switchers hit.",
  "You want it done for you — this is a system you run yourself (that's why it's $37, not $2,500).",
  "You just want a better-looking template — the value here is reframing your experience, not restyling it.",
  "You expect guaranteed interviews — we stand behind the method with a 7-day refund, not a promise of outcomes.",
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="max-w-5xl mx-auto px-6 mb-40 fade-up visible">
      <div className="text-center mb-12">
        <span className="section-eyebrow">Honest fit</span>
        <h2 className="text-4xl font-black font-geist mb-4">
          Who it&apos;s for. <span style={{ color: "#a0c9ff" }}>And who it isn&apos;t.</span>
        </h2>
        <p style={{ color: "#c0c7d3", maxWidth: "46ch", margin: "0 auto" }}>
          We&apos;d rather you skip this than buy something that isn&apos;t built for your situation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* This is for you if */}
        <div className="rounded-2xl p-6 md:p-8 liquid-glass" style={{ border: "1px solid rgba(160,201,255,0.3)" }}>
          <div className="flex items-center gap-2 mb-5">
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#a0c9ff" }}>
              check_circle
            </span>
            <h3 className="font-geist font-bold text-white">This is for you if…</h3>
          </div>
          <ul className="space-y-4">
            {FOR.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="material-symbols-outlined shrink-0 mt-0.5" style={{ fontSize: 16, color: "#a0c9ff" }}>
                  check
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {t}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* It's probably not for you if */}
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: "rgba(255,255,255,0.5)" }}>
              do_not_disturb_on
            </span>
            <h3 className="font-geist font-bold" style={{ color: "rgba(255,255,255,0.85)" }}>
              It&apos;s probably not for you if…
            </h3>
          </div>
          <ul className="space-y-4">
            {NOT_FOR.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="material-symbols-outlined shrink-0 mt-0.5" style={{ fontSize: 16, color: "rgba(255,255,255,0.35)" }}>
                  remove
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {t}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
