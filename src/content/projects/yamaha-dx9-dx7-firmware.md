---
id: 130
title: "DX9/7 firmware ROM"
seoTitle: "DX9/7: a replacement ROM that gives the Yamaha DX9 the six operators of the DX7"
device: "Yamaha DX9 synthesizer (1983)"
category: audio
ai: "none documented"
evidence: public
aiRole: "No AI use documented in the README or the commit history."
caveats: "Needs an EPROM burner and a chip swap. Only about ten DX7 patches fit in the DX9's memory. Some DX7 SysEx functions are missing, so some editors break. Velocity and aftertouch are limited by the DX9's keybed. Cassette save corrupts DX7-specific data."
evidenceNote: "Public code, GPL-3.0, about 40 stars, considered ready for everyday use by its author; last change September 2024."
repo: "ajxs/yamaha_dx97"
links:
  - { label: "repo", url: "https://github.com/ajxs/yamaha_dx97" }
  - { label: "DX7 ROM disassembly", url: "https://github.com/ajxs/yamaha_dx7_rom_disassembly" }
reviewed: 2026-11-12
submittedBy: unshittify
---

The DX9 is a DX7 that Yamaha cut down at the factory to four operators, and Yamaha never sold an upgrade. ajxs built a new firmware ROM from the DX9 code and the DX7 v1.8 code that restores six operators, makes the DX9 patch-compatible with the DX7, and adds a pitch envelope, MIDI velocity and DX7-style scaling.
