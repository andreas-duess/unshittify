---
id: 23
title: "OpenSnek"
seoTitle: "OpenSnek: configure Razer mice on macOS without Synapse"
device: "Razer Basilisk V3 X HyperSpeed and other Razer mice, on macOS"
category: computer
ai: "codex"
evidence: public
aiRole: "Coding agents, mostly Codex, reverse engineered the Bluetooth spec: he captured packets while Razer's Windows software ran, then fed each capture to Codex to update the spec. He says he likely wouldn't have attempted it without one."
caveats: "Support varies by device and connection; several devices are only contributor-validated. On some Bluetooth devices, settings reset when the mouse powers off."
evidenceNote: "Public project + Show HN post."
repo: "gh123man/opensnek"
links:
  - { label: "repo", url: "https://github.com/gh123man/opensnek" }
  - { label: "show hn", url: "https://news.ycombinator.com/item?id=47541717" }
reviewed: 2026-10-28
submittedBy: unshittify
---

Razer offers no Mac software for this mouse. gh123man built a native macOS app that sets DPI, lighting, button remaps and onboard profiles over Bluetooth or USB.
