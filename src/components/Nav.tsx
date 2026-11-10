import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="container nav">
        <a className="nav__brand" href="#top" aria-label={`${profile.name}, back to top`}>
          <img
            className="nav__mark"
            src="/eric-sims-avatar.webp"
            alt=""
            width={34}
            height={34}
            decoding="async"
          />
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {links.map((link) => (
            <a key={link.href} className="nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav__cta" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
