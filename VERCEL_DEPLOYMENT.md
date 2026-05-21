# BACKT - Vercel Deployment Guide

## Prerequisites
- ✅ Code pushed to GitHub (github.com/jmiaie/backt-web)
- ✅ Vercel account (free tier)
- ✅ GitHub authentication configured on Vercel

## Step 1: Import Project to Vercel

### Option A: Deploy Button (Fastest)
1. Click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jmiaie/backt-web)
2. Connect your GitHub account if needed
3. Select repository: `jmiaie/backt-web`
4. Click "Deploy"

### Option B: Manual Import
1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Choose `jmiaie/backt-web`
4. Framework Preset: **Next.js** (auto-detected)
5. Root Directory: `./` (default)
6. Build Command: `npm run build` (auto-detected)
7. Output Directory: `.next` (auto-detected)
8. Install Command: `npm install` (auto-detected)

## Step 2: Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables, add:

### Required for Initial Deploy
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Optional (Add Later)
```
NEXT_PUBLIC_API_URL=https://api.backt.io
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
```

**Important:** 
- Add variables to **Production**, **Preview**, and **Development** environments
- Click "Save" after each variable
- Redeploy after adding variables

## Step 3: Deploy

### First Deploy
- Click "Deploy" button
- Build time: ~2-3 minutes
- Vercel will:
  1. Clone repository
  2. Install dependencies (npm install)
  3. Run TypeScript checks
  4. Build Next.js app (npm run build)
  5. Deploy to edge network
  6. Generate deployment URL

### Deployment URLs
- **Production:** `https://backt-web.vercel.app`
- **Preview (branches):** `https://backt-web-{branch}.vercel.app`
- **Each commit:** Unique preview URL

## Step 4: Custom Domain (backt.io)

### Buy Domain at Cloudflare (Recommended)
1. Go to https://www.cloudflare.com/products/registrar/
2. Search for `backt.io`
3. Purchase (~$32/year)
4. Domain status: Available (verified)

### Add Domain to Vercel
1. Vercel Dashboard → Settings → Domains
2. Add `backt.io` and `www.backt.io`
3. Vercel provides DNS records:
   ```
   A     @      76.76.21.21
   CNAME www    cname.vercel-dns.com
   ```
4. Add these records in Cloudflare DNS
5. Wait 24-48 hours for propagation (usually faster)

### SSL Certificate
- ✅ Automatic via Let's Encrypt
- ✅ Auto-renewal every 90 days
- ✅ HTTPS enforced by default

## Step 5: Verify Deployment

### Check Build Output
```bash
# Expected output:
✓ Compiled successfully in 6.8s
✓ Generating static pages (4/4)
✓ Finalizing page optimization
```

### Test Live Site
1. Visit: `https://backt-web.vercel.app`
2. Check all pages load:
   - ✅ Landing page (/)
   - ✅ Features section (#features)
   - ✅ Pricing section (#pricing)
3. Test responsiveness (mobile/desktop)
4. Check console for errors (F12)

### Performance Metrics
- Lighthouse Score: Target 90+ 
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## Step 6: Continuous Deployment

### Automatic Deployments
- ✅ Every push to `main` → Production deploy
- ✅ Every push to branches → Preview deploy
- ✅ Every pull request → Preview URL in PR

### Manual Deploy
1. Vercel Dashboard → Deployments
2. Click "Redeploy" on any previous deployment
3. Or push to GitHub to trigger automatic deploy

## Step 7: Monitoring & Analytics

### Enable Vercel Analytics
1. Dashboard → Analytics → Enable
2. Add to code (optional - auto-enabled for Vercel):
   ```typescript
   import { Analytics } from '@vercel/analytics/react'
   export default function RootLayout({ children }) {
     return <html><body>{children}<Analytics /></body></html>
   }
   ```

### Monitor Performance
- Real User Monitoring (RUM)
- Core Web Vitals
- Page load times
- Error tracking

## Troubleshooting

### Build Fails
```bash
# Check locally first:
npm run build

# Common issues:
- TypeScript errors → Run: npx tsc --noEmit
- Missing dependencies → Run: npm install
- Environment variables missing → Check Vercel settings
```

### Preview Deploys Not Working
- Check branch protection rules
- Verify Vercel GitHub integration
- Check deployment settings in vercel.json

### Custom Domain Not Working
- Verify DNS records in Cloudflare
- Check domain verification in Vercel
- Wait 24-48 hours for propagation
- Use `dig backt.io` to check DNS

### Performance Issues
- Enable Vercel Edge Network
- Optimize images (use next/image)
- Enable compression in next.config.ts
- Check bundle size: npm run build

## Production Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables configured
- [ ] First deploy successful
- [ ] Custom domain purchased (backt.io)
- [ ] DNS configured and propagated
- [ ] SSL certificate active
- [ ] Landing page loads correctly
- [ ] All components render properly
- [ ] Mobile responsive design verified
- [ ] Lighthouse score > 90
- [ ] Analytics enabled
- [ ] Error monitoring setup

## Cost Breakdown

### Vercel Free Tier Includes:
- ✅ Unlimited personal projects
- ✅ 100GB bandwidth/month
- ✅ Serverless function executions: 100GB-hrs
- ✅ 1000 image optimizations/month
- ✅ Automatic HTTPS/SSL
- ✅ DDoS protection
- ✅ Analytics (basic)

### When to Upgrade to Pro ($20/month):
- Traffic > 100GB/month
- Need team collaboration
- Custom authentication
- Advanced analytics
- Password protection
- Priority support

### Total Monthly Cost (Initial):
- Vercel: **$0** (free tier)
- Domain: **$2.67** (backt.io @ $32/year)
- **Total: ~$3/month**

## Next Steps After Deploy

1. **Week 1, Day 5-7:** Dashboard UI skeleton
2. **Week 2:** Backend API integration
3. **Week 3:** Stripe payments
4. **Week 4:** Production polish & launch

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Deployment Issues:** https://vercel.com/support
