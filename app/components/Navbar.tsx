"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { handleCheckout } from "@/lib/checkout";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    const el = sentinelRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Close the mobile sheet on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // `route: true` marks a real page link (not an on-page hash anchor), so it
  // navigates normally instead of trying to smooth-scroll to an element id.
  const navLinks = [
    { href: "#example", pageHref: "/#example", label: "How It Works" },
    { href: "/preview", pageHref: "/preview", label: "Preview", route: true },
    { href: "#pricing", pageHref: "/#pricing", label: "Pricing" },
    { href: "#faq", pageHref: "/#faq", label: "FAQ" },
  ];

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <div ref={sentinelRef} className="absolute top-1 pointer-events-none" aria-hidden="true" />

      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        {/* Mobile menu scrim — dims the page and closes the sheet on tap. Always
            mounted; the `is-open` flag fades it in and turns on pointer events. */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`nav-scrim md:hidden fixed inset-0${menuOpen ? " is-open" : ""}`}
          style={{ background: "rgba(3,3,12,0.55)", zIndex: 0 }}
          aria-hidden="true"
        />

        <nav
          aria-label="Main navigation"
          className="relative z-[1] w-full max-w-7xl nav-reveal"
        >
          {/* Pill */}
          <div
            className="grid px-3"
            style={{
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              height: 52,
              borderRadius: 18,
              background: "rgba(7,7,25,0.48)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid",
              borderColor: scrolled ? "rgba(55,146,232,0.22)" : "rgba(255,255,255,0.08)",
              boxShadow: scrolled
                ? "0 8px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(55,146,232,0.06), inset 0 1px 0 rgba(255,255,255,0.08)"
                : "0 2px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
              transition: "border-color 0.4s ease, box-shadow 0.4s ease",
            }}
          >
            {/* ── Logo ── */}
            <div className="nav-logo shrink-0">
              <Link
                href="/"
                onClick={(e) => {
                  if (isHome) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }
                }}
                className="flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#3792E8]/70"
              >
                <svg viewBox="0 0 60 64" width="28" height="30" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                  <path d="M 30,4 L 54,18 L 54,46 L 30,60 L 6,46 L 6,18 Z" fill="rgba(55,146,232,0.07)" stroke="#3792E8" strokeWidth="2" opacity="0.88"/>
                  <path d="M 12,30 C 18,17 42,23 43.8,21.8" fill="none" stroke="#3792E8" strokeWidth="2.8" strokeLinecap="round"/>
                  <polygon points="48,19 45.2,23.9 42.4,19.7" fill="#3792E8"/>
                  <path d="M 48,34 C 42,47 18,41 16.2,42.2" fill="none" stroke="#3792E8" strokeWidth="2.8" strokeLinecap="round"/>
                  <polygon points="12,45 14.8,40.1 17.6,44.3" fill="#3792E8"/>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, lineHeight: 1 }}>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 8.5, fontWeight: 400, letterSpacing: "0.22em", color: "rgba(255,255,255,0.36)", textTransform: "uppercase" as const }}>Career</div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.04 }}>
                    <span style={{ color: "#fff" }}>Switch</span><span style={{ color: "#3792E8" }}>Kit</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* ── Center (nav links + trust) ── */}
            <div className="hidden md:flex items-center justify-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.route || isHome ? link.href : link.pageHref}
                  onClick={!link.route && isHome ? (e) => { e.preventDefault(); scrollTo(link.href.slice(1)); } : undefined}
                  className="nav-link relative px-3 py-1.5 text-xs font-medium tracking-wide rounded-xl cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#3792E8]/70"
                >
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            {/* ── Right: CTA + mobile hamburger ── */}
            {/* Pinned to column 3 so the hamburger hugs the right edge even
                when the center column is hidden (display:none drops it from the grid). */}
            <div className="flex items-center justify-end gap-2" style={{ gridColumnStart: 3 }}>
              {/* Desktop CTA */}
              <button
                onClick={handleCheckout}
                className="nav-cta hidden md:flex relative items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full text-white overflow-hidden shrink-0 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ec5ff]"
                style={{ background: "linear-gradient(135deg, #4aa3f5 0%, #2878d0 100%)" }}
              >
                <span className="nav-cta-shimmer" aria-hidden="true" />
                Claim Access — $37
                <span className="nav-cta-arrow material-symbols-outlined" style={{ fontSize: 13 }}>
                  arrow_forward
                </span>
              </button>

              {/* Mobile hamburger */}
              <button
                className="nav-burger md:hidden flex items-center justify-center w-8 h-8 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#3792E8]/70"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? (
                  <span key="x" className="nav-burger-icon">
                    <IconX size={16} strokeWidth={2} />
                  </span>
                ) : (
                  <span key="menu" className="nav-burger-icon">
                    <IconMenu2 size={16} strokeWidth={2} />
                  </span>
                )}
              </button>
            </div>{/* end right column */}
          </div>

          {/* ── Mobile menu (premium sheet) ── */}
          {menuOpen && (
            <div
              className="nav-sheet md:hidden mt-2"
              style={{
                borderRadius: 22,
                overflow: "hidden",
                background: "rgba(9,9,26,0.98)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
            >
              <div className="p-2.5">
                {/* Section links — tappable rows */}
                {navLinks.map((link, i) => (
                  <a
                    key={link.href}
                    href={link.route || isHome ? link.href : link.pageHref}
                    onClick={(e) => {
                      setMenuOpen(false);
                      if (!link.route && isHome) { e.preventDefault(); scrollTo(link.href.slice(1)); }
                    }}
                    className="nav-sheet-item group flex items-center justify-between py-3.5 px-3.5 rounded-2xl cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#3792E8]/70"
                    style={{
                      color: "rgba(255,255,255,0.72)",
                      borderBottom: i < navLinks.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
                  >
                    <span className="text-[15px] font-medium tracking-tight">{link.label}</span>
                    <span
                      className="material-symbols-outlined transition-transform duration-200 group-hover:translate-x-0.5"
                      style={{ fontSize: 18, color: "rgba(255,255,255,0.28)" }}
                    >
                      chevron_right
                    </span>
                  </a>
                ))}

                {/* Primary action + reassurance right beneath it */}
                <div className="nav-sheet-item mt-2.5 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <button
                    onClick={() => { setMenuOpen(false); handleCheckout(); }}
                    className="nav-cta-mobile relative w-full text-[15px] font-bold py-3.5 px-4 rounded-2xl text-white flex items-center justify-center gap-2 overflow-hidden outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ec5ff]"
                    style={{
                      background: "linear-gradient(135deg, #4aa3f5 0%, #2878d0 100%)",
                      boxShadow: "0 0 24px rgba(55,146,232,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                  >
                    <span className="nav-cta-shimmer" aria-hidden="true" />
                    Claim Access — $37
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "#34d399", boxShadow: "0 0 5px rgba(52,211,153,0.95)", animation: "pulse 2.5s ease-in-out infinite" }}
                    />
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      Instant download · 7-day guarantee
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
