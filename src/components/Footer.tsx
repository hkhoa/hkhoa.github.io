import { NFT_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="text-sm text-text-secondary dark:text-text-dark-secondary">
      Check out my NFT collection on{" "}
      <a
        href={NFT_LINKS.opensea.url}
        target="_blank"
        rel="noopener noreferrer"
        className="wavy-link wavy-link-opensea"
      >
        {NFT_LINKS.opensea.label}
      </a>{" "}
      or{" "}
      <a
        href={NFT_LINKS.gallery.url}
        target="_blank"
        rel="noopener noreferrer"
        className="wavy-link wavy-link-gallery"
      >
        {NFT_LINKS.gallery.label}
      </a>
      .
    </footer>
  );
}
