---
id: 40
title: "SXS K811 replacement app"
seoTitle: "Replacement software for the SXS K811 macro pad"
device: "SXS K811 macro pad (Windows)"
category: computer
ai: "claude code"
evidence: report
aiRole: "The creator pointed Claude Code at the installed vendor app, tested on the real device and decided what to build; Claude did the reverse engineering and wrote the code. The write-up documents one Claude error that device testing caught."
caveats: "No public code yet; the protocol format is in the write-up. Windows only. The bottom media button cannot be remapped, and some macro and lighting options are not fully tested."
evidenceNote: "Detailed creator write-up."
links:
  - { label: "write-up", url: "https://hazrien.com/articles/rebuilding-my-macro-pad-software" }
reviewed: 2026-10-29
submittedBy: unshittify
---

The vendor app only worked sometimes. Hazrien's replacement handles lighting, key binds and macros, confirms every change with the pad, and adds app-aware keys that run different actions depending on the program in front.
