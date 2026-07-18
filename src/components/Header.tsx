import { SITE } from "@/lib/constants";
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

      <div className="hero-about">
        <p>
          i&apos;m an engineer, crypto geek, and builder. i <em>care deeply</em> about
          making ambitious systems feel simple, useful, and human. these days,
          i&apos;m tinkering with ai and following whatever feels interesting.
        </p>
      </div>
    </div>
  );
}
