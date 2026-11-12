---
id: 133
title: "p600fw"
seoTitle: "p600fw: a new brain for the Sequential Circuits Prophet 600"
device: "Sequential Circuits Prophet 600 synthesizer (1982)"
category: audio
ai: "none documented"
evidence: public
aiRole: "No AI use documented."
caveats: "A hardware modification of a vintage synth: a lightly modified Teensy++ replaces the Z80. The toolchain references date from 2012. Version 2.0 is the last stable release; 2.1 never left release candidate. Dozens of open issues."
evidenceNote: "Public code, GPL-3.0 per the README, about 50 stars, maintained since 2013."
repo: "gligli/p600fw"
links:
  - { label: "repo", url: "https://github.com/gligli/p600fw" }
reviewed: 2026-11-12
submittedBy: unshittify
---

The Prophet 600 was the first MIDI synth, and its Z80 operating system is famously sluggish. gligli replaced the CPU and the firmware with a Teensy++ that plugs into the Z80 socket: a new voice assigner, a MIDI-clocked arpeggiator, unison detune, SysEx patch dumps, and knobs that send MIDI.
