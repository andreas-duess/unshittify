// Death Watch: announced shutdowns and end-of-support dates for consumer
// hardware. Research notes and sources: vault Personal/unshittify/2026-11-05-death-watch-research.md
// `date` is the day used for sorting and the countdown. When only a month or
// year is announced, use its last day and say so in `when`.
// `fix` points at an unshittify entry slug, or is left out (then the page asks
// for one). Keep `checked` current when you review the list.

export type Kind = 'cloud shutdown' | 'app ends' | 'services removed' | 'updates end' | 'store closes' | 'network shutdown';

export interface Death {
  date: string; // YYYY-MM-DD
  when: string; // how the date is shown
  device: string;
  company: string;
  kind: Kind;
  stops: string;
  keeps?: string;
  sources: { label: string; url: string }[];
  fix?: { label: string; slug: string };
}

export const CHECKED = '2026-11-05';

export const DEATHS: Death[] = [
  {
    date: '2026-11-17', when: '17 Nov 2026', device: 'Blu-ray players, soundbars, AV receivers and wireless speakers', company: 'Sony',
    kind: 'services removed',
    stops: 'Built-in Netflix, Prime Video, Spotify, Google Cast, Pandora and other streaming services are removed.',
    keeps: 'Disc playback, HDMI inputs and offline audio keep working.',
    sources: [
      { label: 'Sony', url: 'https://www.sony.ca/en/electronics/support/home-video-other-home-video-products/smp-n100/articles/00398725' },
      { label: 'TechRadar', url: 'https://www.techradar.com/televisions/soundbars/sony-is-ending-streaming-support-for-lots-of-services-on-tons-of-its-speakers-soundbars-and-blu-ray-players' },
    ],
  },
  {
    date: '2026-12-31', when: 'End of 2026', device: 'Google Fit app and APIs', company: 'Google',
    kind: 'app ends',
    stops: 'Fit is replaced by Google Health. Scales, bands and trainers that sync through the Fit APIs lose that route.',
    keeps: 'Android Health Connect is Google’s replacement for apps that move over.',
    sources: [
      { label: '9to5Google', url: 'https://9to5google.com/2026/05/07/google-fit-shut-down-health-replacement-migration-tool-coming/' },
      { label: 'Android Central', url: 'https://androidcentral.com/apps-software/google-has-set-a-deadline-to-shut-down-the-google-fit-api' },
    ],
  },
  {
    date: '2026-12-31', when: '31 Dec 2026', device: 'Galaxy Watch 5 and 5 Pro', company: 'Samsung',
    kind: 'updates end',
    stops: 'No more Wear OS version upgrades.',
    keeps: 'Security patches are reported to continue into 2027.',
    sources: [
      { label: 'BGR', url: 'https://www.bgr.com/2259105/samsung-galaxy-watches-software-support-2027/' },
      { label: 'Engadget', url: 'https://engadget.com/2240149/smartwatches-last-year-of-updates' },
    ],
  },
  {
    date: '2027-03-31', when: 'Jan to Mar 2027', device: 'Quest 2 and Quest Pro', company: 'Meta',
    kind: 'updates end',
    stops: 'The last feature update (v2.13) rolls out. Security fixes continue to December 2027, then stop.',
    keeps: 'Owned games and the Store keep working.',
    sources: [
      { label: 'Meta', url: 'https://www.meta.com/help/quest/1587159486071016/' },
      { label: 'Android Authority', url: 'https://www.androidauthority.com/meta-quest-2-software-support-ending-3730955/' },
    ],
  },
  {
    date: '2027-04-30', when: 'End of Apr 2027', device: 'Fazua Ride 50 e-bike drives (Focus, Canyon, Gazelle, Riese & Müller, Cervélo and others)', company: 'Fazua (Porsche)',
    kind: 'app ends',
    stops: 'The Fazua Rider app ends. Ride 50 owners need a connectivity firmware update first to keep using the regular Fazua app.',
    keeps: 'The drives themselves keep working. CTDI took over service and the app on 31 Oct 2026.',
    sources: [{ label: 'bike-x.de', url: 'https://www.bike-x.de/e-bike/news/fazua-service-gerettet-was-nach-dem-porsche-aus-jetzt-passiert/' }],
  },
  {
    date: '2027-07-31', when: 'Jul 2027', device: 'PlayStation 3 and PS Vita store', company: 'Sony',
    kind: 'store closes',
    stops: 'No new purchases on the consoles.',
    keeps: 'Owned games and re-downloads continue "for the foreseeable future".',
    sources: [{ label: 'PlayStation', url: 'https://www.playstation.com/en-us/support/important-notice/' }],
  },
  {
    date: '2027-07-31', when: 'Jul 2027', device: 'Pixel 6a', company: 'Google',
    kind: 'updates end',
    stops: 'Security and OS updates end.',
    keeps: 'The phone keeps working.',
    sources: [{ label: 'Droid Life', url: 'https://www.droid-life.com/2026/07/20/google-confirms-end-of-life-status-for-pixel-6-and-pixel-6-pro/' }],
  },
  {
    date: '2027-10-31', when: 'Oct 2027', device: 'Pixel Watch 3', company: 'Google',
    kind: 'updates end',
    stops: 'The guaranteed update window ends.',
    sources: [{ label: 'Droid Life', url: 'https://www.droid-life.com/2026/02/04/google-pixel-watch-updates-schedule-release-years/' }],
  },
  {
    date: '2027-12-31', when: '2027 (month not announced)', device: 'Chromecast with Google TV (HD)', company: 'Google',
    kind: 'updates end',
    stops: 'The guaranteed update window ends. In May 2026 Google briefly listed older Chromecasts as end-of-life, then walked it back.',
    sources: [
      { label: 'The Desk', url: 'https://thedesk.net/2026/05/google-continue-supporting-chromecast-dongles-devices/' },
      { label: 'Android Authority', url: 'https://www.androidauthority.com/google-ends-chromecast-support-for-several-models-3670317/' },
    ],
  },
  {
    date: '2027-12-31', when: '31 Dec 2027', device: 'Bluetooth watches (W770, W410, W510 calibres)', company: 'Citizen',
    kind: 'app ends',
    stops: 'App support ends. From January 2028, notifications, time sync and other smart features may stop.',
    keeps: 'Timekeeping keeps working as a quartz watch.',
    sources: [
      { label: 'Citizen', url: 'https://www.citizenwatch-global.com/news/2026/20260331/index.html' },
      { label: 'Notebookcheck', url: 'https://www.notebookcheck.net/Citizen-to-end-support-for-Bluetooth-watch-apps-for-select-models.1265609.0.html' },
    ],
  },
  {
    date: '2029-12-31', when: 'Rolling, 2025 to 2029', device: 'Older connected cars in Europe (e.g. Volvo model year 2016 and earlier)', company: 'Volvo, VW, Renault and others',
    kind: 'network shutdown',
    stops: 'Remote app features (lock, climate, charging) and automatic emergency calls stop as each country closes its 2G and 3G networks.',
    keeps: 'Some cars can be fixed with a software update; others need a new modem.',
    sources: [
      { label: 'Volvo', url: 'https://volvocars.com/hr/support/topic/3dfde34564514717c0a8015113d79a83' },
      { label: 'VW UK', url: 'https://www.volkswagen.co.uk/en/owners-and-services/my-car/software-update/information-on-2G-3G-network-shutdown.html' },
      { label: 'Renault', url: 'https://www.renault.ie/connect/network-shutdown.html' },
    ],
  },

  // Recently gone
  {
    date: '2026-10-30', when: '30 Oct 2026', device: 'Fitbit Web API (legacy)', company: 'Google',
    kind: 'cloud shutdown',
    stops: 'Third-party apps that hadn’t moved to the Google Health API stopped syncing Fitbit data.',
    sources: [{ label: 'Fitbit', url: 'https://dev.fitbit.com/build/' }],
  },
  {
    date: '2026-10-07', when: 'Oct 2026', device: 'Echo (Echo Plus 2nd gen, Echo 3rd and 4th gen, Echo Studio 1st gen)', company: 'Amazon',
    kind: 'services removed',
    stops: 'A software update removed voice control of the AUX input.',
    keeps: 'The port still works and can be selected in the Alexa app.',
    sources: [{ label: 'Hackaday', url: 'https://hackaday.com/2026/10/08/with-latest-update-alexa-refuses-to-pass-the-aux/' }],
  },
  {
    date: '2026-10-01', when: '1 Oct 2026', device: 'Mindstorms Robot Inventor app (set 51515)', company: 'LEGO',
    kind: 'app ends',
    stops: 'The app was discontinued, with no further updates or support.',
    keeps: 'The hub can still be programmed in LEGO’s SPIKE app.',
    sources: [{ label: 'LEGO', url: 'https://www.lego.com/en-gb/service/help-topics/article/about-mindstorms-robot-inventor' }],
    fix: { label: 'Pybricks', slug: 'pybricks' },
  },
  {
    date: '2026-09-22', when: '22 Sep 2026', device: 'June Oven', company: 'Weber',
    kind: 'cloud shutdown',
    stops: 'The app, cloud, remote control, live camera and updates ended, along with repairs and parts.',
    keeps: 'It still works as a manual oven.',
    sources: [{ label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/June_(company)' }],
    fix: { label: 'Project July', slug: 'project-july-june-oven' },
  },
  {
    date: '2026-09-04', when: 'From 4 Sep 2026', device: 'Google Assistant on Android phones, Wear OS watches and earbuds', company: 'Google',
    kind: 'services removed',
    stops: 'Assistant was replaced by Gemini. Nest speakers and displays, Google TV and cars with Google built-in were not part of this phase.',
    sources: [{ label: '9to5Google', url: 'https://9to5google.com/2026/08/04/google-assistant-september-2026-shutdown/' }],
  },
  {
    date: '2026-07-15', when: '15 Jul 2026', device: 'Fitbit app (before 5.0) and legacy Fitbit accounts', company: 'Google',
    kind: 'cloud shutdown',
    stops: 'Old app versions lost support, and accounts not moved to a Google Account were to be deleted.',
    sources: [{ label: 'Android Authority', url: 'https://www.androidauthority.com/fitbit-app-workaround-google-health-3681642/' }],
  },
];
