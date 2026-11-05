---
id: 92
title: "Asahi Linux"
seoTitle: "Asahi Linux: Fedora on Apple Silicon M1 and M2 Macs"
device: "Apple Silicon Macs: M1 and M2 series, initial M3 support"
category: computer
ai: "none documented"
evidence: public
aiRole: "No AI use documented."
caveats: "All M1 and M2 MacBook, Mac mini, Mac Pro, Mac Studio and iMac models are supported; M3, M3 Pro and M3 Max have initial support only, and M4 is not listed. Gaps remain, e.g. no MagSafe on the M1 MacBook Air, no ProMotion or HDR on M3 MacBook Pros, no GPU cards in the Mac Pro. Check the feature table for your model. Installs alongside macOS."
evidenceNote: "Public code, official device-support table. Volunteer project since 2021."
links:
  - { label: "site", url: "https://asahilinux.org/" }
  - { label: "device support", url: "https://asahilinux.org/fedora/#device-support" }
  - { label: "docs", url: "https://asahilinux.org/docs/" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Apple Silicon Macs ship with macOS and no vendor support for anything else. Asahi Linux reverse-engineered the hardware, GPU included, and ships Fedora Asahi Remix, installed from macOS with one command. Audio, webcams and graphics acceleration work.

It covers the Macs [Omarchy](/p/omarchy/) doesn't: Omarchy targets older Intel Macs, Asahi the M1 and M2 generations.
