---
id: 142
title: "unfr0zen"
seoTitle: "unfr0zen: local control for Nest Learning Thermostats, 1st to 3rd gen"
device: "Nest Learning Thermostat, 1st, 2nd and 3rd generation"
category: home
ai: "claude code"
evidence: public
aiRole: "From the README: \"Claude Code has been used to speed up the app's GUI, the documentation and the tests.\" The repo also has CLAUDE.md and AGENTS.md files. None of the latest 100 commits carries an AI co-author trailer."
caveats: "From the README: it rewrites the flash of the device that runs the heating, and a failed run or a bad patch can leave the thermostat unbootable or running without controlling heating or cooling. Back up the NAND first and have another way to heat or cool the house while testing. Modifying the thermostat voids its warranty and may break Google's services for it. Matter uses a test vendor ID, so controllers treat the unit as uncertified. Only these three models are supported; the Nest Thermostat E is not. The 1st generation has to be opened up and gets no Zigbee or Thread. Tested firmware is listed for the 2nd and 3rd generation only. On European models, Zigbee or Thread replaces the wireless Heat Link connection. NoLongerEvil, also on this site, covers the 1st and 2nd generation and points the thermostat at a replacement server, self-hosted or the project's own; unfr0zen runs its stand-in for Nest's cloud on the thermostat and also covers the 3rd generation."
evidenceNote: "Public code, GPL-3.0, about 75 stars, created 26 October 2026, release v0.5.0 on 13 November 2026."
repo: "unfr0zen/unfr0zen"
links:
  - { label: "repo", url: "https://github.com/unfr0zen/unfr0zen" }
  - { label: "project site", url: "https://unfr0zen.com/" }
reviewed: 2026-11-14
submittedBy: unshittify
---

A stock Nest Learning Thermostat is controlled from the Nest or Google Home app through Google's cloud and needs internet access. unfr0zen, whose commits are mostly by the handle will-tm, is a desktop app that roots the thermostat over USB and installs nestlocal, a program that stands in for Nest's cloud on the thermostat itself. The thermostat can then be controlled from Home Assistant or any MQTT client, a Matter controller or a Zigbee coordinator on the home network, and an option blocks Nest's and Google's servers. The app can back up the whole NAND before patching and restore it to go back to stock.
