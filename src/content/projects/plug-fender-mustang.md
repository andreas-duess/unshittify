---
id: 125
title: "Plug"
seoTitle: "Plug: edit Fender Mustang amps after Fender discontinued FUSE"
device: "Fender Mustang I to V (v1 and v2), Bronco, Mini and Floor USB modelling amps (2010 to 2017)"
category: audio
ai: "none documented"
evidence: public
aiRole: "No AI use documented."
caveats: "Linux-first (udev rule); packaged for Fedora, Debian multimedia and the AUR. Some Mustang v2 features are incomplete. No support for the later Mustang GT and LT, which use Bluetooth and the Fender Tone app."
evidenceNote: "Public code, GPL-3.0, about 85 stars, maintained since 2017, release 1.5.0 in December 2025."
repo: "offa/plug"
links:
  - { label: "repo", url: "https://github.com/offa/plug" }
reviewed: 2026-11-12
submittedBy: unshittify
---

Fender's FUSE software was the only way to edit presets on a generation of Mustang amps, and Fender discontinued it in March 2020. Plug, offa's continuation of piorekf's PLUG, is a desktop editor and preset librarian that talks to the amp over USB: amp models, effects, presets, saved to the amp or to disk.
