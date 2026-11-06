---
id: 70
title: "OpenV7"
seoTitle: "OpenV7: the Numark V7 DJ controller on Apple Silicon Macs"
device: "Numark V7 motorised-platter DJ controller (about 2011)"
category: audio
ai: "claude (commits)"
evidence: public
aiRole: "The README doesn't mention AI. The commit history lists Claude as co-author on 79 of 88 commits."
caveats: "Control only; the V7's built-in audio isn't implemented yet. Intel Macs untested; Linux and Windows planned. Part of the control map still needs hardware confirmation. Builds on the Ozzy project's work on the Ploytec protocol."
evidenceNote: "Public code."
repo: "tejofjord/openv7"
links:
  - { label: "repo", url: "https://github.com/tejofjord/openv7" }
reviewed: 2026-10-31
submittedBy: unshittify
---

Numark's USB driver was last updated for macOS 10.12 and is Intel-only, so on an Apple Silicon Mac the V7 is a brick. Michael Hadida wrote a userspace driver that shows it as a MIDI device; jog wheel, buttons, lights and the motor work in VirtualDJ, Mixxx and Ableton.
