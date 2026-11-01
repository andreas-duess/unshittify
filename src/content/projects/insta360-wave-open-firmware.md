---
id: 66
title: "Wave Open Firmware"
seoTitle: "Open firmware for the Insta360 Wave speakerphone, no telemetry"
device: "Insta360 Wave speakerphone"
category: audio
ai: "claude (commits)"
evidence: public
aiRole: "The README doesn't mention AI. The commit history lists Claude as co-author on 819 of 1,045 commits, and the repo has a CLAUDE.md."
caveats: "Updates and some features are only tested on a host machine. ADB has to be re-enabled over USB after each boot. Building needs Rust, Docker and cross. The vendor still supports the device; this is about privacy, not a dead cloud. A revert script restores stock."
evidenceNote: "Public code + docs + Show HN post."
links:
  - { label: "repo", url: "https://github.com/XavierGeerinck/insta360-custom-firmware" }
  - { label: "docs", url: "https://xaviergeerinck.github.io/insta360-custom-firmware/" }
  - { label: "show hn", url: "https://news.ycombinator.com/item?id=50102236" }
reviewed: 2026-10-31
submittedBy: unshittify
---

According to the README, stock Wave firmware reports 35+ kinds of usage event to ByteDance's analytics, tagged with the serial number, and routes meeting audio and transcripts to Insta360's cloud. Xavier Geerinck replaced it with one Rust program: no telemetry, recordings stay on the device, and updates are signed with your own key.
