"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

type FileItem = {
  number: string;
  name: string;
  format: string;
  tag: string;
  description: string;
};

export default function PreviewList({ files }: { files: FileItem[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.04 });
  const reduce = useReducedMotion();

  return (
    <div ref={listRef} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {files.map((file, i) => (
        <motion.div
          key={file.number}
          suppressHydrationWarning
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.52, delay: i * 0.055, ease: EASE }}
          className="py-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-start gap-5">

            {/* Sequence number */}
            <span
              className="font-mono text-[12px] font-bold flex-shrink-0 pt-[5px] w-6 text-right"
              style={{ color: "rgba(55,146,232,0.45)" }}
              aria-hidden="true"
            >
              {file.number}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2.5">
                <h2
                  className="font-sora text-xl font-bold leading-tight"
                  style={{ color: "rgba(255,255,255,0.90)" }}
                >
                  {file.name}
                </h2>
                <span
                  className="font-mono text-[10px] font-medium tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.20)" }}
                >
                  {file.format}
                </span>
              </div>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.50)", maxWidth: "54ch" }}
              >
                {file.description}
              </p>
            </div>

            {/* Stage tag */}
            <span
              className="hidden sm:inline-flex flex-shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
              style={{
                color: "#3792E8",
                background: "rgba(55,146,232,0.08)",
                border: "1px solid rgba(55,146,232,0.18)",
              }}
            >
              {file.tag}
            </span>

          </div>
        </motion.div>
      ))}
    </div>
  );
}
