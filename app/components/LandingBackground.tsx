"use client";

// Full-screen looping background video — ONE video, native autoplay (mobile-safe).
//
// The clip's end doesn't match its start, so a plain loop shows a jump. We hide
// it simply: the container behind the video is set to the video's OWN dark
// background colour, and a quick fade dips the video's opacity right at the loop
// point. Because the colour matches, the dark areas don't shift at all — only
// the swirl briefly fades out and back in over the jump, so the seam isn't seen.
// If JS is off the video just loops natively as before.

import { useEffect, useRef } from "react";

// Self-hosted, re-encoded 2026-07-11: was a 15.8 MB external clip; now a 2.69 MB
// same-origin file (H.264 CRF 28, audio stripped, +faststart). ~6x smaller and no
// cross-origin round-trip, so it loads far faster on mobile. Re-encode the source
// with ffmpeg if you ever swap the clip; keep it well under ~3 MB.
const SRC = "/hero-bg.mp4";

// Colour the video fades to at the loop point. Black.
const VIDEO_BG = "#000000";

const FADE = 0.5; // seconds of fade on each side of the loop seam

export default function LandingBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Lazy-load the video: only start fetching the (multi-MB) clip once the
    // browser is idle, so it doesn't steal bandwidth from the hero text/fonts
    // during the initial load. This is what lets LCP happen sooner.
    const startVideo = () => {
      if (v.src) return;
      // Spare data-constrained visitors the ~16 MB clip: honour Save-Data and skip
      // on 2G / slow-2G. Everyone on a normal connection still gets the video; when
      // skipped, the matching black background + scrim shows instead (no empty state).
      const conn = (navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }).connection;
      if (conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ""))) return;
      v.src = SRC;
      v.load();
      v.play().catch(() => {}); // muted autoplay is allowed; ignore if blocked
    };
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let idleId = 0;
    let timeoutId = 0;
    if (w.requestIdleCallback) idleId = w.requestIdleCallback(startVideo, { timeout: 2500 });
    else timeoutId = window.setTimeout(startVideo, 1200);

    let raf = 0;
    let hasLooped = false; // don't fade in on the very first play, only after a loop
    let last = 0;
    let lastOpacity = ""; // only write to the DOM when the value actually changes

    const tick = () => {
      const d = v.duration;
      if (d && Number.isFinite(d) && d > FADE * 2) {
        const t = v.currentTime;
        if (t < last - 0.5) hasLooped = true; // currentTime jumped back => it looped
        last = t;

        const fadeOut = Math.min((d - t) / FADE, 1);
        const fadeIn = hasLooped ? Math.min(t / FADE, 1) : 1;
        const next = String(Math.max(0, Math.min(fadeIn, fadeOut)));
        if (next !== lastOpacity) {
          v.style.opacity = next;
          lastOpacity = next;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (idleId && w.cancelIdleCallback) w.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
        background: VIDEO_BG, // matches the video's dark base, so the fade doesn't show
      }}
    >
      {/* No `autoPlay` / no <source> on purpose — the src is set in the effect
          above once the browser is idle, so the download doesn't delay LCP. */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          // Tame the swirl's white-hot core so it never blows out text over it.
          filter: "brightness(0.6) saturate(1.05)",
          willChange: "opacity",
        }}
      />

      {/* Readability scrim — darker behind the nav/footer, lighter through the middle. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(7,7,25,0.55) 0%, rgba(7,7,25,0.3) 18%, rgba(7,7,25,0.3) 80%, rgba(7,7,25,0.6) 100%)",
        }}
      />
    </div>
  );
}
