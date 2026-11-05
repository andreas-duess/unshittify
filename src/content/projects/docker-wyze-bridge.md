---
id: 106
title: "docker-wyze-bridge"
seoTitle: "docker-wyze-bridge: local RTSP and WebRTC streams from Wyze cameras"
device: "Wyze Cam v1, v2, v3, v3 Pro, v4, Pan, Floodlight, Outdoor and Doorbell models"
category: home
ai: "none documented"
evidence: public
aiRole: "No AI use documented."
caveats: "Still needs a Wyze account and, since May 2024, a Wyze API key and ID. Streams keep going without internet for a while but will probably stop eventually; for fully offline use the project points to the wz_mini_hacks firmware mod. Wyze Cam OG, OG Telephoto and Doorbell Pro aren't supported. Upstream has been quiet since September 2024; the most active fork is IDisposable's. Don't port-forward the bridge."
evidenceNote: "Public AGPL-3.0 repo, about 3,300 stars."
links:
  - { label: "repo", url: "https://github.com/mrlt8/docker-wyze-bridge" }
  - { label: "active fork", url: "https://github.com/IDisposable/docker-wyze-bridge" }
  - { label: "wz_mini_hacks", url: "https://github.com/gtxaspec/wz_mini_hacks" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Wyze cameras stream to the Wyze app and nowhere else. mrlt8's Docker container uses the same SDK as the app to pull video straight from the cameras on your network, then serves it as RTSP, WebRTC, RTMP or low-latency HLS for Home Assistant, Frigate or any NVR. No firmware changes.
