---
id: 36
title: "ha-emaldo"
seoTitle: "ha-emaldo: Emaldo home battery data and control in Home Assistant"
device: "Emaldo Power Core 2.0 home battery"
category: home
ai: "claude code"
evidence: public
aiRole: "Built with Claude Code in about eight hours of continuous work, from Bluetooth scanning to a working integration. Claude traced the decompiled app and extracted the keys; the owner cross-checked values against the app."
caveats: "It does not remove Emaldo's cloud: it still needs an Emaldo account and internet access. What comes back is the owner's data and control inside Home Assistant."
evidenceNote: "Public repo with protocol documentation + creator write-up."
repo: "wertigpar/ha-emaldo"
links:
  - { label: "write-up", url: "https://medium.com/@ylenius/how-i-reverse-engineered-my-home-batterys-protocol-in-one-day-with-an-ai-pair-programmer-60de36e75df9" }
  - { label: "repo", url: "https://github.com/wertigpar/ha-emaldo" }
reviewed: 2026-10-29
submittedBy: unshittify
---

Emaldo has no public API and no local access, only its app. The integration brings solar, grid, battery and load readings into Home Assistant every 10 seconds, plus daily energy totals and schedule, EV-charge and grid-export controls.
