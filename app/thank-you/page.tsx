"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FadeUpObserver from "@/app/components/FadeUpObserver";
import { firePurchase } from "@/lib/checkout";

const EASE = [0.22, 1, 0.36, 1] as const;

const stages = [
  {
    number: "01",
    title: "Map Your Transfer",
    doc: "Translation Engine",
    desc: "Translate your existing experience into the exact language your new field understands. This is the foundation. Do this first.",
    icon: "map",
    isStart: true,
  },
  {
    number: "02",
    title: "Build Your Materials",
    doc: "CV + Cover Letter Templates",
    desc: "Career-switcher-specific templates that frame your background as an advantage, not a liability.",
    icon: "description",
    isStart: false,
  },
  {
    number: "03",
    title: "Optimize and Score",
    doc: "ATS Checker + AI Prompt Pack",
    desc: "An interactive ATS Checker and 50 prompts (PDF) to sharpen every line until it clears the filter and reads right to a human.",
    icon: "tune",
    isStart: false,
  },
  {
    number: "04",
    title: "Apply with Proof",
    doc: "Completed Example",
    desc: "The finished system applied to a real switch, end to end. See exactly how it comes together.",
    icon: "send",
    isStart: false,
  },
];

// Particles that scatter from the checkmark on load
const particles = [
  { angle: 20,  dist: 78, delay: 0.78, size: 5 },
  { angle: 72,  dist: 62, delay: 0.84, size: 3 },
  { angle: 130, dist: 88, delay: 0.80, size: 4 },
  { angle: 185, dist: 70, delay: 0.87, size: 5 },
  { angle: 245, dist: 82, delay: 0.82, size: 3 },
  { angle: 305, dist: 68, delay: 0.86, size: 4 },
  { angle: 350, dist: 75, delay: 0.79, size: 3 },
];

export default function ThankYouPage() {
  const [mounted, setMounted] = useState(false);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);
  const conversionFired = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fire the purchase conversion once, when someone lands here after checkout.
  // Polar redirects to /thank-you after a completed payment, so this is our
  // signal that a sale happened — it lets GA4 + the Meta Pixel measure real
  // sales, not just pageviews. NOTE: this is client-side and best-effort — anyone
  // who opens /thank-you directly (without paying) would also count. The accurate
  // version is a Polar webhook firing the conversion server-side; this is the
  // good-enough first step to start seeing sales in the dashboards.
  useEffect(() => {
    if (conversionFired.current) return;
    conversionFired.current = true;

    // A transaction id (if Polar passes one back in the URL) lets GA4 de-dupe
    // repeat page loads. Harmless if it's absent.
    const params = new URLSearchParams(window.location.search);
    const transactionId =
      params.get("checkout_id") ||
      params.get("order_id") ||
      params.get("checkout_session_id") ||
      undefined;

    firePurchase(transactionId);
  }, []);

  return (
    <>
      <FadeUpObserver />

      {/* Reuse the page noise filter */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <filter id="ty-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      <div className="relative min-h-screen" style={{ zIndex: 2 }}>
        <Navbar />

        {/* ── HERO: success moment ─────────────────────────────── */}
        <section className="relative pt-44 pb-24 px-6 text-center overflow-hidden">
          {/* Slow-breathing aurora */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.28, 0.45, 0.28] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(55,146,232,0.32) 0%, rgba(55,146,232,0.08) 45%, transparent 70%)",
              }}
            />
          </motion.div>

          {/* Secondary ambient glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 35% 55%, rgba(160,201,255,0.12) 0%, transparent 58%)",
            }}
          />

          {/* Noise grain */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none noise-overlay"
            style={{ opacity: 0.04 }}
          />

          {/* ── Checkmark + particles ── */}
          {mounted && (
            <div className="relative inline-block mb-8">
              {/* Scatter particles */}
              {particles.map((p, i) => {
                const rad = (p.angle * Math.PI) / 180;
                const x = Math.cos(rad) * p.dist;
                const y = Math.sin(rad) * p.dist;
                return (
                  <motion.div
                    key={i}
                    aria-hidden="true"
                    className="absolute rounded-full"
                    style={{
                      width: p.size,
                      height: p.size,
                      background: i % 2 === 0 ? "#3792E8" : "#a0c9ff",
                      top: "50%",
                      left: "50%",
                      marginTop: -(p.size / 2),
                      marginLeft: -(p.size / 2),
                    }}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    animate={{
                      x,
                      y,
                      opacity: [0, 0.9, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 0.85,
                      delay: p.delay,
                      ease: EASE,
                    }}
                  />
                );
              })}

              {/* Check circle */}
              <motion.div
                className="relative flex items-center justify-center rounded-full"
                style={{
                  width: 88,
                  height: 88,
                  background: "rgba(55,146,232,0.09)",
                  border: "1px solid rgba(55,146,232,0.32)",
                }}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                {/* Ripple 1 */}
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid rgba(55,146,232,0.6)" }}
                  initial={{ scale: 1, opacity: 0.7 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 1.0, delay: 0.45, ease: "easeOut" }}
                />
                {/* Ripple 2 */}
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid rgba(55,146,232,0.35)" }}
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 2.8, opacity: 0 }}
                  transition={{ duration: 1.3, delay: 0.62, ease: "easeOut" }}
                />

                {/* Animated checkmark */}
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M11 21 L18 28 L31 13"
                    stroke="#3792E8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.28,
                      ease: EASE,
                    }}
                  />
                </svg>
              </motion.div>
            </div>
          )}

          {/* Headline */}
          <motion.h1
            className="font-geist font-black"
            style={{
              fontSize: "clamp(60px, 9vw, 96px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              marginBottom: "1rem",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.44, ease: EASE }}
          >
            <span className="hero-headline-gradient" data-text="You're in.">
              You&apos;re in.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            style={{
              color: "#c0c7d3",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              maxWidth: "34ch",
              margin: "0 auto 1.75rem",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          >
            Your switch starts now. Open Stage 01 and follow the sequence. That&apos;s all you need to do.
          </motion.p>

          {/* Email status pill */}
          <motion.div
            className="inline-flex items-center gap-2.5 rounded-2xl"
            style={{
              padding: "0.65rem 1.25rem",
              background: "rgba(55,146,232,0.07)",
              border: "1px solid rgba(55,146,232,0.2)",
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.76, ease: EASE }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 17, color: "#3792E8" }}
            >
              mail
            </span>
            <span className="text-sm font-medium" style={{ color: "#a0c9ff" }}>
              Download link sent to your inbox
            </span>
          </motion.div>
        </section>

        {/* ── STAGE ROADMAP ────────────────────────────────────── */}
        <section className="px-6 pb-20 max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.9, ease: EASE }}
          >
            <h2
              className="font-geist font-bold text-white"
              style={{
                fontSize: "clamp(22px, 3.5vw, 34px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: "0.5rem",
              }}
            >
              Here&apos;s where to start.
            </h2>
            <p className="text-sm" style={{ color: "#4e5d6e" }}>
              Follow the sequence. Stage 01 unlocks everything else.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stages.map((stage, i) => {
              const isActive = stage.isStart || hoveredStage === i;
              return (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 1.0 + i * 0.09,
                  ease: EASE,
                }}
                onHoverStart={() => setHoveredStage(i)}
                onHoverEnd={() => setHoveredStage(null)}
                style={{
                  position: "relative",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  background: isActive
                    ? "rgba(55,146,232,0.09)"
                    : "rgba(22,22,52,0.55)",
                  border: isActive
                    ? "1px solid rgba(55,146,232,0.35)"
                    : "1px solid rgba(255,255,255,0.1)",
                  boxShadow: isActive
                    ? hoveredStage === i
                      ? "0 0 40px rgba(55,146,232,0.22)"
                      : "0 0 24px rgba(55,146,232,0.1)"
                    : "none",
                  transform:
                    hoveredStage === i ? "translateY(-2px)" : "translateY(0)",
                  transition:
                    "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.22s ease",
                  cursor: "default",
                }}
              >
                {/* START HERE badge */}
                {stage.isStart && (
                  <div style={{ position: "absolute", top: -12, left: 20 }}>
                    <motion.span
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(55,146,232,0.3)",
                          "0 0 14px rgba(55,146,232,0.7)",
                          "0 0 0px rgba(55,146,232,0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        display: "inline-block",
                        padding: "3px 12px",
                        borderRadius: 999,
                        background: "#3792E8",
                        color: "#fff",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.07em",
                      }}
                    >
                      START HERE
                    </motion.span>
                  </div>
                )}

                <div
                  className="flex items-start gap-4"
                  style={{ marginTop: stage.isStart ? "0.35rem" : 0 }}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-xl"
                    style={{
                      width: 40,
                      height: 40,
                      background: isActive
                        ? "rgba(55,146,232,0.14)"
                        : "rgba(255,255,255,0.04)",
                      border: `1px solid ${
                        isActive
                          ? "rgba(55,146,232,0.25)"
                          : "rgba(255,255,255,0.06)"
                      }`,
                      transition: "background 0.25s ease, border-color 0.25s ease",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 18,
                        color: isActive ? "#a0c9ff" : "#506070",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {stage.icon}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div
                      className="flex items-center gap-2 mb-1"
                      style={{ flexWrap: "wrap" }}
                    >
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.09em",
                          color: isActive ? "#3792E8" : "rgba(255,255,255,0.38)",
                          transition: "color 0.25s ease",
                        }}
                      >
                        Stage {stage.number}
                      </span>
                      <span
                        style={{
                          color: isActive
                            ? "rgba(255,255,255,0.3)"
                            : "rgba(255,255,255,0.25)",
                          fontSize: "0.7rem",
                          transition: "color 0.25s ease",
                        }}
                      >
                        ·
                      </span>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          letterSpacing: "0.03em",
                          color: isActive
                            ? "rgba(160,201,255,0.65)"
                            : "rgba(255,255,255,0.3)",
                          transition: "color 0.25s ease",
                        }}
                      >
                        {stage.doc}
                      </span>
                    </div>
                    <h3
                      className="font-geist font-semibold text-white"
                      style={{
                        fontSize: "1rem",
                        letterSpacing: "-0.01em",
                        marginBottom: "0.4rem",
                        lineHeight: 1.25,
                      }}
                    >
                      {stage.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        lineHeight: 1.6,
                        color: isActive ? "#7a8fa3" : "#5a6e82",
                        transition: "color 0.25s ease",
                      }}
                    >
                      {stage.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── INBOX CALLOUT ────────────────────────────────────── */}
        <section className="px-6 pb-40 max-w-lg mx-auto fade-up">
          <div
            className="rounded-2xl px-8 py-10 text-center"
            style={{
              background: "rgba(22,22,52,0.65)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 30,
                color: "#3792E8",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              inbox
            </span>
            <h3
              className="font-geist font-bold text-white"
              style={{
                fontSize: "1.15rem",
                letterSpacing: "-0.02em",
                marginBottom: "0.6rem",
              }}
            >
              Check your inbox
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.65,
                color: "#6b7a8d",
                maxWidth: "36ch",
                margin: "0 auto",
              }}
            >
              Polar sends your download link automatically. If it doesn&apos;t arrive within a few minutes, check your spam folder.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
