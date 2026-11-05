---
id: 94
title: "Ocean Pulse for Home Assistant"
seoTitle: "Ocean Pulse for Home Assistant: Fisker Ocean data after the Fisker app"
device: "Fisker Ocean EV with an Ocean Pulse aftermarket device"
category: vehicle
ai: "none documented"
evidence: public
aiRole: "No AI use documented in the repo."
caveats: "Still cloud-based: it polls the Ocean Pulse service, a third party, not the car. Needs an Ocean Pulse device fitted to the car. Beta; the builder has run it since mid-October 2026. Controls are not fully implemented. Entity names and sensor IDs changed when the integration was renamed from My Fisker in June 2026."
evidenceNote: "Public Apache-2.0 repo, installable via HACS."
links:
  - { label: "repo", url: "https://github.com/MichaelOE/homeassistant-ocean_pulse" }
reviewed: 2026-11-04
submittedBy: unshittify
---

MichaelOE's Home Assistant integration reads a Fisker Ocean's data from Ocean Pulse, an aftermarket device fitted to the car. Pair it with the QR code digits, and every value the Ocean Pulse API exposes becomes a sensor, with the car's location as a device tracker.

It started as "My Fisker" and switched to the Ocean Pulse device API in June 2026. The data still goes through someone's cloud, just not Fisker's.
