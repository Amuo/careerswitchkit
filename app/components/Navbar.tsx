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

  const navLinks = [
    { href: isHome ? "#included" : "/#included", label: "What's Included" },
    { href: isHome ? "#how-it-works" : "/#how-it-works", label: "How It Works" },
    { href: isHome ? "#faq" : "/#faq", label: "FAQ" },
  ];

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-1 pointer-events-none"
        aria-hidden="true"
      />
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-[#070719]/95 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-sora font-bold text-[17px] text-white tracking-tight"
            >
              Career
              <span className="text-accent transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(55,146,232,0.8)]">
                Switch
              </span>
              Kit
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-underline text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleCheckout}
                className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 active:scale-[0.98]"
              >
                Get the Kit
              </button>
            </div>

            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <IconX size={20} strokeWidth={2} />
              ) : (
                <IconMenu2 size={20} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#070719] border-t border-white/10 px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white/70 hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                handleCheckout();
              }}
              className="mt-1 bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors text-left"
            >
              Get the Kit
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
