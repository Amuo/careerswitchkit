/* ────────────────────────────────────────────────────────────────────────
   The circular score gauge used on /preview — the live ATS demo (its number
   animates up) and the tour's Stage-3 visual (a static 94). One source for
   the ring geometry, so the radius and its circumference can never drift.
   ──────────────────────────────────────────────────────────────────────── */

const RADIUS = 43;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // must track the r={RADIUS} ring below

export default function ScoreGauge({
  fill,
  display,
  color,
  size,
  numberSize,
  className = "",
}: {
  fill: number; // 0–100 — how far the ring is drawn
  display: number; // the number shown in the centre (may animate up to `fill`)
  color: string;
  size: number;
  numberSize: number;
  className?: string;
}) {
  const offset = CIRCUMFERENCE - (fill / 100) * CIRCUMFERENCE;
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg className="pv-gauge-svg" viewBox="0 0 100 100" style={{ width: size, height: size }}>
        <circle className="pv-gauge-track" cx="50" cy="50" r={RADIUS} />
        <circle
          className="pv-gauge-fill"
          cx="50" cy="50" r={RADIUS}
          style={{ stroke: color, strokeDasharray: CIRCUMFERENCE, strokeDashoffset: offset }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-geist font-black" style={{ fontSize: numberSize, lineHeight: 1, color }}>{display}</span>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(148,163,184,0.8)", marginTop: 2 }}>/ 100</span>
      </div>
    </div>
  );
}
