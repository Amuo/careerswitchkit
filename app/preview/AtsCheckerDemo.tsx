"use client";

import { useEffect, useRef, useState } from "react";
import ScoreGauge from "./ScoreGauge";

/* ────────────────────────────────────────────────────────────────────────
   Live preview of File 06 — the ATS Score Checker.
   This is the SAME scoring engine that ships inside the system, ported to
   React and run entirely in the visitor's browser. Nothing is uploaded.
   Source of truth for the logic: 06_ATS_Score_Checker.html.
   ──────────────────────────────────────────────────────────────────────── */

type FlagType = "pass" | "warn" | "fail";
interface Flag {
  type: FlagType;
  title: string;
  detail: string;
}
interface Result {
  score: number;
  flags: Flag[];
  keywords: { found: string[]; missing: string[]; total: number };
  wordCount: number;
}

/* ── Prefilled sample so the tool works in one click ─────────────────────
   A realistic career-switcher résumé (retail → operations) + a matching job
   description. Deliberately imperfect, so the checker surfaces real, fixable
   issues — which is exactly the point of the tool. */
const SAMPLE_RESUME = `Jordan Bennett
jordan.bennett@email.com | (555) 012-3456 | Chicago, IL

PROFESSIONAL SUMMARY
Retail team lead transitioning into an operations role. Background in managing store inventory, coordinating suppliers, and leading a team of 12. Strong track record of improving day-to-day processes and hitting weekly targets.

EXPERIENCE
Store Team Lead — Trellis Retail Group, Chicago, IL
- Responsible for managing inventory for a $2M store location, reducing stock discrepancies by 30% over two quarters
- Coordinated with 15 vendors to keep shelves stocked and negotiated improved delivery windows
- Led a team of 12 associates, built the weekly shift schedule, and improved on-shift productivity by 18%
- Tracked weekly sales KPIs and reported results to the district manager every Monday

Sales Associate — Trellis Retail Group, Chicago, IL
- Helped customers with product questions and processed 100+ daily transactions
- Worked on visual merchandising, restocking, and end-of-day cash reconciliation
- Assisted with onboarding and training of 5 new seasonal hires

EDUCATION
B.A. Communications — University of Illinois

SKILLS
Inventory management, vendor coordination, team leadership, scheduling, Microsoft Excel, reporting, customer service, communication`;

const SAMPLE_JD = `Operations Coordinator

We're hiring an Operations Coordinator to keep our fulfillment and supply chain running smoothly. You will manage inventory, coordinate with vendors, track KPIs, and drive process improvement across the team.

Requirements:
- 2+ years in operations, logistics, or supply chain
- Experience with inventory management and vendor coordination
- Strong project management and process improvement skills
- Proficiency with Excel and reporting dashboards
- Excellent communication and stakeholder management
- Comfortable with data-driven decision making

Responsibilities:
- Manage inventory levels across multiple locations
- Coordinate with vendors and suppliers on delivery schedules
- Track and report operational KPIs each week
- Identify and implement process improvements
- Support cross-functional teams across warehouse and customer service`;

/* ── NLP engine (ported verbatim from File 06) ───────────────────────── */
const STOPWORDS = new Set([
  "and", "the", "for", "with", "you", "are", "our", "your", "will", "this", "that",
  "have", "been", "from", "they", "their", "which", "about", "into", "than", "more",
  "also", "can", "not", "all", "but", "its", "when", "what", "who", "how", "may",
  "would", "could", "should", "has", "had", "was", "were", "each", "such", "both",
  "even", "most", "over", "same", "these", "those", "where", "while", "after",
  "before", "other", "then", "only", "just", "like", "used", "use", "make", "made",
  "work", "works", "working", "team", "strong", "good", "must", "need", "new", "well",
  "best", "high", "able", "want", "help", "include", "including", "includes",
  "required", "preferred", "role", "position", "company", "candidate", "apply",
  "experience", "years", "least", "minimum", "plus", "bonus", "great",
  "fast", "full", "time", "part", "based", "remote", "hybrid", "office", "day",
  "week", "month", "year", "etc", "per", "via", "using", "across", "within",
  "between", "multiple", "various", "different", "key", "core", "main", "primary",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/-+/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);
}

function extractBigrams(tokens: string[]): string[] {
  const bigrams: string[] = [];
  for (let i = 0; i < tokens.length - 1; i++) {
    if (!STOPWORDS.has(tokens[i]) && !STOPWORDS.has(tokens[i + 1])) {
      bigrams.push(tokens[i] + " " + tokens[i + 1]);
    }
  }
  return bigrams;
}

function extractKeywords(jd: string): string[] {
  const tokens = tokenize(jd);
  const freq: Record<string, number> = {};
  tokens
    .filter((w) => !STOPWORDS.has(w) && w.length > 3)
    .forEach((w) => {
      freq[w] = (freq[w] || 0) + 1;
    });

  const skillBigramPattern =
    /\b(machine learning|data analysis|project management|product management|customer success|account management|supply chain|business development|stakeholder management|cross functional|problem solving|critical thinking|time management|team leadership|decision making|risk management|change management|process improvement|continuous improvement|agile methodology|user experience|user research|data driven|results oriented)\b/gi;
  const matchedBigrams = [...jd.matchAll(skillBigramPattern)].map((m) => m[0].toLowerCase());

  const sorted = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 30)
    .map(([w]) => w);

  return [...new Set([...matchedBigrams, ...sorted])].slice(0, 28);
}

type Sections = {
  header: string; summary: string; skills: string;
  experience: string; education: string; other: string;
};

function splitSections(resume: string): Sections {
  const sections: Sections = { header: "", summary: "", skills: "", experience: "", education: "", other: "" };
  const lines = resume.split("\n");
  let current: keyof Sections = "header";

  const summaryRx = /^(PROFESSIONAL\s+)?SUMMARY$|^OBJECTIVE$|^PROFILE$|^PROFESSIONAL\s+PROFILE$/i;
  const skillsRx = /^SKILLS?(\s*&\s*COMPETENC(Y|IES))?$|^CORE\s+COMPETENC(Y|IES)$|^KEY\s+SKILLS?$/i;
  const experienceRx = /^(PROFESSIONAL\s+)?EXPERIENCE$|^WORK\s+(EXPERIENCE|HISTORY)$|^EMPLOYMENT(\s+HISTORY)?$/i;
  const educationRx = /^EDUCATION(\s+&\s+TRAINING)?$|^ACADEMIC\s+BACKGROUND$/i;

  lines.forEach((line) => {
    const t = line.trim();
    if (t.length > 0 && t.length <= 45) {
      if (summaryRx.test(t)) { current = "summary"; return; }
      if (skillsRx.test(t)) { current = "skills"; return; }
      if (experienceRx.test(t)) { current = "experience"; return; }
      if (educationRx.test(t)) { current = "education"; return; }
    }
    sections[current] += " " + t;
  });

  (Object.keys(sections) as (keyof Sections)[]).forEach((k) => {
    sections[k] = sections[k].toLowerCase();
  });
  return sections;
}

const ACRONYM_MAP: { abbr: RegExp; full: RegExp; label: string }[] = [
  { abbr: /\bPM\b/, full: /project manager/i, label: "PM / Project Manager" },
  { abbr: /\bCRM\b/, full: /customer relationship/i, label: "CRM / Customer Relationship Management" },
  { abbr: /\bKPI\b/, full: /key performance indicator/i, label: "KPI / Key Performance Indicator" },
  { abbr: /\bROI\b/, full: /return on investment/i, label: "ROI / Return on Investment" },
  { abbr: /\bSQL\b/, full: /structured query/i, label: "SQL / Structured Query Language" },
  { abbr: /\bAPI\b/, full: /application programming/i, label: "API / Application Programming Interface" },
  { abbr: /\bUX\b/, full: /user experience/i, label: "UX / User Experience" },
  { abbr: /\bUI\b/, full: /user interface/i, label: "UI / User Interface" },
  { abbr: /\bSEO\b/, full: /search engine/i, label: "SEO / Search Engine Optimization" },
  { abbr: /\bOKR\b/, full: /objectives and key results/i, label: "OKR / Objectives and Key Results" },
  { abbr: /\bNPS\b/, full: /net promoter/i, label: "NPS / Net Promoter Score" },
  { abbr: /\bARR\b/, full: /annual recurring/i, label: "ARR / Annual Recurring Revenue" },
  { abbr: /\bSLA\b/, full: /service level/i, label: "SLA / Service Level Agreement" },
  { abbr: /\bGTM\b/, full: /go.to.market/i, label: "GTM / Go-to-Market" },
  { abbr: /\bHR\b/, full: /human resources/i, label: "HR / Human Resources" },
  { abbr: /\bQA\b/, full: /quality assurance/i, label: "QA / Quality Assurance" },
  { abbr: /\bSaaS\b/, full: /software as a service/i, label: "SaaS / Software as a Service" },
];

const CLICHES = [
  "hardworking", "hard-working", "hard working",
  "team player", "detail-oriented", "detail oriented",
  "results-driven", "results driven", "results-oriented", "results oriented",
  "go-getter", "go getter", "self-starter", "self starter",
  "think outside the box", "outside the box",
  "proactive", "synergy", "synergize", "synergistic",
  "dynamic", "passionate", "seasoned professional",
  "motivated individual", "highly motivated",
  "fast learner", "quick learner", "eager to learn",
  "innovative thinker", "creative thinker", "strategic thinker",
  "thought leader", "visionary", "game changer", "game-changer",
  "people person", "go above and beyond", "hit the ground running",
  "guru", "ninja", "rockstar", "rock star", "wizard", "evangelist",
];

const PIVOT_SIGNALS = [
  /transitioning\s+(from|to|into)/i,
  /career\s+(change|switch|pivot|transition)/i,
  /moving\s+into|shifting\s+(to|into)|switching\s+(to|into|from)/i,
  /background\s+in\b/i,
  /transferable\s+skills?/i,
  /bringing\s+.{0,30}\s+experience/i,
  /leveraging\s+my/i,
  /from\s+\w+\s+(to|into)\s+\w+/i,
  /pivot(ing|ed)?\s+(from|to|into)/i,
  /new\s+(direction|chapter|industry|field|role)/i,
  /cross.?industry/i,
];

function checkResume(resume: string, jd: string): Result {
  const rt = resume.toLowerCase();
  const flags: Flag[] = [];
  let points = 0;

  const sections = splitSections(resume);
  const highValueText = sections.summary + " " + sections.experience;

  // 1. Keyword match (22pts)
  const keywords = extractKeywords(jd);
  const found = keywords.filter((k) => rt.includes(k));
  const missing = keywords.filter((k) => !rt.includes(k));
  const kwRate = keywords.length > 0 ? found.length / keywords.length : 0;
  points += Math.round(kwRate * 22);

  if (kwRate >= 0.65) {
    flags.push({ type: "pass", title: "Strong keyword match", detail: `${found.length} of ${keywords.length} key terms from the job description found in your résumé. ATS is unlikely to filter you out on keywords alone.` });
  } else if (kwRate >= 0.38) {
    flags.push({ type: "warn", title: "Moderate keyword match", detail: `${found.length} of ${keywords.length} key terms matched. Add the missing terms naturally in your summary or existing bullets — not in a hidden keyword list. Prompt 33 builds this section for you.` });
  } else {
    flags.push({ type: "fail", title: "Weak keyword match", detail: `Only ${found.length} of ${keywords.length} key terms found. ATS filters will likely reject this before a human sees it. Prompt 33 extracts and adds them for you.` });
  }

  // 2. Keyword placement (8pts)
  if (found.length > 0) {
    const inHighValue = found.filter((k) => highValueText.includes(k));
    const placementRate = inHighValue.length / found.length;
    if (placementRate >= 0.6) {
      points += 8;
      flags.push({ type: "pass", title: "Keywords in high-value sections", detail: `${inHighValue.length} of your matched keywords appear in your Summary or Experience — the sections ATS systems weight most heavily.` });
    } else if (placementRate >= 0.3) {
      points += 4;
      flags.push({ type: "warn", title: "Keywords concentrated in Skills only", detail: "Most matched keywords appear only in your Skills section. ATS scores keywords higher when they also appear in Experience bullets. Mirror key terms in your bullets using Prompt 12." });
    } else {
      points += 1;
      flags.push({ type: "fail", title: "Keywords missing from Summary & Experience", detail: "Matched keywords appear almost exclusively in Skills — the section parsers weight lowest. Add target keywords to your Summary and rewrite 2–3 bullets (Prompt 10 + 12)." });
    }
  }

  // 3. Metrics (12pts)
  const metricPattern = /\b\d[\d,]*\s*(%|million|billion|k\b|thousand|\+|x\b)|\$\s*\d[\d,]*|\d+[\d,]*\s*(users|customers|clients|projects|reports|staff|employees|accounts|stores|locations|markets|countries|cities|products|skus|hours|days|weeks|associates|vendors|transactions|hires)/gi;
  const metrics = resume.match(metricPattern) || [];
  const numCount = metrics.length;
  if (numCount >= 5) {
    points += 12;
    flags.push({ type: "pass", title: `Strong use of metrics (${numCount} found)`, detail: "Quantified achievements throughout. Numbers signal impact to both ATS parsers and human recruiters." });
  } else if (numCount >= 2) {
    points += 6;
    flags.push({ type: "warn", title: `Some metrics present (${numCount} found)`, detail: `Aim for 5–6 minimum across your bullets. Approximate numbers beat none — Prompt 11 quantifies existing achievements.` });
  } else {
    flags.push({ type: "fail", title: "Missing measurable achievements", detail: "Almost no numbers detected. Duty-list bullets score poorly. Prompt 11 turns descriptions into quantified outcomes." });
  }

  // 4. Filler phrases / action verbs (8pts)
  const fillers = ["responsible for", "helped with", "worked on", "assisted with", "involved in", "participated in", "duties included", "tasked with", "collaborated on", "contributed to", "part of the team", "supported the"];
  const foundFillers = fillers.filter((p) => rt.includes(p));
  const strongVerbPattern = /\b(led|built|reduced|increased|launched|designed|managed|delivered|created|drove|grew|scaled|improved|streamlined|negotiated|secured|generated|achieved|exceeded|oversaw|coordinated|implemented|developed|established|produced|executed|transformed|automated|spearheaded|mentored|trained|directed|tracked)\b/gi;
  const strongVerbs = resume.match(strongVerbPattern) || [];
  if (foundFillers.length === 0 && strongVerbs.length >= 4) {
    points += 8;
    flags.push({ type: "pass", title: "Strong action language", detail: `No passive filler phrases. ${strongVerbs.length} strong action verbs detected. Your bullets lead with impact.` });
  } else if (foundFillers.length <= 2) {
    points += 4;
    const msg = foundFillers.length
      ? `Found: "${foundFillers.join('", "')}". Replace each with a result-led verb: Led, Built, Reduced, Delivered.`
      : `${strongVerbs.length} action verbs found. Strengthen further with: Led, Built, Scaled, Delivered, Reduced.`;
    flags.push({ type: "warn", title: "Phrasing could be stronger", detail: msg });
  } else {
    flags.push({ type: "fail", title: `Too many weak filler phrases (${foundFillers.length})`, detail: `Found: "${foundFillers.slice(0, 3).join('", "')}". These passive phrases cost you with ATS and recruiters. Prompt 10 rewrites each as an active result.` });
  }

  // 5. Clichés (5pts)
  const foundCliches = CLICHES.filter((c) => rt.includes(c));
  if (foundCliches.length === 0) {
    points += 5;
    flags.push({ type: "pass", title: "No résumé clichés detected", detail: "No overused buzzwords. Your language is specific and avoids the filler that makes recruiters stop reading." });
  } else if (foundCliches.length <= 2) {
    points += 2;
    flags.push({ type: "warn", title: `Résumé clichés detected (${foundCliches.length})`, detail: `Found: "${foundCliches.join('", "')}". These appear on hundreds of thousands of résumés. Replace with specific achievements.` });
  } else {
    flags.push({ type: "fail", title: `Too many clichés (${foundCliches.length} found)`, detail: `Found: "${foundCliches.slice(0, 4).join('", "')}". Recruiters stop reading at these. Replace each with a specific, evidence-backed claim.` });
  }

  // 6. Section structure (12pts)
  const sectionKeywords = ["experience", "education", "skills", "summary", "professional summary", "work history", "certifications", "projects", "competencies", "objective", "qualifications"];
  const foundSections = sectionKeywords.filter((s) => rt.includes(s));
  const criticalSections = ["experience", "education", "skills"];
  const foundCritical = criticalSections.filter((s) => rt.includes(s));
  if (foundCritical.length === 3 && foundSections.length >= 4) {
    points += 12;
    flags.push({ type: "pass", title: "Clear section structure", detail: `Detected: ${foundSections.slice(0, 5).join(", ")}. ATS can parse your document structure and categorise your information correctly.` });
  } else if (foundCritical.length >= 2) {
    points += 6;
    const missingSections = criticalSections.filter((s) => !rt.includes(s));
    flags.push({ type: "warn", title: "Some key sections may be missing", detail: `Missing or unclear: ${missingSections.length ? missingSections.join(", ") : "add more standard headers"}. ATS relies on standard headers (SKILLS, EXPERIENCE, EDUCATION).` });
  } else {
    flags.push({ type: "fail", title: "Missing critical section headers", detail: "EXPERIENCE, EDUCATION, and SKILLS not detected. Without standard headers, ATS cannot parse your résumé. The CareerSwitchKit CV templates are all ATS-verified." });
  }

  // 7. Acronym completeness (5pts)
  const orphans = ACRONYM_MAP.filter(({ abbr, full }) => {
    const a = abbr.test(resume);
    const f = full.test(resume);
    return (a && !f) || (f && !a);
  });
  if (orphans.length === 0) {
    points += 5;
    flags.push({ type: "pass", title: "Acronym completeness looks good", detail: "Abbreviations appear with their full forms (or are absent). ATS scores both the short form and the spelled-out version." });
  } else if (orphans.length <= 2) {
    points += 2;
    flags.push({ type: "warn", title: `Acronyms missing full forms (${orphans.length})`, detail: `${orphans.slice(0, 2).map((a) => a.label).join("; ")}. Write both versions on first use: "Project Manager (PM)". Prompt 33 covers this.` });
  } else {
    flags.push({ type: "fail", title: `Multiple acronyms without full forms (${orphans.length})`, detail: `Found: ${orphans.slice(0, 3).map((a) => a.label).join("; ")}. Each orphaned acronym is a missed keyword match. Prompt 33 fixes this.` });
  }

  // 8. Career transition signals (8pts) — the differentiator
  const pivotFound = PIVOT_SIGNALS.filter((rx) => rx.test(resume));
  const hasTargetRoleInSummary =
    sections.summary.length > 20 &&
    /targeting|applying for|seeking|aspiring|transitioning into|moving into|now pursuing|focused on/i.test(sections.summary);
  if (pivotFound.length >= 2 || (pivotFound.length >= 1 && hasTargetRoleInSummary)) {
    points += 8;
    flags.push({ type: "pass", title: "Career transition framing detected", detail: "Pivot language present. Recruiters can immediately see why you're applying across industries — this cuts 'why are they applying here?' rejections." });
  } else if (pivotFound.length === 1) {
    points += 4;
    flags.push({ type: "warn", title: "Career transition language is thin", detail: "Only one pivot signal detected. Your Summary must make your 'why' unmistakable within 3 lines. Prompt 09 writes a summary that names your target role and frames your background as an asset." });
  } else {
    flags.push({ type: "fail", title: "No career transition framing found", detail: "No pivot language detected. Without it, a switcher's application reads as a mismatch even when the skills transfer. Prompt 09 names the target role, your edge, and your rationale in 3–4 sentences." });
  }

  // 9. Length / density (8pts)
  const wordCount = wordCountOf(resume);
  if (wordCount >= 280 && wordCount <= 700) {
    points += 8;
    flags.push({ type: "pass", title: `Optimal length (${wordCount.toLocaleString()} words)`, detail: "Concise enough for a one-page read, substantial enough for keyword coverage." });
  } else if (wordCount > 700 && wordCount <= 900) {
    points += 6;
    flags.push({ type: "warn", title: `Good length — review density (${wordCount.toLocaleString()} words)`, detail: "Trim duty-list bullets and older roles to tighten keyword density." });
  } else if (wordCount < 280) {
    points += 3;
    flags.push({ type: "warn", title: `May be too short (${wordCount} words)`, detail: "Too few words limits keyword coverage. Expand bullets with context, scope, and outcomes. Aim for 300–700. Prompt 10 writes richer bullets." });
  } else {
    points += 3;
    flags.push({ type: "warn", title: `May be too long (${wordCount.toLocaleString()} words)`, detail: "Cut roles older than 10 years to a single line. Every word must earn its place." });
  }

  // 10. Contact info (7pts)
  const hasEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i.test(resume);
  const hasPhone = /(\+?[\d\s\-().]{9,18})/.test(resume);
  const hasLinkedIn = /linkedin\.com\//i.test(resume);
  if (hasEmail && hasPhone) {
    points += hasLinkedIn ? 7 : 5;
    const liNote = hasLinkedIn
      ? " LinkedIn URL detected — ResumeGo found 71% more callbacks when a LinkedIn URL is present."
      : " Add your LinkedIn URL — recruiters check it within minutes, and 71% more callbacks come when it's present.";
    flags.push({ type: hasLinkedIn ? "pass" : "warn", title: "Contact information present", detail: `Email and phone detected.${liNote}` });
  } else if (hasEmail || hasPhone) {
    points += 2;
    flags.push({ type: "warn", title: "Incomplete contact information", detail: `${hasEmail ? "Email" : "Phone"} found but ${hasEmail ? "phone number" : "email address"} is missing. Include email, phone, and LinkedIn at the top.` });
  } else {
    flags.push({ type: "fail", title: "No contact information detected", detail: "No email or phone found. If ATS cannot extract contact details, your application cannot be processed." });
  }

  const finalScore = Math.min(Math.round(points), 100);
  return { score: finalScore, flags, keywords: { found, missing: missing.slice(0, 16), total: keywords.length }, wordCount };
}

function getColors(score: number) {
  if (score >= 75) return { main: "#22C55E", label: "Likely to Pass ATS" };
  if (score >= 55) return { main: "#EAB308", label: "Needs Improvement" };
  return { main: "#EF4444", label: "High Rejection Risk" };
}

function wordCountOf(text: string) {
  const t = text.trim();
  if (!t) return 0;
  return t.split(/\s+/).filter((w) => w.length > 0).length;
}

const FLAG_ORDER: Record<FlagType, number> = { fail: 0, warn: 1, pass: 2 };

const FlagIcon = ({ type }: { type: FlagType }) => {
  const name = type === "pass" ? "check_circle" : type === "warn" ? "warning" : "cancel";
  return <span className="material-symbols-outlined">{name}</span>;
};

export default function AtsCheckerDemo() {
  const [resume, setResume] = useState("");
  const [jd, setJd] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [displayScore, setDisplayScore] = useState(0);
  const [notice, setNotice] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Count-up animation for the gauge number whenever a new result lands.
  useEffect(() => {
    if (!result) return;
    let raf = 0;
    const target = result.score;
    const duration = 900;
    const start = performance.now();
    const step = (ts: number) => {
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplayScore(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [result]);

  // Reset state, then (after a beat that reads as real work) score the inputs
  // and scroll the results into view. Shared by run() and loadSample().
  function analyze(r: string, j: string) {
    setNotice(false);
    setLoading(true);
    setResult(null);
    setDisplayScore(0);
    setTimeout(() => {
      setResult(checkResume(r, j));
      setLoading(false);
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    }, 650);
  }

  function run() {
    if (!resume.trim() || !jd.trim()) {
      setNotice(true);
      setTimeout(() => setNotice(false), 3000);
      return;
    }
    analyze(resume, jd);
  }

  function loadSample() {
    setResume(SAMPLE_RESUME);
    setJd(SAMPLE_JD);
    analyze(SAMPLE_RESUME, SAMPLE_JD);
  }

  const colors = result ? getColors(result.score) : null;
  const sortedFlags = result ? [...result.flags].sort((a, b) => FLAG_ORDER[a.type] - FLAG_ORDER[b.type]) : [];
  const resumeWords = wordCountOf(resume);
  const jdWords = wordCountOf(jd);

  return (
    <div className="pv-card" style={{ padding: "clamp(20px, 4vw, 36px)" }}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#a0c9ff" }}>bolt</span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a0c9ff" }}>
              File 06 · Live in your browser
            </span>
          </div>
          <h3 className="font-geist font-black text-2xl md:text-3xl leading-tight">
            Will your resume <span style={{ color: "#a0c9ff" }}>clear the filter?</span>
          </h3>
          <p className="mt-2 text-sm max-w-md" style={{ color: "#c0c7d3" }}>
            Paste a resume and a job description — or load a sample. Nothing is uploaded; the whole engine runs on your device.
          </p>
        </div>
        <button
          onClick={loadSample}
          className="pv-chip shrink-0"
          style={{ cursor: "pointer", borderColor: "rgba(160,201,255,0.3)", color: "#fff" }}
        >
          <span className="material-symbols-outlined">play_arrow</span>
          Try it with a sample
        </button>
      </div>

      {/* Inputs */}
      <div className="pv-ats-grid">
        <div className="flex flex-col">
          <div className="pv-field-label">
            <span>Your Résumé</span>
            <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: "none", opacity: 0.6 }}>
              {resumeWords > 0 ? `${resumeWords.toLocaleString()} words` : ""}
            </span>
          </div>
          <textarea
            className="pv-textarea"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Paste your full résumé text here. Plain text is best — copy straight from your Word or Google doc."
            spellCheck={false}
            aria-label="Résumé text"
          />
        </div>
        <div className="flex flex-col">
          <div className="pv-field-label">
            <span>Job Description</span>
            <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: "none", opacity: 0.6 }}>
              {jdWords > 0 ? `${jdWords.toLocaleString()} words` : ""}
            </span>
          </div>
          <textarea
            className="pv-textarea"
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="Paste the full job posting — requirements, responsibilities, and any 'nice to have' sections."
            spellCheck={false}
            aria-label="Job description text"
          />
        </div>
      </div>

      {notice && (
        <div
          className="mt-3 text-center text-sm rounded-lg py-3 px-4"
          style={{ color: "#fca5a5", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.28)" }}
        >
          Paste your résumé and job description first — or hit &ldquo;Try it with a sample.&rdquo;
        </div>
      )}

      <button className="pv-analyze mt-4" onClick={run} disabled={loading}>
        {loading ? <span className="pv-spinner" /> : <span className="material-symbols-outlined" style={{ fontSize: 18 }}>query_stats</span>}
        {loading ? "Analyzing…" : result ? "Re-analyze" : "Analyze ATS Score"}
      </button>

      {/* Results */}
      {result && colors && (
        <div ref={resultsRef} className="mt-8 pv-panel-inner">
          {/* Score card */}
          <div
            className="rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-7"
            style={{ background: "rgba(7,7,25,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <ScoreGauge
              fill={result.score}
              display={displayScore}
              color={colors.main}
              size={104}
              numberSize={30}
              className="shrink-0"
            />

            <div className="flex-1 text-center sm:text-left">
              <div className="font-geist font-black text-xl md:text-2xl" style={{ color: colors.main }}>{colors.label}</div>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: "#c0c7d3" }}>
                {result.score >= 75
                  ? "This résumé has a strong chance of clearing automated filters and reaching a human recruiter."
                  : result.score >= 55
                  ? "Several issues may cause ATS rejection. Fix the flagged items below before submitting."
                  : "This résumé is likely to be filtered out before any human sees it. Address the critical issues below."}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-6 mt-4">
                {[
                  { n: `${result.keywords.found.length}/${result.keywords.total}`, l: "Keywords" },
                  { n: result.wordCount.toLocaleString(), l: "Words" },
                  { n: `${result.flags.filter((f) => f.type === "fail").length}`, l: "Issues" },
                ].map((m) => (
                  <div key={m.l} className="flex flex-col">
                    <span className="font-geist font-black text-lg text-white">{m.n}</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{m.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Flags */}
          <p className="pv-eyebrow mt-8 mb-3">
            Detailed checks
          </p>
          <div className="flex flex-col gap-2">
            {sortedFlags.map((f, i) => (
              <div key={i} className={`pv-flag ${f.type}`} style={{ animationDelay: `${i * 55}ms` }}>
                <div className="pv-flag-ico"><FlagIcon type={f.type} /></div>
                <div className="pv-flag-body">
                  <div className="pv-flag-title">{f.title}</div>
                  <div className="pv-flag-detail">{f.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Keywords */}
          <p className="pv-eyebrow mt-8 mb-3">
            Keyword match — <span style={{ color: "#86efac" }}>{result.keywords.found.length} found</span>, <span style={{ color: "#fca5a5" }}>{result.keywords.missing.length} missing</span>
          </p>
          <div className="flex flex-wrap gap-1.5">
            {result.keywords.found.slice(0, 14).map((k) => (
              <span key={`f-${k}`} className="pv-kw found">{k}</span>
            ))}
            {result.keywords.missing.map((k) => (
              <span key={`m-${k}`} className="pv-kw missing">{k}</span>
            ))}
          </div>

          <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Each flag names the exact AI prompt that fixes it — all 50 live inside the system.
          </p>
        </div>
      )}
    </div>
  );
}
