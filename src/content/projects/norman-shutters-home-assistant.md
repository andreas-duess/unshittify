---
id: 26
title: "Norman shutters for Home Assistant"
device: "Norman PerfectTilt motorised plantation shutters + Norman hub"
category: home
ai: "claude code"
evidence: public
aiRole: "Claude Code wrote the client from API calls he captured with HTTP Toolkit, then the integration, and debugged session-expiry and discovery bugs. He had started the library with ChatGPT two years earlier."
caveats: "It works because the iOS app's traffic wasn't encrypted. No licence file in the repo, so check before reusing the code."
evidenceNote: "Public project + creator account."
links:
  - { label: "repo", url: "https://github.com/tomwilkie/ha-norman-shutters" }
  - { label: "client library", url: "https://github.com/tomwilkie/pynormanshutters" }
  - { label: "creator post", url: "https://www.reddit.com/r/homeassistant/comments/1thtjjd/" }
reviewed: 2026-10-28
submittedBy: unshittify
---

Tom Wilkie built a Home Assistant integration and Python client for his shutters: open or closed, tilt angle and battery, with the hub found automatically on the network.
