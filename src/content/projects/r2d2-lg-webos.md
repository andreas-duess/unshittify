---
id: 67
title: "R2D2"
seoTitle: "R2D2: a rooted LG webOS TV with a new launcher, local voice and no telemetry"
device: "LG webOS TV (one model and firmware build)"
category: tv
ai: "multiple models"
evidence: public
aiRole: "The builder says all of the code was written by models: GPT-6 Astra and GPT-6.1 Sol for the launcher and blocking, Claude Opus 5.5 for the UI and video stream, and Argon for voice. He made the design decisions."
caveats: "Tested on one TV and firmware; pins and offsets must be found again for others. Needs root, and the write-up doesn't cover getting it. Voice and the browser need a CUDA machine with about 10 GB of models. Weather works in the US only."
evidenceNote: "Public code + creator post + Show HN post."
links:
  - { label: "creator post", url: "https://anubhavmalhotra.com/vibing/r2d2-webos/" }
  - { label: "repo", url: "https://github.com/anubhavmalhotra/r2d2-tv" }
  - { label: "show hn", url: "https://news.ycombinator.com/item?id=50202865" }
reviewed: 2026-10-31
submittedBy: unshittify
---

An unwanted webOS update brought apps nobody asked for, terms-gated voice and telemetry. Anubhav Malhotra rooted the TV, gave it his own launcher and push-to-talk voice through the remote's mic with local speech models, and blocks LG's telemetry and content-recognition servers around the clock.
