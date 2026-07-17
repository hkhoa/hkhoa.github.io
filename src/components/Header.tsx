import { SITE, SUMMARY } from "@/lib/constants";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <div className="hero-content">
      <div className="hero-masthead">
        <Avatar />
        <div className="hero-identity">
          <div className="hero-name-row">
            <h1 id="page-title" data-text="Khoa Ho">Khoa Ho</h1>
            <a href={SITE.ensLink} target="_blank" rel="noopener noreferrer">
              {SITE.ensName}
            </a>
          </div>
          <p className="hero-role">{SITE.subtitle.replaceAll(" - ", " · ")}</p>
        </div>
      </div>

      <div className="hero-statement">
        <span className="statement-index">01</span>
        <div>
          <p className="hero-summary">{SUMMARY.main}</p>
          <p className="hero-history">{SUMMARY.previous}</p>
        </div>
      </div>
    </div>
  );
}
