---
id: 134
title: "Maschine Mk1 pads to MIDI"
seoTitle: "Keep a Native Instruments Maschine Mk1 useful on Linux after Maschine 3 dropped it"
device: "Native Instruments Maschine Mk1 controller (2009)"
category: audio
ai: "none documented"
evidence: experimental
aiRole: "No AI use documented."
caveats: "Pads only: no LEDs, no screens. Needs root for the input device. Written against one Mk1, so pad codes may need editing. A very small project."
evidenceNote: "Public code, AGPL-3.0, one release in October 2025."
repo: "devcomputer/python-maschine-mk1-midi"
links:
  - { label: "repo", url: "https://github.com/devcomputer/python-maschine-mk1-midi" }
  - { label: "NI end-of-support notice", url: "https://support.native-instruments.com/support/solutions/articles/69000879556-ending-software-support-for-earlier-generations-of-maschine" }
reviewed: 2026-11-12
submittedBy: unshittify
---

Native Instruments says the Maschine Mk1 and Mk2 do not work with Maschine 3, and the last Mk1 Mac driver is from 2015. devcomputer's script reads the Mk1 pads as a Linux input device and sends them out as MIDI, with a layout for Bespoke Synth. The tagline is "stop e-waste".
