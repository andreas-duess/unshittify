---
id: 56
title: "teddyCloud"
seoTitle: "teddyCloud: a Toniebox without the Boxine cloud"
device: "Boxine Toniebox (CC3200, CC3235 and ESP32 boards)"
category: audio
ai: "none documented"
evidence: public
aiRole: "No AI involvement documented."
caveats: "Setup means dumping the box's certificates and flashing a replacement CA; the CC3235 and ESP32 boards take more hands-on work. Toniebox 2 not supported."
evidenceNote: "Public repo + community wiki."
repo: "toniebox-reverse-engineering/teddycloud"
links:
  - { label: "repo", url: "https://github.com/toniebox-reverse-engineering/teddycloud" }
  - { label: "wiki", url: "https://tonies-wiki.revvox.de/docs/tools/teddycloud/" }
reviewed: 2026-10-29
submittedBy: unshittify
---

The Toniebox reports to Boxine's cloud. The community's teddyCloud is a local replacement: owners decide what reaches the maker, and can play their own audio from a home server on the figurines.
