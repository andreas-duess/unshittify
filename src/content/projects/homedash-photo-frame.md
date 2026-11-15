---
id: 160
title: "HomeDash"
seoTitle: "HomeDash: a cheap Android photo frame made into a locked-down wall display"
device: "Humblestead 10.1\" Digital Picture Frame (PF1007), Allwinner A33, Android 6.0.1"
category: tv
ai: "claude code"
evidence: public
aiRole: "From the builder's write-up: \"Claude Code drove ADB and wrote the kiosk app while I made the calls.\" He says it was his first use of an agentic coding tool on hardware. All 19 commits carry a Co-Authored-By trailer for Claude Opus 5.5."
caveats: "One unit, one firmware build. The README says to treat the frame as untrusted for its whole life, even after cleaning: Android 6.0.1 with a 2016 security patch stays, and the kiosk's browser engine (GeckoView 143, the last for Android 6) gets no more security updates. Network isolation is part of the build: guest WiFi, a read-only display key and a wall adapter. Install the kiosk before disabling the vendor launcher, or the frame boots to nothing. The frame's own dd wraps at 2 GiB, so the backup needs toybox dd. The kiosk is built for the builder's own family planner; you supply your own address at build time. The repo is not taking contributions."
evidenceNote: "Public code and write-up, MIT, 1 star, 19 commits on 10 November 2026. Submitted by the builder."
repo: "timotaysci/HomeDash"
links:
  - { label: "repo", url: "https://github.com/timotaysci/HomeDash" }
  - { label: "builder's write-up", url: "https://timothyjohnsonsci.com/writing/2026-11-06-photo-frame-wall-display" }
reviewed: 2026-11-14
submittedBy: unshittify
---

Timothy Johnson wanted a cheap Android photo frame on the wall showing his family's planner. As shipped it was not safe to put on a home network: the vendor's photo app, which is also the launcher, connects to a vendor server that can send root commands, any app can become root, and the browser dates from 2015. He backed up the whole firmware, disabled the vendor launcher, update service and factory test apps, and took root away from apps. A kiosk app he wrote on a current browser engine is now the home screen. It opens only the planner, pairs with a read-only key instead of an account, and waits for the clock to sync after a power cut so the login survives.
