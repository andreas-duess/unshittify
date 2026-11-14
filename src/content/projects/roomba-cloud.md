---
id: 145
title: "Roomba Cloud"
seoTitle: "Roomba Cloud: a self-hosted replacement for iRobot's cloud, Roomba 505"
device: "iRobot Roomba 505 and 507 (V4 robots)"
category: home
ai: "copilot (commits)"
evidence: public
aiRole: "The README does not mention AI. 21 of the repo's 49 commits carry a \"Co-authored-by: Copilot\" trailer, and 6 of 13 in the companion Home Assistant repo."
caveats: "One model is listed as physically tested, the Roomba 505/507 on one firmware version. From the README: \"Other V4 models have not been verified.\" It needs a domain name you control with a publicly trusted TLS certificate (Let's Encrypt support is built in), a server with ports 443 and 8883 free, and a Bluetooth computer near the robot for setup. The robot needs an NTP server to keep working. Provisioning disconnects the robot from iRobot's cloud; the README says Matter integrations keep working and the Roomba Home app's Change Wi-Fi process reconnects it. Map edits change the robot's saved map and cannot be reverted, and the emulator cannot restore maps to a robot. The author on whether iRobot could stop this: \"I can't guarantee they won't block this provisioning process in the future.\" Cleaning controls come through the companion Home Assistant integration. A move off a working cloud on a current robot."
evidenceNote: "Public code, MIT, about 12 stars, created 16 October 2026, release v1.0.12 on 13 November 2026."
repo: "carbon198/roomba-cloud"
links:
  - { label: "repo", url: "https://github.com/carbon198/roomba-cloud" }
  - { label: "home assistant integration", url: "https://github.com/carbon198/ha-roomba-local" }
reviewed: 2026-11-14
submittedBy: unshittify
---

iRobot's V4 Roombas send their telemetry and maps to iRobot's cloud, and the README says the robot's own MQTT server is not for local control. Stephen Basile's Roomba Cloud is a server you run yourself that takes the place of those cloud services. A Bluetooth tool sets the robot's Wi-Fi and cloud address, the same way the Roomba Home app's Change Wi-Fi feature does, so the robot firmware is not changed. Telemetry and maps then stay on the home network, and a companion integration controls the robot from Home Assistant.
