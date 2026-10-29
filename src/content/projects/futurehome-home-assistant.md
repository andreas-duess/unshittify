---
id: 58
title: "Futurehome add-on"
seoTitle: "Futurehome hub in Home Assistant after the paywall"
device: "Futurehome Smarthub"
category: home
ai: "claude (commits)"
evidence: public
aiRole: "One commit is co-authored by Claude; the author makes no broader statement about AI use."
caveats: "Depends on the hub's local API staying open; the docs advise blocking the hub's internet access so an update cannot close it. A hub whose trial expired may need a factory reset. Some hub services are not covered."
evidenceNote: "Public repo."
links:
  - { label: "repo", url: "https://github.com/adrianjagielak/home-assistant-futurehome" }
reviewed: 2026-10-29
submittedBy: unshittify
---

After Futurehome went bankrupt in 2025, basic hub functions became subscription-only. Adrian Jagielak's add-on runs the hub from Home Assistant instead: discovery, state, control, pairing and house modes, free and local.
