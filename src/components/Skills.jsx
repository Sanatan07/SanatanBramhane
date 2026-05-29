import React, { useEffect, useRef } from "react";
import {
  Code2,
  Database,
  Server,
  Shield,
  Cloud,
  Terminal,
  FileCode2,
  Layers3,
  Bug,
  Search,
  Lock,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Engineering",
    items: ["React.js", "Next.js", "JavaScript", "HTML/CSS"],
    icon: Code2,
  },
  {
    title: "Backend Engineering",
    items: ["Node.js", "Express.js", "REST API Design", "Java"],
    icon: Server,
  },
  {
    title: "Databases",
    items: ["SQL", "PostgreSQL", "MongoDB"],
    icon: Database,
  },
  {
    title: "Application Security",
    items: ["Threat Modeling", "Secure Coding", "API Security", "SSDLC"],
    icon: Shield,
  },
  {
    title: "VAPT Toolkit",
    items: ["Burp Suite", "OWASP ZAP", "Nmap", "Metasploit"],
    icon: Search,
  },
  {
    title: "Dev & Platform",
    items: ["Docker", "AWS", "Linux", "Git"],
    icon: Cloud,
  },
];

const getSkillIcon = (skill) => {
  const map = {
    "React.js": Code2,
    "Next.js": Layers3,
    JavaScript: FileCode2,
    "HTML/CSS": FileCode2,
    "Node.js": Server,
    "Express.js": Workflow,
    "REST API Design": Workflow,
    Java: Code2,
    SQL: Database,
    PostgreSQL: Database,
    MongoDB: Database,
    "Threat Modeling": Shield,
    "Secure Coding": Lock,
    "API Security": Shield,
    SSDLC: Shield,
    "Burp Suite": Bug,
    "OWASP ZAP": Search,
    Nmap: Search,
    Metasploit: Bug,
    Docker: Terminal,
    AWS: Cloud,
    Linux: Terminal,
    Git: Terminal,
  };

  return map[skill] || Code2;
};

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const element = skillsRef.current;
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
    .skills-section {
      min-height: 100vh;
      padding: 6rem 1rem;
      background: linear-gradient(180deg, rgba(3, 8, 7, 0.98), rgba(4, 12, 10, 0.96));
      color: #f4fff8;
    }

    .skills-shell {
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease;
    }

    .skills-shell.animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    .skills-topline {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 2.5rem;
      align-items: end;
    }

    .skills-kicker {
      color: #8efdd1;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-size: 0.82rem;
      margin-bottom: 1rem;
    }

    .skills-title {
      font-size: clamp(2.2rem, 4vw, 3.4rem);
      margin: 0;
    }

    .skills-summary {
      max-width: 440px;
      color: #9db8ac;
      line-height: 1.8;
    }

    .skills-board {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
    }

    .skill-cluster {
      border-radius: 1.4rem;
      border: 1px solid rgba(0, 255, 163, 0.14);
      background: linear-gradient(180deg, rgba(7, 23, 18, 0.92), rgba(4, 12, 10, 0.96));
      padding: 1.35rem;
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
    }

    .cluster-header {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      margin-bottom: 1rem;
    }

    .cluster-icon {
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 0.9rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #00ffa3, #63d6ff);
      color: #03110b;
      flex-shrink: 0;
    }

    .cluster-title {
      color: #effff7;
      font-size: 1.08rem;
      font-weight: 700;
    }

    .skill-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }

    .skill-token {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.75rem 0.9rem;
      border-radius: 0.9rem;
      background: rgba(2, 9, 7, 0.8);
      border: 1px solid rgba(0, 255, 163, 0.12);
      color: #dbfff0;
      line-height: 1;
    }

    .skill-token svg {
      color: #8efdd1;
    }

    @media screen and (max-width: 900px) {
      .skills-topline,
      .skills-board {
        grid-template-columns: 1fr;
        display: grid;
      }
    }

    @media screen and (max-width: 640px) {
      .skills-section {
        padding: 5rem 1rem;
      }

      .skills-board {
        grid-template-columns: 1fr;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="skills-section">
        <div className="skills-shell" ref={skillsRef}>
          <div className="skills-topline">
            <div>
              <div className="skills-kicker">Capabilities / Tooling</div>
              <h2 className="skills-title">Skills</h2>
            </div>
            <p className="skills-summary">
              My stack covers secure frontend and backend delivery, API-driven
              systems, modern data stores, and practical AppSec testing.
            </p>
          </div>

          <div className="skills-board">
            {skillGroups.map(({ title, items, icon: GroupIcon }) => (
              <div key={title} className="skill-cluster">
                <div className="cluster-header">
                  <div className="cluster-icon">
                    <GroupIcon size={18} />
                  </div>
                  <div className="cluster-title">{title}</div>
                </div>
                <div className="skill-list">
                  {items.map((item) => {
                    const Icon = getSkillIcon(item);
                    return (
                      <div key={item} className="skill-token">
                        <Icon size={16} />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
