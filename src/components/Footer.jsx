import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const TryHackMeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M10.705 0C7.54 0 4.902 2.285 4.374 5.297a4.342 4.342 0 00-.623-.045C1.679 5.252 0 6.989 0 9.122c0 2.133 1.679 3.87 3.751 3.87h.302v-.005c.02 0 .038.005.058.005h13.028c2.51 0 4.545-2.116 4.545-4.726S19.648 3.54 17.138 3.54c-.107 0-.21.006-.315.013C16.346 1.481 13.735 0 10.705 0zM4 17a1 1 0 000 2h16a1 1 0 000-2H4zm2 4a1 1 0 000 2h12a1 1 0 000-2H6z" />
  </svg>
);

const links = [
  { href: "https://github.com/Sanatan07",            label: "GitHub",     Icon: () => <Github size={18} aria-hidden="true" /> },
  { href: "https://www.linkedin.com/in/sanatanbramhane/", label: "LinkedIn",  Icon: () => <Linkedin size={18} aria-hidden="true" /> },
  { href: "https://medium.com/@sanatan.bramhane",    label: "Medium",     Icon: MediumIcon },
  { href: "https://x.com/Sanatan781",               label: "Twitter / X", Icon: () => <Twitter size={18} aria-hidden="true" /> },
  { href: "https://tryhackme.com/p/Sanatan",         label: "TryHackMe",  Icon: TryHackMeIcon },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const css = `
    .footer-slim {
      padding: 1rem 2rem;
      background: rgba(2, 6, 5, 0.98);
      border-top: 1px solid rgba(0, 255, 163, 0.1);
    }

    .footer-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .footer-copy {
      color: #6b9e8a;
      font-size: 0.83rem;
    }

    .footer-icons {
      display: flex;
      gap: 0.5rem;
    }

    .footer-icon-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.1rem;
      height: 2.1rem;
      border-radius: 0.6rem;
      color: #8ecfb8;
      border: 1px solid rgba(0, 255, 163, 0.12);
      background: rgba(7, 19, 15, 0.7);
      transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
      text-decoration: none;
    }

    .footer-icon-link:hover {
      color: #ffffff;
      background: rgba(0, 255, 163, 0.1);
      border-color: rgba(0, 255, 163, 0.35);
    }

    @media (max-width: 480px) {
      .footer-inner {
        justify-content: center;
        flex-direction: column;
        gap: 0.75rem;
      }
    }
  `;

  return (
    <>
      <style>{css}</style>
      <footer className="footer-slim">
        <div className="footer-inner">
          <span className="footer-copy">© {year} Sanatan Bramhane</span>
          <div className="footer-icons">
            {links.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="footer-icon-link"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
