import { EXPERIENCES } from "@/lib/constants";

export default function ExperienceList() {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
        Experience
      </h3>
      <ul className="space-y-3">
        {EXPERIENCES.map((exp) => (
          <li key={exp.company} className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium">
                {exp.title} at{" "}
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wavy-link"
                >
                  {exp.company}
                </a>
                {exp.note && (
                  <span className="text-text-secondary">
                    {" "}
                    (
                    {exp.noteUrl ? (
                      <a
                        href={exp.noteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wavy-link"
                      >
                        {exp.note}
                      </a>
                    ) : (
                      exp.note
                    )}
                    )
                  </span>
                )}
              </p>
              <p className="text-sm text-text-secondary">
                {exp.years}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={exp.icon}
                  alt={exp.company}
                  className="h-7 w-7 rounded-md"
                  draggable={false}
                />
              </a>
              {exp.noteIcon && (
                <a href={exp.noteUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={exp.noteIcon}
                    alt=""
                    className="h-7 w-7 rounded-md"
                    draggable={false}
                  />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
