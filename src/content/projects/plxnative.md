---
id: 18
title: "PlxNative"
seoTitle: "PlxNative: a fast native Plex app for LG webOS TVs"
device: "LG webOS TVs (in daily use on a 2019 LG set)"
category: tv
ai: "claude code"
evidence: public
aiRole: "Ghidra with Claude Code and Opus to reverse engineer LG's native media libraries; Claude Code, Opus, Fable and Codex for implementation, debugging, tests and review. He says the agent's code needed heavy architecture refactoring."
caveats: "Video won't play on some 2019 sets with LG's k5lp or k3lp chips in Developer Mode. Developer Mode needs renewing or LG removes the apps. Nightly builds are untested on a TV. Unofficial; not affiliated with Plex or LG."
evidenceNote: "Public project (1.1K stars) + creator account."
links:
  - { label: "repo", url: "https://github.com/GLinnik21/plx-native" }
  - { label: "site", url: "https://plxnative.com" }
  - { label: "creator post", url: "https://www.reddit.com/r/ClaudeCode/comments/1x043yp/" }
reviewed: 2026-10-28
submittedBy: unshittify
---

GLinnik21's native Plex client for LG webOS TVs draws its interface on the GPU and plays video on the TV's own decoder. On his 2019 set the profile picker loads in about 3 seconds, against about 30 in the official app.
