---
id: 20
title: "Bose SoundTouch revival"
seoTitle: "Bose SoundTouch after the cloud shutdown: presets and internet radio back"
device: "Bose SoundTouch 20 + M5Stack Atom Lite (ESP32)"
category: audio
ai: "claude + chatgpt"
evidence: public
aiRole: "ChatGPT first, then Claude, wrote the relay and the ESP32 firmware and read the protocol specs. The creator says the key ideas were his and both AIs gave up at the decision points."
caveats: "Spotify, Amazon Music and other cloud services are gone for good; AirPlay still works. The relay runs on a server you host. The display can show the station name or the stream can be saved as a preset, but not both at once."
evidenceNote: "Public project + creator account."
repo: "sergei-ponomarenko/bose-soundtouch"
links:
  - { label: "repo", url: "https://github.com/sergei-ponomarenko/bose-soundtouch" }
  - { label: "creator post", url: "https://www.reddit.com/r/bose/comments/1tie903/" }
  - { label: "soundtouch 10 alternative", url: "https://github.com/skarl/bose-soundtouch-resurrect" }
reviewed: 2026-10-28
submittedBy: unshittify
---

Bose shut down the SoundTouch cloud in May 2026. Sergei Ponomarenko brought back internet radio and the six preset buttons with a small relay for the streams and ESP32 firmware that catches preset presses and replays them to the speaker.
