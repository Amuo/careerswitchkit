import type { Metadata } from "next";
import Link from "next/link";
import BlogCTA from "@/app/blog/BlogCTA";

export const metadata: Metadata = {
  title: "What Is ATS and Why Career Switchers Fail It | CareerSwitchKit",
  description:
    "Most career switchers get filtered out by Applicant Tracking Systems before a human reads their resume. Here's what ATS actually is and the specific steps to pass it.",
  alternates: {
    canonical: "https://careerswitchkit.org/blog/what-is-ats-career-switchers",
  },
  openGraph: {
    title: "What Is ATS and Why Career Switchers Fail It (And How to Pass)",
    description:
      "Most career switchers get filtered out by Applicant Tracking Systems before a human reads their resume. Here's what ATS actually is and the specific steps to pass it.",
    url: "https://careerswitchkit.org/blog/what-is-ats-career-switchers",
    type: "article",
  },
};

export default function Post() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-[#070719] pt-28 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs mb-8 transition-colors"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            ← All resources
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>June 2026</span>
            <span style={{ color: "rgba(255,255,255,0.12)" }}>·</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>5 min read</span>
          </div>
          <h1 className="font-sora font-black text-3xl md:text-4xl text-white tracking-tight leading-tight">
            What Is ATS and Why Career Switchers Fail It (And How to Pass)
          </h1>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            Most career switchers get filtered out by Applicant Tracking Systems
            before a human reads their resume. Here&apos;s what ATS actually is and
            the specific steps to pass it.
          </p>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-gray max-w-none" style={{ fontSize: "17px", lineHeight: "1.75" }}>

          <p style={{ color: "#374151" }}>
            If you&apos;ve applied for jobs in the last decade and heard nothing back,
            there&apos;s a reasonable chance an algorithm filtered you out before a
            human ever saw your resume. Most people don&apos;t know this is happening.
            Even fewer know how to prevent it.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            What ATS actually is
          </h2>

          <p style={{ color: "#374151" }}>
            ATS stands for Applicant Tracking System. It&apos;s software that
            companies use to manage job applications — and in most mid-size and
            larger companies, it also <strong style={{ color: "#070719" }}>scores and filters</strong> those applications
            before a recruiter sees them.
          </p>

          <p style={{ color: "#374151" }}>
            The filter works roughly like this: the ATS scans your resume for
            keywords that match the job description. It checks formatting,
            section headers, and whether certain phrases appear in your document.
            It generates a score. Applications below a certain threshold — often
            around 65 out of 100 — get filtered out. The recruiter never sees
            them.
          </p>

          <p style={{ color: "#374151" }}>
            This has become standard practice because hiring managers at
            larger companies receive hundreds of applications per open role.
            The ATS is the first line of filtering, and for career switchers,
            it&apos;s the hardest one to clear.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            Why career switchers fail it more often
          </h2>

          <p style={{ color: "#374151" }}>
            Career switchers fail ATS at a higher rate than most applicants for
            one simple reason: their resume uses the terminology of their old
            field, not their new one.
          </p>

          <p style={{ color: "#374151" }}>
            The ATS doesn&apos;t know that &ldquo;retail floor manager&rdquo; and &ldquo;operations
            coordinator&rdquo; are related. It&apos;s matching your resume against the exact
            words in the job description. If the job description says &ldquo;process
            improvement&rdquo; and your resume says &ldquo;improved store operations,&rdquo; the
            ATS may not make that connection — even if the underlying work was
            identical.
          </p>

          <p style={{ color: "#374151" }}>
            It&apos;s also common for career switchers to use formatting that confuses
            ATS. Tables, graphics, text boxes, and two-column layouts can all
            cause the system to misread or skip sections entirely. A resume that
            looks polished to a human can score 20 points lower than a
            plain-text version of the same content, just because of how it&apos;s
            laid out.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            Five things that get career switchers filtered out
          </h2>

          <h3
            className="font-sora font-semibold mt-7 mb-2"
            style={{ fontSize: "17px", color: "#070719" }}
          >
            1. Wrong terminology
          </h3>
          <p style={{ color: "#374151" }}>
            Using your old field&apos;s vocabulary when the job description uses
            different words for the same concepts. The ATS won&apos;t bridge that gap
            on your behalf.
          </p>

          <h3
            className="font-sora font-semibold mt-7 mb-2"
            style={{ fontSize: "17px", color: "#070719" }}
          >
            2. No keyword matching
          </h3>
          <p style={{ color: "#374151" }}>
            Not checking which keywords from the job description appear in your
            resume — and at what frequency. Keywords need to appear in the right
            sections, not just somewhere in the document.
          </p>

          <h3
            className="font-sora font-semibold mt-7 mb-2"
            style={{ fontSize: "17px", color: "#070719" }}
          >
            3. Complex formatting
          </h3>
          <p style={{ color: "#374151" }}>
            Tables, text boxes, headers and footers, or two-column layouts that
            ATS software can&apos;t parse correctly. The safest formatting is
            single-column with standard section headings: Work Experience,
            Education, Skills.
          </p>

          <h3
            className="font-sora font-semibold mt-7 mb-2"
            style={{ fontSize: "17px", color: "#070719" }}
          >
            4. A weak or missing summary
          </h3>
          <p style={{ color: "#374151" }}>
            The summary at the top of a resume is where career switchers should
            explicitly bridge their background to the target role. Most either
            skip it or write something vague like &ldquo;experienced professional
            seeking new opportunities.&rdquo; That helps no one.
          </p>

          <h3
            className="font-sora font-semibold mt-7 mb-2"
            style={{ fontSize: "17px", color: "#070719" }}
          >
            5. No quantified achievements
          </h3>
          <p style={{ color: "#374151" }}>
            Generic descriptions score lower, and they&apos;re also weaker to a human
            reader. &ldquo;Resolved 40+ daily customer inquiries via Salesforce;
            reduced escalation rate by 18% over two quarters&rdquo; scores higher and
            reads better than &ldquo;handled customer service.&rdquo;
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            How to check your resume before you submit
          </h2>

          <p style={{ color: "#374151" }}>
            The most reliable method is to compare your resume directly against
            each job description you&apos;re applying for. Pull the job description,
            paste it into a document, and highlight every skill, responsibility,
            and requirement that appears more than once. Then go through your
            resume and mark every place those terms appear. The gaps are your
            problem areas.
          </p>

          <p style={{ color: "#374151" }}>
            This sounds tedious because it is — when done manually. But it&apos;s
            the kind of work that gets you from a 23/100 ATS score to an 87/100.
            The difference between being filtered out and getting a recruiter
            call.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            What a passing score looks like
          </h2>

          <p style={{ color: "#374151" }}>
            A resume that passes ATS isn&apos;t keyword-stuffed — it&apos;s one where
            your real experience is described in the language of the target
            field, formatted so the software can read it, with specific
            measurable outcomes where possible.
          </p>

          <p style={{ color: "#374151" }}>
            The benchmark to aim for is above 65/100 on the job description
            you&apos;re targeting. Some companies set the threshold lower, some
            higher — but 65 is a reasonable floor, and 80+ means you&apos;re
            competitive.
          </p>
        </div>

        <BlogCTA
          heading="Stage 3 is built specifically to clear ATS."
          body="50 AI prompts for keyword extraction and rewriting (PDF), plus an interactive ATS Checker you reuse for every application. $37, instant download."
        />

        {/* Related */}
        <div className="mt-12 pt-10" style={{ borderTop: "1px solid #E5E7EB" }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Related
          </p>
          <Link
            href="/blog/how-to-write-a-career-change-resume"
            className="group block"
          >
            <p className="font-sora font-semibold text-[#070719] group-hover:text-[#3792E8] transition-colors duration-200">
              How to Write a Resume When Switching Careers →
            </p>
          </Link>
        </div>
      </article>
    </div>
  );
}
