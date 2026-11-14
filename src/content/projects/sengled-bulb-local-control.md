---
id: 158
title: "Sengled Bulb Local Control"
seoTitle: "Sengled Bulb Local Control: a self-hosted server for Sengled Wi-Fi bulbs"
device: "Sengled Wi-Fi bulbs"
category: home
ai: "none documented"
evidence: experimental
aiRole: "No AI use documented in the README, the protocol notes or the six commits."
caveats: "No adoption yet: no stars, no forks, six commits by one author. There is no licence file, and the README says \"No license granted\" and that the code is for personal use for now. The README names no bulb models. Each bulb must be factory reset and paired again to the owner's server. The owner has to run the Python server, generate TLS certificates and build the Android client in Android Studio; no built app is published. The protocol notes say the app-side findings come from static reading of the Sengled Home 2.8.3 app and \"have not been verified by runtime capture yet\". The README says Sengled's cloud shut down. Trade press reported long outages from June 2025 and the end of Sengled's Alexa skill on 1 August 2025; no statement from Sengled was found."
evidenceNote: "Public code, no licence, 0 stars, 6 commits on 15 and 16 October 2026, no releases."
repo: "sanmn19/sengled-bulb-local-control"
links:
  - { label: "repo", url: "https://github.com/sanmn19/sengled-bulb-local-control" }
  - { label: "protocol notes", url: "https://github.com/sanmn19/sengled-bulb-local-control/blob/main/PROTOCOL.md" }
  - { label: "lightnow on the outages", url: "https://www.lightnowblog.com/2025/08/sengled-smart-lamps-service-outages-alexa-skill-shut-down/" }
reviewed: 2026-11-14
submittedBy: unshittify
---

Sengled's Wi-Fi bulbs take their commands from Sengled's cloud, which suffered long outages from June 2025; the project's README says the cloud has shut down. sanmn19 wrote a replacement server in Python that answers the bulb's HTTP setup requests and runs the MQTT broker over TLS that the bulb connects to. During pairing the bulb is given the address of the owner's server. An Android client controls power, brightness, color and color temperature, with bulbs grouped by room.
