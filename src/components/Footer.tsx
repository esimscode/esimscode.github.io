import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Vite. Hosted on GitHub Pages.
        </p>
        <a className="footer__top" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
