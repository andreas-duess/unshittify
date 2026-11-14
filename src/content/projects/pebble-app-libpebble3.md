---
id: 116
title: "Pebble mobile app"
seoTitle: "Pebble mobile app: the open-source companion app from Core Devices"
device: "All Pebble smartwatches, plus Pebble Index 01 rings"
category: audio
ai: "claude (agent files)"
evidence: public
aiRole: "The repo has a CLAUDE.md, and recent commits carry Co-Authored-By: Claude trailers."
caveats: "GPL-3.0, with a paid commercial licence option from Core Devices. Core Devices is a company, not a community project."
evidenceNote: "Public repo, about 950 stars, very active. Renamed on GitHub from libpebble3 to mobileapp; the README says it is a copy of the company's internal repo, synced by hand."
repo: "coredevices/mobileapp"
links:
  - { label: "repo", url: "https://github.com/coredevices/mobileapp" }
reviewed: 2026-11-14
submittedBy: unshittify
---

Pebble shut down in 2016 and its app went with it; the community Rebble service kept watches alive in the years after. Core Devices, the revived Pebble company, has published the source of its new companion app for Android and iOS. It handles pairing, notifications, health data and installing watchfaces and apps, for every Pebble ever made. The watch protocol code sits in a module called libpebble3, the repo's former name.
