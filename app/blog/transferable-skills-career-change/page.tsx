import type { Metadata } from "next";
import Link from "next/link";
import BlogCTA from "@/app/blog/BlogCTA";

export const metadata: Metadata = {
  title: "How to Identify Your Transferable Skills for a Career Change | CareerSwitchKit",
  description:
    "Most career switchers have more relevant experience than they realize — they just don't know how to see it. Here's the process for mapping what you already know.",
  alternates: {
    canonical: "https://careerswitchkit.org/blog/transferable-skills-career-change",
  },
  openGraph: {
    title: "How to Identify Your Transferable Skills for a Career Change",
    description:
      "Most career switchers have more relevant experience than they realize — they just don't know how to see it. Here's the process for mapping what you already know.",
    url: "https://careerswitchkit.org/blog/transferable-skills-career-change",
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
            How to Identify Your Transferable Skills for a Career Change
          </h1>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            Most career switchers already have more relevant experience than they
            think. The problem isn&apos;t the experience itself — it&apos;s that they can&apos;t
            see it the way a hiring manager in a new field would.
          </p>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-gray max-w-none" style={{ fontSize: "17px", lineHeight: "1.75" }}>

          <p style={{ color: "#374151" }}>
            &ldquo;Transferable skills&rdquo; is one of those phrases that sounds useful until
            you actually try to use it. Everyone in a career transition gets told
            they have transferable skills. Almost nobody gets told how to find
            them, how to articulate them, or how to present them in a way that
            reads as relevant rather than generic.
          </p>

          <p style={{ color: "#374151" }}>
            This article is about the finding part. The articulation part comes
            after — but you can&apos;t articulate what you haven&apos;t identified yet.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            Why career switchers undervalue their own experience
          </h2>

          <p style={{ color: "#374151" }}>
            There&apos;s a specific cognitive trap that most people fall into when they
            start thinking about switching careers. They compare their experience
            to the job description in front of them and see mostly mismatches.
            The job asks for X; they have Y. The job wants someone who has done Z;
            they&apos;ve never done Z. The conclusion they draw is that they&apos;re
            underqualified.
          </p>

          <p style={{ color: "#374151" }}>
            But this comparison is wrong in a specific way: it&apos;s comparing job
            titles and explicit credentials, not actual capabilities. Job
            descriptions are written in the vocabulary of a particular field.
            They use that field&apos;s terminology, list that field&apos;s certifications,
            and describe work in the language that field uses. If your work
            history is in a different field, your capabilities don&apos;t show up
            in that vocabulary — even if you genuinely have them.
          </p>

          <p style={{ color: "#374151" }}>
            The gap you&apos;re seeing isn&apos;t necessarily a capability gap. It may be
            a translation gap.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            How to actually find your transferable skills
          </h2>

          <p style={{ color: "#374151" }}>
            The process has three steps, done in order. Skipping the first step
            — which most people do — is why the exercise usually produces vague,
            unhelpful results.
          </p>

          <h3
            className="font-sora font-semibold mt-7 mb-2"
            style={{ fontSize: "17px", color: "#070719" }}
          >
            Step 1: Inventory what you actually did, not what your title says
          </h3>
          <p style={{ color: "#374151" }}>
            Take a job from your work history and write down, in plain language,
            everything you actually did in that role. Not your job description.
            Not your title. What you actually did, day by day. Be specific and
            concrete. &ldquo;Managed customer complaints&rdquo; is a job-description phrase.
            &ldquo;Took inbound calls from unhappy customers, diagnosed the underlying
            issue, coordinated with the fulfillment team to resolve it, and
            followed up with the customer within 24 hours to confirm resolution&rdquo;
            is what you actually did.
          </p>

          <p style={{ color: "#374151" }}>
            Do this for every role. The goal isn&apos;t to document everything — it&apos;s
            to capture the actual work at a level of specificity that reveals
            what capabilities it required.
          </p>

          <h3
            className="font-sora font-semibold mt-7 mb-2"
            style={{ fontSize: "17px", color: "#070719" }}
          >
            Step 2: Extract the underlying capability, not the surface task
          </h3>
          <p style={{ color: "#374151" }}>
            For each thing you identified in step one, ask: what did doing this
            well actually require? What was the skill underneath the task?
          </p>

          <p style={{ color: "#374151" }}>
            &ldquo;Took inbound calls from unhappy customers&rdquo; requires active listening,
            emotional regulation, rapid problem diagnosis, and clear communication
            under pressure. &ldquo;Coordinated with the fulfillment team&rdquo; requires
            cross-functional communication, the ability to translate customer
            language into operational terms, and follow-through. &ldquo;Followed up
            with the customer&rdquo; requires documentation, time management, and
            ownership of outcomes.
          </p>

          <p style={{ color: "#374151" }}>
            None of those capabilities belong to customer service specifically.
            They exist in project management, operations, account management,
            business analysis, and a dozen other fields. The task was
            field-specific. The capability isn&apos;t.
          </p>

          <h3
            className="font-sora font-semibold mt-7 mb-2"
            style={{ fontSize: "17px", color: "#070719" }}
          >
            Step 3: Match the capability to the vocabulary of your target field
          </h3>
          <p style={{ color: "#374151" }}>
            This is the translation step. Take the capabilities you identified
            in step two and find the equivalent term in your target field. Look
            at job descriptions for the roles you want and notice the language
            they use. What do they call the thing you identified?
          </p>

          <p style={{ color: "#374151" }}>
            &ldquo;Cross-functional communication&rdquo; in a job description for a project
            manager role. &ldquo;Stakeholder management&rdquo; in a business analyst posting.
            &ldquo;Client relationship management&rdquo; in an account manager listing. The
            underlying skill is the same. The vocabulary differs by field.
          </p>

          <p style={{ color: "#374151" }}>
            Your resume and cover letter need to use the vocabulary of the target
            field, not the vocabulary of your old field. Once you&apos;ve done this
            translation, your experience becomes legible to hiring managers who
            don&apos;t know your old field at all.
          </p>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            The skills that transfer most reliably across fields
          </h2>

          <p style={{ color: "#374151" }}>
            While every career switch is specific, some capabilities appear
            consistently in job descriptions across almost every professional
            field. If your work history demonstrates any of these, they are
            worth identifying and translating explicitly:
          </p>

          <ul style={{ color: "#374151", paddingLeft: "1.5rem" }}>
            <li className="mb-2">
              <strong style={{ color: "#070719" }}>Managing competing priorities under time pressure.</strong> Called
              &ldquo;project management,&rdquo; &ldquo;prioritization,&rdquo; or &ldquo;resource allocation&rdquo;
              depending on the field.
            </li>
            <li className="mb-2">
              <strong style={{ color: "#070719" }}>Communicating clearly to different audiences.</strong> Described
              as &ldquo;stakeholder communication,&rdquo; &ldquo;executive communication,&rdquo; or
              &ldquo;cross-functional collaboration.&rdquo;
            </li>
            <li className="mb-2">
              <strong style={{ color: "#070719" }}>Identifying problems and finding solutions.</strong> Shows up
              as &ldquo;analytical thinking,&rdquo; &ldquo;process improvement,&rdquo; or
              &ldquo;problem-solving.&rdquo;
            </li>
            <li className="mb-2">
              <strong style={{ color: "#070719" }}>Working with data to make decisions.</strong> Ranges from
              &ldquo;data analysis&rdquo; to &ldquo;reporting&rdquo; to &ldquo;performance tracking.&rdquo;
            </li>
            <li className="mb-2">
              <strong style={{ color: "#070719" }}>Leading or coordinating work with other people.</strong> Called
              &ldquo;team leadership,&rdquo; &ldquo;people management,&rdquo; or &ldquo;coordination.&rdquo;
            </li>
          </ul>

          <h2
            className="font-sora font-bold mt-10 mb-4"
            style={{ fontSize: "22px", color: "#070719", letterSpacing: "-0.02em" }}
          >
            What this process reveals
          </h2>

          <p style={{ color: "#374151" }}>
            When you do this mapping carefully, two things tend to happen. First,
            you find that you have more relevant experience than you thought —
            because the underlying capabilities show up across more of your work
            history than you initially recognized. Second, you find genuine gaps:
            capabilities the target field values that you genuinely haven&apos;t
            developed. Knowing the difference between the two is the foundation
            of an honest, effective career change application.
          </p>

          <p style={{ color: "#374151" }}>
            The goal isn&apos;t to manufacture relevance where none exists. It&apos;s to
            surface real relevance that wasn&apos;t visible before because it was
            dressed in the wrong vocabulary.
          </p>
        </div>

        <BlogCTA
          heading="Stage 1 of the system does this mapping for you."
          body="The START HERE document walks you through a structured process to identify, translate, and position your existing experience for a new field. $37, instant download."
        />

        {/* Related */}
        <div className="mt-12 pt-10" style={{ borderTop: "1px solid #E5E7EB" }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Related
          </p>
          <div className="space-y-4">
            <Link
              href="/blog/how-to-write-a-career-change-resume"
              className="group block"
            >
              <p className="font-sora font-semibold text-[#070719] group-hover:text-[#3792E8] transition-colors duration-200">
                How to Write a Resume When Switching Careers →
              </p>
            </Link>
            <Link
              href="/blog/cover-letter-career-change"
              className="group block"
            >
              <p className="font-sora font-semibold text-[#070719] group-hover:text-[#3792E8] transition-colors duration-200">
                How to Write a Cover Letter When Switching Careers →
              </p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
