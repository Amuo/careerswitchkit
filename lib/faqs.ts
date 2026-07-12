// Single source of truth for the FAQ. Consumed by both the visible accordion
// (app/components/FAQAccordion.tsx) and the FAQPage JSON-LD in app/page.tsx.
// Google expects the structured-data text to match the on-page text, so keeping
// one array here is what guarantees they can't drift apart.

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "What's in the system?",
    a: "CareerSwitchKit is an instant download: a Start Here Guide (PDF), three CV templates (.docx), three cover letter templates (.docx), an interactive ATS Checker (standalone HTML app), an AI Prompt Pack (PDF, 50 prompts), and a completed example showing the full switch in action. No login, no subscription. You work through the four stages in order and apply.",
  },
  {
    q: "How long does it take to complete?",
    a: "Most people finish the core sequence in a weekend. Stage 1 takes an hour or two — it's the thinking work, mapping what you've done to what the new field values. Stages 2 and 3 are faster once that's done. By the end you have a tailored resume, a cover letter, and a checklist confirming it's ATS-ready.",
  },
  {
    q: "I've been applying for months and getting nothing. Will this help?",
    a: "Probably yes — and this is exactly who the system is built for. If you're getting no responses, the most likely cause is that your resume isn't translating your background into language the new field recognises. The system is specifically designed to fix that translation gap, not to give you a prettier version of what you already have.",
  },
  {
    q: "Is this just for tech jobs?",
    a: "No. The system is built on how experience translates across fields, not on any one industry. It works in Healthcare, Finance, Operations, Marketing, and others. Your past experience is the raw material. The system shows you how to reframe it for the new field.",
  },
  {
    q: "How is this different from a resume template I can find for free?",
    a: "Free templates give you blank boxes. CareerSwitchKit tells you what to put in them. The AI prompts and language guides are specifically designed to translate your past experience into the terms hiring managers in your new field actually use.",
  },
  {
    q: "Do you write it for me?",
    a: "No — it's a system you run yourself, and that's the point. Doing the reframing yourself is what keeps it $37 instead of the $2,500+ a coach charges to do it for you. You bring your experience; the templates, prompts, and guides show you exactly how to translate it.",
  },
  {
    q: "How do I get it after I pay?",
    a: "The moment you check out, you get an email with your download link — usually within a minute. No account to create, no software to install. Everything is yours to keep and reuse for every application.",
  },
  {
    q: "What if it doesn't help me land interviews?",
    a: "If it doesn't work for your situation, email support@careerswitchkit.org within 7 days and we'll refund you. We'd rather give you your money back than have you sitting on something that isn't working.",
  },
];
