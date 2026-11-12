---
id: 132
title: "blackbox-mod"
seoTitle: "blackbox-mod: a patched OS for the original 1010music Blackbox"
device: "1010music Blackbox original (2019, last official firmware 3.1.9)"
category: audio
ai: "claude (commits)"
evidence: public
aiRole: "The README does not mention AI. Seventeen of nineteen commits carry a Claude Opus Co-Authored-By trailer and a Claude session link."
caveats: "From the README: has run on few units. The CPU can overload with some effect combinations, and tempo detection can be wrong. Two-file install. Flash the stock OS back before asking 1010music for support."
evidenceNote: "Public code, MIT, about 35 stars, October 2026."
repo: "j3threejay/blackbox-mod"
links:
  - { label: "repo", url: "https://github.com/j3threejay/blackbox-mod" }
  - { label: "site", url: "https://justinjoe.com/blackbox-mod" }
reviewed: 2026-11-12
submittedBy: unshittify
---

1010music replaced the Blackbox with the Blackbox 2 and left the original at firmware 3.1.9. Justin Joe's patch applies to the owner's own OS file and adds auto chop, time-stretch models, tempo detection, new effects, note repeat, groove, Elektron-style step conditions and a lower CPU load.
