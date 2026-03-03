import { EXPERIENCES } from "@/lib/constants";

export default function ExperienceList() {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
        Experience
      </h3>
      <ul className="space-y-3">
        {EXPERIENCES.map((exp) => (
          <li key={exp.company}>
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
          </li>
        ))}
      </ul>
    </div>
  );
}
