---
id: 29
title: "FreeDSP Studio"
device: "Moondrop DUSK-SP USB-C DSP cable (also MAY, FreeDSP and other Walkplay-chip dongles)"
category: audio
ai: "claude code"
evidence: public
aiRole: "From the README: \"The reverse engineering, hardware testing and decisions were mine; Claude wrote most of the code.\" A few hours of work."
caveats: "The README lists which devices are tested on real hardware; others rely on the maker's own data. Linux builds are untested with a real cable. Windows shows an unknown-publisher warning."
evidenceNote: "Public project + creator account."
repo: "EffectiveEquivalent/FreeDSP-Studio"
links:
  - { label: "repo", url: "https://github.com/EffectiveEquivalent/FreeDSP-Studio" }
  - { label: "creator post", url: "https://www.reddit.com/r/iems/comments/1vlm0os/" }
reviewed: 2026-10-28
submittedBy: unshittify
---

EffectiveEquivalent's desktop EQ editor writes straight to the cable's onboard DSP over USB. It gives fractional-dB gain where the stock app shows whole dB, and adds a preamp.
