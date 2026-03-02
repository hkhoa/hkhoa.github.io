import { SITE, SUMMARY } from "@/lib/constants";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar />
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-tight">
              {SITE.name}
            </h1>
            <a
              href={SITE.ensLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-text-primary/5 px-3 py-0.5 text-xs font-medium text-text-secondary transition-colors hover:bg-text-primary/10 dark:bg-white/5 dark:text-text-dark-secondary dark:hover:bg-white/10"
            >
              {SITE.ensName}
            </a>
          </div>
          <p className="mt-1 text-text-secondary dark:text-text-dark-secondary">
            {SITE.subtitle}
          </p>
        </div>
      </div>
      <div className="text-text-secondary dark:text-text-dark-secondary">
        <p>{SUMMARY.main}</p>
        <p className="mt-1 text-sm">{SUMMARY.previous}</p>
      </div>
    </div>
  );
}
