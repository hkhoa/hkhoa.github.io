export const SITE = {
  name: "Khoa Ho",
  title: "gm, i'm khoa",
  subtitle: "Engineer - Crypto geek - Buildooor",
  description: "Khoa is an engineer working in crypto.",
  ogImage: "https://i.ibb.co/6DfMPRp/khoa-preview.jpg",
  ensName: "khoa.eth",
  ensLink: "https://zapper.xyz/account/khoa.eth",
  doodlesLink: "https://doodles.app",
} as const;

export const SUMMARY = {
  main: "Building the next generation of financial infrastructure onchain.",
  previous: "Prev: BSX, Coinbase, Georgia Tech grad",
} as const;

export type Experience = {
  title: string;
  company: string;
  companyUrl: string;
  note?: string;
  noteUrl?: string;
  years: string;
};

export const EXPERIENCES: Experience[] = [
  {
    title: "Co-founder/CTO",
    company: "BSX",
    companyUrl: "https://www.bsx.exchange/",
    note: "acquired by RISE",
    noteUrl: "https://x.com/risechain",
    years: "2023 - 2025",
  },
  {
    title: "Technical Lead",
    company: "Coinbase",
    companyUrl: "https://coinbase.com/",
    years: "2017 - 2023",
  },
];

export type ContactLink = {
  label: string;
  url: string;
  colorClass: string;
};

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/hokhoa/",
    colorClass: "wavy-link-linkedin",
  },
  {
    label: "Farcaster",
    url: "https://warpcast.com/khoa",
    colorClass: "wavy-link-farcaster",
  },
  {
    label: "Twitter",
    url: "https://twitter.com/0xkhoa",
    colorClass: "wavy-link-twitter",
  },
];

export const NFT_LINKS = {
  opensea: { label: "OpenSea", url: "https://opensea.io/khoa" },
  gallery: { label: "Gallery", url: "https://gallery.so/khoa" },
} as const;
