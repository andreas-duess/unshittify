---
id: 35
title: "Second Hand"
seoTitle: "Second Hand: an Amazon Echo Wall Clock without an Echo"
device: "Amazon Echo Wall Clock"
category: home
ai: "claude code"
evidence: public
aiRole: "The creator used Claude Code to reverse engineer the clock's Bluetooth protocol and to build the Home Assistant integration and a kiosk satellite plugin."
caveats: "New and small: tested on one clock with Home Assistant Container on a Raspberry Pi 3B. Needs a Bluetooth Classic adapter within about 10 m of the Home Assistant host; BLE proxies will not work. The clock works with one controller at a time."
evidenceNote: "Public repos + creator post."
repo: "mpjanofsky/echo-wall-clock"
links:
  - { label: "creator post", url: "https://community.home-assistant.io/t/echo-wall-clock-home-assistant-show-assist-timers-on-its-led-ring-no-alexa-or-amazon-cloud/1029160" }
  - { label: "protocol repo", url: "https://github.com/mpjanofsky/echo-wall-clock" }
  - { label: "ha integration", url: "https://github.com/mpjanofsky/second-hand-integration" }
reviewed: 2026-10-29
submittedBy: unshittify
---

The clock only works paired to an Echo. Mike Janofsky's integration lets Home Assistant drive it instead: the LED ring shows Assist and Home Assistant timers, and the time is re-synced every 30 minutes. Nothing on the clock is modified and nothing touches Amazon's servers.
