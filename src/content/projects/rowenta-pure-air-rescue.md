---
id: 69
title: "Rowenta Pure Air Cloud Rescue"
seoTitle: "Rowenta Pure Air purifier back under local control with an ESP32"
device: "Rowenta Intense Pure Air Connect PU4080F0 + ESP32-S3"
category: home
ai: "claude (commits)"
evidence: public
aiRole: "The README doesn't mention AI. The commit history lists Claude as co-author on all 10 commits."
caveats: "Mains appliance; soldering required. 2.4 GHz only. The timer and filter buttons aren't visible to the new firmware. Voice control goes through the Sinric Pro cloud. Same-board models are untested. An earlier, separate project did the same for the PU6080F0 XL."
evidenceNote: "Public code, running on the builder's unit."
links:
  - { label: "repo", url: "https://github.com/acvx93/rowenta-pure-air-cloud-rescue" }
  - { label: "earlier pu6080 project", url: "https://github.com/vpxavier/rowenta-esp32-mqtt-bridge" }
reviewed: 2026-10-31
submittedBy: unshittify
---

The Pure Air app stopped working, and connected Rowenta purifiers lost remote control and schedules. Alejandro Couso unplugged the stock Wi-Fi module and wired in a €12 ESP32 that serves a local web page, keeps a weekly schedule on the device and can still take Google Home voice commands.
