# Stephon Morris — Master Project Tracker
*Last updated: 2026-06-13 | Source of truth for all active builds*

---

## 🔴 TRACK 1 — Critical Path: The Plug AI Funding

> **Definition of Done:** The Plug AI has at least one active grant awarded OR a fiscal sponsor confirmed, enabling paid programming, paid staff time, and community impact at scale.

### Next 3 Milestones
1. **Fiscal Sponsor confirmed** — Required before most grants can be applied for. Target: 30 days.
2. **First LOI submitted** — DCEO Digital Equity Capacity or Cook County IMPACT. Target: 45 days.
3. **Grant Research Agent live** — Automates discovery + tracking so no deadline is missed. Target: 21 days.

---

### 📋 Funding Pipeline

| Opportunity | Funder | Amount | Status | Next Action | Blocking |
|---|---|---|---|---|---|
| **IL Digital Equity Capacity Kickstarter** | DCEO | $30K–$300K | 🔍 Researched | Review eligibility — confirm if unincorporated/community group qualifies | Fiscal sponsor likely required |
| **Digital Equity Grants** | DCEO | $150–$2,500 | 🔍 Researched | Easiest entry point — apply now, small amount, tech infrastructure | Possibly none — check eligibility |
| **Digital Equity IMPACT Small Grants** | Cook County / City Bureau | TBD | 🔍 Researched | Visit digitalequity.cookcountyil.gov — check current cycle | Cook County focus — confirm south suburbs qualify |
| **IL Workforce Development Innovation Grants** | DCEO | Varies | 🔍 Researched | Review: veterans, youth, special populations match | Unclear without 501c3 |
| **Kresge Foundation LOI** | Kresge ($4B, Troy MI) | $100K+ | 🔭 On radar | NOT YET — research focus areas first. Kresge = Detroit-first but has IL history (Obama Fdn $2.4M). Email grantsmanagement@kresge.org after fiscal sponsor secured | Need 501c3 or fiscal sponsor + track record |
| **Humanity AI** | MacArthur, Ford, Mozilla, Kapor coalition | $500M pool | 🔭 On radar | Watch for 2026 grant cycles — pooled fund opens. Build relationship with Kapor Foundation (most tech-equity aligned) | Competitive — needs org credibility first |
| **Fiscal Sponsorship** | Various (Fractured Atlas, NPEN, etc.) | N/A | ❌ Not started | Research fiscal sponsors: Fractured Atlas, Chicago Community Trust, NPEN. Apply to one this week | THIS IS THE UNLOCK — do this first |

---

### 🤖 Grant Research Agent (Track 1 Build)

| Field | Value |
|---|---|
| **Status** | ❌ Not built |
| **Purpose** | Auto-discovers grants matching The Plug AI profile, logs deadlines to Supabase, sends weekly digest |
| **Stack** | Claude API + Granted API + Supabase |
| **Last action** | Concept defined in this conversation |
| **Next action** | Spec the agent: inputs (keywords, org type, state), outputs (Supabase `grants` table + email/Slack digest) |
| **Blocks** | Nothing — can build now |
| **Target** | 21 days |

---

## 🟡 TRACK 2 — Active Builds (Time-Capped)

> **Rule:** Track 2 work gets max 90 min/day. If it bleeds into Track 1 time, stop and reschedule.

---

### 🔌 The Plug AI Website
| Field | Value |
|---|---|
| **URL** | https://psychic-bassoon-cam6stef.vercel.app |
| **Status** | ✅ Live |
| **Last action** | Deployed, added to all link surfaces |
| **Next action** | Add enrollment/interest form (links to community-intake-routing agent) |
| **Blocking** | None |

---

### 📡 Content Pipeline Agent
| Field | Value |
|---|---|
| **URL** | https://content-machine-wine.vercel.app |
| **Repo** | github.com/morrisstephon51/content-machine |
| **Status** | ✅ Live |
| **Last action** | Built + deployed. Generates IG/TikTok/FB/YT posts from topic via Claude API → Supabase |
| **Next action** | Run it weekly for The Plug AI content. Set a recurring topic queue |
| **Blocking** | Need ANTHROPIC_API_KEY + SUPABASE_ANON_KEY in .env to run locally |

---

### 🎬 AI Video Reel Generator
| Field | Value |
|---|---|
| **URL** | https://ai-video-reel-generator.vercel.app |
| **Repo** | github.com/morrisstephon51/ai-video-reel-generator |
| **Status** | ✅ Live |
| **Last action** | Deployed |
| **Next action** | Connect to Content Pipeline output — pipe video_outputs into Remotion render |
| **Blocking** | Content Pipeline needs to run first |

---

### 🔀 Community Intake & Routing Agent
| Field | Value |
|---|---|
| **URL** | https://community-intake-routing.vercel.app |
| **Repo** | github.com/morrisstephon51/-Community_intake_Routing |
| **Status** | ✅ Live |
| **Last action** | Deployed |
| **Next action** | Link from The Plug AI website as the enrollment entry point |
| **Blocking** | None |

---

### 🎯 JobScout (Job Opportunity Scanner)
| Field | Value |
|---|---|
| **Repo** | github.com/morrisstephon51/job_opportunity_scanner |
| **Status** | 🔨 Repo exists, unclear completion |
| **Last action** | Repo created |
| **Next action** | Audit repo — is there a working agent? What's built? What's missing? |
| **Blocking** | Need to audit repo contents first |
| **Priority** | Low — Track 1 comes first |

---

### 📊 Enrollment Funnel Agent (BigHeart)
| Field | Value |
|---|---|
| **Repo** | github.com/morrisstephon51/Enrollment_Funnel_Agent |
| **Status** | 🔨 Repo exists, unclear completion |
| **Last action** | Repo created |
| **Next action** | Audit repo — deliverable for BigHeart Health, check if deployed |
| **Blocking** | BigHeart relationship status unclear |

---

### 🤖 Axis Kai — The Plug AI Ops Manager
| Field | Value |
|---|---|
| **Drive doc** | AxisKai_PlugAI_OpsManager_v1 (Google Drive) |
| **Status** | 📄 Document exists — not built yet |
| **Last action** | Prompt/spec written |
| **Next action** | Decide: build now or park until post-fiscal-sponsor? |
| **Blocking** | Could be valuable for Track 1 (running program ops) — review the spec |

---

## 🟢 DONE — Deployed & Maintained

| Project | URL | Notes |
|---|---|---|
| Link-in-Bio | morrisstephon51.github.io/Link-inbio | All links fixed, live |
| Command Center | morrisstephon51.github.io/Link-inbio/dashboard.html | PIN protected, fully upgraded |
| Living Resume | morrisstephon51.github.io/Link-inbio/resume.html | Print-to-PDF, all live links |
| BigHeart Deliverables | (Google Drive) | Church campaign bible, provider guide, email sig, QR tracker |
| CES Knowledge Base | (Google Drive) | Knowledge base + slides — program complete |
| LinkedIn 30-Day Post Plan | (Google Drive) | Content calendar exists |

---

## ⚠️ Open Flags

| Issue | Impact | Action |
|---|---|---|
| Default PIN is 123456 on Command Center | Security risk | Change it: open dashboard.html, run `crypto.subtle.digest(...)` in console, update `CORRECT_HASH` |
| 15 Supabase tables have RLS disabled | Data exposure | Review and enable RLS — do NOT enable without writing policies first or access breaks |
| No fiscal sponsor = no grant eligibility | Blocks all major funding | **Do this week** |
| VendiCause / EmpowerLife docs in Drive | Separate project? | Clarify: is this active, archived, or a client? |

---

*Sync this file weekly. Use the daily template to move it forward one action at a time.*
