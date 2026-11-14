---
id: 68
title: "alvidaa"
seoTitle: "Hisense TV ads gone: alvidaa roots VIDAA for a clean launcher"
device: "Hisense and other VIDAA OS TVs; first built on a Hisense 50A51HUV (MediaTek MTK9602)"
category: tv
ai: "glm via z code"
evidence: public
aiRole: "GLM 5.3 Flash in Z Code, about 300M tokens across parallel sessions: one agent did recon and root, another the launcher. The post is labelled AI-assisted and the repo has an AGENTS.md."
caveats: "Root is specific to a model and a firmware version: the README says the chain that works on a 50A51HUV does nothing on a 100U7Q. Version 2.0 (9 November 2026) lists 16 model guides across five chip families. The launcher can also run from a Raspberry Pi or NAS without root. The creator post describes the first TV only, as it stood in late October 2026."
evidenceNote: "Public code (v1.0 on 3 November 2026, v2.0 on 9 November) + creator post + HN thread."
repo: "carteakey/alvidaa"
links:
  - { label: "creator post", url: "https://carteakey.dev/blog/homelab/alvidaa/" }
  - { label: "repo", url: "https://github.com/carteakey/alvidaa" }
  - { label: "hn", url: "https://news.ycombinator.com/item?id=50303340" }
reviewed: 2026-11-14
submittedBy: unshittify
---

The TV kept sending telemetry with every toggle off, booted into an ad-filled home screen and had no developer mode. Kartikey Chauhan reverse-engineered the remote pairing, got root through a writable boot hook and now runs his own launcher, with updates and telemetry blocked. It also runs Doom. Since then the project has grown to other VIDAA TVs, and version 2.0 can replace the home screen inside the TV's own software instead of redirecting the browser.
