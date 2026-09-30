# Status — backt-web

**Updated:** 2026-09-30 (PT)  
**Visibility:** public  
**Maturity:** stalled landing-page WIP (not a launched research platform)  
**Default branch:** `claude/backt-launch-fwiPh` (**no `main`** on this remote today)

## Honest positioning

README and deploy docs still sound like a **production quantitative research SaaS** (Bayesian optimization, deflated Sharpe, regime detection, Kelly sizing, Stripe billing). **What is in this tree is a Next.js marketing landing page** plus env/deploy scaffolding.

| Area | Reality on default branch |
|------|---------------------------|
| `app/` | `layout.tsx`, `page.tsx`, `globals.css` — landing shell |
| `components/landing/` | Hero / features / pricing / CTA marketing sections |
| `lib/` | `utils.ts` only |
| Backend / optimizer | **Not present** — no Python/Rust research engine, no strategy runner |
| Auth / Stripe / live API | Env keys documented; **not** evidence of a shipped product with users or measured edge |

Last tip commit message references “Critical pre-launch fixes for production deployment” (~2026-06-03). Treat that as **pre-launch intent**, not proof of production traffic or validated backtests.

## What is **not** claimed

- Live or paper trading performance, Sharpe, capacity, or “fund-grade” results
- That feature bullets (Bayesian HPO, permutation tests, Markowitz, Kelly) are implemented as runnable modules in this repo
- That Vercel/Supabase/Stripe wiring equals a launched business

## Default branch note

GitHub **HEAD** is `claude/backt-launch-fwiPh`. There is no `main` branch in the remote branch list at honesty time. Portfolio bots and humans should PR against the actual default, or create a real `main` intentionally later — do not assume `main`.

## Related

| Concern | Note |
|---------|------|
| Quant methodology hubs | Prefer [`quant-research-portfolio`](https://github.com/jmiaie/quant-research-portfolio) / chapter repos — not this marketing shell |
| Name “BACKT” | Web front / brand experiment; confirm link to any separate backtest engine before claiming a stack |

## Offline / local

```bash
npm install
cp .env.local.example .env.local   # placeholders only
npm run dev                        # landing page
```

`.env.production` on this remote uses **empty** placeholder values (not live secrets). Still do not invent production metrics from a local `next dev`.

## Next (owner)

1. Soften or archive launch theater if product is parked
2. Optionally create a real `main` and set it as default
3. If a research API exists elsewhere, link it explicitly — do not grow fake KPI claims into this landing repo
