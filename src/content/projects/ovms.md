---
id: 102
title: "OVMS"
seoTitle: "OVMS: open vehicle monitoring for the Nissan Leaf, Chevy Bolt and 30+ more EVs"
device: "EVs incl. Nissan Leaf and e-NV200, Chevy Bolt / Opel Ampera-e, BMW i3, Hyundai Ioniq and Kona, Kia e-Niro, Jaguar I-Pace, Fiat 500e, Tesla Model S"
category: vehicle
ai: "none documented"
evidence: public
aiRole: "No AI use documented."
caveats: "The project warns that installing the module may damage your vehicle and void its warranty. Features vary by car; check your model's page. On the Leaf, remote climate often means unplugging the car's telematics unit or cutting its CAN wires, which disables Nissan Connect; newer ZE1 Leafs need a custom CAN tap behind the instrument cluster and keep permanent error codes."
evidenceNote: "Public code, about 880 stars, per-vehicle docs. Community project."
links:
  - { label: "repo", url: "https://github.com/openvehicles/Open-Vehicle-Monitoring-System-3" }
  - { label: "docs", url: "https://docs.openvehicles.com/" }
  - { label: "home assistant", url: "https://docs.openvehicles.com/en/latest/userguide/homeassistant.html" }
  - { label: "server", url: "https://github.com/openvehicles/Open-Vehicle-Server" }
  - { label: "nissan leaf docs", url: "https://github.com/openvehicles/Open-Vehicle-Monitoring-System-3/blob/master/vehicle/OVMS.V3/components/vehicle_nissanleaf/docs/index.rst" }
  - { label: "nissanconnect shutdown", url: "https://hackaday.com/2026/04/08/nissan-shuts-down-nissanconnect-app-for-older-leaf-evs" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Carmakers' apps show a few numbers and stop when the maker drops the car. OVMS is an open module that plugs into the OBD2 port, with three CAN buses, 4G and GPS. It reads live charge, temperatures, tyre pressures and faults, and on some cars controls charging and climate.

Data goes to your own server or straight to any MQTT broker, Home Assistant included, and logs to an SD card. The community calls it joining a project, not becoming a customer.

The Nissan Leaf shows why. Nissan switched off NissanConnect EV on March 30, 2026 for Leafs built before May 2019 and for the e-NV200, taking remote charging, monitoring and the car locator with it. On those cars OVMS starts and stops charging, charges to a set limit, pre-heats or cools the cabin and watches the battery cell by cell.
