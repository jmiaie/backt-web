# BACKT (backt-web)

> **Status (2026-09-30):** **Stalled landing-page WIP** — not a launched quant research platform. See [`STATUS.md`](STATUS.md).

Public Next.js + Tailwind **marketing site** for a backtesting / research product concept (rebrand lineage from QuantEdge → BACKT).  
**Author context:** Jeff Milam ([`jmiaie`](https://github.com/jmiaie)).

**Default branch is `claude/backt-launch-fwiPh` (no `main` today).**

## What this repo is

- A landing page (`app/page.tsx` + `components/landing/*`)
- Deploy / env scaffolding aimed at Vercel + Supabase + optional Stripe
- **Not** an implemented Bayesian optimizer, portfolio engine, or verified strategy lab

Feature lists in older README drafts described **product intent**, not modules you can run from this tree. **No trading performance figures are claimed.**

## Quick start (local landing)

```bash
git clone https://github.com/jmiaie/backt-web.git
cd backt-web
npm install
cp .env.local.example .env.local
# fill Supabase placeholders only if you need auth-shaped local experiments
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

See `.env.local.example`. Do not commit live secrets. Tracked `.env.production` is empty placeholders.

## Project structure (honest)

```
backt-web/
├── app/                 # Next.js App Router shell (landing)
├── components/landing/  # Marketing sections
├── lib/utils.ts
├── STATUS.md
└── deploy docs          # Vercel / Supabase checklists — pre-launch intent
```

## Related

Prefer quant methodology work under the portfolio hub / chapter repos rather than treating this site as the research engine.

## License / product

Public repo — treat as unfinished brand/landing experiment until an explicit launch decision.
