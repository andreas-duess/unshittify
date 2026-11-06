---
id: 93
title: "OpenWrt"
seoTitle: "OpenWrt: replace your router's vendor firmware with maintained open source"
device: "Hundreds of home routers and access points (see the Table of Hardware)"
category: computer
ai: "none documented"
evidence: public
aiRole: "No AI use documented."
caveats: "Check your exact model and hardware revision in the Table of Hardware first; flashing the wrong image can brick a router, and flashing usually voids the warranty. Some vendor features, like the vendor's app or cloud management, go away."
evidenceNote: "Public code, community project since 2004."
repo: "openwrt/openwrt"
links:
  - { label: "site", url: "https://openwrt.org/" }
  - { label: "table of hardware", url: "https://openwrt.org/toh/start" }
  - { label: "install guide", url: "https://openwrt.org/docs/guide-user/installation/start" }
  - { label: "forum", url: "https://forum.openwrt.org/" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Router vendors stop shipping security updates long before the hardware wears out, and the stock firmware decides what you can configure. OpenWrt is a Linux distribution that replaces it: current kernels, security fixes, a package manager and full control over the network. The 24.10 release added initial Wi-Fi 7 support and Linux 6.6.
