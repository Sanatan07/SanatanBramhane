import React, { useEffect, useRef } from "react";
import { ShieldCheck, Code2, LockKeyhole, ServerCog } from "lucide-react";
import jdImg from "../assets/jd_img.jpg";

const profileCards = [
  { label: "Role", value: "Security-Focused Software Engineer", icon: ShieldCheck },
  { label: "Core Stack", value: "React, Next.js, Node.js, Express.js", icon: Code2 },
  { label: "Data Layer", value: "SQL, PostgreSQL, MongoDB", icon: ServerCog },
  { label: "Security Lens", value: "AppSec, API Security, VAPT", icon: LockKeyhole },
];

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const element = aboutRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      { threshold: 0.1 },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleResumeClick = () => {
    window.open("/Sanatan-Bramhane.pdf", "_blank");
  };

  const customStyles = `
    .about-section {
      min-height: 100vh;
      padding: 6rem 1rem;
      background:
        radial-gradient(circle at 15% 15%, rgba(0, 255, 163, 0.08), transparent 22%),
        linear-gradient(180deg, rgba(4, 12, 10, 0.92), rgba(3, 8, 7, 0.98));
      color: #f4fff8;
    }

    .about-shell {
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease;
    }

    .about-shell.animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    .section-kicker {
      color: #8efdd1;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-size: 0.82rem;
      margin-bottom: 1rem;
    }

    .section-title-main {
      font-size: clamp(2.4rem, 4vw, 3.5rem);
      line-height: 1.05;
      margin-bottom: 1rem;
      color: #f7fff9;
    }

    .section-lead {
      max-width: 780px;
      color: #9eb8ad;
      line-height: 1.8;
      margin-bottom: 3rem;
    }

    .about-layout {
      display: grid;
      grid-template-columns: 340px minmax(0, 1fr);
      gap: 2rem;
      align-items: start;
    }

    .about-visual,
    .about-panel {
      border: 1px solid rgba(0, 255, 163, 0.14);
      background: linear-gradient(180deg, rgba(7, 23, 18, 0.92), rgba(4, 12, 10, 0.96));
      border-radius: 1.5rem;
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
    }

    .about-visual {
      padding: 1.1rem;
      position: sticky;
      top: 6.5rem;
    }

    .image-frame {
      border-radius: 1.1rem;
      overflow: hidden;
      border: 1px solid rgba(87, 184, 255, 0.16);
      aspect-ratio: 0.82;
      background: #020605;
    }

    .image-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }

    .image-caption {
      margin-top: 1rem;
      padding: 0.95rem 1rem;
      border-radius: 1rem;
      background: rgba(2, 9, 7, 0.85);
      color: #b4d1c2;
      line-height: 1.7;
      font-size: 0.94rem;
    }

    .about-panel {
      padding: 2rem;
      position: relative;
      overflow: hidden;
    }

    .about-panel::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(rgba(0, 255, 163, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 163, 0.04) 1px, transparent 1px);
      background-size: 30px 30px;
      mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.85), transparent 100%);
      pointer-events: none;
    }

    .about-copy {
      position: relative;
      z-index: 1;
    }

    .about-copy p {
      color: #bfd8ce;
      line-height: 1.85;
      margin-bottom: 1.15rem;
      font-size: 1.02rem;
    }

    .profile-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
      margin: 2rem 0;
    }

    .profile-card {
      padding: 1rem;
      border-radius: 1rem;
      border: 1px solid rgba(0, 255, 163, 0.12);
      background: rgba(2, 10, 8, 0.78);
    }

    .profile-icon {
      width: 2.2rem;
      height: 2.2rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.8rem;
      margin-bottom: 0.8rem;
      color: #02110b;
      background: linear-gradient(135deg, #00ffa3, #66d6ff);
    }

    .profile-label {
      display: block;
      color: #7ca996;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 0.35rem;
    }

    .profile-value {
      color: #effff6;
      line-height: 1.6;
      font-weight: 600;
    }

    .resume-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.5rem;
      border-radius: 1rem;
      border: 1px solid rgba(0, 255, 163, 0.2);
      background: linear-gradient(135deg, #00ffa3, #50e9ff);
      color: #02110b;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 16px 35px rgba(0, 255, 163, 0.18);
    }

    .resume-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 20px 40px rgba(0, 255, 163, 0.24);
    }

    @media screen and (max-width: 960px) {
      .about-layout {
        grid-template-columns: 1fr;
      }

      .about-visual {
        position: static;
      }
    }

    @media screen and (max-width: 640px) {
      .about-section {
        padding: 5rem 1rem;
      }

      .about-panel {
        padding: 1.35rem;
      }

      .profile-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="about-section">
        <div className="about-shell" ref={aboutRef}>
          <div className="section-kicker">Identity / Mission</div>
          <h2 className="section-title-main">About Me</h2>
          <p className="section-lead">
            I build production software with a security-first mindset, combining
            full-stack engineering with application security and VAPT experience.
          </p>

          <div className="about-layout">
            <div className="about-visual">
              <div className="image-frame">
                <img src={jdImg} alt="Sanatan Bramhane" />
              </div>
              <div className="image-caption">
                Engineering secure user experiences, hardened APIs, and delivery
                pipelines that balance speed with resilience.
              </div>
            </div>

            <div className="about-panel">
              <div className="about-copy">
                <p>
                  I am a security-focused software engineer currently working as
                  a software developer, building modern web applications across
                  the frontend, backend, and API layers. My day-to-day stack
                  includes React.js, Next.js, Node.js, Express.js, REST APIs,
                  SQL, PostgreSQL, MongoDB, and Java.
                </p>
                <p>
                  What makes my approach different is the security lens I bring
                  into product development. I think about trust boundaries,
                  authentication flows, input handling, API abuse cases, data
                  exposure, and secure defaults while writing software, not as
                  an afterthought after release.
                </p>
                <p>
                  Alongside engineering, I have hands-on exposure to application
                  security and VAPT workflows, including testing web
                  applications, validating findings, and translating risks into
                  practical fixes developers can ship with confidence.
                </p>
                <p>
                  I enjoy working where software engineering meets AppSec:
                  building useful systems, understanding how they can fail, and
                  hardening them before attackers get a chance.
                </p>

                <div className="profile-grid">
                  {profileCards.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="profile-card">
                      <div className="profile-icon">
                        <Icon size={18} />
                      </div>
                      <span className="profile-label">{label}</span>
                      <div className="profile-value">{value}</div>
                    </div>
                  ))}
                </div>

                <button onClick={handleResumeClick} className="resume-button">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
