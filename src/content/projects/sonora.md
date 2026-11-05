---
id: 108
title: "Sonora"
seoTitle: "Sonora: a self-hosted controller for Sonos S1 and S2 speakers"
device: "Sonos speakers on S1, S2 and S2.1"
category: audio
ai: "claude code"
evidence: public
aiRole: "The README says: \"A human designed Sonora and Claude Code built it.\""
caveats: "S1 and S2 rooms show in one interface but still can't be grouped together. Remote access needs your own VPN. Not affiliated with Sonos. About a month old."
evidenceNote: "Public AGPL-3.0 repo, very active."
links:
  - { label: "site", url: "https://sonoracontroller.com/" }
  - { label: "repo", url: "https://github.com/Bretteroo/Sonora" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Sonos split its speakers into S1 and S2 in 2020 and split them again in August 2025, and the current app leaves S1 speakers out. Sonora is a self-hosted web controller that talks to the speakers directly on your network, with Sonos sign-in optional, and runs both systems from one screen.

It adds scenes across S1 and S2, lyrics, themes, a network check and an S2 upgrade advisor. It runs in Docker, as a Home Assistant app, on Unraid or with Python and Node. Brett built it because he wanted it himself.
