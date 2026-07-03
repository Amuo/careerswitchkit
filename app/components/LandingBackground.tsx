"use client";

// Full-screen seamless background video.
//
// The clip's end doesn't match its start, so a single looping <video> shows a
// visible jump at the loop point. Fading one video through black hides the cut
// but adds a noticeable dip. To make the loop truly unnoticeable we play the
// SAME clip on two stacked layers, offset by half its length, and cross-fade
// between them: whenever one layer reaches its seam, the other is at its mid-
// point (nowhere near a seam) and fully covering it, so the jump is never on
// screen. Motion stays continuous — no dip, no cut.
//
// Mobile-safe: both layers use native autoPlay/muted/loop/playsInline (we never
// call .play() from JS, which phones block). If JS is disabled the overlay stays
// hidden and the base video just loops natively as before — nothing breaks.

import { useEffect, useRef } from "react";

const SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4";

// Fraction of each half-cycle spent cross-fading (bigger = softer, longer blend).
const OVERLAP = 0.4;

const videoStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  // Tame the swirl's white-hot core so it never blows out text over it.
  filter: "brightness(0.6) saturate(1.05)",
  willChange: "opacity",
};

export default function LandingBackground() {
  const baseRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const base = baseRef.current;
    const overlay = overlayRef.current;
    if (!base || !overlay) return;

    // Offset the overlay by half the clip so it is always half a loop ahead of
    // the base — one is mid-clip whenever the other is at its seam.
    const setOffset = () => {
      const d = overlay.duration;
      if (d && Number.isFinite(d)) {
        try {
          overlay.currentTime = d / 2;
        } catch {
          /* seeking can throw before data is ready; the retry on metadata covers it */
        }
      }
    };
    if (overlay.readyState >= 1) setOffset();
    else overlay.addEventListener("loadedmetadata", setOffset, { once: true });

    const smoothstep = (x: number) => x * x * (3 - 2 * x);

    let raf = 0;
    const tick = () => {
      const d = overlay.duration;
      if (d && Number.isFinite(d)) {
        const t = overlay.currentTime;
        // 1 at the clip's mid-point, 0 at its seam (start/end).
        const distToSeam = Math.min(t, d - t) / (d / 2);
        // Overlay is fully visible mid-clip and fades out only around its own
        // seam — where the base video (now mid-clip) is covering everything.
        overlay.style.opacity = String(smoothstep(Math.min(distToSeam / OVERLAP, 1)));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
        background: "#070719",
      }}
    >
      {/* Base layer — always visible; the sole fallback if JS is off. */}
      <video ref={baseRef} autoPlay muted loop playsInline style={{ ...videoStyle, opacity: 1 }}>
        <source src={SRC} type="video/mp4" />
      </video>

      {/* Overlay layer — same clip, half a loop ahead; cross-faded over the base. */}
      <video ref={overlayRef} autoPlay muted loop playsInline style={{ ...videoStyle, opacity: 0 }}>
        <source src={SRC} type="video/mp4" />
      </video>

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
