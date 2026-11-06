---
id: 100
title: "MiciMike Home Mini"
seoTitle: "MiciMike Home Mini: an open drop-in board that turns a Google Home Mini into a local voice speaker"
device: "Google Home Mini (1st gen, Micro-USB)"
category: audio
ai: "none documented"
evidence: experimental
aiRole: "No AI use documented."
caveats: "Prototype tested; the validation batch is still under test, and boards are in pre-order on Crowd Supply. Replaces Google's electronics entirely, so Google Assistant is gone. Means opening the speaker. Needs Home Assistant for the voice assistant."
evidenceNote: "Open hardware: public KiCad files and ESPHome config (CERN-OHL-S-2.0) + CNX Software coverage."
repo: "iMike78/home-mini-v1-drop-in-pcb"
links:
  - { label: "repo", url: "https://github.com/iMike78/home-mini-v1-drop-in-pcb" }
  - { label: "crowd supply", url: "https://www.crowdsupply.com/micimike-rev-devices/micimike-home-mini-drop-in-pcb" }
  - { label: "cnx software", url: "https://www.cnx-software.com/2026/04/29/micimike-open-source-drop-in-pcb-converts-google-home-mini-into-a-local-voice-assistant/" }
  - { label: "nest mini version", url: "https://github.com/iMike78/nest-mini-drop-in-pcb" }
reviewed: 2026-11-04
submittedBy: unshittify
---

The first Google Home Mini is a decent little speaker tied to Google Assistant. iMike78 designed a replacement circuit board that drops into the same shell: an ESP32-S3 and an XMOS audio processor running ESPHome, built like Home Assistant's own Voice Preview Edition. It becomes a local voice assistant and a Music Assistant speaker.

Version 0.9.5 adds its own touch controller, so the original touch board isn't needed. A sister board does the same for the Nest Mini.
