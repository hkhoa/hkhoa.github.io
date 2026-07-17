import { CONTACT_LINKS } from "@/lib/constants";

export default function ContactSection() {
  return (
    <nav className="contact-links">
      {CONTACT_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target={link.url.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          <span>{link.icon === "x" ? "x /" : link.icon}</span>
          <strong>{link.label}</strong>
          <i aria-hidden="true">↗</i>
        </a>
      ))}
    </nav>
  );
}
