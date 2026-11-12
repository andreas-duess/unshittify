---
id: 131
title: "EPS-16 Plus browser uploader"
seoTitle: "Load WAV samples into an Ensoniq EPS-16 Plus from a browser over MIDI"
device: "Ensoniq EPS-16 Plus sampler (1990)"
category: audio
ai: "none documented"
evidence: public
aiRole: "No AI use documented in the README, the commits or the source."
caveats: "Mono WAV only, and large files are slow. A known transfer bug sometimes needs a browser refresh and a retry. Needs a browser with Web MIDI, so Chrome or Edge."
evidenceNote: "Public code, MIT, hosted copy linked from the README, maintained since 2023."
repo: "summitt/EnsoniqEPS16Plus"
links:
  - { label: "repo", url: "https://github.com/summitt/EnsoniqEPS16Plus" }
reviewed: 2026-11-12
submittedBy: unshittify
---

The old tools for getting samples into an EPS-16 Plus stopped running on current machines, Apple Silicon Macs among them. summitt's single-page web app pushes WAV files into the sampler over SysEx, pulls samples back out, and creates the instrument and layer on the machine if they do not exist yet.
