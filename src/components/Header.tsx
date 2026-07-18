import { SITE } from "@/lib/constants";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <div className="hero-content">
      <h1 id="page-title" className="visually-hidden">{SITE.name}</h1>
      <div className="hero-system-label" aria-hidden="true">
        <span>sys</span>
        id / 01
      </div>

      <div className="hero-masthead">
        <Avatar />
        <div className="hero-identity">
          <p className="hero-role">{SITE.subtitle.replaceAll(" - ", " · ")}</p>
          <div className="hero-meta-row">
            <a className="hero-ens" href={SITE.ensLink} target="_blank" rel="noopener noreferrer">
              {SITE.ensName}
            </a>
            <span className="hero-meta-rule" aria-hidden="true" />
            <p className="hero-location">
              Los Angeles
              <small>34.0522° N · 118.2437° W</small>
            </p>
          </div>
        </div>
      </div>

      <div className="hero-about">
        <p>
          Hey there, I&apos;m Khoa 👋 I&apos;m an engineer and I like building things.
        </p>
        <p>
          I <em>care deeply</em>{" "}about craft and making ambitious systems feel
          simple, useful, and human.
        </p>
      </div>
    </div>
  );
}
