"use client";

import { handleCheckout } from "@/lib/checkout";
import { Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section className="bg-white py-28 lg:py-36 border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
            GET STARTED
          </p>
          <h2 className="font-sora text-5xl font-bold text-[#070719] tracking-tight leading-tight">
            The job won&apos;t wait.
            <br />
            Neither should you.
          </h2>
          <p className="mt-5 text-gray-500 text-lg leading-relaxed max-w-[42ch] mx-auto">
            Get your ATS-ready resume, cover letter, and 50 AI prompts — downloaded and ready in under an hour. One payment, no subscription, yours to keep.
          </p>
          <div className="mt-10">
            <button
              onClick={handleCheckout}
              className="bg-accent hover:bg-accent-hover text-white font-semibold px-12 py-5 rounded-xl transition-all duration-200 active:scale-[0.98] text-lg hover:shadow-[0_0_40px_rgba(55,146,232,0.35)]"
            >
              Get the Kit — $49
            </button>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            Questions before you buy?{" "}
            <a
              href="mailto:support@careerswitchkit.com"
              className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors"
            >
              support@careerswitchkit.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
