import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Reveal } from "@/app/components/Reveal";
import CheckoutButton from "./CheckoutButton";
import PreviewList from "./PreviewList";

export const metadata: Metadata = {
  title: "Preview the System | CareerSwitchKit",
  description:
    "See exactly what is inside CareerSwitchKit: a 4-stage career switch system with ATS-ready templates, cover letters, 50 AI prompts, and a completed example.",
};

const stages = [
  { number: "01", label: "Map" },
  { number: "02", label: "Build" },
  { number: "03", label: "Optimize" },
  { number: "04", label: "Apply" },
];

const files = [
  {
    number: "00",
    name: "Start Here Guide",
    format: "DOCX",
    tag: "Read first",
    description:
      "Your onboarding document. Read this first. It explains the full sequence, which template to choose, what each prompt category does, and the five mistakes that kill career-switcher applications before a human reads them.",
  },
  {
    number: "01",
    name: "One-Page CV Template",
    format: "DOCX",
    tag: "Stage 2",
    description:
      "A clean, single-column ATS-optimized resume template. Standard headings, no tables or graphics, contact info as plain text. Built for applicants with under 8 years of experience.",
  },
  {
    number: "02",
    name: "Two-Page CV Template",
    format: "DOCX",
    tag: "Stage 2",
    description:
      "The same ATS-safe structure with room for more experience. Never pad it. Only use this if you genuinely need the space.",
  },
  {
    number: "03",
    name: "Hybrid CV Template",
    format: "DOCX",
    tag: "Stage 2",
    description:
      "Skills-forward layout that leads with a Core Competencies section before your work history. The right choice when your job titles don't match the role you're targeting.",
  },
  {
    number: "04",
    name: "Cover Letter Templates",
    format: "DOCX",
    tag: "Stage 2",
    description:
      "Three templates: Standard (most roles), No Direct Experience (major field changes), and Referral (when someone recommended you). Each is 250 to 350 words and written to complement the resume, not repeat it.",
  },
  {
    number: "05",
    name: "AI Prompt Pack",
    format: "DOCX",
    tag: "Stage 3",
    description:
      "50 prompts across 8 categories: Foundation, Resume Build, ATS Optimization, Cover Letter, LinkedIn, Interview Prep, Networking, and Final Review. Each prompt is a complete instruction: copy, fill the brackets, paste into any AI tool.",
  },
  {
    number: "06",
    name: "ATS Keyword Checklist",
    format: "XLSX",
    tag: "Stage 3",
    description:
      "A working spreadsheet. Paste keywords from any job description, mark where each appears in your resume, and track your match score. Built to be reused for every application.",
  },
  {
    number: "07",
    name: "Completed Example",
    format: "DOCX",
    tag: "Stage 4",
    description:
      "A full career-switch application: resume and cover letter, filled in completely for a real scenario. Read this before you start. It shows you what the finished product looks like.",
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
              width: "800px",
              height: "500px",
              background:
                "radial-gradient(ellipse at center, rgba(55,146,232,0.09) 0%, transparent 68%)",
              top: "-80px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-14">
            <Reveal>
              <h1
                className="font-sora font-black text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] text-balance"
              >
                What you&apos;re getting.
              </h1>
              <p
                className="mt-5 text-lg md:text-xl leading-relaxed max-w-[42ch]"
                style={{ color: "rgba(255,255,255,0.50)" }}
              >
                Eight files. One complete sequence. Here is exactly what is in
                the system before you decide.
              </p>
            </Reveal>

            {/* Stage flow */}
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {stages.map(({ number, label }, i) => (
                  <div key={number} className="flex items-center gap-2">
                    <span
                      className="text-[12px] font-medium px-3 py-1.5 rounded-md"
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span
                        className="font-mono mr-1.5"
                        style={{ color: "#3792E8", fontSize: "11px" }}
                      >
                        {number}
                      </span>
                      {label}
                    </span>
                    {i < stages.length - 1 && (
                      <span
                        className="text-[10px]"
                        style={{ color: "rgba(255,255,255,0.15)" }}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Top rule of the file list */}
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-hidden="true"
          style={{ height: "1px", background: "rgba(255,255,255,0.07)" }}
        />

        {/* ── File list ── */}
        <section className="py-2">
          <PreviewList files={files} />
        </section>

        {/* ── CTA ── */}
        <section
          className="py-24"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h2 className="font-sora text-4xl md:text-5xl font-bold text-white tracking-tight">
                Everything above. $19.
              </h2>
              <p
                className="mt-4 text-lg mb-10"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Instant download. 30-day money-back guarantee. No account needed.
              </p>
              <CheckoutButton />
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
