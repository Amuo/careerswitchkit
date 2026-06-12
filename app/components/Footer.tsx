"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070719] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Wordmark */}
          <div>
            <p className="font-sora font-bold text-[17px] text-white tracking-tight">
              Career<span className="text-accent">Switch</span>Kit
            </p>
            <p className="mt-1.5 text-sm text-white/35">
              Tools for the US career switcher.
            </p>
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
              href="/terms"
              className="text-sm text-white/55 hover:text-white transition-colors"
            >
              Terms &amp; Privacy
            </Link>
            <Link
              href="/preview"
              className="text-sm text-white/55 hover:text-white transition-colors"
            >
              Preview
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
