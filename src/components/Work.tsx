import { profile } from "../data/profile";

export function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="section__index">01 — Selected work</p>
          <h2 className="section__title" id="work-title">
            Things I've built and shipped.
          </h2>
          <p className="section__note">
            Five projects that show how I work: product decisions, front-end craft, and the plumbing that keeps it
            running.
          </p>
        </div>

        <ul className="work">
          {profile.projects.map((project, index) => {
            const number = String(index + 1).padStart(2, "0");

            const body = (
              <>
                <span className="work__index" aria-hidden="true">
                  {number}
                </span>
                <span className="work__body">
                  <span className="work__heading">
                    <span className="work__name">{project.name}</span>
                    <span className="work__year">{project.year}</span>
                  </span>
                  <span className="work__summary">{project.summary}</span>
                  <span className="work__description">{project.description}</span>
                  <span className="work__tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="work__arrow" aria-hidden="true">
                  ↗
                </span>
              </>
            );

            return (
              <li key={project.name} data-reveal style={{ "--reveal-delay": `${index * 60}ms` } as React.CSSProperties}>
                {project.href ? (
                  <a className="work__row" href={project.href} target="_blank" rel="noreferrer">
                    {body}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <div className="work__row work__row--static">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
