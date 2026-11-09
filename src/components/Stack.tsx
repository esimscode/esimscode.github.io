import { profile } from "../data/profile";

export function Stack() {
  return (
    <section className="section" id="stack" aria-labelledby="stack-title">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="section__index">03 — Tools</p>
          <h2 className="section__title" id="stack-title">
            What I reach for.
          </h2>
          <p className="section__note">
            Boring where it counts, modern where it helps. These are the tools I've shipped real work with.
          </p>
        </div>

        <div className="stack">
          {profile.stack.map((group, index) => (
            <div
              className="stack__group"
              key={group.label}
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
            >
              <h3 className="stack__label">{group.label}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
