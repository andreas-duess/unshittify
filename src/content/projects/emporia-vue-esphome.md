---
id: 107
title: "Emporia Vue ESPHome"
seoTitle: "Emporia Vue ESPHome: local energy monitoring with no Emporia cloud"
device: "Emporia Vue 2 and Vue 3 home energy monitors"
category: home
ai: "none documented"
evidence: public
aiRole: "No AI use documented."
caveats: "Mains electricity: never flash the board while it is connected to the panel. Flashing means opening the monitor and wiring a serial adapter to TX, RX and GPIO0. Replaces Emporia's firmware, so the Emporia app stops working."
evidenceNote: "Public ESPHome fork, about 800 stars, with a flashing tutorial. Maintained since 2021."
repo: "emporia-vue-local/esphome"
links:
  - { label: "repo", url: "https://github.com/emporia-vue-local/esphome" }
  - { label: "tutorial", url: "https://emporia-vue-local.github.io/docs/tutorial/intro" }
reviewed: 2026-11-04
submittedBy: unshittify
---

The Emporia Vue clamps onto your electrical panel and reports every circuit to Emporia's cloud. It runs on an ESP32, so the emporia-vue-local project reflashes it with ESPHome and a custom component. Readings update every five seconds and go straight to Home Assistant. Nothing leaves your network.
