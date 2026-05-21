# QuantEdge Frontend - Deployment Instructions

## ✅ Completed

- [x] Next.js 14 application with TypeScript and Tailwind CSS
- [x] Complete landing page with professional UI
- [x] All components created (Header, Hero, Features, Comparison, Pricing, CTA, Footer)
- [x] SEO metadata and OpenGraph configuration
- [x] Responsive dark theme design
- [x] Git repository initialized and committed to branch `claude/landing-page-fwiPh`

## 🚀 Next Steps (5-10 minutes)

### 1. Create GitHub Repository
```bash
# On GitHub.com, create new public repository:
# Name: quantedge-web
# Description: QuantEdge: Professional quantitative trading research platform
# Public: Yes
# Don't initialize with README (we already have one)
```

### 2. Push Code to GitHub
```bash
cd /home/user/quantedge-web
git remote add origin https://github.com/jmiaie/quantedge-web.git
git push -u origin claude/landing-page-fwiPh
```

### 3. Deploy to Vercel (Free Tier)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import `jmiaie/quantedge-web`
5. Framework: Next.js (auto-detected)
6. Click "Deploy"

**Deploy time: ~2 minutes**

### 4. Setup Supabase (Free Tier - 500MB, 50K users)
1. Go to https://supabase.com
2. Create new project
3. Choose region closest to users
4. Copy these values:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon/public key` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role key` → `SUPABASE_SERVICE_ROLE_KEY`

### 5. Configure Environment Variables in Vercel
In Vercel project settings → Environment Variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

Redeploy after adding environment variables.

### 6. Configure OAuth Providers (Week 1, Day 3-4)

#### Google OAuth
1. Go to https://console.cloud.google.com
2. Create new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `https://your-project.supabase.co/auth/v1/callback`
6. Copy Client ID and Secret to Supabase → Authentication → Providers → Google

#### GitHub OAuth
1. Go to https://github.com/settings/developers
2. New OAuth App
3. Callback URL: `https://your-project.supabase.co/auth/v1/callback`
4. Copy Client ID and Secret to Supabase → Authentication → Providers → GitHub

#### Microsoft OAuth
1. Go to https://portal.azure.com
2. Azure Active Directory → App registrations → New registration
3. Redirect URI: `https://your-project.supabase.co/auth/v1/callback`
4. Copy Application ID and Secret to Supabase → Authentication → Providers → Azure

### 7. Buy Domain (Optional but Recommended)
**Recommended: Cloudflare**
- quantedge.io: ~$32/year at Cloudflare
- Setup: Vercel → Project Settings → Domains → Add quantedge.io

**Alternatives:**
- Namecheap: ~$35/year
- Google Domains (now Squarespace): ~$40/year

## 📊 Current Status

**Local Development:**
- Repository: `/home/user/quantedge-web`
- Branch: `claude/landing-page-fwiPh`
- Files: 27 files, 7,637 insertions
- Commit: `847006c` - "feat: Create QuantEdge landing page with professional UI"

**Live URL (after deploy):**
- Vercel: `https://quantedge-web.vercel.app` (automatic)
- Custom: `https://quantedge.io` (after domain setup)

## 🎯 Timeline

- **Week 1, Day 1-2:** ✅ Landing page (COMPLETE)
- **Week 1, Day 3-4:** Deploy + OAuth setup (15-30 min)
- **Week 1, Day 5-7:** Dashboard UI skeleton
- **Week 2:** Backend API + basic backtest integration
- **Week 3:** Stripe payments + tier gating
- **Week 4:** Production polish + launch

## 💰 Cost Breakdown

**Free Tier Usage:**
- Vercel: Free (100GB bandwidth, unlimited personal projects)
- Supabase: Free (500MB database, 50K users, 2GB bandwidth)
- Next.js hosting: $0/month
- OAuth providers: Free
- SSL/HTTPS: Free (automatic)

**Paid (Optional):**
- Domain: $32/year (~$2.67/month)
- Backend API (Railway): $5/month credit + usage
- **Total initial cost: ~$8/month**

## 🔍 Test the Landing Page Locally

```bash
cd /home/user/quantedge-web
npm install
npm run dev
```

Open http://localhost:3000 to see the landing page.

## 📝 Notes

- All environment variables are in `.env.local.example`
- Copy to `.env.local` and fill in your values for local development
- Never commit `.env.local` (already in `.gitignore`)
- Supabase automatically handles user sessions and JWT tokens
- Rate limiting will be added in Week 2 with Upstash Redis
