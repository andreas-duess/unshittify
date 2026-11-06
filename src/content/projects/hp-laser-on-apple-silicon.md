---
id: 10
title: "HP Laser on Apple Silicon"
seoTitle: "HP Laser 100 printers on Apple Silicon Macs: open-source driver fix"
device: "HP Laser 100-series printers"
category: make
ai: "claude code"
evidence: public
aiRole: "Claude Code assisted. The fix adapts existing SpliX code rather than writing a driver from scratch."
caveats: "Follow the exact model and macOS list in the repo. It fixes Mac compatibility. Ink and subscriptions are untouched."
evidenceNote: "Public project with install and compatibility docs."
repo: "Kuberwastaken/hp-laser-1008a-macos"
links:
  - { label: "repo", url: "https://github.com/Kuberwastaken/hp-laser-1008a-macos" }
reviewed: 2026-10-28
submittedBy: unshittify
---

A patched SpliX printing stack plus a USB helper gets HP Laser 100-series printers working on Apple Silicon Macs.
