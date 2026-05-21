# BACKT - Supabase Setup Guide

## Step 1: Create Supabase Project

1. Go to https://supabase.com
2. Sign in (GitHub recommended)
3. Click "New Project"
4. Fill in:
   - **Name:** BACKT
   - **Database Password:** Generate strong password (save it!)
   - **Region:** Choose closest to users
     - US East (recommended for US): `us-east-1`
     - EU: `eu-west-1`
     - Asia Pacific: `ap-southeast-1`
   - **Pricing Plan:** Free tier
     - 500MB database
     - 50,000 monthly active users
     - 2GB bandwidth
     - 1GB file storage

5. Click "Create new project"
6. Wait 2-3 minutes for provisioning

## Step 2: Get API Keys

1. Go to Project Settings → API
2. Copy these values:

```bash
# Project URL
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co

# anon/public key (safe to expose in frontend)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# service_role key (NEVER expose in frontend!)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. Add these to:
   - **Vercel:** Environment Variables
   - **Local:** `.env.local` file

## Step 3: Configure Authentication

### Enable OAuth Providers

#### Google OAuth
1. Supabase Dashboard → Authentication → Providers
2. Enable "Google"
3. Get credentials from Google Cloud Console:
   - Go to https://console.cloud.google.com
   - Create project or select existing
   - APIs & Services → Credentials
   - Create OAuth 2.0 Client ID
   - Application type: Web application
   - Authorized redirect URIs: 
     ```
     https://xxxxxxxxxxxxx.supabase.co/auth/v1/callback
     ```
   - Copy Client ID and Client Secret
4. Paste into Supabase Google provider settings
5. Save

#### GitHub OAuth
1. Enable "GitHub" in Supabase
2. Get credentials from GitHub:
   - Go to https://github.com/settings/developers
   - New OAuth App
   - Application name: BACKT
   - Homepage URL: https://backt.io
   - Callback URL:
     ```
     https://xxxxxxxxxxxxx.supabase.co/auth/v1/callback
     ```
   - Register application
   - Copy Client ID and generate Client Secret
3. Paste into Supabase GitHub provider
4. Save

#### Microsoft OAuth
1. Enable "Azure (Microsoft)" in Supabase
2. Get credentials from Azure Portal:
   - Go to https://portal.azure.com
   - Azure Active Directory → App registrations
   - New registration
   - Name: BACKT
   - Redirect URI:
     ```
     https://xxxxxxxxxxxxx.supabase.co/auth/v1/callback
     ```
   - Copy Application (client) ID
   - Certificates & secrets → New client secret
   - Copy secret value
3. Paste into Supabase Azure provider
4. Save

### Configure Auth Settings
1. Authentication → Settings
2. Site URL: `https://backt.io` (or backt-web.vercel.app initially)
3. Redirect URLs (allowlist):
   ```
   https://backt.io/**
   https://backt-web.vercel.app/**
   https://*.backt-web.vercel.app/**
   http://localhost:3000/**
   ```
4. Email Auth: Disable (using OAuth only)
5. Confirm email: Disable (OAuth handles verification)

## Step 4: Create Database Schema

### Users Table (Auto-created by Supabase Auth)
- Already exists at `auth.users`
- No changes needed initially

### Create Subscriptions Table
```sql
-- Run in SQL Editor (Supabase Dashboard → SQL Editor)

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  tier text not null check (tier in ('free', 'starter', 'professional')),
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  status text not null default 'active' check (status in ('active', 'cancelled', 'past_due')),
  backtests_used integer not null default 0,
  backtests_limit integer not null,
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable RLS
alter table public.subscriptions enable row level security;

-- Users can read their own subscription
create policy "Users can read own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- Create index
create index subscriptions_user_id_idx on public.subscriptions(user_id);
create index subscriptions_stripe_customer_id_idx on public.subscriptions(stripe_customer_id);
```

### Create Backtests Table
```sql
create table public.backtests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  name text not null,
  strategy_config jsonb not null,
  results jsonb,
  status text not null default 'pending' check (status in ('pending', 'running', 'completed', 'failed')),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

-- Enable RLS
alter table public.backtests enable row level security;

-- Users can manage their own backtests
create policy "Users can read own backtests"
  on public.backtests for select
  using (auth.uid() = user_id);

create policy "Users can create own backtests"
  on public.backtests for insert
  with check (auth.uid() = user_id);

-- Create indexes
create index backtests_user_id_idx on public.backtests(user_id);
create index backtests_created_at_idx on public.backtests(created_at desc);
```

## Step 5: Set up Storage (Optional - for later)

### Create Storage Bucket
```sql
-- Run in SQL Editor
insert into storage.buckets (id, name, public)
values ('backtest-results', 'backtest-results', false);

-- RLS Policy
create policy "Users can access own backtest results"
  on storage.objects for select
  using (
    bucket_id = 'backtest-results' 
    and auth.uid()::text = (storage.foldername(name))[1]
  );
```

## Step 6: Test Connection

### Create Test File
```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test connection
export async function testConnection() {
  const { data, error } = await supabase
    .from('subscriptions')
    .select('count')
    .single()
  
  if (error) console.error('Connection error:', error)
  else console.log('✅ Supabase connected')
}
```

### Run Test
```bash
npm run dev
# Open http://localhost:3000
# Check console for "✅ Supabase connected"
```

## Step 7: Free Tier Limits

**Monitor usage in Dashboard:**
- Database: 500MB (expandable)
- Auth users: 50,000 MAU
- Storage: 1GB
- Bandwidth: 2GB/month
- API requests: Unlimited on free tier

**When to upgrade ($25/month Pro):**
- Database > 500MB
- Users > 50,000 MAU
- Storage > 1GB
- Need daily backups
- Need read replicas
- Want priority support

## Troubleshooting

### "Invalid API key"
- Check NEXT_PUBLIC_SUPABASE_URL is correct
- Verify NEXT_PUBLIC_SUPABASE_ANON_KEY matches dashboard
- Ensure no extra spaces in .env.local

### OAuth redirect error
- Verify callback URL exactly matches
- Check Site URL in Supabase settings
- Confirm redirect URLs in allowlist

### RLS policy blocks query
- Check user is authenticated: `supabase.auth.getUser()`
- Verify RLS policy conditions
- Test with service_role key (backend only!)

### Database connection failed
- Project still provisioning (wait 2-3 min)
- Check project status in dashboard
- Verify region is selected

## Security Best Practices

✅ **DO:**
- Use `anon` key in frontend
- Use `service_role` key only in backend
- Enable RLS on all tables
- Test RLS policies thoroughly
- Use prepared statements
- Validate input on backend

❌ **DON'T:**
- Expose `service_role` key in frontend
- Disable RLS in production
- Trust client-side validation
- Store sensitive data unencrypted
- Skip input validation

## Next Steps

1. ✅ Supabase project created
2. ✅ API keys added to Vercel
3. ✅ OAuth providers configured
4. ✅ Database schema created
5. → Test auth flow in development
6. → Deploy to production
7. → Monitor usage in dashboard
