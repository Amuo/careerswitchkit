"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const VIDEO_OPACITY = 0.5;
const FADE_DURATION = 0.8; // seconds to fade out before loop / fade in after

export default function TermsBackground() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf: number;

    const tick = () => {
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
          objectFit: "cover", zIndex: -20, opacity: 0, pointerEvents: "none",
        }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
          type="video/mp4"
        />
      </video>
      <div style={{
        position: "fixed", inset: 0, zIndex: -10, pointerEvents: "none",
        background: "radial-gradient(circle at 50% 50%, transparent 0%, #070719 80%)",
      }} />
    </>,
    document.body
  );
}
