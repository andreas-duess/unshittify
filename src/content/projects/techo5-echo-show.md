---
id: 65
title: "TECHO5"
seoTitle: "TECHO5: Echo Show and Echo Dot as local Home Assistant voice satellites"
device: "Echo Show 5 and 8 (gen 1/2), Echo Spot gen 1, Echo Dot gen 2/3, Echo gen 2"
category: home
ai: "none documented"
evidence: public
aiRole: "Not stated by the author. One of 1,816 commits, by an outside contributor, carries a Claude co-author line."
caveats: "Needs a bootloader unlock through the existing amonet exploit; no Echo made after 2021 has a public unlock. Show 5 owners need to raise their voice over music. The author calls it a hobby project, not a product."
evidenceNote: "Public code (490 stars) + HN thread + HA forum thread."
repo: "HuskerMinion/techo5"
links:
  - { label: "repo", url: "https://github.com/HuskerMinion/techo5" }
  - { label: "hn", url: "https://news.ycombinator.com/item?id=49869865" }
  - { label: "ha forum", url: "https://community.home-assistant.io/t/techo5-upgraded-fork-echo-show-5-as-an-ha-voice-satellite-now-with-xiaozhi-voice-an-android-cast-app-and-a-stream-deck/1026977" }
reviewed: 2026-10-31
submittedBy: unshittify
---

TECHO5 swaps Fire OS and Alexa for a small Alpine Linux image, so an Echo becomes a local Home Assistant voice satellite with its own touch screen. It adds on-device wake word, AirPlay 2, Spotify Connect and signed updates. HuskerMinion built it on Yuri Gelfand's EchoLocal.
