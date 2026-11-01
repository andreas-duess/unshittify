---
id: 68
title: "alvidaa"
seoTitle: "alvidaa: root, a clean launcher and no telemetry on a Hisense VIDAA TV"
device: "Hisense 50A51HUV (MediaTek MTK9602, VIDAA OS)"
category: tv
ai: "glm via z code"
evidence: public
aiRole: "GLM 5.3 Flash in Z Code, about 300M tokens across parallel sessions: one agent did recon and root, another the launcher. The post is labelled AI-assisted and the repo has an AGENTS.md."
caveats: "One model and firmware. The boot hook needs a physical unplug to run. The local bridge has no authentication. Ad blocking by firewall rules is still to come. The write-up is a live log from late October 2026."
evidenceNote: "Public code + creator post + HN thread."
links:
  - { label: "creator post", url: "https://carteakey.dev/blog/homelab/alvidaa/" }
  - { label: "repo", url: "https://github.com/carteakey/alvidaa" }
  - { label: "hn", url: "https://news.ycombinator.com/item?id=50303340" }
reviewed: 2026-10-31
submittedBy: unshittify
---

The TV kept sending telemetry with every toggle off, booted into an ad-filled home screen and had no developer mode. Kartikey Chauhan reverse-engineered the remote pairing, got root through a writable boot hook and now runs his own launcher, with updates and telemetry blocked. It also runs Doom.
