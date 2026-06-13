"use client";

import { useRef } from "react";
import { IconTemplate, IconBulb, IconSend } from "@tabler/icons-react";
import { motion, useInView } from "motion/react";
import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    icon: IconTemplate,
    title: "Pick a Template",
    description:
      "Choose the resume format that fits your target role and how you want to frame your experience.",
    detail:
      "One-page for under 8 years experience. Two-page for more. Hybrid if your job titles don't match your target role yet.",
  },
  {
    number: "02",
    icon: IconBulb,
    title: "Paste Job Post + Run Prompts",
    description:
      "Copy the job description into your AI tool. The 50 prompts guide it to tailor every line to that specific role.",
    detail:
      "The prompts extract keywords, rewrite your bullets, and score your resume against the specific job — all in one session.",
  },
  {
    number: "03",
    icon: IconSend,
    title: "Check ATS Score + Apply",
    description:
      "Run the keyword checklist, fix any flags, and submit with confidence that your resume will clear automated filters.",
    detail:
      "Most applicants skip this step. The ones who don't are the ones who get through.",
  },
];

const EASE = [0.25, 0.1, 0.25, 1] as const;

function AnimatedConnector() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <div
      ref={ref}
      className="hidden md:block absolute top-14 -right-3 w-6 h-px z-20 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="h-full"
        style={{ background: "rgba(55,146,232,0.40)" }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
      />
    </div>
  );
}

function PingIcon({ Icon, inView }: { Icon: React.ElementType; inView: boolean }) {
  return (
    <div className="relative z-10 w-12 h-12 flex items-center justify-center mb-6">
      {/* Ping ring — triggers when in view */}
      {inView && (
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            border: "1px solid rgba(55,146,232,0.5)",
            animation: "ping 1.2s ease-out forwards",
          }}
          aria-hidden="true"
        />
      )}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(55,146,232,0.10)" }}
      >
        <Icon size={22} strokeWidth={1.75} className="text-accent" />
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="how-it-works"
      className="relative bg-[#070719] py-16 lg:py-20 overflow-hidden"
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 noise-texture pointer-events-none select-none"
        style={{ opacity: 0.025 }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
            THE PROCESS
          </p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-white tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-white/50 text-lg max-w-[44ch]">
            Three steps from download to submitted application.
          </p>
        </Reveal>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            const stepDelay = i * 0.15;

            return (
              <Reveal key={step.number} delay={stepDelay} className="h-full">
                <div
                  className="group relative h-full rounded-2xl p-8 border border-white/10 overflow-hidden transition-all duration-300 hover:border-accent"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    minHeight: "280px",
                  }}
                >
                  {/* Accent top border */}
                  <div
                    className="absolute top-0 left-0 right-0 rounded-t-2xl"
                    style={{ height: "3px", background: "#3792E8" }}
                    aria-hidden="true"
                  />

                  {/* Giant watermark number */}
                  <span
                    className="absolute top-0 right-4 font-sora font-black text-white/5 select-none leading-none pointer-events-none"
                    style={{ fontSize: "120px", lineHeight: "1" }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ boxShadow: "0 0 30px rgba(55,146,232,0.10) inset" }}
                    aria-hidden="true"
                  />

                  {/* Icon with ping ring */}
                  <PingIcon Icon={Icon} inView={sectionInView} />

                  <h3 className="relative z-10 font-sora text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="relative z-10 text-white/55 text-[15px] leading-relaxed max-w-[30ch]">
                    {step.description}
                  </p>
                  <p className="relative z-10 mt-2 text-white/35 text-[13px] leading-relaxed max-w-[30ch]">
                    {step.detail}
                  </p>

                  {/* Animated connector to next step */}
                  {!isLast && <AnimatedConnector />}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
