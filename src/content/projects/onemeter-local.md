---
id: 64
title: "OneMeter, after the bankruptcy"
seoTitle: "OneMeter energy reader in Home Assistant after the company went bankrupt"
device: "OneMeter BLE optical energy-meter reader (nRF51822)"
category: home
ai: "claude code"
evidence: public
aiRole: "Claude Code ran in an isolated VM with the SWD probe and a BLE adapter attached. It set a breakpoint in the encryption routine and matched plaintext in RAM to what went over the air. The builder credits it with about 80% of the protocol work and about 90% of the integration. All 3 commits carry a Claude co-author line."
caveats: "Every owner has to open the case, solder to the SWD pads and pull their own AES key. The README calls it pre-MVP and working on one tested device. Mapping meter registers depends on the meter."
evidenceNote: "Public code + creator post + community continuation."
repo: "grappeq/onemeter-ha-integration"
links:
  - { label: "creator post", url: "https://medium.com/kingfisher-technology/when-the-cloud-dies-reverse-engineering-an-abandoned-iot-device-264ce7e5a24e" }
  - { label: "repo", url: "https://github.com/grappeq/onemeter-ha-integration" }
  - { label: "flash dump tool", url: "https://github.com/grappeq/nrf51-extractor" }
  - { label: "continuation", url: "https://github.com/perceival/onemeter-ha-integration" }
reviewed: 2026-10-31
submittedBy: unshittify
---

OneMeter went bankrupt and switched off its cloud, which issued the device's keys, so the clip-on reader became a lump of plastic. Kacper Grabowski dumped its read-protected flash, recovered the encryption with Claude Code and wrote a local Home Assistant integration that works through ESPHome Bluetooth proxies.
