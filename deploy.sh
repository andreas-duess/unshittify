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
  prod)    npx wrangler deploy ;;
  *) echo "usage: $0 preview|prod"; exit 1 ;;
esac
