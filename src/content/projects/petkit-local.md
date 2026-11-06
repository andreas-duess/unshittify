---
id: 109
title: "PetKit Local"
seoTitle: "PetKit Local: run PetKit litter boxes, fountains and feeders with no PetKit cloud"
device: "PetKit Purobot Max Pro 2 and Ultra litter boxes, EverSweet Ultra AI and Max Cordless fountains, YumShare Dual-Hopper feeder"
category: home
ai: "llm (unnamed)"
evidence: public
aiRole: "The README says \"Most of the code was written with an LLM\" and names no model. The protocol meaning came from the builder's own packet captures and from strings and functions in the firmware."
caveats: "Five models confirmed; others are listed as should-work or untested. The builder notes that confirmed is not the same as complete, and the code grades each protocol fact as confirmed, inferred, unverified or conflicted. Patching a device changes its certificate trust and streaming settings."
evidenceNote: "Public GPL-3.0 repo. New."
repo: "alex-so-3/petkit-local"
links:
  - { label: "repo", url: "https://github.com/alex-so-3/petkit-local" }
reviewed: 2026-11-04
submittedBy: unshittify
---

PetKit's litter boxes have a camera and a microphone, and everything they see goes through PetKit's servers. alex-so-3 "wanted my litter box off a Chinese cloud", so they wrote a local stand-in: one Python container, as a Home Assistant app or with Docker Compose, that keeps working with the internet unplugged.

It sets devices up over Bluetooth from the browser, stores camera recordings locally, streams over RTSP and pushes pet photos to the camera so cat recognition runs on the device. In proxy mode it blocks the cloud from pushing firmware or shell commands.
