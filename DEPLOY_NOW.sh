#!/bin/bash
# BACKT - One-Command Complete Deployment
# Usage: GITHUB_TOKEN='your_pat' bash DEPLOY_NOW.sh

set -e

echo "🚀 BACKT Complete Deployment"
echo "════════════════════════════════════════"
echo ""

# Check for GitHub token
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ ERROR: GITHUB_TOKEN not set"
    echo ""
    echo "Please run:"
    echo "  GITHUB_TOKEN='your_github_pat' bash DEPLOY_NOW.sh"
    echo ""
    echo "Get your PAT at: https://github.com/settings/tokens/new"
    echo "Required scopes: repo (full control)"
    exit 1
fi

# Navigate to repository
cd /home/user/backt-web

echo "Step 1/4: Configuring Git credentials..."
git config credential.helper store
echo "https://jmiaie:${GITHUB_TOKEN}@github.com" > ~/.git-credentials

echo "Step 2/4: Pushing to GitHub..."
if git push -u origin claude/backt-launch-fwiPh; then
    echo "✅ Pushed successfully!"
else
    echo "❌ Push failed"
    rm -f ~/.git-credentials
    exit 1
fi

# Cleanup credentials
rm -f ~/.git-credentials
git config --unset credential.helper

echo ""
echo "✅ GitHub Push Complete!"
echo ""
echo "Step 3/4: Deploy to Vercel"
echo "─────────────────────────────────────────"
echo "1. Visit: https://vercel.com/new"
echo "2. Import: jmiaie/backt-web"
echo "3. Deploy: Click button (auto-detects Next.js)"
echo "4. Live URL: https://backt-web.vercel.app"
echo ""
echo "Step 4/4: Add Environment Variables"
echo "─────────────────────────────────────────"
echo "See: VERCEL_DEPLOYMENT.md for full guide"
echo ""
echo "🎉 BACKT is ready for production!"
echo ""
echo "Next steps:"
echo "  • Vercel deployment: 3 minutes"
echo "  • Supabase setup: 15 minutes"
echo "  • Buy backt.io: $32/year"
echo ""
