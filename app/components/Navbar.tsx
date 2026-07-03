"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { handleCheckout } from "@/lib/checkout";
import { motion, AnimatePresence } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const menuVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.22, ease: EASE, staggerChildren: 0.055, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0, y: -6, scale: 0.98,
    transition: { duration: 0.16, ease: [0.4, 0, 1, 1] as [number, number, number, number] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: EASE } },
};

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 3 },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
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

  const navLinks = [
    { href: "#system", pageHref: "/#system", label: "How It Works" },
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
        {/* Mobile menu scrim — dims the page and closes the sheet on tap */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="scrim"
              onClick={() => setMenuOpen(false)}
              className="md:hidden fixed inset-0"
              style={{ background: "rgba(3,3,12,0.55)", zIndex: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: EASE }}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

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
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="shrink-0"
            >
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
            </motion.div>

            {/* ── Center (nav links + trust) ── */}
            <div className="hidden md:flex items-center justify-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : link.pageHref}
                  onClick={isHome ? (e) => { e.preventDefault(); scrollTo(link.href.slice(1)); } : undefined}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-3 py-1.5 text-xs font-medium tracking-wide rounded-xl cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#3792E8]/70"
                  style={{
                    color: hoveredLink === link.href ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.62)",
                    transition: "color 0.15s ease",
                  }}
                >
                  <AnimatePresence>
                    {hoveredLink === link.href && (
                      <motion.span
                        key="hover-bg"
                        layoutId="nav-link-hover"
                        className="absolute inset-0 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.065)" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.14, ease: EASE }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            {/* ── Right: CTA + mobile hamburger ── */}
            {/* Pinned to column 3 so the hamburger hugs the right edge even
                when the center column is hidden (display:none drops it from the grid). */}
            <div className="flex items-center justify-end gap-2" style={{ gridColumnStart: 3 }}>
              {/* Desktop CTA */}
              <motion.button
                onClick={handleCheckout}
                className="hidden md:flex relative items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full text-white overflow-hidden shrink-0 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ec5ff]"
                style={{
                  background: "linear-gradient(135deg, #4aa3f5 0%, #2878d0 100%)",
                  boxShadow: "0 0 18px rgba(55,146,232,0.45), inset 0 1px 0 rgba(255,255,255,0.22)",
                }}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.96 }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 28px rgba(55,146,232,0.7), inset 0 1px 0 rgba(255,255,255,0.28)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 18px rgba(55,146,232,0.45), inset 0 1px 0 rgba(255,255,255,0.22)"; }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                <span className="nav-cta-shimmer" aria-hidden="true" />
                Claim Access — $37
                <motion.span variants={arrowVariants} transition={{ duration: 0.2, ease: EASE }} className="material-symbols-outlined" style={{ fontSize: 13 }}>
                  arrow_forward
                </motion.span>
              </motion.button>

              {/* Mobile hamburger */}
              <button
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-xl transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[#3792E8]/70"
              style={{ color: "rgba(255,255,255,0.6)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                    transition={{ duration: 0.18, ease: EASE }}
                    style={{ display: "flex" }}
                  >
                    <IconX size={16} strokeWidth={2} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
                    transition={{ duration: 0.18, ease: EASE }}
                    style={{ display: "flex" }}
                  >
                    <IconMenu2 size={16} strokeWidth={2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            </div>{/* end right column */}
          </div>

          {/* ── Mobile menu (premium sheet) ── */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:hidden mt-2"
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
                    <motion.a
                      key={link.href}
                      variants={itemVariants}
                      href={isHome ? link.href : link.pageHref}
                      onClick={(e) => {
                        setMenuOpen(false);
                        if (isHome) { e.preventDefault(); scrollTo(link.href.slice(1)); }
                      }}
                      className="group flex items-center justify-between py-3.5 px-3.5 rounded-2xl cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#3792E8]/70"
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
                    </motion.a>
                  ))}

                  {/* Primary action + reassurance right beneath it */}
                  <motion.div
                    variants={itemVariants}
                    className="mt-2.5 pt-3"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <motion.button
                      onClick={() => { setMenuOpen(false); handleCheckout(); }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      className="relative w-full text-[15px] font-bold py-3.5 px-4 rounded-2xl text-white flex items-center justify-center gap-2 overflow-hidden outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ec5ff]"
                      style={{
                        background: "linear-gradient(135deg, #4aa3f5 0%, #2878d0 100%)",
                        boxShadow: "0 0 24px rgba(55,146,232,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
                      }}
                    >
                      <span className="nav-cta-shimmer" aria-hidden="true" />
                      Claim Access — $37
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                    </motion.button>

                    <div className="flex items-center justify-center gap-2 mt-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#34d399", boxShadow: "0 0 5px rgba(52,211,153,0.95)", animation: "pulse 2.5s ease-in-out infinite" }}
                      />
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                        Instant download · 7-day guarantee
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
}
