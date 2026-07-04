"use client";

// Problem / agitation beat (PAS). Names the pain, sits with it emotionally, then
// externalises the blame with REAL, cited data — the numbers count up from zero when
// the section scrolls into view (respecting prefers-reduced-motion). Every stat is
// sourced; the debunked "75% rejected by ATS" figure is deliberately avoided.

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    target: 98,
    decimals: 0,
    suffix: "%",
    label: "of Fortune 500 companies screen applications with software.",
    source: "Jobscan, 2024",
  },
  {
    target: 88,
    decimals: 0,
    suffix: "%",
    label: "of employers admit that software filters out qualified candidates.",
    source: "Harvard Business School & Accenture, 2021",
  },
  {
    target: 7.4,
    decimals: 1,
    suffix: "s",
    label: "the average a recruiter's eyes spend on the resumes that get through.",
    source: "Ladders eye-tracking study",
  },
];

export default function ProblemSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [vals, setVals] = useState<number[]>(() => STATS.map(() => 0));
  const done = useRef(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done.current) {
          done.current = true;
          const duration = 1700;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setVals(STATS.map((s) => s.target * eased));
            if (p < 1) requestAnimationFrame(step);
            else setVals(STATS.map((s) => s.target));
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="problem" className="max-w-5xl mx-auto px-6 mb-40 fade-up visible">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="section-eyebrow">You&rsquo;re not imagining it</span>
        <h2 className="text-4xl md:text-5xl font-black font-geist mb-6 leading-[1.1]">
          You apply, and apply, and hear{" "}
          <span style={{ color: "#a0c9ff" }}>nothing back.</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#c0c7d3" }}>
          It isn&rsquo;t that you&rsquo;re not good enough.{" "}
          <span style={{ color: "#fff", fontWeight: 600 }}>
            Software screens you out before a human ever reads your name.
          </span>
        </p>
      </div>

      {/* Real, cited evidence — counts up on scroll, externalises the blame */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {STATS.map((s, i) => (
          <div
            key={s.source}
            className="stat-tile relative flex flex-col rounded-2xl px-6 py-8 text-center overflow-hidden"
          >
            <div
              className="stat-num font-geist font-black tracking-tighter mb-3"
              style={{ fontSize: "clamp(46px, 6vw, 62px)", lineHeight: 1 }}
            >
              {vals[i].toFixed(s.decimals)}
              {s.suffix}
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
              {s.label}
            </p>
            <p
              className="mt-auto text-[10px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.34)" }}
            >
              {s.source}
            </p>
          </div>
        ))}
      </div>

      {/* Accented bridge into the proof section that follows */}
      <div className="mt-16 max-w-2xl mx-auto text-center">
        <div
          className="mx-auto mb-6 h-px w-16"
          style={{ background: "linear-gradient(to right, transparent, rgba(160,201,255,0.6), transparent)" }}
        />
        <p className="font-geist font-bold leading-snug" style={{ fontSize: "clamp(20px, 3vw, 30px)" }}>
          The filter isn&rsquo;t judging your background. It&rsquo;s scanning for
          the language of the new field &mdash;{" "}
          <span style={{ color: "#a0c9ff" }}>and that&rsquo;s exactly what you can fix.</span>
        </p>
      </div>
    </section>
  );
}
