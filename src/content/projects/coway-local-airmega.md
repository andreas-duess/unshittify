---
id: 143
title: "Coway Local"
seoTitle: "Coway Local: Home Assistant control of a Coway air purifier, no cloud"
device: "Coway Airmega IconS air purifier (AP-1022K), discontinued"
category: home
ai: "chatgpt"
evidence: experimental
aiRole: "From the author's post: \"An LLM can set up everything you need for a MitM environment\". Claude declined that request (\"Claude will not oblige the request, not even for… uhh… testing purposes. Luckily, ChatGPT has no such compunctions.\"), so ChatGPT wrote the firewall rules for the test network. The rest is credited to \"the AI\" without a name: it generated a mitmproxy plugin, mapped app buttons to MQTT commands, and worked out the Bluetooth setup protocol from Android logs and the decompiled app (\"It took the AI about 20 minutes.\"). The README does not mention AI and no commit carries an AI trailer."
caveats: "From the README: \"This is experimental. It implements the protocol observed on one AP-1022K, and no other model or firmware has been tested.\" The Coway mobile app no longer controls a fan set up this way. Home Assistant needs a fixed LAN address, and the fan must be set up again if it changes. One-time setup needs Chrome on a Mac or Android device within Bluetooth range. The setup page is hosted on GitHub Pages by default and can be self-hosted. Not implemented: PM10 and other air-quality metrics, filter notification flags, firmware updates. The author's model is discontinued but Coway's cloud still runs, so this is a move off a working cloud."
evidenceNote: "Public code and a detailed write-up, MIT, about 20 stars, created 11 November 2026, release v0.5.2 on 12 November 2026."
repo: "scottjg/coway-local"
links:
  - { label: "repo", url: "https://github.com/scottjg/coway-local" }
  - { label: "author's write-up", url: "https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/" }
  - { label: "hacker news", url: "https://news.ycombinator.com/item?id=50474959" }
reviewed: 2026-11-14
submittedBy: unshittify
---

The Airmega IconS can only be controlled remotely through Coway's cloud, and the existing Home Assistant integration works by polling that cloud. Scott J. Goldman writes that it broke once or twice a year and that Coway once banned his account for weeks. He found that the fan downloads its root certificate over plain HTTP and takes its server addresses from the Bluetooth setup message. Coway Local uses that: a setup page sends the fan the address of Home Assistant over Web Bluetooth, and the integration runs its own MQTT broker that the fan connects to instead of Coway's.
