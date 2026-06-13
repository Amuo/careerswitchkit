"use client";

import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: RevealProps) {
  const reduce = useReducedMotion();

  const hidden = {
    opacity: 0,
    y: direction === "up" ? 24 : 0,
    x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
  };

  return (
    <motion.div
      suppressHydrationWarning
      className={className}
      initial={reduce ? false : hidden}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
