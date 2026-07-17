import { EXPERIENCES } from "@/lib/constants";

export default function ExperienceList() {
  return (
    <ol className="experience-list">
      {EXPERIENCES.map((exp, index) => (
        <li key={exp.company} className="experience-row">
          <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
          <div className="experience-copy">
            <p>
              {exp.title}
            </p>
            {exp.description && (
              <span className="experience-description">{exp.description}</span>
            )}
            {exp.note && (
              <a href={exp.noteUrl} target="_blank" rel="noopener noreferrer">
                {exp.note}
              </a>
            )}
          </div>
          <time>{exp.years.replace(" - ", " to ")}</time>
          <div className="company-marks">
            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
              <img src={exp.icon} alt={exp.company} draggable={false} />
            </a>
            {exp.noteIcon && (
              <a href={exp.noteUrl} target="_blank" rel="noopener noreferrer">
                <img src={exp.noteIcon} alt="RiSE" draggable={false} />
              </a>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
