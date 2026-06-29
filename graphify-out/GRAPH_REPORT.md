# Graph Report - careerswitchkit  (2026-06-29)

## Corpus Check
- 62 files · ~54,728 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 325 nodes · 320 edges · 36 communities (26 shown, 10 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dbc765d1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Home Page & FAQ Schema|Home Page & FAQ Schema]]
- [[_COMMUNITY_Blog CTA & Posts|Blog CTA & Posts]]
- [[_COMMUNITY_Preview & Checkout|Preview & Checkout]]
- [[_COMMUNITY_Email Capture|Email Capture]]
- [[_COMMUNITY_How It Works|How It Works]]
- [[_COMMUNITY_Whats Included|Whats Included]]
- [[_COMMUNITY_App Layout & Fonts|App Layout & Fonts]]
- [[_COMMUNITY_Pricing Section|Pricing Section]]
- [[_COMMUNITY_Blog Index|Blog Index]]
- [[_COMMUNITY_Preview Gallery|Preview Gallery]]
- [[_COMMUNITY_Mid-Page CTA|Mid-Page CTA]]
- [[_COMMUNITY_Page Transitions|Page Transitions]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 114|Community 114]]
- [[_COMMUNITY_Community 313|Community 313]]
- [[_COMMUNITY_Community 353|Community 353]]
- [[_COMMUNITY_Community 354|Community 354]]
- [[_COMMUNITY_Community 370|Community 370]]
- [[_COMMUNITY_Community 372|Community 372]]
- [[_COMMUNITY_Community 374|Community 374]]
- [[_COMMUNITY_Community 375|Community 375]]
- [[_COMMUNITY_Community 376|Community 376]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `CLAUDE.md — CareerSwitchKit website` - 16 edges
3. `CRITICAL: How the landing page is actually built` - 12 edges
4. `CareerSwitchKit — Design System` - 12 edges
5. `What You Must Do When Invoked` - 11 edges
6. `useReducedMotion()` - 10 edges
7. `/graphify` - 10 edges
8. `graphify reference: extra exports and benchmark` - 8 edges
9. `tailwind` - 6 edges
10. `aliases` - 6 edges

## Surprising Connections (you probably didn't know these)
- `FinalCTA()` --calls--> `useReducedMotion()`  [INFERRED]
  app/components/FinalCTA.tsx → app/components/SystemDashboard.tsx

## Import Cycles
- None detected.

## Communities (36 total, 10 thin omitted)

### Community 0 - "Home Page & FAQ Schema"
Cohesion: 0.08
Nodes (23): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+15 more)

### Community 1 - "Blog CTA & Posts"
Cohesion: 0.08
Nodes (10): EASE, FinalCTA(), reassurances, metadata, metadata, handleCheckout(), metadata, metadata (+2 more)

### Community 2 - "Preview & Checkout"
Cohesion: 0.15
Nodes (13): dependencies, class-variance-authority, clsx, lucide-react, motion, next, @next/third-parties, @radix-ui/react-accordion (+5 more)

### Community 3 - "Email Capture"
Cohesion: 0.17
Nodes (12): Background layer stack, Checkout / payments, Color system — two sources of truth, CRITICAL: How the landing page is actually built, CSS utility classes to know, Font system — three separate loading mechanisms, Interactive components, ORPHANED components — editing these does NOTHING to the landing page (+4 more)

### Community 4 - "How It Works"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 5 - "Whats Included"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 6 - "App Layout & Fonts"
Cohesion: 0.22
Nodes (5): dmSans, metadata, sora, MotionProvider(), SmoothScroll()

### Community 7 - "Pricing Section"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 9 - "Preview Gallery"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 10 - "Mid-Page CTA"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 19 - "Community 19"
Cohesion: 0.11
Nodes (18): author, devDependencies, autoprefixer, @napi-rs/canvas, postcss, tailwindcss, @types/node, @types/react (+10 more)

### Community 28 - "Community 28"
Cohesion: 0.12
Nodes (15): Brand colors (use these exact values, as CSS variables), CLAUDE.md — CareerSwitchKit website, Content rules (important — these protect us), Emotional angle, graphify, Hard design rules (do not break these), Headline & subheadline (locked — do not change), How to work with me (+7 more)

### Community 37 - "Community 37"
Cohesion: 0.11
Nodes (21): AFTER_ITEMS, AnimatedNumber(), BEFORE_ITEMS, EASE, FileItem, GRID_BG, PROMPT_ITEMS, SPRING (+13 more)

### Community 44 - "Community 44"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 49 - "Community 49"
Cohesion: 0.10
Nodes (19): Brand Overview, Cards / Feature Blocks, CareerSwitchKit — Design System, Colors, Component Styles, Emotional Positioning, Home (landing page), Language Rules (+11 more)

### Community 52 - "Community 52"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 65 - "Community 65"
Cohesion: 0.14
Nodes (13): cn(), AccordionContent, AccordionItem, AccordionTrigger, Button, ButtonProps, buttonVariants, Card (+5 more)

### Community 114 - "Community 114"
Cohesion: 0.08
Nodes (16): faqSchema, metadata, productSchema, FadeUpObserver(), FAQS, Footer(), arrowVariants, EASE (+8 more)

### Community 313 - "Community 313"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **204 isolated node(s):** `metadata`, `metadata`, `metadata`, `posts`, `metadata` (+199 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `FinalCTA()` connect `Blog CTA & Posts` to `Community 37`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Why does `useReducedMotion()` connect `Community 37` to `Blog CTA & Posts`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Why does `handleCheckout()` connect `Blog CTA & Posts` to `Community 114`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `metadata`, `metadata`, `metadata` to the rest of the system?**
  _204 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Home Page & FAQ Schema` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Blog CTA & Posts` be split into smaller, more focused modules?**
  _Cohesion score 0.08307692307692308 - nodes in this community are weakly interconnected._
- **Should `Community 19` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._