import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Career Switch Resources | CareerSwitchKit Blog",
  description:
    "Practical guides for US career switchers — how to write a career change resume, beat ATS filters, and translate your background into a new field.",
  alternates: {
    canonical: "https://careerswitchkit.org/blog",
  },
};

const posts = [
  {
    slug: "why-career-switchers-get-rejected",
    title: "Why Career Switchers Keep Getting Rejected Before the Interview",
    description:
      "If you're applying for jobs in a new field and hearing nothing back, the problem is almost never your qualifications. Here's what's actually happening — and what to fix first.",
    date: "June 2026",
    readTime: "6 min read",
  },
  {
    slug: "how-to-write-a-career-change-resume",
    title: "How to Write a Resume When Switching Careers",
    description:
      "Career switchers don't fail because they're unqualified. They fail because their resume doesn't translate their background into the language of the new field. Here's how to fix that.",
    date: "June 2026",
    readTime: "6 min read",
  },
  {
    slug: "cover-letter-career-change",
    title: "How to Write a Cover Letter When Switching Careers",
    description:
      "A cover letter for a career switcher isn't a formality. It's the one place you can directly address the gap between where you've been and where you're going. Most people waste it.",
    date: "June 2026",
    readTime: "7 min read",
  },
  {
    slug: "transferable-skills-career-change",
    title: "How to Identify Your Transferable Skills for a Career Change",
    description:
      "Most career switchers have more relevant experience than they think. The problem isn't the experience — it's that they can't see it the way a hiring manager in a new field would.",
    date: "June 2026",
    readTime: "6 min read",
  },
  {
    slug: "what-is-ats-career-switchers",
    title: "What Is ATS and Why Career Switchers Fail It (And How to Pass)",
    description:
      "Most career switchers get filtered out by Applicant Tracking Systems before a human reads their resume. Here's what ATS actually is and the specific steps to pass it.",
    date: "June 2026",
    readTime: "5 min read",
  },
  {
    slug: "why-are-you-changing-careers-interview",
    title: "How to Answer \"Why Are You Changing Careers?\" in a Job Interview",
    description:
      "Every career switcher gets asked this question. Most give answers that are technically honest but strategically wrong. Here's the structure that turns a liability into a strength.",
    date: "June 2026",
    readTime: "7 min read",
  },
];

export default function BlogIndex() {
  return (
    <div className="bg-[#070719] min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute pointer-events-none"
          style={{
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse at center, rgba(55,146,232,0.07) 0%, transparent 70%)",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <p
            className="font-mono text-[10px] tracking-[0.18em] uppercase mb-4"
            style={{ color: "#3792E8" }}
          >
            Resources
          </p>
          <h1 className="font-sora font-black text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
            For career switchers.
          </h1>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)", maxWidth: "44ch" }}
          >
            Practical guides on resumes, ATS, and translating your background
            into a new field.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block py-10"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
                {post.date}
              </span>
              <span style={{ color: "rgba(255,255,255,0.12)" }}>·</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
                {post.readTime}
              </span>
            </div>
            <h2
              className="font-sora text-xl md:text-2xl font-bold text-white tracking-tight leading-snug transition-colors duration-200 group-hover:text-[#3792E8]"
            >
              {post.title}
            </h2>
            <p
              className="mt-3 text-[15px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {post.description}
            </p>
            <p
              className="mt-4 text-sm font-medium transition-colors duration-200"
              style={{ color: "#3792E8" }}
            >
              Read →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
