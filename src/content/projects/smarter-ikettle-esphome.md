---
id: 80
title: "iKettle 3, new brain"
seoTitle: "Smarter iKettle 3.0 back in Home Assistant with an ESP32"
device: "Smarter iKettle 3.0 + ESP32 + HX711"
category: home
ai: "none documented"
evidence: public
aiRole: "No AI involvement documented."
caveats: "Hot-air rework and a mains appliance. The builder calls it another version of an earlier conversion."
evidenceNote: "Public code + Reddit post."
repo: "drublin/SmartKettle-ESPHome"
links:
  - { label: "repo", url: "https://github.com/drublin/SmartKettle-ESPHome" }
  - { label: "reddit", url: "https://www.reddit.com/r/homeassistant/comments/1wzrz3e/" }
  - { label: "shutdown thread", url: "https://forums.electricimp.com/t/unbless-smarter-ikettle-v3-after-manufacturer-seemingly-discontinued-service/6967" }
reviewed: 2026-10-31
submittedBy: unshittify
---

Smarter dropped the iKettle 3's cloud, and in December 2025 the kettles stopped connecting. drublin desoldered the original chip, wired an ESP32 to the board and added a new weight sensor. It runs locally in Home Assistant, with a safety cut-off when the jug is lifted.
