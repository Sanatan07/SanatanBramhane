import React, { useEffect, useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  FileText,
  Shield,
  Globe,
  Workflow,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Market360",
    description:
      "MERN affiliate and dropshipping platform built to simplify product discovery, automate workflows, and support scalable e-commerce operations through responsive product dashboards and efficient data handling.",
    technologies: ["MERN"],
    category: "development",
    live: "https://market-360-frontend-zeta.vercel.app/",
    icon: Workflow,
  },
  {
    id: 2,
    title: "Realtime Chat Application",
    description:
      "Real-time chat application built with the MERN stack and Socket.io, featuring secure JWT-based authentication, online user tracking, responsive UI, and reliable client-server error handling.",
    technologies: ["MERN", "Redis", "PostgreSQL"],
    category: "development",
    icon: Globe,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Security-themed personal portfolio built with React, blending product engineering presentation with an AppSec-inspired visual system.",
    technologies: ["React.js", "UI Engineering", "Component Design"],
    category: "development",
    github: "https://github.com/Sanatan07/SanatanBramhane",
    live: "https://sanatan-bramhane.vercel.app/",
    icon: Globe,
  },
  {
    id: 4,
    title: "Web App Pentesting on Unstop.com",
    description:
      "Performed vulnerability assessment and application security review to identify security flaws and recommend practical remediation paths.",
    technologies: ["VAPT", "Burp Suite", "Nmap", "Security Testing"],
    category: "security",
    icon: Shield,
  },
  {
    id: 5,
    title: "Web Application Pentesting on DVWA",
    description:
      "Hands-on testing of common web vulnerabilities including SQL injection, XSS, and command execution in a controlled lab environment.",
    technologies: ["DVWA", "Burp Suite", "SQLi", "XSS"],
    category: "security",
    report: "https://shorturl.at/ofQxk",
    icon: Shield,
  },
];

const Projects = () => {
  const projectsRef = useRef(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const element = projectsRef.current;
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

  const visibleProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  const customStyles = `
    .projects-section {
      min-height: 100vh;
      padding: 6rem 1rem;
      background: linear-gradient(180deg, rgba(3, 8, 7, 0.98), rgba(4, 12, 10, 0.96));
      color: #f4fff8;
    }

    .projects-shell {
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease;
    }

    .projects-shell.animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    .projects-top {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      align-items: end;
      margin-bottom: 2.3rem;
    }

    .projects-kicker {
      color: #8efdd1;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-size: 0.82rem;
      margin-bottom: 1rem;
    }

    .projects-title {
      font-size: clamp(2.2rem, 4vw, 3.4rem);
      margin: 0;
    }

    .projects-subtitle {
      max-width: 460px;
      color: #9db8ac;
      line-height: 1.8;
    }

    .project-filters {
      display: flex;
      gap: 0.8rem;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }

    .project-filter {
      padding: 0.75rem 1.1rem;
      border-radius: 999px;
      border: 1px solid rgba(0, 255, 163, 0.15);
      background: rgba(5, 19, 15, 0.84);
      color: #dffbf0;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .project-filter.active,
    .project-filter:hover {
      background: linear-gradient(135deg, #00ffa3, #54e9ff);
      color: #02110b;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
    }

    .project-card {
      border-radius: 1.4rem;
      overflow: hidden;
      border: 1px solid rgba(0, 255, 163, 0.14);
      background: linear-gradient(180deg, rgba(7, 23, 18, 0.92), rgba(4, 12, 10, 0.96));
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
    }

    .project-banner {
      min-height: 160px;
      padding: 1.4rem;
      position: relative;
      background:
        radial-gradient(circle at 20% 20%, rgba(0, 255, 163, 0.12), transparent 20%),
        linear-gradient(135deg, rgba(0, 255, 163, 0.08), rgba(87, 184, 255, 0.08)),
        rgba(2, 9, 7, 0.92);
      border-bottom: 1px solid rgba(0, 255, 163, 0.12);
    }

    .project-banner::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(rgba(0, 255, 163, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 163, 0.05) 1px, transparent 1px);
      background-size: 28px 28px;
      opacity: 0.5;
    }

    .project-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #00ffa3, #54e9ff);
      color: #02110b;
      position: relative;
      z-index: 1;
    }

    .project-content {
      padding: 1.5rem;
    }

    .project-title {
      font-size: 1.28rem;
      color: #effff7;
      margin-bottom: 0.8rem;
    }

    .project-description {
      color: #bfd8ce;
      line-height: 1.78;
      margin-bottom: 1.2rem;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
      margin-bottom: 1.3rem;
    }

    .tech-tag {
      padding: 0.55rem 0.85rem;
      border-radius: 999px;
      background: rgba(2, 9, 7, 0.84);
      border: 1px solid rgba(0, 255, 163, 0.12);
      color: #dbfff1;
      font-size: 0.88rem;
    }

    .project-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }

    .project-link {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.8rem 1rem;
      border-radius: 0.95rem;
      text-decoration: none;
      border: 1px solid rgba(0, 255, 163, 0.15);
      color: #dffbf0;
      background: rgba(5, 19, 15, 0.84);
      transition: all 0.3s ease;
    }

    .project-link:hover {
      transform: translateY(-2px);
      background: rgba(0, 255, 163, 0.1);
      color: #ffffff;
    }

    @media screen and (max-width: 900px) {
      .projects-top,
      .projects-grid {
        grid-template-columns: 1fr;
        display: grid;
      }
    }

    @media screen and (max-width: 640px) {
      .projects-section {
        padding: 5rem 1rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="projects-section">
        <div className="projects-shell" ref={projectsRef}>
          <div className="projects-top">
            <div>
              <div className="projects-kicker">Work / Findings</div>
              <h2 className="projects-title">Projects</h2>
            </div>
            <p className="projects-subtitle">
              A mix of engineering projects and security assessment work that
              reflects both product delivery and attacker-minded analysis.
            </p>
          </div>

          <div className="project-filters">
            {[
              ["all", "All"],
              ["development", "Development"],
              ["security", "Security"],
            ].map(([value, label]) => (
              <button
                key={value}
                className={`project-filter ${filter === value ? "active" : ""}`}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div key={project.id} className="project-card">
                  <div className="project-banner">
                    <div className="project-icon">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}
                      {project.report && (
                        <a
                          href={project.report}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link"
                        >
                          <FileText size={16} />
                          Report
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
