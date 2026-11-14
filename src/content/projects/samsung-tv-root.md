---
id: 144
title: "Samsung TV root"
seoTitle: "Samsung TV root: root access on QN90B and QN90F Tizen TVs, built with Codex"
device: "Samsung QN90B (bought 2022) and QN90F (bought 2026) Tizen TVs"
category: tv
ai: "codex"
evidence: public
aiRole: "From the README: \"The QN90B took about a day with Codex in May 2026. The QN90F took about three hours with a newer version of Codex in July 2026, right out of the box.\" The README does not say more about what Codex did. No commit carries an AI trailer."
caveats: "The routes are tested on two exact TVs and firmware versions, QN55QN90BAFXZA and QN75QN90FAFXZA. The README warns: \"Do not substitute a different TV just because its model name looks similar.\" It uses a Samsung SDB flaw (SVE-2025-50109) and kernel exploits, including CVE-2025-0072 on the QN90F. It needs Developer Mode, Samsung's sdb tool and a controller computer on the same network. Root does not survive a power cycle; the host controller regains it and installs nothing on the TV to run at boot. The archive route's probe command is a full root attempt, and an interrupted attempt may leave files on the TV's user storage. From the README: \"UID 0 does not remove every Samsung security boundary.\" The author keeps his TVs blocked from the internet. The repo contains no Samsung firmware, binaries or extracted keys, but it documents recovering firmware keys on the two tested models. The README gives no statement on warranty or legal position. A feature project on TVs that still work as sold."
evidenceNote: "Public code, Unlicense, about 575 stars, created 17 August 2026, release v0.0.13 on 14 November 2026."
repo: "chris-ritsen/samsung-tv-root"
links:
  - { label: "repo", url: "https://github.com/chris-ritsen/samsung-tv-root" }
  - { label: "compatibility record", url: "https://github.com/chris-ritsen/samsung-tv-root/blob/master/docs/user/COMPATIBILITY.md" }
reviewed: 2026-11-14
submittedBy: unshittify
---

Samsung's Tizen TVs give the owner no root access. Christopher Ritsen built root exploits for the two Samsung TVs he owns, in his words "to make the TVs less annoying". A controller program on a computer on the same network regains root each time a TV powers on. He uses it to remap the remote to whichever computer is connected, control playback in YouTube and Plex, and collect diagnostics from the TV.
