import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Reveal } from "@/app/components/Reveal";
import CheckoutButton from "./CheckoutButton";

export const metadata: Metadata = {
  title: "Preview the Kit | CareerSwitchKit",
  description:
    "See exactly what is inside CareerSwitchKit: 8 files, an 8-step system, ATS-friendly resume templates, cover letters, 50 AI prompts, and more.",
};

const files = [
  {
    number: "00",
    name: "Start Here Guide",
    format: "DOCX",
    description:
      "Your onboarding doc. Read this first. It explains the 8-step process, which template to choose, what each prompt category does, and the five mistakes that kill career-switcher applications before a human reads them.",
  },
  {
    number: "01",
    name: "One-Page CV Template",
    format: "DOCX",
    description:
      "A clean, single-column ATS-optimized resume template. Standard headings, no tables or graphics, contact info as plain text. Built for applicants with under 8 years of experience.",
  },
  {
    number: "02",
    name: "Two-Page CV Template",
    format: "DOCX",
    description:
      "The same ATS-safe structure with room for more experience. Never pad it — only use this if you genuinely need the space.",
  },
  {
    number: "03",
    name: "Hybrid CV Template",
    format: "DOCX",
    description:
      "Skills-forward layout that leads with a Core Competencies section before your work history. The right choice when your job titles don't match the role you're targeting.",
  },
  {
    number: "04",
    name: "Cover Letter Templates",
    format: "DOCX",
    description:
      "Three templates: Standard (most roles), No Direct Experience (major field changes), and Referral (when someone recommended you). Each is 250–350 words and written to complement the resume, not repeat it.",
  },
  {
    number: "05",
    name: "AI Prompt Pack",
    format: "DOCX",
    description:
      "50 prompts across 8 categories: Foundation, Resume Build, ATS Optimization, Cover Letter, LinkedIn, Interview Prep, Networking, and Final Review. Each prompt is a complete instruction — copy, fill the brackets, paste into any AI tool.",
  },
  {
    number: "06",
    name: "ATS Keyword Checklist",
    format: "XLSX",
    description:
      "A working spreadsheet. Paste keywords from any job description, mark where each appears in your resume, and track your match score. Built to be reused for every application.",
  },
  {
    number: "07",
    name: "Completed Example",
    format: "DOCX",
    description:
      "A full career-switch application — resume and cover letter — filled in completely for a real scenario. Read this before you start. It shows you what the finished product looks like.",
  },
];

export default function PreviewPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#070719]">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 noise-texture pointer-events-none select-none"
            style={{ opacity: 0.025 }}
            aria-hidden="true"
          />
          <div
            className="absolute pointer-events-none"
            style={{
              width: "700px",
              height: "500px",
              background: "rgba(55,146,232,0.07)",
              filter: "blur(130px)",
              borderRadius: "9999px",
              top: "-80px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 text-center">
            <Reveal>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
                style={{ color: "#3792E8" }}
              >
                What&apos;s Inside
              </p>
              <h1 className="font-sora text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight text-balance mb-6">
                Everything in the kit,<br />laid out.
              </h1>
              <p className="text-white/55 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-balance">
                Eight files. One clear system. Here is exactly what you are
                getting before you decide.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── File Showcase ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          {files.map((file, i) => (
            <Reveal key={file.number} delay={0.05}>
              <div className="py-16 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-start">

                {/* Left: file info */}
                <div>
                  <div className="flex items-baseline gap-5 mb-5">
                    <span
                      className="font-sora text-5xl font-black leading-none flex-shrink-0"
                      style={{ color: "#3792E8" }}
                      aria-hidden="true"
                    >
                      {file.number}
                    </span>
                    <div>
                      <h2 className="font-sora text-2xl font-bold text-white leading-snug">
                        {file.name}
                      </h2>
                      <span className="text-xs text-white/30 font-mono tracking-widest uppercase">
                        {file.format}
                      </span>
                    </div>
                  </div>
                  <p className="text-white/60 text-base leading-relaxed max-w-md">
                    {file.description}
                  </p>
                </div>

                {/* Right: screenshot placeholder */}
                <div
                  className="w-full aspect-video rounded-xl flex items-center justify-center"
                  style={{
                    background: "#10102D",
                    border: "1px solid rgba(55,146,232,0.18)",
                  }}
                >
                  <span className="text-white/25 text-sm tracking-wide">
                    Screenshot coming soon
                  </span>
                </div>
              </div>

              {i < files.length - 1 && (
                <hr
                  className="border-0 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                />
              )}
            </Reveal>
          ))}
        </section>

        {/* ── Pull Quote ── */}
        <Reveal>
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div
              className="py-16 text-center"
              style={{
                borderTop: "1px solid rgba(55,146,232,0.3)",
                borderBottom: "1px solid rgba(55,146,232,0.3)",
              }}
            >
              <p
                className="font-sora text-2xl md:text-3xl leading-relaxed text-balance"
                style={{ color: "#3792E8" }}
              >
                &ldquo;You are not buying templates. You are buying a system
                that tells you exactly what to do, in what order, with what
                tools.&rdquo;
              </p>
            </div>
          </section>
        </Reveal>

        {/* ── CTA ── */}
        <section style={{ background: "#10102D" }} className="py-28">
          <Reveal>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-sora text-4xl md:text-5xl font-black text-white tracking-tight mb-4 text-balance">
                Ready to get started?
              </h2>
              <p className="text-white/50 text-lg mb-10 leading-relaxed">
                Instant download. 30-day money-back guarantee. Works with any
                AI tool.
              </p>
              <CheckoutButton />
            </div>
          </Reveal>
        </section>

      </main>
      <Footer />
    </>
  );
}
