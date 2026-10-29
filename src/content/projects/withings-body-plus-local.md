---
id: 63
title: "Withings Body+ to Home Assistant"
seoTitle: "Withings Body+ scale readings in Home Assistant, no cloud"
device: "Withings Body+ scale + original ESP32"
category: home
ai: "codex"
evidence: report
aiRole: "OpenCode running Codex analysed an old Withings app and wrote the ESPHome component, over many flash-and-weigh cycles; ChatGPT helped with early research."
caveats: "Code not public yet. Tested on one scale with two profiles. Needs an original ESP32; C3 and S3 boards will not work. Not a universal Withings integration."
evidenceNote: "Creator post."
links:
  - { label: "creator post", url: "https://didac.dev/blog/i-made-my-withings-scale-sync-to-home-assistant-without-the-cloud" }
  - { label: "hn", url: "https://news.ycombinator.com/item?id=49550436" }
reviewed: 2026-10-29
submittedBy: unshittify
---

Dídac Sabatés removed the scale's Wi-Fi so it can't upload to Withings and wrote an ESPHome component that receives each weigh-in over Bluetooth. Readings land in Home Assistant per person, with no cloud and no change to the scale.
