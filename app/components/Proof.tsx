"use client";

import { Reveal } from "./Reveal";

export default function Proof() {
  return (
    <section className="bg-white py-28 lg:py-36">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
            SEE IT IN ACTION
          </p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-[#070719] tracking-tight">
            What a rewrite looks like
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-[50ch]">
            A single resume bullet, before and after using the AI Prompt Pack. Real example — not a testimonial.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
            {/* Before */}
            <div className="rounded-xl p-6 border-l-4 border-red-400 bg-red-50">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-4">
                Before
              </span>
              <blockquote className="font-mono text-[14px] leading-relaxed text-gray-700 border-l-2 border-red-300 pl-4">
                &ldquo;Helped customers with various tasks and worked with the
                team to meet goals.&rdquo;
              </blockquote>
              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                Vague. No numbers. No keywords. Fails most ATS scans.
              </p>
            </div>

            {/* After */}
            <div className="rounded-xl p-6 border-l-4 border-emerald-500 bg-emerald-50">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-4">
                After
              </span>
              <blockquote className="font-mono text-[14px] leading-relaxed text-gray-700 border-l-2 border-emerald-300 pl-4">
                &ldquo;Resolved 40+ daily customer inquiries via Salesforce;
                reduced escalation rate by 18% over two quarters.&rdquo;
              </blockquote>
              <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                Specific. Quantified. Keyword-rich. Passes ATS filters.
              </p>
            </div>
          </div>

          {/* Honest disclaimer */}
          <div className="mt-6 flex items-start gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
            <p className="text-sm text-gray-500 leading-relaxed">
              <strong className="text-gray-700 font-medium">Example only.</strong>{" "}
              This rewrite uses Prompt 12 from the AI Pack. Results depend on
              your experience, the role you&apos;re targeting, and how you work
              with the prompts. The kit gives you the tools — you do the work.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
