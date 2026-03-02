"use client";

import { SITE } from "@/lib/constants";

export default function NftBadge({ visible }: { visible: boolean }) {
  return (
    <a
      href={SITE.doodlesLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`absolute -right-2 -top-2 z-10 rounded-full bg-text-primary px-1.5 py-0.5 text-[10px] font-bold text-white transition-opacity dark:bg-white dark:text-dark-bg ${
        visible ? "opacity-100" : "animate-fade-out-down"
      }`}
    >
      NFT
    </a>
  );
}
