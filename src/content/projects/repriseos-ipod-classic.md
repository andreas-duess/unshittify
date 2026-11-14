---
id: 153
title: "RepriseOS"
seoTitle: "RepriseOS: new features for Apple's own iPod Classic firmware"
device: "Apple iPod Classic 6G, 6.5G and 7G"
category: audio
ai: "claude (commits)"
evidence: public
aiRole: "Neither README mentions AI. 5 of the latest 100 commits in osos-lab carry a Co-Authored-By trailer for Claude Opus 5.5. None of the installer repo's 40 commits do."
caveats: "The owner must supply Apple's firmware file iPod_38.2.0.5.ipsw; the installer applies the patches to it. The README says the release bundle is built \"without Apple firmware inputs\" and contains \"compiled patches, assembly recipes, the NOR installer, and the USB helper\"; the v0.3.1 package is under 1 MB. Installation goes through DFU mode, uses the wInd3x BootROM exploit and installs a patched Rockbox bootloader; the installer backs up the iPod's NOR and SysCfg first. Holding Menu at boot starts Apple's OS. FAT32 storage is required. The README says not to copy a personalised build between devices. The game SDK, Doom and NES ports are unfinished. Version 0.3.1."
evidenceNote: "Public code, GPL-3.0, about 90 stars, repo created September 2026, release v0.3.1 on 3 November 2026."
repo: "lgreitis/osos-lab"
links:
  - { label: "repo", url: "https://github.com/lgreitis/osos-lab" }
  - { label: "installer", url: "https://github.com/lgreitis/repriseos-installer" }
  - { label: "site", url: "https://repriseos.com" }
reviewed: 2026-11-14
submittedBy: unshittify
---

lgreitis's RepriseOS patches Apple's original iPod Classic firmware, version 2.0.5, and keeps its interface and playback system. It adds a five-band graphic EQ, Play Next and Play Last, Album Artists browsing, a dark mode, clicker output options and Apple's EU Volume Limit setting with full volume when it is off. A desktop installer for Windows, macOS and Linux builds and installs it from the owner's own copy of Apple's firmware file.
