---
id: 152
title: "Centauri Carbon 2 Community Firmware"
seoTitle: "Centauri Carbon 2 Community Firmware: local control for ELEGOO's printer"
device: "ELEGOO Centauri Carbon 2 3D printer"
category: make
ai: "claude (commits)"
evidence: public
aiRole: "The README does not say AI was used; it points contributors to AGENTS.md, whose rules apply to \"contributors and coding agents\". 8 of the latest 100 commits (8 to 13 November 2026) carry Claude Co-Authored-By trailers, all squashed pull requests from one contributor, and 2 carry a Cursor Agent trailer."
caveats: "A feature project on a working printer. The release is a complete firmware image. NOTICE.md says it \"is derived from the ELEGOO Centauri Carbon 2 stock package 02.01.01.13\" and \"includes vendor and third-party components, including an SSH implementation\". The README says: \"Community code and vendor firmware have distinct licensing scopes.\" It also says the GPL-3.0 licence covers the project's own code and \"does not relicense ELEGOO firmware images, modified vendor executables, embedded third-party software, trademarks or signing keys\", and that the project \"does not yet contain a complete component license/source inventory and does not certify compliance with all redistribution requirements\". From the README: the separate Recovery package is not released, and \"do not assume a universal reset or guaranteed loss-free recovery exists for every unknown state\". RFID support is optional and not tested with every tag brand."
evidenceNote: "Public code, GPL-3.0 for the project's own code, about 140 stars, repo created September 2026, release V4.4.4 (Universal 07) on 12 November 2026."
repo: "Neme77/centauri-carbon-2-community"
links:
  - { label: "repo", url: "https://github.com/Neme77/centauri-carbon-2-community" }
  - { label: "licensing notice", url: "https://github.com/Neme77/centauri-carbon-2-community/blob/develop/NOTICE.md" }
  - { label: "elegoo's public repo", url: "https://github.com/elegooofficial/CentauriCarbon2" }
reviewed: 2026-11-14
submittedBy: unshittify
---

Neme77 maintains a community firmware for the ELEGOO Centauri Carbon 2, with contributions and printer testing from other owners. It is built on ELEGOO's own firmware and installed from USB through the printer's Offline Update. The repo describes SSH and root access, LAN and WAN working side by side, object exclusion, local MQTT and webcam, and OrcaSlicer integration. It also adds CC2 Control, a web panel with a print queue, bed mesh and screw tramming tools, spool tracking and optional reading of filament RFID tags beyond the original producer filter.
