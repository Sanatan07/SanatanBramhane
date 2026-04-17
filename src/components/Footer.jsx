import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const customStyles = `
    .footer-component {
      padding: 3rem 1.5rem 2rem;
      background: rgba(2, 6, 5, 0.98);
      border-top: 1px solid rgba(0, 255, 163, 0.12);
      color: #f4fff8;
    }

    .footer-shell {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .footer-brand {
      font-size: 1.4rem;
      font-weight: 700;
      background: linear-gradient(135deg, #e9fff6 0%, #78ffd2 45%, #57b8ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .footer-copy {
      color: #a1bcb0;
    }

    .footer-links {
      display: flex;
      gap: 0.8rem;
      flex-wrap: wrap;
    }

    .footer-link {
      color: #dffbf0;
      text-decoration: none;
      padding: 0.65rem 0.9rem;
      border-radius: 0.9rem;
      border: 1px solid rgba(0, 255, 163, 0.12);
      background: rgba(7, 19, 15, 0.8);
    }

    .footer-link:hover {
      background: rgba(0, 255, 163, 0.1);
      color: #ffffff;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <footer className="footer footer-component">
        <div className="footer-shell">
          <div>
            <div className="footer-brand">DevSecureX</div>
            <div className="footer-copy">
              {currentYear} Sanatan Bramhane. Secure software, engineered with intent.
            </div>
          </div>
          <div className="footer-links">
            <a href="https://github.com/Sanatan07" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
            <a href="https://www.linkedin.com/in/sanatanbramhane/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://x.com/Sanatan781" target="_blank" rel="noreferrer" className="footer-link">Twitter</a>
            <a href="https://tryhackme.com/p/Sanatan" target="_blank" rel="noreferrer" className="footer-link">TryHackMe</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
