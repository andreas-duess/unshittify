---
id: 32
title: "Roborock Local Server"
seoTitle: "Roborock local server: run your robot vacuum without the Roborock cloud"
device: "Roborock robot vacuums (most models; Q7-class unsupported)"
category: home
ai: "claude (commits)"
evidence: public
aiRole: "The README doesn't mention AI. The commit history lists Claude as co-author on 15 of 126 commits, and Copilot on others."
caveats: "Firmware updates and schedules don't work; routines and scenes do. Camera streaming needs a TURN relay and is verified on two models. China-market units don't work outside China. Setup needs a domain you control, local DNS rewriting and an SSL certificate."
evidenceNote: "Public project (1.2K stars) + Show HN post."
links:
  - { label: "repo", url: "https://github.com/Python-roborock/local_roborock_server" }
  - { label: "technical write-up", url: "https://python-roborock.github.io/local_roborock_server/technical_writeup/" }
  - { label: "show hn", url: "https://news.ycombinator.com/item?id=49877182" }
reviewed: 2026-10-28
submittedBy: unshittify
---

Luke Lashley, who maintains the Roborock integration in Home Assistant, runs a copy of Roborock's cloud backend on your own network. Vacuums keep live maps and local control without the internet, and nothing has to be rooted or opened.
