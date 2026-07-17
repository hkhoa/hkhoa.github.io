import { NFT_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <span>engineered systems.</span>
      <span aria-hidden="true">/</span>
      <p>
        open editions: <a href={NFT_LINKS.opensea.url} target="_blank" rel="noopener noreferrer">{NFT_LINKS.opensea.label}</a>
        {" / "}
        <a href={NFT_LINKS.gallery.url} target="_blank" rel="noopener noreferrer">{NFT_LINKS.gallery.label}</a>
      </p>
      <span aria-hidden="true">/</span>
      <span>shared future.</span>
    </footer>
  );
}
