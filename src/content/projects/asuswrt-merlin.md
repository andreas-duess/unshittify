---
id: 104
title: "Asuswrt-Merlin"
seoTitle: "Asuswrt-Merlin: community firmware that keeps Asus routers patched"
device: "Asus routers: RT-AX and RT-BE series, GT gaming routers, older RT-AC models"
category: computer
ai: "claude (commits)"
evidence: public
aiRole: "The maintainer's recent commits, including a kernel CVE fix, carry Co-Authored-By: Claude trailers. The project ran for more than a decade before that."
caveats: "Check your exact model; older routers have a final build, e.g. RT-AC68U and RT-AC86U on 386.14_2, RT-N66U on 380.70. Flashing third-party firmware can void the warranty."
evidenceNote: "Public GPL-based code, about 6,300 stars, maintained since 2012."
repo: "RMerl/asuswrt-merlin.ng"
links:
  - { label: "site", url: "https://www.asuswrt-merlin.net/" }
  - { label: "repo", url: "https://github.com/RMerl/asuswrt-merlin.ng" }
  - { label: "post", url: "https://x.com/dhlotter/status/2050466485466714265" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Asus stops shipping firmware for a router long before the hardware dies. Eric Sauvageau ("RMerlin") builds Asuswrt-Merlin from Asus's own GPL code, adds features and fixes, and keeps shipping security updates for models Asus has moved on from.

One owner's 2013 router runs 386.14, built November 2024. "Still patched."
