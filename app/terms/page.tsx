import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Terms, Refund & Privacy Policy | CareerSwitchKit",
  description:
    "Terms of service, refund policy, and privacy policy for CareerSwitchKit by Zorby&Co.",
};

const sections = [
  {
    id: "about",
    title: "About CareerSwitchKit",
    content: (
      <p>
        CareerSwitchKit is a digital product created and operated by Zorby&amp;Co.
        We sell job-application toolkits for individuals switching careers in the US
        job market. For any questions, contact us at{" "}
        <a
          href="mailto:support@careerswitchkit.com"
          className="text-[#3792E8] hover:underline"
        >
          support@careerswitchkit.com
        </a>
        .
      </p>
    ),
  },
  {
    id: "what-youre-buying",
    title: "What You're Buying",
    content: (
      <>
        <p className="mb-4">
          Your purchase is a digital download containing the following files:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>3 ATS-optimized resume templates (DOCX format)</li>
          <li>3 cover letter templates (DOCX format)</li>
          <li>1 AI Prompt Pack containing 50 prompts (PDF)</li>
          <li>1 ATS Keyword Checklist (XLSX format)</li>
          <li>1 completed career-switch example resume and cover letter (PDF)</li>
        </ul>
        <p className="mt-4">
          All files are for personal use only. Redistribution, resale, or sharing of
          any files or content from this kit is not permitted.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments & Merchant of Record",
    content: (
      <p>
        All payments are processed by{" "}
        <a
          href="https://polar.sh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3792E8] hover:underline"
        >
          Polar
        </a>{" "}
        (polar.sh), who acts as Merchant of Record for this transaction. Polar is
        responsible for payment processing, tax collection, and compliance with
        applicable regulations. By completing your purchase, you also agree to
        Polar&apos;s terms of service.
      </p>
    ),
  },
  {
    id: "refund-policy",
    title: "Refund Policy",
    content: (
      <p>
        We offer a 30-day money-back guarantee. If you are not satisfied with your
        purchase for any reason, contact us at{" "}
        <a
          href="mailto:support@careerswitchkit.com"
          className="text-[#3792E8] hover:underline"
        >
          support@careerswitchkit.com
        </a>{" "}
        within 30 days of your purchase date and we will issue a full refund, no
        questions asked. Refunds are processed within 5 to 10 business days to your
        original payment method.
      </p>
    ),
  },
  {
    id: "no-employment-guarantee",
    title: "No Employment Guarantee",
    content: (
      <p>
        CareerSwitchKit provides tools, templates, and educational content only. We
        make no guarantee of employment, job interviews, callbacks, or any specific
        career outcome. Results depend entirely on factors outside our control,
        including your background, the roles you apply to, and market conditions.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <p>
        All content, materials, templates, and prompts included in this kit are the
        intellectual property of Zorby&amp;Co and are protected by applicable
        copyright law. Your purchase grants you a personal, non-exclusive license for
        your own job-search use only. Redistribution, resale, sublicensing, or
        sharing of any materials from this kit — in whole or in part, in any format
        — is strictly prohibited.
      </p>
    ),
  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    content: (
      <>
        <p className="mb-4">
          We collect only the information necessary to fulfill your order (name and
          email address). Payment data, including your card details, is handled
          entirely by Polar and is never stored by CareerSwitchKit or Zorby&amp;Co.
        </p>
        <p className="mb-4">
          We do not sell, rent, or share your personal information with third parties
          for marketing purposes. We may send you transactional emails related to your
          purchase (order confirmation, download links).
        </p>
        <p>
          You may opt out of any non-transactional communications at any time by
          contacting us at{" "}
          <a
            href="mailto:support@careerswitchkit.com"
            className="text-[#3792E8] hover:underline"
          >
            support@careerswitchkit.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <p>
        These terms are governed by the laws of Bosnia and Herzegovina. Any disputes
        arising from your use of CareerSwitchKit or your purchase will be subject to
        the exclusive jurisdiction of the courts of Bosnia and Herzegovina.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: (
      <p>
        We reserve the right to update or modify these terms at any time. Any changes
        will be posted on this page with an updated date at the top. Continued use of
        or access to CareerSwitchKit after changes are posted constitutes acceptance
        of the revised terms.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          {/* Page header */}
          <div className="mb-12">
            <h1 className="font-sora text-4xl md:text-5xl font-bold text-[#070719] tracking-tight">
              Terms, Refund &amp; Privacy Policy
            </h1>
            <p className="mt-3 text-gray-400 text-sm">Last updated: June 2026</p>
          </div>

          {/* Sections */}
          {sections.map((section, i) => (
            <div key={section.id}>
              <section id={section.id} className="mb-12">
                <h2 className="font-sora text-2xl font-bold text-[#070719] mb-4 border-l-4 border-[#3792E8] pl-4">
                  {section.title}
                </h2>
                <div className="text-gray-600 leading-relaxed text-base">
                  {section.content}
                </div>
              </section>

              {/* Divider between sections (not after the last one) */}
              {i < sections.length - 1 && (
                <hr className="border-gray-100 mb-12" />
              )}
            </div>
          ))}

          {/* Footer note */}
          <div className="mt-4 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400">
              Operated by Zorby&amp;Co &middot; careerswitchkit.org &middot;{" "}
              <a
                href="mailto:support@careerswitchkit.com"
                className="text-[#3792E8] hover:underline"
              >
                support@careerswitchkit.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
