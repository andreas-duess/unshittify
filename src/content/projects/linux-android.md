---
id: 99
title: "linux-android"
seoTitle: "linux-android: turn an old Android phone into a Linux desktop or Home Assistant server"
device: "Old arm64 Android phones (Android 7+, 3 GB+ RAM)"
category: computer
ai: "claude (commits)"
evidence: public
aiRole: "Recent commits carry Co-Authored-By: Claude trailers. Termux and the desktop environments it installs are not AI-built."
caveats: "Use Termux from F-Droid; the Play Store build is outdated. Needs 5 to 10 GB free and 4 GB+ RAM for KDE Plasma. GPU acceleration is best on Snapdragon; Mali phones run slower. A phone left running as a server keeps its battery charged constantly, so watch for swelling."
evidenceNote: "Public MIT repo, about 3,800 stars, with a video walkthrough on a OnePlus 5T."
links:
  - { label: "repo", url: "https://github.com/mayukh4/linux-android" }
  - { label: "video", url: "https://youtu.be/tYm2rQpkOcg" }
  - { label: "termux (f-droid)", url: "https://f-droid.org/en/packages/com.termux/" }
reviewed: 2026-11-04
submittedBy: unshittify
---

A phone that stopped getting updates still has a fast chip and plenty of RAM. mayukh4's scripts use Termux and Termux-X11 to install a GPU-accelerated Linux desktop (XFCE, KDE Plasma, LXQt or MATE) with no root and no PC. A second script turns the phone into a Home Assistant Core server.
