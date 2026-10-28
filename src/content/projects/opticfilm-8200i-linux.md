---
id: 17
title: "OpticFilm 8200i on Linux"
seoTitle: "Plustek OpticFilm 8200i on Linux: a SANE backend built with Claude Code"
device: "Plustek OpticFilm 8200i film scanner (GL128 revision, USB 07b3:1825)"
category: make
ai: "claude code"
evidence: public
aiRole: "Claude Code compared USB captures of the vendor's driver, run in a virtual machine, with the Linux driver's traffic. Claude also wrote Negative Vibes. He published the method as hw-harness."
caveats: "Verified on one scanner. One frame per start, film holder positioned by hand, 35 mm only. Upstream SANE added this scanner in September 2026; he calls his backend a proof of concept."
evidenceNote: "Public code + detailed write-up."
links:
  - { label: "repo", url: "https://github.com/cschalle/OpticFilm8200i-sane" }
  - { label: "write-up", url: "https://blogs.gnome.org/uraeus/2026/10/15/aiandreverseengineerhardware/" }
  - { label: "negative vibes", url: "https://github.com/cschalle/negative-vibes" }
  - { label: "hw-harness", url: "https://github.com/cschalle/hw-harness" }
reviewed: 2026-10-28
submittedBy: unshittify
---

Christian Schaller wrote a Linux SANE backend for his Plustek film scanner: colour, gray, infrared and infrared dust removal, packaged for Fedora. He also built Negative Vibes, a GNOME app for scanning negatives and slides.
