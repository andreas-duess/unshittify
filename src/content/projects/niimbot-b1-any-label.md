---
id: 78
title: "Niimbot B1, any label"
seoTitle: "Niimbot B1 firmware patch: full print quality on third-party labels"
device: "Niimbot B1 label printer (firmware 5.22 only)"
category: make
ai: "claude code"
evidence: public
aiRole: "Claude reverse-engineered the firmware and wrote the patch. Both commits carry a Claude co-author line; the builder later noted that a fallback model, Opus 4.8, did the reverse-engineering."
caveats: "Firmware 5.22 only; flashing across major versions bricks the printer. Ships prebuilt binaries. One commenter says the label tag mainly reports label size."
evidenceNote: "Public code (131 stars) + Reddit post."
repo: "ThreeDaPrint/niimbot"
links:
  - { label: "repo", url: "https://github.com/ThreeDaPrint/niimbot" }
  - { label: "reddit", url: "https://www.reddit.com/r/ClaudeCode/comments/1wkrcmp/" }
reviewed: 2026-10-31
submittedBy: unshittify
---

The B1 reads a tag on Niimbot's own label rolls and prints lighter on anything else. The usual workaround was keeping an empty branded roll nearby. This patch prints at full darkness on any label, and connects the density setting to the print head, which the stock firmware never did.
