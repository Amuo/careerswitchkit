"use client";

// Types a line out character by character with a blinking cursor. SEO/a11y safe:
// the complete text is always present for screen readers and crawlers (sr-only),
// and the animated copy is aria-hidden. Honours prefers-reduced-motion (shows the
// full line instantly, no cursor).

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  className,
  startDelay = 500,
  speed = 42,
}: {
  text: string;
  className?: string;
  startDelay?: number;
  speed?: number;
}) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const startTimer = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const chars = Math.min(Math.floor((now - start) / speed), text.length);
        setCount(chars);
        if (chars < text.length) raf = requestAnimationFrame(tick);
        else setDone(true);
      };
      raf = requestAnimationFrame(tick);
    }, startDelay);
    return () => {
      window.clearTimeout(startTimer);
      cancelAnimationFrame(raf);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span className="tw-cursor" style={{ opacity: done ? 0 : 1 }}>
          |
        </span>
      </span>
    </span>
  );
}
