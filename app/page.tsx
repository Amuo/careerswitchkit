import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Proof from "./components/Proof";
import Trust from "./components/Trust";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will this system get me a job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No system can guarantee that, and anyone who claims otherwise is lying to you. What CareerSwitchKit does is remove the most common reason career switchers get filtered out before a human ever sees their application: a resume and cover letter that doesn't translate their background correctly. The rest is on you.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need experience in my target field?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The system is built specifically for people who don't have direct experience yet. Stage 2 shows you how to frame what you've already done in language that maps to your target role, without lying, without padding, and without leaving it to the recruiter to figure out the connection.",
      },
    },
    {
      "@type": "Question",
      name: "What is an ATS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ATS stands for Applicant Tracking System: software that most companies use to filter applications before a recruiter sees them. It scans for keywords, checks formatting, and scores your resume against the job description. Most resumes get eliminated here. Stage 3 of the system (the AI Prompt Pack and ATS Checklist) exists specifically to make sure yours doesn't.",
      },
    },
    {
      "@type": "Question",
      name: "What AI tool do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any of the major ones: ChatGPT, Claude, Gemini, or Copilot. The prompts in Stage 3 are written to work with all of them. You don't need a paid plan, though a paid plan gives better results on the rewrite prompts.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from a resume template I can find for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A template gives you a blank form. CareerSwitchKit gives you the logic behind filling it, specifically for someone switching into a field they haven't formally worked in. Stage 1 maps what actually transfers from your old career. Stage 2 shows you how to frame that experience in your target field's language. Stage 3 scores your resume before you submit. Stage 4 shows you a finished example from start to finish. A template can't do any of that.",
      },
    },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "CareerSwitchKit",
  description:
    "A 4-stage career switch system with ATS-ready resume templates, cover letter templates, 50 AI prompts, an ATS keyword checklist, and a completed example. Built for US career switchers.",
  url: "https://careerswitchkit.org",
  brand: {
    "@type": "Brand",
    name: "CareerSwitchKit",
  },
  offers: {
    "@type": "Offer",
    price: "19.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2027-12-31",
    seller: {
      "@type": "Organization",
      name: "Zorby&Co",
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Proof />
        <HowItWorks />
        <Trust />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
