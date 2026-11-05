---
id: 103
title: "OpenPin"
seoTitle: "OpenPin: a replacement assistant for the Humane Ai Pin after the shutdown"
device: "Humane Ai Pin"
category: computer
ai: "none documented"
evidence: experimental
aiRole: "No AI use documented in building it. The revived Pin runs an AI assistant, which is the product, not how it was made."
caveats: "Installing still needs a DIY interposer: a small pogo-pin USB board ordered from a PCB maker and a 3D-printed cradle. No commits since May 2025. Humane warned owners to stop using the Pin's charging case over a fire risk."
evidenceNote: "Public code + hardware files, press coverage."
links:
  - { label: "site", url: "https://openpin.org/" }
  - { label: "repo", url: "https://github.com/MaxMaeder/OpenPin" }
  - { label: "wccftech", url: "https://wccftech.com/humane-ai-pin-brought-back-to-life-by-open-source-hack/" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Humane shut the Pin's servers down in February 2025. Max Maeder's OpenPin replaces the assistant with one owners can run, installed in a few clicks and without Humane's ADB certificates.

[PenumbraOS](/p/penumbraos-humane-ai-pin/) goes the other way: it uses Humane's leaked certificate and an Android exploit to get near-system access, and is meant for developers. OpenPin aims at owners who just want the Pin working again.
