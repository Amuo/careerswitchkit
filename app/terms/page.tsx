import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import TermsBackground from "@/app/components/TermsBackground";
import {
  Scale,
  Building2,
  Package,
  FileText,
  Mail,
  Bot,
  CheckSquare,
  FileSearch,
  CreditCard,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Landmark,
  History,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Privacy | CareerSwitchKit",
  description:
    "Terms of service, refund policy, and privacy policy for CareerSwitchKit by Zorby&Co.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Video + overlays portaled to document.body to escape motion.div stacking context */}
      <TermsBackground />

      {/* Noise overlay — inside page is fine, it's decorative only */}
      <div className="fixed inset-0 z-50 pointer-events-none noise-overlay" />

      <Navbar />

      <main className="pt-40 pb-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Page header */}
          <div className="text-center mb-16">
            <div className="section-eyebrow">
              <Scale className="w-3 h-3 mr-2 text-[#3792E8]" aria-hidden />
              Legal Overview
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
              <span className="shiny-text">Terms &amp; Privacy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              The fine print governing your use of the CareerSwitchKit system.
              Read carefully before deployment.
            </p>
          </div>

          {/* Content card */}
          <div className="liquid-glass p-10 md:p-16" style={{ lineHeight: 1.8 }}>

            {/* 1 — About */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <Building2 className="w-6 h-6 text-[#3792E8] shrink-0" aria-hidden />
                1. About CareerSwitchKit
              </h2>
              <div className="space-y-4 text-white/90 text-lg">
                <p className="leading-relaxed">
                  CareerSwitchKit is operated by Zorby&amp;Co. By purchasing
                  and downloading this kit, you agree to these terms.
                </p>
                <p className="leading-relaxed">
                  For support or inquiries, contact us at:{" "}
                  <a
                    href="mailto:support@careerswitchkit.org"
                    className="text-[#3792E8] hover:text-[#6EB0EE] underline decoration-[#3792E8]/30 underline-offset-4 transition-colors"
                  >
                    support@careerswitchkit.org
                  </a>
                  .
                </p>
              </div>
            </section>

            <hr className="my-12 border-white/5" />

            {/* 2 — What You're Buying */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <Package className="w-6 h-6 text-[#3792E8] shrink-0" aria-hidden />
                2. What You&apos;re Buying
              </h2>
              <div className="space-y-4 text-white/90 text-lg">
                <p className="leading-relaxed">
                  CareerSwitchKit is a digital product providing frameworks for
                  career transitions. The purchase includes:
                </p>
                <ul className="pl-2 space-y-5">
                  {[
                    { icon: FileText, text: "Start Here Guide (.pdf)" },
                    { icon: FileText, text: "3 CV Templates (.docx)" },
                    { icon: Mail, text: "3 Cover Letter Templates (.docx)" },
                    { icon: Bot, text: "AI Prompt Pack — 50 prompts (.pdf)" },
                    { icon: CheckSquare, text: "ATS Checker — interactive standalone HTML app" },
                    { icon: FileSearch, text: "1 Completed Example" },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3 leading-relaxed">
                      <Icon className="w-5 h-5 text-[#3792E8] mt-0.5 shrink-0" aria-hidden />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-5 rounded-xl bg-white/5 border border-white/10">
                  <strong className="text-white">License:</strong> These
                  materials are for your personal, individual use only. You may
                  not distribute, resell, or share these files.
                </div>
              </div>
            </section>

            <hr className="my-12 border-white/5" />

            {/* 3 & 4 — Payments + Refunds */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-6">
                  <CreditCard className="w-5 h-5 text-[#3792E8] shrink-0" aria-hidden />
                  3. Payments
                </h2>
                <p className="text-white/90 text-base leading-relaxed">
                  We use{" "}
                  <strong className="text-white">Polar.sh</strong> as our
                  Merchant of Record. They handle all payment processing
                  securely. Your billing relationship is with Polar.sh.
                </p>
              </section>
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-6">
                  <RotateCcw className="w-5 h-5 text-[#3792E8] shrink-0" aria-hidden />
                  4. Refund Policy
                </h2>
                <p className="text-white/90 text-base leading-relaxed">
                  We offer a 7-day satisfaction guarantee. If the system
                  doesn&apos;t work for your situation, email{" "}
                  <a
                    href="mailto:support@careerswitchkit.org"
                    className="text-[#3792E8] hover:underline decoration-[#3792E8]/30"
                  >
                    support@careerswitchkit.org
                  </a>{" "}
                  within 7 days of purchase for a full refund.
                </p>
              </section>
            </div>

            <hr className="my-12 border-white/5" />

            {/* 5 — Disclaimers & IP */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <ShieldAlert className="w-6 h-6 text-[#3792E8] shrink-0" aria-hidden />
                5. Disclaimers &amp; IP
              </h2>
              <div className="space-y-6 text-white/90 text-lg">
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    No Employment Guarantee
                  </h3>
                  <p className="leading-relaxed">
                    CareerSwitchKit provides tools and frameworks. We do not
                    guarantee job placement, interview rates, or career
                    advancement. The efficacy of these tools depends on your
                    execution and market conditions.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Intellectual Property
                  </h3>
                  <p className="leading-relaxed">
                    All content is owned by Zorby&amp;Co. You are granted a
                    non-exclusive, non-transferable license to use the
                    materials. Any unauthorized distribution will result in
                    immediate license termination and potential legal action.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Financial Disclaimer
                  </h3>
                  <p className="leading-relaxed">
                    CareerSwitchKit is an educational tool. We do not provide
                    financial, legal, or professional career counseling advice.
                    Any financial outcomes mentioned are illustrative and not
                    guarantees of future performance.
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-12 border-white/5" />

            {/* 6 — Privacy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-[#3792E8] shrink-0" aria-hidden />
                6. Privacy Policy
              </h2>
              <div className="space-y-4 text-white/90 text-lg">
                <p className="leading-relaxed">
                  We collect only the data necessary for order fulfillment
                  (email address). Payment details are handled entirely by
                  Polar.sh and are never stored on our servers.
                </p>
                <p className="leading-relaxed">
                  We will never sell, rent, or share your data with third
                  parties outside of necessary service providers (like our
                  payment processor).
                </p>
                <p className="leading-relaxed">
                  We retain purchase records and basic contact information for
                  as long as necessary to comply with tax obligations and
                  provide ongoing customer support.
                </p>
              </div>
            </section>

            <hr className="my-12 border-white/5" />

            {/* 7 & 8 — Governing Law + Modifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <section className="space-y-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                  <Landmark className="w-5 h-5 text-[#3792E8] shrink-0" aria-hidden />
                  7. Governing Law
                </h2>
                <p className="text-white/90 text-base leading-relaxed">
                  These terms are governed by the laws of Bosnia and
                  Herzegovina.
                </p>
              </section>
              <section className="space-y-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                  <History className="w-5 h-5 text-[#3792E8] shrink-0" aria-hidden />
                  8. Modifications
                </h2>
                <p className="text-white/90 text-base leading-relaxed">
                  We reserve the right to modify these terms at any time.
                  Continued use of the product constitutes acceptance of
                  updated terms.
                </p>
              </section>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
