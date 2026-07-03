"use client";

import { useEffect, useRef } from "react";

const SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4";

// Seconds spent crossfading from the ending clip to the fresh one. This is what
// hides the hard "jump" you normally see when a background video loops.
const FADE = 1.2;

export default function LandingBackground() {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    // Start with A playing and B parked at the beginning, hidden.
    let active: 0 | 1 = 0;
    b.pause();
    b.currentTime = 0;
    a.play().catch(() => {});

    function handleTime(e: Event) {
      const cur = e.currentTarget as HTMLVideoElement;
      const idx: 0 | 1 = cur === a ? 0 : 1;
      if (idx !== active) return; // only the visible clip drives the handoff

      const d = cur.duration;
      if (!d || d < FADE) return;

      // Once the visible clip is within FADE seconds of its end, bring the other
      // copy in from frame 0 and cross-dissolve — no visible seam.
      if (cur.currentTime >= d - FADE) {
        const next: 0 | 1 = active === 0 ? 1 : 0;
        const nextVid = next === 0 ? a! : b!;
        nextVid.currentTime = 0;
        nextVid.play().catch(() => {});
        nextVid.style.opacity = "1";
        cur.style.opacity = "0";
        active = next;
      }
    }

    a.addEventListener("timeupdate", handleTime);
    b.addEventListener("timeupdate", handleTime);
    return () => {
      a.removeEventListener("timeupdate", handleTime);
      b.removeEventListener("timeupdate", handleTime);
    };
  }, []);

  const videoStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    // Tame the swirl's white-hot core so it never blows out text sitting over it.
    filter: "brightness(0.6) saturate(1.05)",
    transition: `opacity ${FADE}s linear`,
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
      <video ref={aRef} muted playsInline preload="auto" style={{ ...videoStyle, opacity: 1 }}>
        <source src={SRC} type="video/mp4" />
      </video>
      <video ref={bRef} muted playsInline preload="auto" style={{ ...videoStyle, opacity: 0 }}>
        <source src={SRC} type="video/mp4" />
      </video>
      {/* Readability scrim: darker at the very top (behind the nav) and bottom
          (behind the footer) where small text lives, lighter through the middle
          so the video still reads as prominent. */}
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
