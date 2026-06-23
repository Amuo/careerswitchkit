# Graph Report - .  (2026-06-23)

## Corpus Check
- Corpus is ~22,417 words - fits in a single context window. You may not need a graph.

## Summary
- 136 nodes · 147 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

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

## God Nodes (most connected - your core abstractions)
1. `Reveal()` - 8 edges
2. `Footer()` - 5 edges
3. `MotionProvider()` - 2 edges
4. `StageGroupData` - 2 edges
5. `metadata` - 1 edges
6. `metadata` - 1 edges
7. `metadata` - 1 edges
8. `posts` - 1 edges
9. `metadata` - 1 edges
10. `metadata` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "Home Page & FAQ Schema"
Cohesion: 0.12
Nodes (8): faqSchema, productSchema, EASE, Footer(), bullets, EASE, metadata, sections

### Community 1 - "Blog CTA & Posts"
Cohesion: 0.10
Nodes (6): metadata, metadata, metadata, metadata, metadata, metadata

### Community 2 - "Preview & Checkout"
Cohesion: 0.11
Nodes (10): metadata, promptCategories, stageGroups, stagePills, transferPairs, EASE, ItemData, StageGroupData (+2 more)

### Community 3 - "Email Capture"
Cohesion: 0.13
Nodes (9): EASE, EASE, faqs, afterWins, beforeFlaws, EASE, Reveal(), RevealProps (+1 more)

### Community 4 - "How It Works"
Cohesion: 0.17
Nodes (5): checkItems, EASE, steps, templates, transferRows

### Community 5 - "Whats Included"
Cohesion: 0.20
Nodes (4): EASE, stages, stageStyles, stageVisuals

### Community 6 - "App Layout & Fonts"
Cohesion: 0.33
Nodes (4): dmSans, metadata, sora, MotionProvider()

### Community 7 - "Pricing Section"
Cohesion: 0.33
Nodes (3): EASE, featuresLeft, featuresRight

## Knowledge Gaps
- **50 isolated node(s):** `metadata`, `metadata`, `metadata`, `posts`, `metadata` (+45 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Reveal()` connect `Email Capture` to `Preview & Checkout`, `Whats Included`, `Pricing Section`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Why does `Footer()` connect `Home Page & FAQ Schema` to `Preview & Checkout`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **What connects `metadata`, `metadata`, `metadata` to the rest of the system?**
  _50 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Home Page & FAQ Schema` be split into smaller, more focused modules?**
  _Cohesion score 0.11904761904761904 - nodes in this community are weakly interconnected._
- **Should `Blog CTA & Posts` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Preview & Checkout` be split into smaller, more focused modules?**
  _Cohesion score 0.11052631578947368 - nodes in this community are weakly interconnected._
- **Should `Email Capture` be split into smaller, more focused modules?**
  _Cohesion score 0.1286549707602339 - nodes in this community are weakly interconnected._