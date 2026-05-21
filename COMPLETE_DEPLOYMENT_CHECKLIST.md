# BACKT - Complete Deployment Checklist

## Phase 1: Code & Repository (COMPLETE ✅)

- [x] Rebrand from QuantEdge to BACKT
- [x] Landing page created (Header, Hero, Features, Pricing, CTA, Footer)
- [x] TypeScript type check passing
- [x] ESLint code quality passing
- [x] Production build successful (6.8s)
- [x] Bundle size optimized (7.0MB)
- [x] Git repository initialized
- [x] 5 commits created with proper messages
- [x] Branch created: `claude/backt-launch-fwiPh`
- [x] GitHub repository created: `github.com/jmiaie/backt-web`

## Phase 2: Push to GitHub (PENDING - NEEDS TOKEN)

- [ ] Add GitHub PAT as environment variable
- [ ] Push code to GitHub
  ```bash
  GITHUB_TOKEN='your_pat' bash /home/user/backt-web/PUSH_SCRIPT.sh
  ```
- [ ] Verify code visible at github.com/jmiaie/backt-web
- [ ] Check all files uploaded correctly
- [ ] Verify README displays properly

## Phase 3: Vercel Deployment (READY)

### 3.1 Initial Setup
- [ ] Go to https://vercel.com/new
- [ ] Connect GitHub account
- [ ] Import `jmiaie/backt-web` repository
- [ ] Confirm Next.js framework detected
- [ ] Click "Deploy"

### 3.2 First Deploy (Expected: 2-3 minutes)
- [ ] Wait for build to complete
- [ ] Build succeeds with no errors
- [ ] Deployment URL generated: `backt-web.vercel.app`
- [ ] Visit URL and verify landing page loads
- [ ] Check mobile responsiveness
- [ ] Test all internal links (#features, #pricing)

### 3.3 Environment Variables
- [ ] Dashboard → Settings → Environment Variables
- [ ] Add Supabase URL (from Step 4)
- [ ] Add Supabase anon key
- [ ] Add service role key
- [ ] Select: Production, Preview, Development
- [ ] Click "Redeploy" after adding variables

## Phase 4: Supabase Setup (READY)

### 4.1 Create Project
- [ ] Go to https://supabase.com
- [ ] Sign in with GitHub
- [ ] Create new project: "BACKT"
- [ ] Choose region (us-east-1 recommended)
- [ ] Generate and save database password
- [ ] Wait 2-3 minutes for provisioning

### 4.2 Get API Keys
- [ ] Project Settings → API
- [ ] Copy Project URL
- [ ] Copy anon/public key
- [ ] Copy service_role key
- [ ] Add all three to Vercel env vars
- [ ] Save locally in `.env.local`

### 4.3 Configure Authentication
- [ ] Enable Google OAuth provider
  - [ ] Create Google Cloud Console project
  - [ ] Get Client ID and Secret
  - [ ] Add redirect URL
  - [ ] Paste credentials in Supabase
- [ ] Enable GitHub OAuth provider
  - [ ] Create GitHub OAuth App
  - [ ] Get Client ID and Secret
  - [ ] Add callback URL
  - [ ] Paste credentials in Supabase
- [ ] Enable Microsoft OAuth provider
  - [ ] Create Azure AD app registration
  - [ ] Get Application ID and Secret
  - [ ] Add redirect URI
  - [ ] Paste credentials in Supabase

### 4.4 Database Schema
- [ ] Open SQL Editor in Supabase
- [ ] Run subscriptions table creation script
- [ ] Run backtests table creation script
- [ ] Enable RLS on both tables
- [ ] Create policies for user access
- [ ] Test queries in dashboard

## Phase 5: Custom Domain (READY)

### 5.1 Buy Domain
- [ ] Go to https://www.cloudflare.com/products/registrar/
- [ ] Search for `backt.io`
- [ ] Purchase domain (~$32/year)
- [ ] Complete registration
- [ ] Verify purchase confirmation

### 5.2 Configure DNS
- [ ] Cloudflare Dashboard → DNS
- [ ] Vercel Dashboard → Settings → Domains
- [ ] Add `backt.io` in Vercel
- [ ] Copy DNS records from Vercel:
  ```
  A     @      76.76.21.21
  CNAME www    cname.vercel-dns.com
  ```
- [ ] Add records in Cloudflare
- [ ] Wait for DNS propagation (24-48hrs, usually faster)
- [ ] Test with: `dig backt.io`

### 5.3 SSL Certificate
- [ ] Verify HTTPS works on backt.io
- [ ] Check SSL cert in browser (should show Vercel/Let's Encrypt)
- [ ] Confirm auto-redirect HTTP → HTTPS
- [ ] Test www.backt.io redirects to backt.io

## Phase 6: Testing & Validation (POST-DEPLOY)

### 6.1 Functionality Tests
- [ ] Landing page loads on backt.io
- [ ] All sections render correctly
  - [ ] Header with logo
  - [ ] Hero with CTA buttons
  - [ ] Features grid (6 items)
  - [ ] Before/After comparison
  - [ ] Pricing tiers (Free, $29, $99)
  - [ ] Final CTA section
  - [ ] Footer with links
- [ ] Navigation links work
  - [ ] #features scrolls to features
  - [ ] #pricing scrolls to pricing
  - [ ] /dashboard links (404 expected for now)
- [ ] Mobile responsive design
  - [ ] Test on iPhone (Safari)
  - [ ] Test on Android (Chrome)
  - [ ] Test tablet view
- [ ] Cross-browser compatibility
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

### 6.2 Performance Tests
- [ ] Run Lighthouse audit
  - [ ] Performance: 90+ score
  - [ ] Accessibility: 90+ score
  - [ ] Best Practices: 90+ score
  - [ ] SEO: 90+ score
- [ ] Check Core Web Vitals
  - [ ] LCP (Largest Contentful Paint): < 2.5s
  - [ ] FID (First Input Delay): < 100ms
  - [ ] CLS (Cumulative Layout Shift): < 0.1
- [ ] Test load time from different regions
  - [ ] US East
  - [ ] US West
  - [ ] Europe
  - [ ] Asia

### 6.3 SEO & Social
- [ ] Google Search Console
  - [ ] Add property for backt.io
  - [ ] Submit sitemap
  - [ ] Verify ownership
- [ ] Social media previews
  - [ ] Test with: https://www.opengraph.xyz/
  - [ ] Verify OpenGraph image loads
  - [ ] Check title and description
  - [ ] Test Twitter card preview
- [ ] Analytics setup
  - [ ] Enable Vercel Analytics
  - [ ] Add Google Analytics (optional)
  - [ ] Test event tracking

## Phase 7: Monitoring & Operations (ONGOING)

### 7.1 Set Up Monitoring
- [ ] Vercel Dashboard → Analytics
  - [ ] Enable Real User Monitoring
  - [ ] Check visitor metrics
  - [ ] Monitor error rate
- [ ] Supabase Dashboard
  - [ ] Check database usage
  - [ ] Monitor auth attempts
  - [ ] Review API requests
- [ ] Set up alerts
  - [ ] Vercel: Build failures
  - [ ] Supabase: High error rate
  - [ ] Custom: Traffic spikes

### 7.2 Backup & Security
- [ ] Enable Supabase daily backups (Pro plan)
- [ ] Store database password in password manager
- [ ] Save all API keys in secure vault (1Password, etc.)
- [ ] Document recovery procedures
- [ ] Test database restore process

### 7.3 Cost Monitoring
- [ ] Vercel usage dashboard
  - [ ] Bandwidth: Stay under 100GB/month (free tier)
  - [ ] Function executions
  - [ ] Build minutes
- [ ] Supabase usage dashboard
  - [ ] Database size: Under 500MB
  - [ ] Auth users: Under 50K MAU
  - [ ] API requests
- [ ] Cloudflare (domain): $32/year

## Phase 8: Week 2-4 Development (FUTURE)

### Week 2: Backend Integration
- [ ] Create backend API (Railway/Render)
- [ ] Implement backtest endpoints
- [ ] Connect frontend to API
- [ ] Add rate limiting (Upstash Redis)
- [ ] Build dashboard UI skeleton
- [ ] Implement authentication flow
- [ ] Test end-to-end backtest submission

### Week 3: Payments
- [ ] Create Stripe account
- [ ] Add products (Starter $29, Professional $99)
- [ ] Implement checkout flow
- [ ] Add subscription webhook handlers
- [ ] Build user dashboard with usage stats
- [ ] Test payment flow end-to-end
- [ ] Implement tier-based feature gating

### Week 4: Launch Preparation
- [ ] Production deployment checklist
- [ ] Set up error tracking (Sentry)
- [ ] Add email notifications (Resend)
- [ ] Create legal pages (Privacy, Terms)
- [ ] Write launch announcement
- [ ] Prepare social media posts
- [ ] Plan Product Hunt launch
- [ ] Schedule Hacker News post

## Current Status

**Completed:** Phase 1 ✅  
**Blocked:** Phase 2 (needs GitHub PAT)  
**Ready:** Phases 3-5 (automated scripts created)

**Time to Complete (with PAT):**
- Phase 2: 30 seconds (push)
- Phase 3: 3 minutes (Vercel deploy)
- Phase 4: 15 minutes (Supabase setup)
- Phase 5: 5 minutes (domain config) + 24-48hrs (DNS propagation)
- **Total active time: ~25 minutes**
- **Total elapsed time: 24-48 hours (DNS)**

## Quick Start Command (When PAT Available)

```bash
# One-liner to push and deploy:
cd /home/user/backt-web && \
GITHUB_TOKEN='your_pat_here' bash PUSH_SCRIPT.sh && \
echo "✅ Pushed! Now deploy at: https://vercel.com/new"
```

## Files Created for Deployment

- ✅ `PUSH_SCRIPT.sh` - Automated GitHub push with retry
- ✅ `vercel.json` - Vercel configuration
- ✅ `.env.production` - Production environment template
- ✅ `VERCEL_DEPLOYMENT.md` - Complete Vercel guide
- ✅ `SUPABASE_SETUP.md` - Complete Supabase guide
- ✅ `.github/workflows/ci.yml` - CI/CD pipeline
- ✅ `COMPLETE_DEPLOYMENT_CHECKLIST.md` - This file

**Everything is ready. Just need GitHub PAT to proceed.**
