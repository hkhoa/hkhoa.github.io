import { EXPERIENCES } from "@/lib/constants";

export default function ExperienceList() {
  return (
    <ol className="experience-list">
      {EXPERIENCES.map((exp, index) => (
        <li key={exp.company} className="experience-row">
          <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
          <div className="experience-copy">
            <p>
              <span>{exp.title}</span>
              <small> at </small>
              {exp.companyUrl ? (
                <a className="experience-company" href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                  {exp.company}
                </a>
              ) : (
                <span className="experience-company experience-company-static">{exp.company}</span>
              )}
            </p>
            <div className="experience-details">
              <time>{exp.years.replace(" - ", " to ")}</time>
              {exp.note && (
                <>
                  <span aria-hidden="true">·</span>
                  <a href={exp.noteUrl} target="_blank" rel="noopener noreferrer">
                    {exp.note}
                  </a>
                </>
              )}
            </div>
          </div>
          <div className="company-marks">
            {exp.companyUrl ? (
              <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                <img src={exp.icon} alt={exp.company} draggable={false} />
              </a>
            ) : (
              <img src={exp.icon} alt={exp.company} draggable={false} />
            )}
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
