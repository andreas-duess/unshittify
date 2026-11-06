#!/bin/bash
# Store the GitHub token the worker's hourly refresh uses, for the live site
# and the preview. Prompts for the token, so it never lands in shell history.
# Token: github.com/settings/personal-access-tokens/new, fine-grained,
# "Public repositories (read-only)", no other permissions.
set -euo pipefail
cd "$(dirname "$0")/.."
export CLOUDFLARE_API_TOKEN="$(cat ~/.config/secrets/CLOUDFLARE_UNSHITTIFY_API_TOKEN)"
export CLOUDFLARE_ACCOUNT_ID=881f712a188eb3e93945c5afbff783e3
read -rsp "GitHub token: " T; echo
printf '%s' "$T" | npx wrangler secret put GITHUB_TOKEN
printf '%s' "$T" | npx wrangler secret put GITHUB_TOKEN --env preview
