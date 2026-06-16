"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { Reveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function EmailCapture() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative bg-white py-20 lg:py-24 overflow-hidden">
      {/* Gradient fade from FAQ dark */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #10102D, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-8">
          <p
            className="font-mono text-[10px] tracking-[0.18em] uppercase mb-3"
            style={{ color: "#3792E8" }}
          >
            Free resource
          </p>
          <h2 className="font-sora text-2xl md:text-3xl font-bold text-[#070719] tracking-tight">
            Not ready to buy yet?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-500 max-w-[42ch] mx-auto">
            Get the free Career Switcher Resume Checklist — 12 things to audit
            before you submit any application. No purchase needed.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "success" ? (
            <motion.div
              suppressHydrationWarning
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm font-medium"
              style={{
                background: "rgba(55,146,232,0.07)",
                border: "1px solid rgba(55,146,232,0.20)",
                color: "#3792E8",
              }}
            >
              <IconCheck size={16} strokeWidth={2.5} aria-hidden="true" />
              Check your inbox — the checklist is on its way.
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2.5"
              aria-label="Get the free checklist"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                disabled={status === "loading"}
                className="flex-1 px-4 py-3.5 rounded-xl text-sm text-[#070719] placeholder:text-gray-400 outline-none transition-all"
                style={{
                  border: "1.5px solid rgba(7,7,25,0.12)",
                  background: "#FAFAFA",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(55,146,232,0.55)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(55,146,232,0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(7,7,25,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <motion.button
                suppressHydrationWarning
                type="submit"
                disabled={status === "loading"}
                whileHover={reduce ? {} : { scale: 1.02, boxShadow: "0 0 28px rgba(55,146,232,0.45)" }}
                whileTap={reduce ? {} : { scale: 0.975 }}
                transition={{ scale: { duration: 0.16 } }}
                className="flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 rounded-xl text-sm whitespace-nowrap"
                style={{
                  background: status === "loading" ? "rgba(55,146,232,0.55)" : "#3792E8",
                  cursor: status === "loading" ? "wait" : "pointer",
                }}
              >
                {status === "loading" ? "Sending…" : (
                  <>
                    Send me the checklist
                    <IconArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
                  </>
                )}
              </motion.button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-2.5 text-xs text-center text-red-500">
              Something went wrong. Try again or email{" "}
              <a href="mailto:support@careerswitchkit.com" className="underline">
                support@careerswitchkit.com
              </a>
            </p>
          )}

          <p className="mt-4 text-xs text-center text-gray-400">
            No spam. Unsubscribe any time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
