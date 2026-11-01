---
id: 74
title: "Logi POP without the hub"
seoTitle: "Logitech POP buttons in Home Assistant after Logitech killed the hub"
device: "Logitech POP smart buttons"
category: home
ai: "claude (commits)"
evidence: public
aiRole: "The README doesn't mention AI. All 8 commits carry a Claude co-author line."
caveats: "Every press is reported as a single press; double and long presses aren't told apart. Builds on earlier bridge and plugin work. No creator post."
evidenceNote: "Public code."
links:
  - { label: "repo", url: "https://github.com/andy911850/ha-logi-pop" }
reviewed: 2026-10-31
submittedBy: unshittify
---

Logitech shut down the POP cloud in October 2025 with about two weeks' notice, which bricked the hub. The buttons still broadcast over Bluetooth when pressed, so Andy van Spijkeren's Home Assistant integration picks them up directly, with no hub, cloud or MQTT.
