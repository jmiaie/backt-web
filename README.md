# BACKT - Professional Quantitative Trading Research Platform

**Stop guessing. Start optimizing.** Professional-grade backtesting and quantitative research tools for serious traders and funds.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jmiaie/backt-web)

## Features

- 🚀 **Automated Optimization** - Bayesian hyperparameter optimization
- 📊 **Statistical Validation** - Permutation tests, deflated Sharpe ratio, bootstrap CI
- 🎯 **Regime Detection** - Adaptive strategies based on market conditions
- 💼 **Portfolio Optimization** - Markowitz, risk parity, max Sharpe
- 💰 **Transaction Costs** - Realistic modeling of slippage and commissions
- ⚡ **Kelly Sizing** - Optimal position sizing for maximum growth

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Auth:** Supabase Auth (Google, GitHub, Microsoft OAuth)
- **Database:** Supabase PostgreSQL
- **Payments:** Stripe
- **Icons:** Lucide React
- **Hosting:** Vercel

## Quick Start

```bash
# Clone the repository
git clone https://github.com/jmiaie/backt-web.git
cd backt-web

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Environment Variables

Create a `.env.local` file with:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe (optional for initial setup)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Backend API
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Add environment variables
4. Deploy

### Custom Domain

1. Buy domain (backt.io recommended at Cloudflare)
2. Add to Vercel project settings
3. Configure DNS

## Project Structure

```
backt-web/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/
│   └── landing/
│       ├── header.tsx      # Navigation header
│       ├── hero.tsx        # Hero section
│       ├── features.tsx    # Features grid
│       ├── comparison.tsx  # Before/After comparison
│       ├── pricing.tsx     # Pricing tiers
│       ├── cta.tsx         # Call to action
│       └── footer.tsx      # Footer with links
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Pricing

- **Free:** 10 backtests/month, basic features
- **Starter ($29/mo):** 100 backtests, optimization, statistical validation
- **Professional ($99/mo):** Unlimited backtests, regime detection, portfolio optimization

## Development

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Stripe Integration](https://stripe.com/docs)

## License

All rights reserved © 2026 BACKT

## Support

- **Documentation:** [backt.io/docs](https://backt.io/docs)
- **Email:** support@backt.io
- **Discord:** [Join our community](https://discord.gg/backt)
