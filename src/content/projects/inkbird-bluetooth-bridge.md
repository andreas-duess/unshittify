---
id: 22
title: "Inkbird Bluetooth bridge"
device: "Inkbird INT-12-BW / INT-14-BW meat thermometer + ESP32"
category: home
ai: "claude"
evidence: public
aiRole: "The README credits \"significant collaboration from Claude\". The hardest part, a two-stage CRC chain, was cracked with help from a decompile of the Android app."
caveats: "Alarm channels and several settings reports are logged but not parsed. No Wi-Fi path. Only one Bluetooth connection at a time, so the phone app can't connect while the bridge does."
evidenceNote: "Public project; the creator reports weeks of daily use."
repo: "paul43210/inkbird-bw-ble"
links:
  - { label: "repo", url: "https://github.com/paul43210/inkbird-bw-ble" }
reviewed: 2026-10-28
submittedBy: unshittify
---

Paul Faure documented his thermometer's Bluetooth protocol, including its authentication handshake, and built an ESPHome bridge that puts every probe and setting into Home Assistant.
