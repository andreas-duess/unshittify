---
id: 84
title: "Litter-Robot on ESPHome"
seoTitle: "Litter-Robot 3 and 4 with local ESPHome firmware, no Whisker cloud"
device: "Whisker Litter-Robot 3 Connect and Litter-Robot 4"
category: home
ai: "llm (unnamed)"
evidence: public
aiRole: "The builder's Reddit post says an LLM helped decipher the serial data and write a test firmware. No model is named, and the repo has no AI markers."
caveats: "Flashing needs disassembly and a programmer; wireless flashing is in development. Mainboard firmware can't be updated. Whisker's cloud still works; the case is privacy and future-proofing. The README has an affiliate link."
evidenceNote: "Public code + Reddit post + video."
links:
  - { label: "repo", url: "https://codeberg.org/Joseph-DiGiovanni/esphome-litter-robot" }
  - { label: "reddit", url: "https://www.reddit.com/r/homeassistant/comments/1xemnv4/" }
  - { label: "video", url: "https://www.youtube.com/watch?v=i1wkWMo-12g" }
reviewed: 2026-10-31
submittedBy: unshittify
---

Joseph DiGiovanni replaced the firmware on the Litter-Robot's Wi-Fi chip with ESPHome, so it runs locally in Home Assistant with no app, cloud or telemetry. Safety logic stays on the mainboard, and new firmware adds better cat detection and flexible sleep schedules.
