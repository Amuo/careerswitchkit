"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const VIDEO_OPACITY = 0.2;
const FADE_DURATION = 0.8;

export default function LandingBackground() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollYRef = useRef(0);

  useEffect(() => { setMounted(true); }, []);

  // Track scroll position without triggering re-renders
  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => { scrollYRef.current = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  // Single rAF loop: handles opacity fade AND parallax objectPosition
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf: number;

    const tick = () => {
      // Opacity: fade out near loop boundary
      if (video.duration) {
        const remaining = video.duration - video.currentTime;
        let opacity = VIDEO_OPACITY;
        if (remaining < FADE_DURATION) {
          opacity = (remaining / FADE_DURATION) * VIDEO_OPACITY;
        } else if (video.currentTime < FADE_DURATION) {
          opacity = (video.currentTime / FADE_DURATION) * VIDEO_OPACITY;
        }
        video.style.opacity = String(opacity);
      }

      // Parallax: pan objectPosition from top (0%) to bottom (100%) as page scrolls
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const progress = Math.min(scrollYRef.current / maxScroll, 1);
        video.style.objectPosition = `center ${progress * 100}%`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div style={{
        position: "fixed", inset: 0, zIndex: -30,
        backgroundColor: "#070719", pointerEvents: "none",
      }} />
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        style={{
          position: "fixed", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 0%",
          zIndex: -20, opacity: 0, pointerEvents: "none",
        }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
          type="video/mp4"
        />
      </video>
      <div style={{
        position: "fixed", inset: 0, zIndex: -10, pointerEvents: "none",
        background: "linear-gradient(to bottom, rgba(7,7,25,0.9) 0%, transparent 50%, rgba(7,7,25,1) 100%)",
      }} />
    </>,
    document.body
  );
}
