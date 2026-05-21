#!/bin/bash
# BACKT Deployment Script
# Automated push to GitHub with retry logic

set -e

REPO_DIR="/home/user/backt-web"
GITHUB_REPO="github.com/jmiaie/backt-web"
BRANCH="claude/backt-launch-fwiPh"

cd "$REPO_DIR"

echo "🚀 BACKT Deployment Script"
echo "═══════════════════════════════════════"
echo "Repository: $GITHUB_REPO"
echo "Branch: $BRANCH"
echo "Commits: $(git rev-list --count HEAD)"
echo ""

# Check if GITHUB_TOKEN is set
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ GITHUB_TOKEN not set"
    echo ""
    echo "Please set your GitHub Personal Access Token:"
    echo "  export GITHUB_TOKEN='your_token_here'"
    echo "  bash PUSH_SCRIPT.sh"
    echo ""
    echo "Or run with token inline:"
    echo "  GITHUB_TOKEN='your_token' bash PUSH_SCRIPT.sh"
    exit 1
fi

echo "✅ Token found, configuring git..."

# Configure git to use token
git config --local credential.helper store
echo "https://jmiaie:${GITHUB_TOKEN}@github.com" > ~/.git-credentials

# Push with retry logic (network errors only)
MAX_RETRIES=4
RETRY_COUNT=0

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    RETRY_COUNT=$((RETRY_COUNT + 1))
    echo "Push attempt $RETRY_COUNT/$MAX_RETRIES..."

    if git push -u origin "$BRANCH" 2>&1; then
        echo ""
        echo "✅ Push successful!"
        echo ""
        echo "📋 Next Steps:"
        echo "1. Verify at: https://$GITHUB_REPO"
        echo "2. Deploy to Vercel: https://vercel.com/new"
        echo "3. Import jmiaie/backt-web"
        echo "4. Framework: Next.js (auto-detected)"
        echo "5. Deploy (takes ~2 minutes)"
        echo ""
        echo "🌐 After Vercel Deploy:"
        echo "- Live URL: https://backt-web.vercel.app"
        echo "- Buy backt.io at Cloudflare (~$32/year)"
        echo "- Add custom domain in Vercel settings"
        echo ""

        # Cleanup credentials
        rm -f ~/.git-credentials
        git config --local --unset credential.helper

        exit 0
    else
        ERROR_CODE=$?
        if [ $RETRY_COUNT -lt $MAX_RETRIES ]; then
            WAIT_TIME=$((RETRY_COUNT * 2))
            echo "❌ Attempt $RETRY_COUNT failed, waiting ${WAIT_TIME}s..."
            sleep $WAIT_TIME
        fi
    fi
done

echo ""
echo "❌ Push failed after $MAX_RETRIES attempts"
echo "Please check:"
echo "1. Token has 'repo' permissions"
echo "2. Network connectivity"
echo "3. Repository access (github.com/jmiaie/backt-web)"

# Cleanup
rm -f ~/.git-credentials
git config --local --unset credential.helper 2>/dev/null || true

exit 1
