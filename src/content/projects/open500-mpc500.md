---
id: 118
title: "Open500"
seoTitle: "Open500: add-ons for the Akai MPC500, loaded from a CompactFlash card"
device: "Akai MPC500 sampler and sequencer (2006, last official OS 1.31)"
category: audio
ai: "claude code"
evidence: public
aiRole: "The repo ships a Claude Code skill that designs, writes and tests a new add-on in an MPC500 emulator and hands back the WAV file, so owners who do not code can build tools. Whether the loader itself was written with AI is not stated."
caveats: "Tested on one MPC500 with OS 1.31. Does not work on the MPC1000 or MPC2500. Reserves 896 KB of sample memory. USB MIDI and the browser screen are beta. The bootloader is untouched, so reflashing the stock OS restores the machine."
evidenceNote: "Public code, GPL-3.0, first commit September 2026."
repo: "M45K/open500"
links:
  - { label: "repo", url: "https://github.com/M45K/open500" }
  - { label: "site", url: "https://m45k.github.io/open500/" }
reviewed: 2026-11-12
submittedBy: unshittify
---

Akai stopped developing the MPC500's operating system almost twenty years ago. M45K patches a small loader into the owner's own OS 1.31; after that, new pages load as WAV files from the CompactFlash card: auto chop, master effects, a 16-step grid sequencer, sample effects, USB MIDI. Nothing is soldered and the stock OS can go back on at any time.
