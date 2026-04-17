import React, { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";

const focusAreas = [
  "Threat Modeling",
  "Secure SDLC",
  "API Security",
  "VAPT Engagements",
];

const metrics = [
  { label: "Focus", value: "AppSec + VAPT" },
  { label: "Mode", value: "Build / Break / Harden" },
  { label: "Priority", value: "Shift-left Security" },
];

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    const element = homeRef.current;
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

  const customStyles = `
    .home-section {
      background:
        radial-gradient(circle at top left, rgba(0, 255, 163, 0.14), transparent 28%),
        radial-gradient(circle at 85% 18%, rgba(0, 194, 255, 0.12), transparent 24%),
        linear-gradient(180deg, #07110f 0%, #040807 52%, #020504 100%);
      min-height: 100vh;
      color: #f5fff9;
      position: relative;
      overflow: hidden;
      border-bottom: 1px solid rgba(0, 255, 163, 0.12);
    }

    .home-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      min-height: 100vh;
      display: grid;
      grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.85fr);
      gap: 2.5rem;
      align-items: center;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.9s ease;
      position: relative;
      z-index: 2;
    }

    .home-container.animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    .home-content {
      max-width: 760px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.55rem 1rem;
      margin-bottom: 1.4rem;
      border: 1px solid rgba(0, 255, 163, 0.22);
      border-radius: 999px;
      background: rgba(3, 18, 14, 0.78);
      color: #8efdd1;
      font-size: 0.88rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.1s;
      box-shadow: 0 0 20px rgba(0, 255, 163, 0.08);
    }

    .eyebrow::before {
      content: "";
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      background: #00ffa3;
      box-shadow: 0 0 12px rgba(0, 255, 163, 0.95);
    }

    .greeting {
      font-size: 1rem;
      margin-bottom: 0.9rem;
      color: #6dd6ff;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.2s;
    }

    .name {
      font-size: clamp(3.2rem, 8vw, 5.6rem);
      font-weight: 800;
      margin-bottom: 1.2rem;
      color: #ffffff;
      line-height: 1.02;
      letter-spacing: -0.04em;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.4s;
      background: linear-gradient(135deg, #ffffff 0%, #c6ffe8 55%, #79dfff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .title {
      font-size: clamp(1.25rem, 3vw, 2.15rem);
      font-weight: 600;
      margin-bottom: 1.6rem;
      color: #9ac5ff;
      min-height: 3rem;
      display: flex;
      align-items: center;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.6s;
    }

    .title span {
      background: linear-gradient(135deg, #00ffa3 0%, #72ffd8 38%, #57b8ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
    }

    .description {
      font-size: 1.06rem;
      max-width: 700px;
      margin-bottom: 1.8rem;
      line-height: 1.85;
      color: #b8d2c7;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.8s;
    }

    .focus-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.85rem;
      max-width: 640px;
      margin-bottom: 2.1rem;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.9s;
    }

    .focus-card {
      padding: 0.95rem 1rem;
      border: 1px solid rgba(0, 255, 163, 0.16);
      border-radius: 1rem;
      background: linear-gradient(180deg, rgba(6, 24, 18, 0.9), rgba(3, 11, 9, 0.95));
      color: #dffcef;
      font-size: 0.96rem;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
    }

    .button-container {
      display: flex;
      gap: 1.5rem;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 1s;
    }

    .primary-button, .secondary-button {
      padding: 1rem 1.6rem;
      font-size: 0.98rem;
      font-weight: 600;
      border-radius: 0.95rem;
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 190px;
    }

    .primary-button {
      background: linear-gradient(135deg, #00ffa3, #0aefff);
      color: #02110b;
      box-shadow: 0 10px 30px rgba(0, 255, 163, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .primary-button::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    .primary-button:hover::before {
      left: 100%;
    }

    .primary-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 14px 35px rgba(0, 255, 163, 0.28);
      background: linear-gradient(135deg, #42ffc0, #54f2ff);
    }

    .secondary-button {
      background: rgba(4, 20, 15, 0.72);
      color: #e8fff6;
      border: 1px solid rgba(0, 255, 163, 0.22);
      position: relative;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
    }

    .secondary-button::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: linear-gradient(135deg, rgba(0, 255, 163, 0.22), rgba(87, 184, 255, 0.22));
      transition: width 0.3s ease;
      z-index: -1;
    }

    .secondary-button:hover::before {
      width: 100%;
    }

    .secondary-button:hover {
      color: #ffffff;
      transform: translateY(-3px);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.26);
      border-color: rgba(87, 184, 255, 0.45);
    }

    .hero-panel {
      position: relative;
      padding: 1.4rem;
      border-radius: 1.5rem;
      background: linear-gradient(180deg, rgba(7, 28, 21, 0.94), rgba(4, 14, 11, 0.98));
      border: 1px solid rgba(0, 255, 163, 0.18);
      box-shadow:
        0 24px 80px rgba(0, 0, 0, 0.42),
        inset 0 1px 0 rgba(255, 255, 255, 0.03);
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.95s;
      overflow: hidden;
    }

    .hero-panel::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(rgba(0, 255, 163, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 163, 0.06) 1px, transparent 1px);
      background-size: 32px 32px;
      mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.92), transparent 100%);
      pointer-events: none;
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(0, 255, 163, 0.12);
      position: relative;
      z-index: 1;
    }

    .panel-title {
      font-size: 0.9rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #87f7cf;
    }

    .panel-status {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #d9fff0;
      font-size: 0.84rem;
    }

    .panel-status::before {
      content: "";
      width: 0.55rem;
      height: 0.55rem;
      border-radius: 50%;
      background: #00ffa3;
      box-shadow: 0 0 10px rgba(0, 255, 163, 0.8);
    }

    .metrics-list {
      display: grid;
      gap: 0.9rem;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }

    .metric-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.95rem 1rem;
      border-radius: 1rem;
      background: rgba(2, 9, 7, 0.82);
      border: 1px solid rgba(0, 255, 163, 0.12);
      gap: 1rem;
    }

    .metric-label {
      color: #86b7a3;
      font-size: 0.88rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    .metric-value {
      color: #effff7;
      font-weight: 600;
      text-align: right;
    }

    .panel-footer {
      margin-top: 1.2rem;
      padding: 1rem;
      border-radius: 1rem;
      background: rgba(1, 7, 5, 0.88);
      border: 1px solid rgba(87, 184, 255, 0.14);
      position: relative;
      z-index: 1;
    }

    .panel-footer-label {
      display: block;
      margin-bottom: 0.5rem;
      color: #67dbff;
      font-size: 0.8rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .panel-footer-text {
      color: #c6ddd4;
      line-height: 1.7;
      font-size: 0.95rem;
      margin: 0;
    }

    .home-section::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        linear-gradient(rgba(0, 255, 163, 0.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 163, 0.045) 1px, transparent 1px);
      background-size: 56px 56px;
      z-index: 1;
      opacity: 0.42;
    }

    .home-section::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 460px;
      height: 460px;
      background: linear-gradient(135deg, rgba(0, 255, 163, 0.12), rgba(87, 184, 255, 0.1));
      border-radius: 38%;
      transform: translate(-50%, -50%);
      filter: blur(120px);
      z-index: 1;
      animation: float 9s ease-in-out infinite;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translate(-50%, -50%) translateY(0px);
      }
      50% {
        transform: translate(-50%, -50%) translateY(-20px);
      }
    }

    @media screen and (max-width: 768px) {
      .home-container {
        grid-template-columns: 1fr;
        padding: 7rem 1.5rem 3rem;
      }

      .title {
        min-height: 2.5rem;
      }

      .description {
        font-size: 1rem;
      }

      .focus-grid {
        grid-template-columns: 1fr;
      }

      .button-container {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
      }

      .primary-button, .secondary-button {
        width: 100%;
      }

      .hero-panel {
        padding: 1.2rem;
      }
    }

    @media screen and (max-width: 480px) {
      .eyebrow {
        font-size: 0.74rem;
        letter-spacing: 0.14em;
      }

      .title {
        min-height: 2rem;
      }

      .description {
        line-height: 1.6;
      }

      .primary-button, .secondary-button {
        font-size: 0.95rem;
        padding: 0.9rem 1.2rem;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="home-section">
        <div className="home-container" ref={homeRef}>
          <div className="home-content">
            <div className="eyebrow">Security-Focused Engineer</div>
            <div className="greeting">Hello, I&apos;m</div>
            <h1 className="name">Sanatan Bramhane</h1>
            <div className="title">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Application Security Engineer",
                  2000,
                  "VAPT Practitioner",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="description">
              I design and ship software with an attacker&apos;s mindset. My work
              sits at the intersection of engineering, application security, and
              VAPT, where I audit code paths, test APIs, uncover weak trust
              boundaries, and help teams harden products before issues reach
              production.
            </p>
            <div className="focus-grid">
              {focusAreas.map((item) => (
                <div key={item} className="focus-card">
                  {item}
                </div>
              ))}
            </div>
            <div className="button-container">
              <a href="#contact" className="primary-button">
                Start a Conversation
              </a>
              <a href="#projects" className="secondary-button">
                Review Case Studies
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-header">
              <span className="panel-title">Security Brief</span>
              <span className="panel-status">Monitoring</span>
            </div>

            <div className="metrics-list">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-row">
                  <span className="metric-label">{metric.label}</span>
                  <span className="metric-value">{metric.value}</span>
                </div>
              ))}
            </div>

            <div className="panel-footer">
              <span className="panel-footer-label">Current Approach</span>
              <p className="panel-footer-text">
                I approach products like both a builder and an adversary:
                understand the system, map the attack surface, validate risk,
                and turn findings into secure engineering improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
