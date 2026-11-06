---
id: 34
title: "STRIDE"
seoTitle: "STRIDE: run a NordicTrack treadmill without the iFit subscription"
device: "NordicTrack C 1750 treadmill (Gen 6 console)"
category: home
ai: "claude code"
evidence: public
aiRole: "The creator says about 90% was coded with Claude Code, which also helped decode the FitPro serial protocol between console and motor board."
caveats: "Confirmed on one machine; other Gen 6 NordicTrack and ProForm consoles are likely but untested, and reports say the Gen 7 update closes the route. Likely voids the console warranty. A factory reset restores iFit. The physical safety key still cuts the motor."
evidenceNote: "Public repo with signed releases + creator write-up."
repo: "keranm/strideApp"
links:
  - { label: "repo", url: "https://github.com/keranm/strideApp" }
  - { label: "write-up", url: "https://theidea.works/blog/jailbreak-nordictrack-treadmill/" }
reviewed: 2026-10-29
submittedBy: unshittify
---

The treadmill's own screen nagged for an iFit subscription. keranm replaced the console app: belt and incline run with no login, no subscription and no internet, plus hill-profile walks, per-person profiles and optional Home Assistant control.
