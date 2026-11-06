---
id: 75
title: "handycam-rs"
seoTitle: "A Linux driver for Sony Handycam USB streaming, written with Codex"
device: "Sony DCR-HC24 Handycam (USB streaming)"
category: make
ai: "codex"
evidence: public
aiRole: "The builder on HN: he used Codex to reverse-engineer the proprietary Sony USB protocol and build the driver, never having done that or used Rust before."
caveats: "Only the HC24 is tested. USB streaming is 320×240; FireWire is still better for archiving tapes. Linux only."
evidenceNote: "Public code + write-up in the repo + HN comment."
repo: "alexnorton/handycam-rs"
links:
  - { label: "repo", url: "https://github.com/alexnorton/handycam-rs" }
  - { label: "hn", url: "https://news.ycombinator.com/item?id=49358350" }
reviewed: 2026-10-31
submittedBy: unshittify
---

Sony only ever shipped a Windows XP driver for the camera's USB streaming mode. Alex Norton reverse-engineered the protocol and wrote a Rust driver for Linux: a virtual webcam, synced audio and video capture, and tape transport controls.
