---
id: 147
title: "FreePlay"
seoTitle: "FreePlay: custom firmware for the Polyend Play+ with a slicer and LFOs"
device: "Polyend Play+ and original Polyend Play (RT processor)"
category: audio
ai: "claude"
evidence: experimental
aiRole: "From the README: \"FreePlay was built with a lot of help from AI (Claude, an AI coding tool), and tested on my own Play+. You'll see that in the commit history too.\" The repo has one commit, and it carries a Claude Co-Authored-By trailer."
caveats: "From the README: \"This is beta firmware.\" It is version 0.1 and the author says it will have bugs. It is tested on the author's own Play+ only; on the original Play with the RT processor it has run only on a virtual device, and the K66 version of the Play is not supported. Not made or supported by Polyend. The installer accepts only official firmware 1.3.0 (Play+) or 1.6.0 (Play) and patches the owner's own copy in the browser, so no Polyend firmware is distributed. The bootloader is untouched, and flashing the official file or using the reset button goes back to stock. LFOs, sustain and release work on sample tracks only. The LICENSE file is MIT with an exception: the MIDI CC preset data is CC BY-SA 4.0. A feature project on a supported instrument."
evidenceNote: "Public code, MIT with a CC BY-SA 4.0 exception for preset data, about 9 stars, single commit on 6 November 2026, no releases."
repo: "sloppyjoo/freeplay"
links:
  - { label: "repo", url: "https://github.com/sloppyjoo/freeplay" }
  - { label: "browser installer", url: "https://sloppyjoo.github.io/freeplay/" }
reviewed: 2026-11-14
submittedBy: unshittify
---

FreePlay is unofficial custom firmware for the Polyend Play+ and Play. The GitHub user sloppyjoo wrote it to add things they wanted on their own Play+: a sample slicer, two LFOs with a modulation matrix, sustain and release on samples, a moving playhead and MIDI CC presets for 43 synths. A browser page takes the official firmware file the owner downloads from Polyend, adds FreePlay to it and checks the result byte for byte against the tested build.
