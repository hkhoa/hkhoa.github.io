import { CONTACT_LINKS } from "@/lib/constants";

export default function ContactSection() {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
        How to reach me
      </h3>
      <p>
        Find me on{" "}
        {CONTACT_LINKS.map((link, i) => (
          <span key={link.label}>
            {i > 0 && ", "}
            {i === CONTACT_LINKS.length - 1 && CONTACT_LINKS.length > 1 && (
              <>or </>
            )}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`wavy-link ${link.colorClass}`}
            >
              {link.label}
            </a>
          </span>
        ))}{" "}
        or send an email to me at khoa dot com.
      </p>
    </div>
  );
}
