---
id: 90
title: "Bosch Compress Local"
seoTitle: "Bosch Compress Local: control a Bosch heat pump from Home Assistant with no cloud"
device: "Bosch Compress 7000i AW heat pump (AWM 5-9 indoor unit, RC300 controller, iCom IP module)"
category: home
ai: "none documented"
evidence: public
aiRole: "No AI use documented in the repo or commits."
caveats: "Tested on one installation and one IP module firmware (04.08.02). Other Bosch and IVT systems on the same protocol may work but are unverified. It controls heating equipment: check safety-critical behaviour at the appliance. Schedules and holiday settings are read-only. Needs Home Assistant 2026.8.3 or newer."
evidenceNote: "Public MIT repo with changelog + builder's X post."
links:
  - { label: "repo", url: "https://github.com/jarkkosyrjala/bosch-compress-local" }
  - { label: "post", url: "https://x.com/JarSyr/status/2093360270957506870" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Bosch heat pumps reach Home Assistant through Bosch's cloud or an extra bridge. Jarkko Syrjälä's integration talks straight to the heat pump's IP module over the home network, AES-encrypted, and works out what the module offers instead of assuming a fixed list.

Each heating circuit becomes a climate entity and each hot water circuit a water heater. Setpoints, extra hot water and the hot water program are writable only where the module says they are. Daily compressor and backup-heater kWh feed the Energy dashboard.
