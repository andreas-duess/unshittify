---
id: 110
title: "ComfoAir Q firmware"
seoTitle: "Zehnder ComfoAir Q in Home Assistant without the ComfoConnect gateway"
device: "Zehnder ComfoAir Q350, Q450 and Q600 ventilation units"
category: home
ai: "claude code"
evidence: experimental
aiRole: "The builder says \"the code itself was typed by Claude Code.\" Their part: deciding what the device should and must never do, reviewing the analysis, wiring the board and checking it against the real unit."
caveats: "Version 0.1.0; the README says nothing has been accepted on a real ComfoAir Q yet, and the builder's own hardware checklist is unfinished. Means wiring into the unit's CAN bus. No TLS to the MQTT broker; 2.4 GHz Wi-Fi only."
evidenceNote: "Public MIT repo + builder's Home Assistant forum post."
links:
  - { label: "repo", url: "https://github.com/blade-running-man/zehnder-comfoair-q-firmware" }
  - { label: "forum post", url: "https://community.home-assistant.io/t/i-wrote-my-own-firmware-for-my-zehnder-comfoair-unit-well-my-own-well-wrote/1029339" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Zehnder's own way into a ComfoAir Q is the ComfoConnect LAN C gateway, about €330 and on its way out of the catalogue. blade-running-man wired an M5Stack NanoC6 and a CAN unit to the ventilation unit's bus instead, "and four wires".

The ESP32-C6 firmware exposes 76 entities, with control over MQTT and Home Assistant discovery, a REST API and its own web page, plus over-the-air updates with rollback. All local.
