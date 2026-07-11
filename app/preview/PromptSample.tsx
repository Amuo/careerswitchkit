"use client";

import { useState } from "react";

/* ────────────────────────────────────────────────────────────────────────
   A real look inside File 05 — the AI Prompt Pack. Six stages, 50 prompts.
   These are verbatim from the pack: pick a stage, read the actual prompt,
   copy it. Placeholders you'd replace are highlighted.
   ──────────────────────────────────────────────────────────────────────── */

// One prompt per stage tab — `short` is the tab label. (The pack has 50; this
// shows the flagship of each of the 6 stages.)
interface Prompt {
  short: string;
  num: string;
  title: string;
  body: string;
  when: string;
}

const PROMPTS: Prompt[] = [
  {
    short: "Research",
    num: "02",
    title: "Map my background to the role",
    body: "Here is my work history: [paste experience summary]. Here is the job description: [paste JD]. Identify every place my background overlaps with what they're asking for — including non-obvious matches. Then list gaps I need to address.",
    when: "Reveals hidden transferable value you'd miss reading it yourself.",
  },
  {
    short: "Résumé",
    num: "12",
    title: "Reframe past experience for a new field",
    body: "I was a [your role] at [type of company]. Here are 3 things I did regularly: [list]. Rewrite each one as a résumé bullet for someone applying to be a [target role]. Use the language of the new field, not my old one.",
    when: "The core of career switching. Same experience, new frame.",
  },
  {
    short: "Cover Letter",
    num: "19",
    title: "Explain the career switch directly",
    body: "I'm moving from [field A] to [field B]. Write a 2–3 sentence explanation of why I'm making this switch that sounds intentional, not desperate. It should be honest and specific, not vague. My actual reason is: [your real reason in plain language].",
    when: "Hiring managers are thinking 'why didn't they just stay in their lane?' Answer the question before they ask it.",
  },
  {
    short: "ATS",
    num: "33",
    title: "Build a keyword-optimised skills section",
    body: "Based on this job description: [paste JD], write a skills section for my résumé that would score well on ATS and still read naturally to a recruiter. Include both the spelled-out version and acronym where relevant (e.g. 'Project Management (PMP)').",
    when: "ATS systems match exact strings. Both the acronym and the full phrase matter.",
  },
  {
    short: "Interview",
    num: "40",
    title: "Run a mock interview",
    body: "Act as an interviewer for [role] at [company]. Ask me one behavioural interview question at a time. After I answer each one, give me brief feedback on: what worked, what to cut, and what to add. Then ask the next question. Start with: 'Tell me about yourself.'",
    when: "Simulate the pressure before you're in the room. The highest-ROI use of AI for interview prep.",
  },
  {
    short: "Negotiation",
    num: "48",
    title: "Negotiate salary by email",
    body: "I received an offer of [amount] for [role] at [company]. I want to negotiate to [target amount] based on [your justification]. Write a professional email that: thanks them for the offer, makes a specific counter, and leaves the relationship warm regardless of outcome.",
    when: "Negotiating is expected. Most employers make a first offer expecting it. Not asking is leaving money behind.",
  },
];

/* Highlight the [bracketed placeholders] a user would replace. */
function renderBody(body: string) {
  const parts = body.split(/(\[[^\]]+\])/g);
  return parts.map((p, i) =>
    p.startsWith("[") && p.endsWith("]") ? (
      <span key={i} className="ph">{p}</span>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export default function PromptSample() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const prompt = PROMPTS[active];

  function copy() {
    navigator.clipboard?.writeText(prompt.body).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      },
      () => {}
    );
  }

  return (
    <div>
      <div className="pv-prompt-tabs mb-6">
        {PROMPTS.map((p, i) => (
          <button
            key={i}
            onClick={() => { setActive(i); setCopied(false); }}
            className={`pv-prompt-tab ${active === i ? "active" : ""}`}
          >
            <span className="pv-tab-num">{String(i + 1).padStart(2, "0")}</span>
            {p.short}
          </button>
        ))}
      </div>

      <div key={active} className="pv-prompt-card max-w-3xl mx-auto">
        <div className="pv-prompt-head">
          <span className="pv-prompt-num">#{prompt.num}</span>
          <span className="font-geist font-bold text-white" style={{ fontSize: 15 }}>{prompt.title}</span>
          <button className="pv-copy-btn" onClick={copy}>
            <span className="material-symbols-outlined">{copied ? "check" : "content_copy"}</span>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="pv-prompt-body">{renderBody(prompt.body)}</div>
        <div className="pv-prompt-when">
          <span className="material-symbols-outlined">lightbulb</span>
          <span><strong style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>When to use — </strong>{prompt.when}</span>
        </div>
      </div>

      <p className="text-center text-sm mt-6" style={{ color: "rgba(255,255,255,0.45)" }}>
        This is 6 of 50. The full pack sequences every stage — research to negotiation — and works with ChatGPT, Claude, or Gemini.
      </p>
    </div>
  );
}
