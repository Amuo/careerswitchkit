"use client";

// Full-screen looping background video.
//
// Uses ONE <video> with native autoPlay/muted/loop/playsInline. (A previous
// version crossfaded two videos in JS to hide the loop seam, but real mobile
// browsers block JS-driven autoplay and choke on two full-screen videos, which
// broke the mobile site. Native autoplay on a single muted/playsInline video is
// the mobile-safe pattern.)
//
// To hide the loop seam WITHOUT a second video, a tiny bit of JS fades this one
// video's opacity down just before it loops and back up just after — driven by
// the video's own currentTime, so the dissolve always lands on the real seam
// even if playback stalls. The dip reveals the dark #070719 base behind it,
// turning the hard jump-cut into a gentle dissolve. If JS is blocked the video
// still plays and loops natively (just with the original seam) — nothing breaks.

import { useEffect, useRef } from "react";

const SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4";

const FADE = 0.7; // seconds of dissolve on each side of the loop seam

export default function LandingBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let raf = 0;
    let hasLooped = false; // don't fade in on the very first play, only after a loop
    let last = 0;

    const tick = () => {
      const d = v.duration;
      if (d && Number.isFinite(d) && d > FADE * 2) {
        const t = v.currentTime;
        if (t < last - 0.5) hasLooped = true; // currentTime jumped back => it looped
        last = t;

        const fadeOut = Math.min((d - t) / FADE, 1); // 1 -> 0 across the last FADE seconds
        const fadeIn = hasLooped ? Math.min(t / FADE, 1) : 1; // 0 -> 1 across the first FADE seconds
        v.style.opacity = String(Math.max(0, Math.min(fadeIn, fadeOut)));
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
        background: "#070719", // dark base the video dissolves through at the seam
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
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
      >
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
