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
  icon: string;
  note?: string;
  noteUrl?: string;
  noteIcon?: string;
  years: string;
};

export const EXPERIENCES: Experience[] = [
  {
    title: "Co-founder/CTO",
    company: "BSX",
    companyUrl: "https://bsxfdn.com/",
    icon: "/icons/bsx.png",
    note: "acquired by RISE",
    noteUrl: "https://x.com/risechain/status/1988261714769645772",
    noteIcon: "/icons/rise.png",
    years: "2023 - 2025",
  },
  {
    title: "Technical Lead",
    company: "Coinbase",
    companyUrl: "https://coinbase.com/",
    icon: "/icons/coinbase.png",
    years: "2017 - 2023",
  },
];

export type ContactLink = {
  label: string;
  url: string;
  colorClass: string;
  icon: string;
};

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "0xkhoa",
    url: "https://twitter.com/0xkhoa",
    colorClass: "wavy-link-twitter",
    icon: "x",
  },
  {
    label: "GitHub",
    url: "https://github.com/hkhoa",
    colorClass: "wavy-link-github",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/hokhoa/",
    colorClass: "wavy-link-linkedin",
    icon: "linkedin",
  },
  {
    label: "email",
    url: "mailto:me@khoa.com",
    colorClass: "wavy-link-email",
    icon: "email",
  },
];

export const NFT_LINKS = {
  opensea: { label: "OpenSea", url: "https://opensea.io/khoa" },
  gallery: { label: "Gallery", url: "https://gallery.so/khoa" },
} as const;
