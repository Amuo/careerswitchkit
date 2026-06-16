import type { Metadata } from "next";
import Link from "next/link";
import { handleCheckout } from "@/lib/checkout";

export const metadata: Metadata = {
  title: "How to Write a Resume When Switching Careers | CareerSwitchKit",
  description:
    "Career switchers don't fail because they're unqualified. They fail because their resume doesn't translate their background. Here's the framework to fix it.",
  alternates: {
    canonical: "https://careerswitchkit.org/blog/how-to-write-a-career-change-resume",
  },
  openGraph: {
    title: "How to Write a Resume When Switching Careers",
    description:
      "Career switchers don't fail because they're unqualified. They fail because their resume doesn't translate their background. Here's the framework to fix it.",
    url: "https://careerswitchkit.org/blog/how-to-write-a-career-change-resume",
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
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>6 min read</span>
          </div>
          <h1 className="font-sora font-black text-3xl md:text-4xl text-white tracking-tight leading-tight">
            How to Write a Resume When Switching Careers
          </h1>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            Career switchers don&apos;t fail because they&apos;re unqualified. They fail
            because their resume doesn&apos;t translate their background into the
            language of the new field. Here&apos;s the framework to fix it.
          </p>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-gray max-w-none" style={{ fontSize: "17px", lineHeight: "1.75" }}>

          <p style={{ color: "#374151" }}>
            Career switching is more common than it&apos;s ever been. More than half
            of US workers say they&apos;ve considered changing industries, and a
            growing number actually do it. But there&apos;s a problem almost nobody
            talks about openly: the resume advice that works for people moving
            up in their field doesn&apos;t work for people moving <em>across</em> fields.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            The problem isn&apos;t your background. It&apos;s the translation.
          </h2>

          <p style={{ color: "#374151" }}>
            When you apply for a job in a new field, the hiring manager sees a
            different story than the one you&apos;re trying to tell. You see
            transferable skills. They see someone with no relevant experience.
            You see potential. They see a risk.
          </p>

          <p style={{ color: "#374151" }}>
            This isn&apos;t because your background isn&apos;t valuable — it&apos;s because
            your resume is written in the wrong language.
          </p>

          <p style={{ color: "#374151" }}>
            Every field has its own vocabulary, its own standard for what
            &ldquo;experience&rdquo; looks like, and its own baseline for what a qualified
            candidate demonstrates on paper. When you switch fields, your job
            isn&apos;t just to write a good resume. It&apos;s to <strong style={{ color: "#070719" }}>translate</strong> your
            existing experience into the language of your new field.
          </p>

          <p style={{ color: "#374151" }}>
            Most career switchers never figure this out. They take their
            existing resume, swap in the job title they&apos;re targeting, write
            &ldquo;passionate about [new field]&rdquo; in the summary, and send it off. It
            doesn&apos;t work. Not because they&apos;re unqualified, but because the
            translation hasn&apos;t happened.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            Four things a career-switch resume has to do
          </h2>

          <p style={{ color: "#374151" }}>
            A resume for a career switcher needs to do four specific things
            that a standard resume doesn&apos;t:
          </p>

          <h3
            className="font-sora font-semibold mt-7 mb-2"
            style={{ fontSize: "17px", color: "#070719" }}
          >
            1. Frame your background as relevant, not foreign
          </h3>
          <p style={{ color: "#374151" }}>
            The reader shouldn&apos;t have to figure out how your old role connects
            to the new one. You have to do that work explicitly. A retail floor
            manager applying for an operations coordinator role doesn&apos;t just say
            &ldquo;managed retail operations&rdquo; — they say &ldquo;coordinated daily workflows
            for a 12-person team, managing scheduling, inventory, and process
            adherence.&rdquo; Same work. Different language.
          </p>

          <h3
            className="font-sora font-semibold mt-7 mb-2"
            style={{ fontSize: "17px", color: "#070719" }}
          >
            2. Match the keywords of the target field
          </h3>
          <p style={{ color: "#374151" }}>
            Most companies run applications through an Applicant Tracking System
            (ATS) before a human reads them. The ATS scans for keywords that
            match the job description. If your resume uses your old field&apos;s
            terminology, it won&apos;t match the keywords the ATS is looking for —
            and it&apos;ll be filtered out before anyone sees it. Keyword matching
            isn&apos;t optional for career switchers. It&apos;s the price of entry.
          </p>

          <h3
            className="font-sora font-semibold mt-7 mb-2"
            style={{ fontSize: "17px", color: "#070719" }}
          >
            3. Lead with a format that fits your situation
          </h3>
          <p style={{ color: "#374151" }}>
            The standard chronological resume works best when your most recent
            job titles are relevant to what you&apos;re applying for. When they&apos;re
            not, chronological format buries your relevant skills.
            Skills-forward or hybrid formats — which lead with a core
            competencies section before work history — are often the better
            choice for career switchers. The right format depends on your
            specific situation, not a universal rule.
          </p>

          <h3
            className="font-sora font-semibold mt-7 mb-2"
            style={{ fontSize: "17px", color: "#070719" }}
          >
            4. Quantify what you can
          </h3>
          <p style={{ color: "#374151" }}>
            Specific numbers convert better than general statements. &ldquo;Reduced
            escalation rate by 18% over two quarters&rdquo; is more credible than
            &ldquo;improved customer satisfaction.&rdquo; Numbers work across field
            boundaries in a way that job titles don&apos;t.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            Why this is harder than it sounds
          </h2>

          <p style={{ color: "#374151" }}>
            The challenge isn&apos;t knowing these principles — it&apos;s applying them
            when you&apos;re inside your own career history. Most people can&apos;t see
            their own experience the way a hiring manager in a new field would.
            They&apos;re too close to it. They know what their job title meant in
            their old field, so they assume the connection will be obvious to
            someone in a different field. It usually isn&apos;t.
          </p>

          <p style={{ color: "#374151" }}>
            Career switchers who get interviews tend to have done one thing
            differently: they got outside their own perspective and deliberately
            translated their experience. Some hire a career coach. Some have a
            friend in the target field review their resume. Some use a
            structured system.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            Where to start
          </h2>

          <p style={{ color: "#374151" }}>
            Before you touch your resume, write down the specific role
            you&apos;re targeting — not the industry, the actual role. Then pull
            three job descriptions for that role and read them carefully. List
            the words and phrases that appear repeatedly. Those are the keywords
            your resume needs to include.
          </p>

          <p style={{ color: "#374151" }}>
            Then go through your work history and find examples — specific,
            measurable ones if possible — where you did something that maps to
            the language on that list. Not a rough approximation. A genuine
            connection. If you can&apos;t find one, that tells you something useful
            about whether this role is the right target.
          </p>

          <p style={{ color: "#374151" }}>
            Once you&apos;ve done that translation work, the resume almost writes
            itself. The difficulty isn&apos;t the writing — it&apos;s the mapping.
          </p>
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(150deg, #10102D 0%, #070719 100%)",
            border: "1.5px solid rgba(55,146,232,0.24)",
          }}
        >
          <p
            className="font-mono text-[10px] tracking-[0.18em] uppercase mb-3"
            style={{ color: "#3792E8" }}
          >
            CareerSwitchKit
          </p>
          <h3 className="font-sora text-xl font-bold text-white tracking-tight mb-3">
            The 4-stage system that does the translation work for you.
          </h3>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
            Stage 1 maps your background. Stage 2 gives you the templates.
            Stage 3 scores your resume before you submit. $19, instant download.
          </p>
          <button
            onClick={handleCheckout}
            className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02]"
            style={{ background: "#3792E8", boxShadow: "0 0 28px rgba(55,146,232,0.35)" }}
          >
            Get the System for $19
          </button>
          <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
            30-day money-back guarantee
          </p>
        </div>

        {/* Related */}
        <div className="mt-12 pt-10" style={{ borderTop: "1px solid #E5E7EB" }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Related
          </p>
          <Link
            href="/blog/what-is-ats-career-switchers"
            className="group block"
          >
            <p className="font-sora font-semibold text-[#070719] group-hover:text-[#3792E8] transition-colors duration-200">
              What Is ATS and Why Career Switchers Fail It (And How to Pass) →
            </p>
          </Link>
        </div>
      </article>
    </div>
  );
}
