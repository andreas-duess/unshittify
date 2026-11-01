---
id: 85
title: "Stories Client"
seoTitle: "Stories Client: use Ray-Ban Stories glasses without the Meta AI app"
device: "Ray-Ban Stories (2021, first generation)"
category: audio
ai: "claude code"
evidence: experimental
aiRole: "The README says Claude Code was used, with Opus 4.6, 4.7, 4.8 and 5. It adds that Fable refuses to work on the project."
caveats: "You still need the Meta AI app once: the glasses only trust a key Meta's servers issue at first pairing, and you have to pull that key off your phone with a debugging tool. The builder calls that step work in progress. The newer Ray-Ban Meta glasses aren't supported. Meta still supports the Stories; this is about privacy and the app, not a dead cloud. Not affiliated with Meta or Ray-Ban."
evidenceNote: "Public code + HN post."
links:
  - { label: "repo", url: "https://github.com/KonradIT/storiesclient" }
  - { label: "hn", url: "https://news.ycombinator.com/item?id=49575233" }
reviewed: 2026-11-01
submittedBy: unshittify
---

Meta turned the glasses' companion app into Meta AI, with a mandatory account, an AI video feed and paywalled features. Konrad Iturbe reverse-engineered the glasses' encrypted protocol and wrote an Android app that lists, downloads and deletes photos and video and shows battery and storage, with no Meta app or account in the loop.
