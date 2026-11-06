---
id: 95
title: "felicity-battery-modbus"
seoTitle: "felicity-battery-modbus: local MQTT and Home Assistant for Felicity solar batteries"
device: "Felicity FLB48314TG1 lithium battery (Voltronic \"LIB\" BMS protocol)"
category: home
ai: "claude (commits)"
evidence: public
aiRole: "4 of the last 30 commits carry a Co-Authored-By: Claude trailer. The builder's bus captures and register map are the ground truth."
caveats: "Verified on FLB48314TG1 packs only (three in parallel). FLB48100, LPBF48 and LPBA48 packs use the same protocol family but are untested. Needs an RS485 adapter on RJ45 pins 5/6. The ESPHome component is planned, not built."
evidenceNote: "Public MIT repo with protocol docs, register map, raw captures and a v1.0.0 Go daemon. Runs in production on the builder's Raspberry Pi 5."
repo: "KrzysztofHajdamowicz/felicity-battery-modbus"
links:
  - { label: "repo", url: "https://github.com/KrzysztofHajdamowicz/felicity-battery-modbus" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Felicity's batteries speak Modbus RTU over RS485, with one quirk: the response carries a 16-bit register count where the byte count belongs, so pymodbus and ESPHome's Modbus component reject every frame. KrzysztofHajdamowicz documented the protocol, published the register map and raw bus captures, and wrote a Python reference decoder.

felicityd, a Go daemon, reads the packs and publishes to MQTT with Home Assistant discovery. It runs alongside Solar Assistant on the same Pi.
