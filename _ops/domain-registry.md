# The Plug AI — Domain Registry & Strategy
*Last updated: 2026-06-13*

---

## 📧 Email (Microsoft 365 Email Essentials — $9.99/mo)

Set up on primary domain. Recommended addresses:

| Address | Purpose |
|---|---|
| `hello@theplugai.world` | Public-facing contact, grant LOIs, partnerships |
| `stephon@theplugai.world` | Personal professional email |
| `apply@theplugai.world` | Program enrollment / intake routing |
| `info@theplugai.world` | General info requests |

> **Action:** Point M365 MX records to whichever domain you pick as primary (recommend `.world`). Set up in GoDaddy DNS → add Microsoft's MX + TXT verification records.

---

## 🌐 Domain Registry

| Domain | Cost | Renews | Assigned Purpose | Target Repo / Project |
|---|---|---|---|---|
| `theplugai.world` | $2.99/yr | 2027 | **Primary website** — flagship brand home | `psychic-bassoon` → psychic-bassoon-cam6stef.vercel.app |
| `theplugai.live` | $2.99/yr | 2027 | **Live events & workshops** — class sign-ups, live sessions | `Link-inbio` or future events page |
| `theplugai.net` | $12.83/yr | 2027 | **Community network** — intake, routing, enrollment hub | `-Community_intake_Routing` → community-intake-routing.vercel.app |
| `theplugai.info` | $3.30/yr | 2027 | **Program info & curriculum** — digital literacy program docs | `Link-inbio` → morrisstephon51.github.io/Link-inbio |
| `theplugai.online` | $0.55/yr | 2027 | **Online learning platform** — future course delivery | Park → redirect to `.world` until learning platform is built |
| `theplugai.xyz` | $0.55/yr | 2027 | **Tech & automation tools** — developer-facing, agent builds | `content-machine` → content-machine-wine.vercel.app |
| `theplugai.store` | $0.55/yr | 2027 | **Merch & paid products** — future courses, merch, resources | Park → redirect to `.world` until store is built |
| `theplugai.life` | $2.99/yr | 2027 | **Mission & impact** — "AI changes lives" brand story | Park → redirect to `.world` (use for campaigns) |

**Total annual cost:** ~$29.75/yr + $9.99/mo email = ~$150/yr all-in

---

## 🗺️ Domain → Repo Mapping

| Domain | GitHub Repo | Live URL (current) | Action Needed |
|---|---|---|---|
| `theplugai.world` | `morrisstephon51/psychic-bassoon` | psychic-bassoon-cam6stef.vercel.app | Add custom domain in Vercel → point DNS |
| `theplugai.net` | `morrisstephon51/-Community_intake_Routing` | community-intake-routing.vercel.app | Add custom domain in Vercel → point DNS |
| `theplugai.xyz` | `morrisstephon51/content-machine` | content-machine-wine.vercel.app | Add custom domain in Vercel → point DNS |
| `theplugai.live` | `morrisstephon51/Link-inbio` | morrisstephon51.github.io/Link-inbio | Add CNAME in GoDaddy → GitHub Pages custom domain |
| `theplugai.info` | `morrisstephon51/Link-inbio` | morrisstephon51.github.io/Link-inbio | Redirect → theplugai.world (or `.live`) |
| `theplugai.online` | *(parked)* | — | Redirect → theplugai.world |
| `theplugai.store` | *(parked)* | — | Redirect → theplugai.world |
| `theplugai.life` | *(parked)* | — | Redirect → theplugai.world |

---

## ✅ Setup Checklist

### Phase 1 — This Week (High Impact)
- [ ] **Point `theplugai.world` → Vercel** (psychic-bassoon project)
  - GoDaddy DNS: Add `A` record → `76.76.21.21` (Vercel IP)
  - Add `www` CNAME → `cname.vercel-dns.com`
  - In Vercel dashboard: Settings → Domains → Add `theplugai.world`
- [ ] **Set up M365 email on `theplugai.world`**
  - Add MX records in GoDaddy for Microsoft 365
  - Create `hello@theplugai.world` and `stephon@theplugai.world`
  - Update resume, LinkedIn, Link-in-Bio, dashboard with new email
- [ ] **Redirect parked domains → theplugai.world**
  - GoDaddy: Forwarding → `.online`, `.store`, `.life` all → `https://theplugai.world`

### Phase 2 — Next 2 Weeks
- [ ] **Point `theplugai.net` → community intake agent**
- [ ] **Point `theplugai.live` → Link-in-Bio (event landing)**
- [ ] **Point `theplugai.xyz` → content machine tool**

### Phase 3 — When Ready
- [ ] Build online course platform → activate `theplugai.online`
- [ ] Build merch/paid resource page → activate `theplugai.store`

---

## 💡 Strategic Notes

**Why `.world` as primary?**
"The Plug AI" is a world-class idea. `.world` signals ambition + is memorable + uncommon. Use it everywhere: grant LOIs, email signatures, business cards, LinkedIn.

**Why `.live` for events?**
AI workshops, community sessions, live training — `.live` is literal and searchable. "Join us at theplugai.live" is a clean CTA.

**Why `.net` for the intake agent?**
`.net` = network. The community intake router IS the network gateway. Makes conceptual sense.

**Email is the real ROI here.**
`hello@theplugai.world` on a Kresge LOI or DCEO grant application signals legitimacy in a way that `morrisstephon51@gmail.com` simply does not. This is the highest-leverage $10/month you'll spend.

---

*See also: [[master-tracker]] · [[grant-research-log]]*
