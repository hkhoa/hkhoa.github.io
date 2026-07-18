export const SITE = {
  name: "Khoa Ho",
  title: "gm, i'm khoa",
  subtitle: "engineer - AI/crypto geek - builder",
  description: "Khoa is an engineer in Los Angeles who likes building useful things.",
  ogImage: "https://i.ibb.co/6DfMPRp/khoa-preview.jpg",
  ensName: "khoa.eth",
  ensLink: "https://app.ens.domains/khoa.eth",
  doodlesLink: "https://doodles.app",
} as const;

export type Experience = {
  title: string;
  company: string;
  companyUrl: string;
  icon: string;
  note?: string;
  noteUrl?: string;
  noteIcon?: string;
  description?: string;
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
    label: "khoa0x",
    url: "https://github.com/hkhoa",
    colorClass: "wavy-link-github",
    icon: "github",
  },
  {
    label: "hokhoa",
    url: "https://www.linkedin.com/in/hokhoa/",
    colorClass: "wavy-link-linkedin",
    icon: "linkedin",
  },
  {
    label: "me@khoa.com",
    url: "mailto:me@khoa.com",
    colorClass: "wavy-link-email",
    icon: "email",
  },
];

export const NFT_LINKS = {
  opensea: { label: "OpenSea", url: "https://opensea.io/khoa" },
  gallery: { label: "Gallery", url: "https://gallery.so/khoa" },
} as const;
