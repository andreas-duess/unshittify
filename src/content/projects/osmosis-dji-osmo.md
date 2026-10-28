---
id: 33
title: "Osmosis"
seoTitle: "Osmosis: download from DJI Osmo cameras without the Mimo app"
device: "DJI Osmo Nano, Osmo Pocket 3 / 4, Osmo Action 5 Pro / 6 cameras"
category: make
ai: "claude (commits)"
evidence: public
aiRole: "Not stated in the README or the creator's post. The commit history lists Claude as co-author on 258 of 366 commits."
caveats: "Other Osmo models are untested or in progress; drone offload is verified on the Mavic 3 only. Not on Google Play; install from F-Droid or GitHub releases. Not affiliated with DJI."
evidenceNote: "Public project + Show HN post + press review."
links:
  - { label: "repo", url: "https://github.com/KonradIT/osmosis" }
  - { label: "f-droid", url: "https://f-droid.org/packages/dev.konraditurbe.osmosis/" }
  - { label: "the verge", url: "https://www.theverge.com/tech/981852/osmosis-app-download-dji-osmo-camera-video-mimo-replacement" }
  - { label: "show hn", url: "https://news.ycombinator.com/item?id=49195068" }
reviewed: 2026-10-28
submittedBy: unshittify
---

Konrad Iturbe reverse engineered DJI's camera protocol to build an Android app that downloads photos and video from Osmo cameras without DJI's Mimo app, SDK, login or activation.
