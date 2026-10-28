#!/bin/bash
# Usage: ./deploy.sh preview   -> unshittify-preview.<subdomain>.workers.dev
#        ./deploy.sh prod      -> unshittify.dev
set -euo pipefail
cd "$(dirname "$0")"
export CLOUDFLARE_API_TOKEN="$(cat ~/.config/secrets/CLOUDFLARE_UNSHITTIFY_API_TOKEN)"
export CLOUDFLARE_ACCOUNT_ID=881f712a188eb3e93945c5afbff783e3
npm run build
case "${1:-}" in
  preview) npx wrangler deploy --env preview ;;
  prod)
    npx wrangler deploy
    # Tell IndexNow engines (Bing, Yandex, Seznam, Naver) every URL in the sitemap.
    KEY=$(cat public/*.txt 2>/dev/null | grep -E '^[0-9a-f]{32}$' | head -1)
    URLS=$(grep -o '<loc>[^<]*</loc>' dist/sitemap-0.xml | sed 's#</*loc>##g' | python3 -c 'import sys,json;print(json.dumps([l.strip() for l in sys.stdin if l.strip()]))')
    curl -s -o /dev/null -w "indexnow %{http_code}\n" -H 'content-type: application/json' https://api.indexnow.org/indexnow \
      -d "{\"host\":\"unshittify.dev\",\"key\":\"$KEY\",\"keyLocation\":\"https://unshittify.dev/$KEY.txt\",\"urlList\":$URLS}"
    ;;
  *) echo "usage: $0 preview|prod"; exit 1 ;;
esac
