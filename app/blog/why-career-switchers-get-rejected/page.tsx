import type { Metadata } from "next";
import Link from "next/link";
import BlogCTA from "@/app/blog/BlogCTA";

export const metadata: Metadata = {
  title: "Why Career Switchers Keep Getting Rejected Before the Interview | CareerSwitchKit",
  description:
    "If you're applying for jobs in a new field and hearing nothing back, the problem is almost never your qualifications. Here's what's actually happening — and what to fix.",
  alternates: {
    canonical: "https://careerswitchkit.org/blog/why-career-switchers-get-rejected",
  },
  openGraph: {
    title: "Why Career Switchers Keep Getting Rejected Before the Interview",
    description:
      "If you're applying for jobs in a new field and hearing nothing back, the problem is almost never your qualifications. Here's what's actually happening — and what to fix.",
    url: "https://careerswitchkit.org/blog/why-career-switchers-get-rejected",
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
            Why Career Switchers Keep Getting Rejected Before the Interview
          </h1>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            Sending applications into silence is the most demoralizing part of
            switching careers. Before you conclude you&apos;re unqualified, read this.
            The problem is almost always something else entirely.
          </p>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-gray max-w-none" style={{ fontSize: "17px", lineHeight: "1.75" }}>

          <p style={{ color: "#374151" }}>
            There&apos;s a specific kind of frustration that career switchers know
            well. You find a role that you know you could do. You apply. You wait.
            Nothing. You apply to five more. Nothing. Ten more. A form rejection
            if you&apos;re lucky, silence if you&apos;re not. The obvious conclusion — the
            one that feels hardest to argue with — is that you&apos;re not qualified
            enough for the new field yet.
          </p>

          <p style={{ color: "#374151" }}>
            That conclusion is usually wrong. Or at least, it&apos;s the wrong place
            to look first. The application process for career switchers breaks
            down at a specific set of points, and most of them have nothing to do
            with qualifications. Here&apos;s where it actually goes wrong.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            Reason 1: ATS filters you out before a human sees your resume
          </h2>

          <p style={{ color: "#374151" }}>
            Most companies above a certain size use Applicant Tracking Systems —
            software that screens resumes before any human reads them. The ATS
            scans for keywords that match the job description. If your resume
            doesn&apos;t contain those keywords, it doesn&apos;t make it through the filter,
            regardless of how qualified you actually are.
          </p>

          <p style={{ color: "#374151" }}>
            For career switchers, this is a specific problem. Your previous work
            is described in the vocabulary of your old field. The job description
            uses the vocabulary of the new field. Even if the underlying
            capabilities are the same, the words don&apos;t match — and the ATS
            can&apos;t infer the connection. It&apos;s not reading for meaning. It&apos;s
            matching strings.
          </p>

          <p style={{ color: "#374151" }}>
            If you&apos;re sending the same resume to every application without
            tailoring it to the specific language of each job description, you&apos;re
            failing the ATS filter on most of your applications before anyone
            has made a judgment about your qualifications.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            Reason 2: The resume format works against you
          </h2>

          <p style={{ color: "#374151" }}>
            The standard chronological resume is built for one situation: your
            most recent jobs are the most relevant ones. The reader scans from
            the top and finds current, relevant experience immediately. For career
            switchers, the most recent jobs are often the least relevant to the
            target role. A chronological resume puts your mismatched job titles
            at the top and buries the evidence of relevant capability further
            down.
          </p>

          <p style={{ color: "#374151" }}>
            The human reader — when they do see your resume — may decide in the
            first ten seconds, based on the job titles alone, that you&apos;re not
            worth reading further. They&apos;re not being unfair. They&apos;re doing
            exactly what you&apos;d do if you were reading a hundred applications:
            making fast decisions with limited information.
          </p>

          <p style={{ color: "#374151" }}>
            A skills-forward or hybrid format that leads with core competencies
            before work history changes what the reader encounters first. Instead
            of mismatched titles, they see capabilities stated in the language
            of the target field. That&apos;s not manipulation — it&apos;s choosing the
            format that gives your actual qualifications the best chance of being
            seen.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            Reason 3: The cover letter doesn&apos;t address the obvious question
          </h2>

          <p style={{ color: "#374151" }}>
            When a hiring manager opens a resume from a career switcher and
            sees job titles from a different field, they have an immediate
            question: why is this person applying for this role? If the cover
            letter doesn&apos;t answer that question directly and convincingly in the
            first paragraph, the reader fills in their own answer — usually
            &ldquo;this person doesn&apos;t know what they&apos;re doing&rdquo; or &ldquo;this is a
            carpet-bomb application.&rdquo;
          </p>

          <p style={{ color: "#374151" }}>
            The career change cover letter has to do something that a standard
            cover letter doesn&apos;t: acknowledge the switch explicitly, give a
            specific reason for it, and immediately begin the translation of your
            background into the language of the new field. Most career switchers
            write cover letters that sound like standard cover letters with
            slightly vague language about &ldquo;transferable skills.&rdquo; That doesn&apos;t
            answer the question. It sidesteps it.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            Reason 4: Applying to roles where the gap is too large
          </h2>

          <p style={{ color: "#374151" }}>
            Not every role in a new field is equally accessible to a career
            switcher. Some roles require credentials, licenses, or specific
            technical experience that genuinely can&apos;t be replaced by transferable
            skills. Others are much more open to candidates with non-traditional
            backgrounds, particularly at the entry and mid-career levels.
          </p>

          <p style={{ color: "#374151" }}>
            Career switchers who are getting consistent rejections sometimes need
            to reexamine not just how they&apos;re presenting themselves, but what
            they&apos;re applying for. A role that requires five years of direct
            industry experience and a specific certification isn&apos;t necessarily
            the right first move. An adjacent role — one that values the
            capabilities you have but doesn&apos;t require the credentials you don&apos;t —
            is often the better entry point into a new field.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            The thing to fix first
          </h2>

          <p style={{ color: "#374151" }}>
            Before expanding your job search or adding more applications, audit
            your resume and cover letter against the job descriptions you&apos;re
            targeting. Are the keywords in the job description present in your
            resume? Is your resume format giving relevant capabilities top
            placement, or burying them behind mismatched job titles? Does your
            cover letter address the career switch directly and with specificity?
          </p>

          <p style={{ color: "#374151" }}>
            If the answer to any of those is no, more applications won&apos;t fix
            the problem. The same materials will produce the same results at
            higher volume. Fix the translation first.
          </p>

          <p style={{ color: "#374151" }}>
            Qualifications are rarely the issue. Presentation almost always is.
          </p>
        </div>

        <BlogCTA
          heading="The system that fixes all four problems at once."
          body="The CareerSwitchKit walks you through the translation work, gives you the right resume format for career switchers, and scores your application before you submit. $37, instant download."
        />

        {/* Related */}
        <div className="mt-12 pt-10" style={{ borderTop: "1px solid #E5E7EB" }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Related
          </p>
          <div className="space-y-4">
            <Link
              href="/blog/what-is-ats-career-switchers"
              className="group block"
            >
              <p className="font-sora font-semibold text-[#070719] group-hover:text-[#3792E8] transition-colors duration-200">
                What Is ATS and Why Career Switchers Fail It (And How to Pass) →
              </p>
            </Link>
            <Link
              href="/blog/transferable-skills-career-change"
              className="group block"
            >
              <p className="font-sora font-semibold text-[#070719] group-hover:text-[#3792E8] transition-colors duration-200">
                How to Identify Your Transferable Skills for a Career Change →
              </p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
