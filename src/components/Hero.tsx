import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow">
          <span className="dot" aria-hidden="true" />
          {profile.availability}
        </p>

        <h1 className="hero__title" id="hero-title">
          {profile.headline.before}
          <span className="accent">{profile.headline.accent}</span>
        </h1>

        <p className="hero__lede">{profile.lede}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            See selected work
            <span aria-hidden="true">↓</span>
          </a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>

        <dl className="hero__meta">
          <div className="meta-item">
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          <div className="meta-item">
            <dt>Focus</dt>
            <dd>React &amp; TypeScript, end to end</dd>
          </div>
          <div className="meta-item">
            <dt>Now</dt>
            <dd>Building at Live Cultr</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
