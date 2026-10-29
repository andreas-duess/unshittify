---
id: 42
title: "NoLongerEvil"
seoTitle: "NoLongerEvil: old Nest thermostats after Google ended support"
device: "Nest Learning Thermostat Gen 1 and Gen 2"
category: home
ai: "none documented"
evidence: public
aiRole: "No AI involvement documented. Builds on earlier open work it credits: omap_loader and the GTVHacker Nest research. Won a FULU Foundation bounty."
caveats: "Flashing low-level firmware can brick the thermostat; keep a backup thermostat. The README says some firmware and server code is still to be open sourced. The project's cloud swaps one server for another; self-hosting is the cloud-free route. For Gen 2, Sett sells an open-source replacement board instead."
evidenceNote: "Public repo + press coverage."
links:
  - { label: "repo", url: "https://github.com/codykociemba/NoLongerEvil-Thermostat" }
  - { label: "9to5google", url: "https://9to5google.com/2025/11/03/google-nest-thermostat-old-revive-project/" }
  - { label: "sett (hardware route)", url: "https://sett.homes/" }
reviewed: 2026-10-29
submittedBy: unshittify
---

Google ended support for the first two Nest generations on 25 October 2025: the apps, remote control and voice control stopped, leaving manual thermostats. Cody Kociemba's firmware points them at a new server, self-hosted or his, with remote control, schedules and a web dashboard.
