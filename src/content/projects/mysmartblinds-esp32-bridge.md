---
id: 159
title: "MySmartBlinds ESP Bridge"
seoTitle: "MySmartBlinds ESP Bridge: old blind motors back in SmartThings and Alexa"
device: "First-generation MySmartBlinds Bluetooth tilt motors"
category: home
ai: "none documented"
evidence: experimental
aiRole: "No AI use documented in the README, the guides or the 36 commits."
caveats: "No adoption yet: no stars and no forks. From the release notes: \"This initial community release is a beta; a clean public-channel installation on a separate user's hub has not yet been verified.\" It needs an ESP32 board, a SmartThings hub that supports LAN Edge drivers, and a JSON backup from the MySmartBlinds Android app for the motor pairing keys; iOS backups have not been validated. Hub to motor traffic is local, but remote access and Alexa depend on Samsung's SmartThings cloud and Amazon. The bridge uses local HTTP with shared default setup credentials and stores keys without encryption, so it belongs on a trusted home network. Tilt only. Temperature and light conversions are unconfirmed. The statement that MySmartBlinds ended its cloud support comes from the README; we did not find a vendor notice."
evidenceNote: "Public code, MIT, 0 stars, 36 commits all on 23 October 2026, v0.1.0 in the changelog, no GitHub release."
repo: "tylerdurden94/MySmartBlinds"
links:
  - { label: "repo", url: "https://github.com/tylerdurden94/MySmartBlinds" }
  - { label: "beginner guide", url: "https://github.com/tylerdurden94/MySmartBlinds/blob/main/docs/BEGINNER_GUIDE.md" }
reviewed: 2026-11-14
submittedBy: unshittify
---

The README says MySmartBlinds ended its cloud support, and the original MySmartBlinds Bridge needed that service for remote access and Alexa. Owners kept working blind motors and nearby Bluetooth control through the original app. tylerdurden94 published firmware for an ESP32 that talks to the motors over Bluetooth and a SmartThings Edge driver that talks to the ESP32 over the home network. Each blind becomes a SmartThings device with tilt control, battery level and routines, and Alexa works through the SmartThings skill.
