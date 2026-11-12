---
id: 127
title: "autocrap"
seoTitle: "autocrap: the Novation Nocturn as a plain MIDI controller after Automap"
device: "Novation Nocturn USB controller (2008)"
category: audio
ai: "none documented"
evidence: public
aiRole: "No AI use documented."
caveats: "Windows needs a WinUSB driver via Zadig and a virtual MIDI port. The crossfader is 7-bit over MIDI. Other Automap devices are on the wish list only."
evidenceNote: "Public code, LGPL-3.0, about 30 stars, last release October 2025. Write-up on CDM, August 2024."
repo: "ahihi/autocrap"
links:
  - { label: "repo", url: "https://github.com/ahihi/autocrap" }
  - { label: "write-up", url: "https://cdm.link/novation-nocturn-reborn/" }
reviewed: 2026-11-12
submittedBy: unshittify
---

The Nocturn only ever worked through Novation's Automap software, which Novation now lists as no longer supported and not recommended for use. miranda's autocrap is a userspace driver in Rust that turns the Nocturn into an ordinary MIDI or OSC device with JSON mappings, on macOS, Linux and Windows.
