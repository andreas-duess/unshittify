export const CATEGORIES = {
  tv: 'tv + displays',
  make: 'making + printing',
  home: 'home + appliances',
  audio: 'audio + wearables',
  computer: 'computers',
  vehicle: 'vehicles',
} as const;

export const EVIDENCE = {
  public: 'Code or detailed materials are published. Says nothing about safety, quality or maintenance.',
  report: 'The builder describes their result. Not reproduced by anyone else.',
  experimental: 'Core functions, compatibility or install steps still unsettled.',
} as const;

export const SNAPSHOT = '2026-10-28';

export const pad = (n: number) => String(n).padStart(3, '0');

// Google Analytics 4 measurement ID (G-XXXXXXX). Empty = no analytics, no consent banner.
export const GA_ID = 'G-BNFZF5QMMS';

export const SITE = 'https://unshittify.dev';
export const MAINTAINER = {
  '@type': 'Person',
  name: 'Andreas Duess',
  url: 'https://duess.com',
};

// Category hub pages: /c/<slug>
export const CATEGORY_PAGES: Record<keyof typeof CATEGORIES, { slug: string; h1: string; title: string; intro: string }> = {
  tv: {
    slug: 'tv-and-displays',
    h1: 'TVs and displays',
    title: 'Smart TV and display hacks: cleaner home screens, debloated Android TV',
    intro: 'Smart TVs with cluttered, ad-heavy home screens, and small screens stuck doing one job. These projects replace the launcher, strip unwanted apps or give the screen a new purpose.',
  },
  make: {
    slug: 'making-and-printing',
    h1: 'Making and printing',
    title: 'Printer, scanner and maker-machine fixes: drivers, apps and protocols',
    intro: 'Printers without drivers for current Macs, scanners macOS ignores, embroidery machines tied to a phone app. These projects write the missing software.',
  },
  home: {
    slug: 'home-and-appliances',
    h1: 'Home and appliances',
    title: 'Smart home devices after the cloud shuts down: local control projects',
    intro: 'Vacuums, washers, coffee machines and sleep trackers that stopped working when an app or server went away. These projects bring them back under local control.',
  },
  audio: {
    slug: 'audio-and-wearables',
    h1: 'Audio and wearables',
    title: 'Audio and wearable revivals: speakers, players, watches and instruments',
    intro: 'Speakers, kids\' audio players and sports watches whose official software no longer fits or no longer exists, and synths, samplers, drum machines and amps whose maker stopped updating them. These projects keep them working.',
  },
  computer: {
    slug: 'computers',
    h1: 'Computers',
    title: 'Old computers, new OS: keeping older Macs and laptops useful',
    intro: 'Computers that lost OS support but still have plenty of life. These projects put a maintained operating system on them.',
  },
  vehicle: {
    slug: 'vehicles',
    h1: 'Vehicles',
    title: 'Cars and scooters after the maker is gone: open firmware, local data and owner-run service',
    intro: 'Cars and scooters whose maker went bust, switched off the servers or locked the data away. These projects keep them running, updated and under the owner\'s control.',
  },
};

// AI tool hub pages: /ai/<slug>. `match` lists the `ai` field values that belong.
export const AI_PAGES = {
  'claude-code': {
    h1: 'Claude Code hardware projects',
    title: 'Claude Code hardware projects: reverse engineering, drivers and firmware',
    intro: 'Projects where the builder credits Claude Code or Claude: protocol reverse engineering, replacement firmware, drivers and local servers for hardware they own.',
    match: ['claude'],
  },
  chatgpt: {
    h1: 'ChatGPT hardware projects',
    title: 'ChatGPT hardware projects: replacement apps and protocol work',
    intro: 'Projects where the builder credits ChatGPT for the code or the reverse engineering.',
    match: ['chatgpt'],
  },
} as const;

export const pageTitle = (d: { title: string; device: string; seoTitle?: string }) =>
  d.seoTitle ?? `${d.title}: ${d.device}`;
