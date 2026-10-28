export const CATEGORIES = {
  tv: 'tv + displays',
  make: 'making + printing',
  home: 'home + appliances',
  audio: 'audio + wearables',
  computer: 'computers',
} as const;

export const EVIDENCE = {
  public: 'Code or detailed materials are published. Says nothing about safety, quality or maintenance.',
  report: 'The builder describes their result. Not reproduced by anyone else.',
  experimental: 'Core functions, compatibility or install steps still unsettled.',
} as const;

export const SNAPSHOT = '2026-10-28';

export const pad = (n: number) => String(n).padStart(3, '0');

// Google Analytics 4 measurement ID (G-XXXXXXX). Empty = no analytics, no consent banner.
export const GA_ID = '';
