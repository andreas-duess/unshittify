---
id: 105
title: "Kindshare"
seoTitle: "Kindshare: send files from Android Quick Share to a jailbroken Kindle"
device: "Jailbroken Kindle (verified on Kindle Voyage, firmware 5.13.6)"
category: computer
ai: "claude (commits)"
evidence: experimental
aiRole: "Commits from both contributors carry Co-Authored-By: Claude trailers."
caveats: "Verified end to end on one Kindle Voyage only; check the compatibility notes for other models. Needs a jailbroken Kindle with KUAL, KOReader and SSH. Building needs Go and Docker. Starting at boot needs one write to the root filesystem."
evidenceNote: "Public MIT repo with protocol notes and a porting guide. New."
repo: "unrealJune/kindshare"
links:
  - { label: "repo", url: "https://github.com/unrealJune/kindshare" }
  - { label: "compatibility", url: "https://github.com/unrealJune/kindshare/blob/main/docs/COMPATIBILITY.md" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Getting a file onto a Kindle means Amazon's Send to Kindle service or a USB cable. June Philip wrote Quick Share from scratch in Go, so an Android phone can send books straight to the Kindle with nothing installed on the phone. It runs as a background daemon, switched on from a KOReader menu, and files land in the documents folder.

The Kindle can also act as its own Wi-Fi access point, and Macs can send to it through NearDrop. A plain upload web page is the fallback.
