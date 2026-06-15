import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Reveal } from "@/app/components/Reveal";
import CheckoutButton from "./CheckoutButton";
import PreviewGallery, { type StageGroupData } from "./PreviewGallery";

export const metadata: Metadata = {
  title: "Preview the System | CareerSwitchKit",
  description:
    "See exactly what is inside CareerSwitchKit before you buy. Every stage, every document, before you decide.",
};

const stageGroups: StageGroupData[] = [
  {
    number: "01",
    name: "Map your transfer",
    description: "Understand the full sequence before you write a single word.",
    items: [
      {
        id: "start-here",
        name: "Start Here Guide",
        format: "DOCX",
        description:
          "Your entry point to the system. It explains the full sequence, which template to choose, what each prompt category does, and the five mistakes that kill career-switcher applications before a human reads them.",
      },
    ],
  },
  {
    number: "02",
    name: "Build your materials",
    description:
      "Write a resume and cover letter that translate your background into language the new field understands.",
    items: [
      {
        id: "one-page-cv",
        name: "One-Page CV Template",
        format: "DOCX",
        description:
          "A clean, single-column ATS-optimized resume template. Standard headings, no tables or graphics, contact info as plain text. Built for applicants with under 8 years of experience.",
      },
      {
        id: "two-page-cv",
        name: "Two-Page CV Template",
        format: "DOCX",
        description:
          "The same ATS-safe structure with room for more experience. Never pad it. Only use this if you genuinely need the space.",
      },
      {
        id: "hybrid-cv",
        name: "Hybrid CV Template",
        format: "DOCX",
        description:
          "Skills-forward layout that leads with a Core Competencies section before your work history. The right choice when your job titles don't match the role you're targeting.",
      },
      {
        id: "cover-letter",
        name: "Cover Letter Templates",
        format: "DOCX",
        description:
          "Three templates: Standard, No Direct Experience, and Referral. Each is 250 to 350 words and written to complement the resume, not repeat it.",
      },
    ],
  },
  {
    number: "03",
    name: "Optimize and score",
    description:
      "Get your application past automated filters before a human reads it.",
    items: [
      {
        id: "ai-prompts",
        name: "AI Prompt Pack",
        format: "DOCX",
        description:
          "50 prompts across 8 categories: Foundation, Resume Build, ATS Optimization, Cover Letter, LinkedIn, Interview Prep, Networking, and Final Review. Copy, fill the brackets, paste into any AI tool.",
      },
      {
        id: "ats-checklist",
        name: "ATS Keyword Checklist",
        format: "XLSX",
        description:
          "A working spreadsheet. Paste keywords from any job description, mark where each appears in your resume, and track your match score. Reuse it for every application.",
      },
    ],
  },
  {
    number: "04",
    name: "Apply with proof",
    description: "See the finished product before you build yours.",
    items: [
      {
        id: "example",
        name: "Completed Example",
        format: "DOCX",
        description:
          "A full career-switch application: resume and cover letter, filled in completely for a real scenario. Read this before you start. It shows you what the finished product looks like.",
      },
    ],
  },
];

const stagePills = [
  { n: "01", label: "Map" },
  { n: "02", label: "Build" },
  { n: "03", label: "Optimize" },
  { n: "04", label: "Apply" },
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
                "radial-gradient(ellipse at center, rgba(55,146,232,0.08) 0%, transparent 68%)",
              top: "-80px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
            <Reveal>
              <p
                className="font-mono text-[10px] tracking-[0.18em] uppercase mb-4"
                style={{ color: "#3792E8" }}
              >
                Preview
              </p>
              <h1 className="font-sora font-black text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] text-balance">
                Inside the system.
              </h1>
              <p
                className="mt-5 text-lg md:text-xl leading-relaxed"
                style={{ color: "rgba(255,255,255,0.48)", maxWidth: "44ch" }}
              >
                Every stage, every document, before you decide. Nothing hidden.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-2.5">
                {stagePills.map(({ n, label }, i) => (
                  <div key={n} className="flex items-center gap-2.5">
                    <a
                      href={`#stage-${n}`}
                      className="flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-md"
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        transition: "border-color 0.2s ease, color 0.2s ease",
                        textDecoration: "none",
                      }}
                    >
                      <span
                        className="font-mono"
                        style={{ color: "#3792E8", fontSize: "10px" }}
                      >
                        {n}
                      </span>
                      {label}
                    </a>
                    {i < stagePills.length - 1 && (
                      <span
                        className="text-[10px]"
                        style={{ color: "rgba(255,255,255,0.14)" }}
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

        {/* ── Gallery ── */}
        <PreviewGallery stageGroups={stageGroups} />

        {/* ── CTA ── */}
        <section
          className="py-24"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <h2 className="font-sora text-4xl md:text-5xl font-bold text-white tracking-tight">
                The complete system. $19.
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
