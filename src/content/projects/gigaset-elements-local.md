---
id: 73
title: "Gigaset elements local gateway"
seoTitle: "Gigaset elements alarm system working again after the cloud shutdown"
device: "Gigaset elements base station + window, door, motion, button, siren and thermostat sensors"
category: home
ai: "claude (commits)"
evidence: public
aiRole: "The README doesn't mention AI. The commit history lists Claude as co-author on 5 of 72 commits."
caveats: "Needs a router that can override DNS and redirect traffic. A factory-reset base needs files extracted from your own unit. No creator post. Earlier prior art exists (gelee). The newer camera model is still research."
evidenceNote: "Public code."
links:
  - { label: "repo", url: "https://github.com/AidenShaw2020/gigaset_elements_emulator" }
  - { label: "camera repo", url: "https://github.com/AidenShaw2020/gigaset_elements_camera" }
reviewed: 2026-10-31
submittedBy: unshittify
---

Gigaset's insolvency switched off the elements cloud in March 2024, and with no local mode the alarm kits were bricked. This gateway answers in place of Gigaset's server on stock firmware, so sensors, pairing and the siren work again, with alarm modes in Home Assistant over MQTT.
