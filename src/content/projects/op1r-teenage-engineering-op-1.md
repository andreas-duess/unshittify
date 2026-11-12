---
id: 122
title: "op1r"
seoTitle: "op1r: custom firmware for the original Teenage Engineering OP-1"
device: "Teenage Engineering OP-1 original (2011, last official firmware R246)"
category: audio
ai: "none documented"
evidence: public
aiRole: "No AI use documented. The support link reads \"Buy some tokens for the Clanker\", which may hint at it."
caveats: "From the README: use at your own risk. Plugins have full access to the machine, so install only trusted ones. Windows USB outputs are untested. The bootloader is untouched, so stock firmware can be flashed back. The hidden Lander game is gone."
evidenceNote: "Public code, GPL-3.0 with an extra permission to combine with the OP-1 firmware, about 120 stars, release 67 in November 2026."
repo: "pcppcp/op1r"
links:
  - { label: "repo", url: "https://github.com/pcppcp/op1r" }
reviewed: 2026-11-12
submittedBy: unshittify
---

Teenage Engineering moved on to the OP-1 Field in 2022 and left the original OP-1 at firmware R246. op1r is a Python patcher that turns the owner's R246 image into a new firmware: extra synth engines including ports of Mutable Instruments code, new effects and sequencers, a second tape machine, MIDI CC and six-channel USB audio.
