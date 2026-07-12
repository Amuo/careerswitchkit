import Link from "next/link";
import BlogCTA from "./BlogCTA";

// Shared chrome for every blog article: the dark hero (back-link, date · read
// time, h1, subhead), the light prose container, the buy CTA, and the Related
// list. Each article passes its own text/links as props and its body as
// children — so the structure lives here once, the words stay in the article.

export interface RelatedLink {
  href: string;
  label: string;
}

export default function ArticleLayout({
  title,
  date,
  readTime,
  subhead,
  ctaHeading,
  ctaBody,
  related,
  children,
}: {
  title: string;
  date: string;
  readTime: string;
  subhead: React.ReactNode;
  ctaHeading: string;
  ctaBody: string;
  related: RelatedLink[];
  children: React.ReactNode;
}) {
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
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>{date}</span>
            <span style={{ color: "rgba(255,255,255,0.12)" }}>·</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>{readTime}</span>
          </div>
          <h1 className="font-sora font-black text-3xl md:text-4xl text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
            {subhead}
          </p>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-gray max-w-none" style={{ fontSize: "17px", lineHeight: "1.75" }}>
          {children}
        </div>

        <BlogCTA heading={ctaHeading} body={ctaBody} />

        {/* Related */}
        <div className="mt-12 pt-10" style={{ borderTop: "1px solid #E5E7EB" }}>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Related
          </p>
          <div className="space-y-4">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="group block">
                <p className="font-sora font-semibold text-[#070719] group-hover:text-[#3792E8] transition-colors duration-200">
                  {r.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
