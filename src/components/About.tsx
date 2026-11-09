import { profile } from "../data/profile";

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="section__index">02 — About</p>
          <h2 className="section__title" id="about-title">
            Engineer by trade, marketer by instinct.
          </h2>
        </div>

        <div className="about">
          <div className="about__text" data-reveal>
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="about__signature">
              — {profile.name}, {profile.location}
            </p>
          </div>

          <aside className="about__panel" data-reveal aria-label="Quick facts">
            <dl>
              {profile.facts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="about__links">
              {profile.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span aria-hidden="true"> ↗</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
