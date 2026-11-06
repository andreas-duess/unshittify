---
id: 38
title: "xbloom-ble"
seoTitle: "xbloom-ble: script an xBloom coffee machine without the app"
device: "xBloom Studio coffee machine"
category: home
ai: "claude code"
evidence: public
aiRole: "The README says the project is written and maintained by Claude Code. The owner verified the protocol on the real machine and set the safety rule: loading a recipe only arms the machine, starting is a separate step."
caveats: "Verified on one machine and firmware; updates could break it. The machine allows one Bluetooth connection, so close the phone app first. Starting remotely dispenses near-boiling water; only start with the machine ready."
evidenceNote: "Public repo + PyPI package."
repo: "Janczykkkko/xbloom-ble"
links:
  - { label: "repo", url: "https://github.com/Janczykkkko/xbloom-ble" }
  - { label: "pypi", url: "https://pypi.org/project/xbloom-ble/" }
reviewed: 2026-10-29
submittedBy: unshittify
---

There is no official xBloom API; recipes lived only in the phone app. Janczykkkko's command-line tool loads recipes from YAML files, shows live weight from the machine's scale and programs the dial presets, so everyday coffees brew with no phone.
