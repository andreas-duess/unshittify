---
id: 81
title: "Epilog Studio"
seoTitle: "A native macOS driver and app for Epilog Zing laser engravers"
device: "Epilog Zing 16 and 24 laser engravers"
category: make
ai: "claude"
evidence: public
aiRole: "The builder on HN: he used Claude to make a macOS driver for an engraver that only ever worked with Windows. Claude is co-author on 27 of 55 commits."
caveats: "The installer isn't notarised. The protocol code started as a port of LibLaserCut."
evidenceNote: "Public code with signed releases + HN comment."
links:
  - { label: "repo", url: "https://github.com/leftouterjoins/EpilogDriver" }
  - { label: "hn", url: "https://news.ycombinator.com/item?id=49355548" }
reviewed: 2026-10-31
submittedBy: unshittify
---

The Zing only ever worked from Windows. This project adds a native macOS print driver and a layout-and-engrave app, so the laser runs straight from a Mac.
