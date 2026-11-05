---
id: 111
title: "Bluetti EP760 local control"
seoTitle: "Bluetti EP760 in Home Assistant: Claude Code reverse-engineers the app, local Bluetooth in Rust"
device: "Bluetti EP760 inverter with PBOX dongle"
category: home
ai: "claude code"
evidence: report
aiRole: "Claude Code reverse-engineered the Bluetti Android app, unwinding its obfuscation, and wrote a cloud-to-MQTT gateway and then Rust firmware for local Bluetooth control. It struggled with the cloud authentication and with whether the PBOX spoke Modbus; both were resolved."
caveats: "No public repo or licence; a write-up only. One unit. The app came from a third-party APK mirror. Gives you a write-up to follow, not a tool to install."
evidenceNote: "Builder's blog post. Running for a couple of weeks at the time of writing."
links:
  - { label: "write-up", url: "https://www.madebymikal.com/claude-code-is-scary-good-at-apk-reverse-engineering/" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Existing open-source tools barely supported Bluetti's EP760 home battery inverter. Michael Still had Claude Code decompile and read the Bluetti app, then built a gateway from Bluetti's cloud to MQTT. The second step dropped the cloud: an ESP32 in a 3D-printed case talks to the inverter over Bluetooth, running bare-metal Rust, and reports to Home Assistant over MQTT.

He credits Bluetti for taking open source seriously. The point of the post is how far careful prompting got: "just encouraging it to read the decompiled Java just a little bit harder."
