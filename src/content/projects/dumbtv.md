---
id: 21
title: "dumbtv"
seoTitle: "dumbtv: remove ads and tracking from Fire TV without root"
device: "Amazon Fire TV Edition TVs and Fire TV sticks (tested on Insignia and Toshiba sets)"
category: tv
ai: "coding agent"
evidence: public
aiRole: "Built to be run by a coding agent (Claude Code, Codex, Cursor, Gemini) that follows the repo's agent instructions. The creator's first post credits Claude or DeepSeek."
caveats: "Amazon-protected packages can be blocked but not disabled. YouTube ads are not blocked. A few users reported bricked or half-finished sets; a factory reset removes everything dumbtv did. Not affiliated with Amazon."
evidenceNote: "Public project (about 2,000 stars), owner reports from about twenty TVs and sticks, press coverage."
repo: "humblemuzzu/dumbtv"
links:
  - { label: "repo", url: "https://github.com/humblemuzzu/dumbtv" }
  - { label: "creator post", url: "https://x.com/DevMuzzammil/status/2111595814099591535" }
  - { label: "techcrunch", url: "https://techcrunch.com/2026/10/19/people-are-using-ai-to-make-their-smart-tvs-dumb-again/" }
reviewed: 2026-11-05
submittedBy: unshittify
---

Muzzammil Yasin Sabuwala's Fire TV Edition set had 129 MB of free memory and a home screen of mostly ads. A coding agent cleaned it up over ADB. dumbtv packages that cleanup with an undo for every step, its own home screen and an on-device DNS filter.
