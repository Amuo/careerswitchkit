import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070719] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 60 64" width="32" height="34" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <path d="M 30,4 L 54,18 L 54,46 L 30,60 L 6,46 L 6,18 Z" fill="rgba(55,146,232,0.07)" stroke="#3792E8" strokeWidth="2" opacity="0.88"/>
              <path d="M 12,30 C 18,17 42,23 43.8,21.8" fill="none" stroke="#3792E8" strokeWidth="2.8" strokeLinecap="round"/>
              <polygon points="48,19 45.2,23.9 42.4,19.7" fill="#3792E8"/>
              <path d="M 48,34 C 42,47 18,41 16.2,42.2" fill="none" stroke="#3792E8" strokeWidth="2.8" strokeLinecap="round"/>
              <polygon points="12,45 14.8,40.1 17.6,44.3" fill="#3792E8"/>
            </svg>
            <div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 9, fontWeight: 400, letterSpacing: "0.22em", color: "rgba(255,255,255,0.38)", textTransform: "uppercase" as const }}>Career</div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.04 }}>
                <span style={{ color: "#ffffff" }}>Switch</span><span style={{ color: "#3792E8" }}>Kit</span>
              </div>
              <p className="mt-1 text-xs text-white/30">The career switch system.</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-white/35">
              &copy; 2026 CareerSwitchKit &middot; Zorby&amp;Co
            </p>
          </div>

          {/* Links */}
          <nav
            aria-label="Footer navigation"
            className="flex gap-6 md:justify-end"
          >
            <a
              href="mailto:support@careerswitchkit.com"
              className="text-sm text-white/55 hover:text-white transition-colors"
            >
              Contact
            </a>
            <Link
              href="/blog"
              className="text-sm text-white/55 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/55 hover:text-white transition-colors"
            >
              Terms &amp; Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
