---
id: 24
title: "EcoFlow DELTA 3 as a UPS"
device: "EcoFlow DELTA 3 power station + Raspberry Pi Zero 2 W"
category: home
ai: "claude"
evidence: public
aiRole: "Heavy AI pair-programming with Claude for the protocol reverse engineering, the NUT plumbing and Bluetooth debugging, per the creator."
caveats: "The encrypted Bluetooth protocol is reverse engineered, so a firmware update could break it. DELTA 3 only. The handshake needs your EcoFlow user ID once, used locally. Use at your own risk."
evidenceNote: "Public project + creator account."
repo: "alanstrok/ecoflow2nut-pibridge"
links:
  - { label: "repo", url: "https://github.com/alanstrok/ecoflow2nut-pibridge" }
  - { label: "creator post", url: "https://www.reddit.com/r/homelab/comments/1tyij86/" }
reviewed: 2026-10-28
submittedBy: unshittify
---

alanstrok made his power station act as a standard NUT UPS server over Bluetooth, so Unraid, Synology and other NUT clients shut down cleanly on low battery. No EcoFlow cloud.
