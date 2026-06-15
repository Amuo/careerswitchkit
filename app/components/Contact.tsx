"use client";

import { handleCheckout } from "@/lib/checkout";
import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section className="bg-[#070719] py-28 lg:py-36 border-t border-white/10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
            GET STARTED
          </p>
          <h2 className="font-sora text-5xl font-bold text-white tracking-tight leading-tight">
            The job won&apos;t wait.
            <br />
            Neither should you.
          </h2>
          <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-[42ch] mx-auto">
            Four stages. Eight files. One career switch. Download the system, follow the sequence, and submit applications that don&apos;t get filtered out before a human sees them.
          </p>
          <div className="mt-10">
            <button
              onClick={handleCheckout}
              className="bg-accent hover:bg-accent-hover text-white font-semibold px-12 py-5 rounded-xl transition-all duration-200 active:scale-[0.98] text-lg hover:shadow-[0_0_40px_rgba(55,146,232,0.35)]"
            >
              Start the System — $19
            </button>
          </div>
          <p className="mt-6 text-white/60 text-sm">
            Questions before you buy?{" "}
            <a
              href="mailto:support@careerswitchkit.com"
              className="text-white/80 hover:text-white underline underline-offset-4 transition-colors"
            >
              support@careerswitchkit.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
