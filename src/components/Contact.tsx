import { profile } from "../data/profile";

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact__inner" data-reveal>
        <p className="section__index">04 — Contact</p>
        <h2 className="contact__title" id="contact-title">
          {profile.contact.title}
        </h2>
        <p className="contact__lede">{profile.contact.lede}</p>

        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn btn--ghost" href="https://github.com/esimscode" target="_blank" rel="noreferrer">
            GitHub
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>

        <ul className="contact__links">
          {profile.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <span aria-hidden="true"> ↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
