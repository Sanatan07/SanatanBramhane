import React from "react";
import { Calendar, MapPin, ShieldCheck, BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "Current",
    title: "Software Developer",
    company: "Current Role",
    location: "Pune, Maharashtra",
    duration: "Present",
    description: [
      "Building and maintaining modern web applications across frontend, backend, and API layers with a security-first engineering mindset.",
      "Working with React.js, Next.js, Node.js, Express.js, REST APIs, SQL, PostgreSQL, MongoDB, and Java to deliver production-ready features.",
      "Contributing to secure implementation decisions around authentication, input validation, API behavior, and data handling.",
      "Approaching development with AppSec awareness so functionality, maintainability, and security improve together.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Java",
    ],
  },
  {
    id: 2,
    type: "Previous",
    title: "Secure Software Engineer",
    company: "Tecmetaverse LLP",
    location: "Pune, Maharashtra",
    duration: "Nov 2024 - Apr 2025",
    description: [
      "Built and deployed websites and internal delivery assets for client engagements, improving turnaround and overall development efficiency.",
      "Implemented secure software development practices and reduced avoidable security issues during delivery.",
      "Performed web application VAPT activities and validated issues such as XSS and IDOR before release.",
      "Developed secure REST APIs and CRM extensions to support sales and support workflows.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "SQL", "AppSec"],
  },
  {
    id: 3,
    type: "Internship",
    title: "Cybersecurity Engineer Intern",
    company: "Cyient",
    location: "Bengaluru",
    duration: "Jul 2024 - Oct 2024",
    description: [
      "Contributed to secure coding guidance and compliance-oriented security work for engineering teams.",
      "Automated Android OS patch identification workflows and supported security research initiatives.",
      "Built custom tooling around Nmap and remote enumeration to improve penetration testing efficiency.",
      "Researched rail network security aligned with IEC 62443-oriented requirements.",
    ],
    technologies: ["Python", "Nmap", "Linux", "OSINT", "IEC 62443"],
  },
  {
    id: 4,
    type: "Internship",
    title: "Ethical Hacking Intern",
    company: "Cyberdosti",
    location: "Pune, Maharashtra",
    duration: "May 2024 - Jul 2024",
    description: [
      "Practiced web and network penetration testing on vulnerable lab environments and security training platforms.",
      "Worked through common attack paths and exploitation scenarios to better understand real-world vulnerability classes.",
      "Built small Python utilities and strengthened hands-on offensive security fundamentals.",
    ],
    technologies: ["OWASP Top 10", "Web Security", "Network Security", "Python", "Linux"],
  },
];

const Experience = () => {
  const customStyles = `
    .experience-section {
      min-height: 100vh;
      padding: 6rem 1rem;
      background: linear-gradient(180deg, rgba(4, 12, 10, 0.98), rgba(3, 8, 7, 0.98));
      color: #f4fff8;
    }

    .experience-shell {
      max-width: 1100px;
      margin: 0 auto;
    }

    .experience-kicker {
      color: #8efdd1;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-size: 0.82rem;
      margin-bottom: 1rem;
    }

    .experience-header {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 360px;
      gap: 2rem;
      margin-bottom: 3rem;
      align-items: end;
    }

    .experience-title {
      font-size: clamp(2.2rem, 4vw, 3.4rem);
      margin-bottom: 0.8rem;
    }

    .experience-lead {
      color: #a1bcb0;
      line-height: 1.8;
      max-width: 720px;
    }

    .experience-summary {
      padding: 1.2rem;
      border-radius: 1.2rem;
      border: 1px solid rgba(0, 255, 163, 0.14);
      background: linear-gradient(180deg, rgba(7, 23, 18, 0.92), rgba(4, 12, 10, 0.96));
      color: #cae1d8;
      line-height: 1.7;
    }

    .timeline {
      position: relative;
      display: grid;
      gap: 1.4rem;
    }

    .timeline::before {
      content: "";
      position: absolute;
      left: 1rem;
      top: 0.5rem;
      bottom: 0.5rem;
      width: 1px;
      background: linear-gradient(180deg, rgba(0, 255, 163, 0.35), rgba(87, 184, 255, 0.15));
    }

    .timeline-item {
      position: relative;
      padding-left: 3rem;
    }

    .timeline-dot {
      position: absolute;
      left: 0.45rem;
      top: 1.35rem;
      width: 1.15rem;
      height: 1.15rem;
      border-radius: 50%;
      background: #00ffa3;
      box-shadow: 0 0 0 6px rgba(0, 255, 163, 0.08);
    }

    .experience-card {
      padding: 1.5rem;
      border-radius: 1.4rem;
      border: 1px solid rgba(0, 255, 163, 0.14);
      background: linear-gradient(180deg, rgba(7, 23, 18, 0.92), rgba(4, 12, 10, 0.96));
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1rem;
      align-items: start;
    }

    .experience-role {
      font-size: 1.35rem;
      color: #effff7;
      margin-bottom: 0.35rem;
    }

    .experience-company {
      color: #78ffd2;
      font-weight: 600;
    }

    .experience-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.55rem 0.9rem;
      border-radius: 999px;
      background: rgba(0, 255, 163, 0.1);
      color: #b9ffdf;
      border: 1px solid rgba(0, 255, 163, 0.16);
      white-space: nowrap;
      font-size: 0.9rem;
    }

    .experience-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1rem;
      color: #9eb8ad;
    }

    .meta-item {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
    }

    .description-list {
      margin: 0 0 1.2rem;
      padding: 0;
      list-style: none;
      display: grid;
      gap: 0.7rem;
    }

    .description-list li {
      color: #c3dbd1;
      line-height: 1.75;
      padding-left: 1.1rem;
      position: relative;
    }

    .description-list li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.7rem;
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 50%;
      background: #57b8ff;
    }

    .tech-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
    }

    .tech-pill {
      padding: 0.55rem 0.85rem;
      border-radius: 999px;
      background: rgba(2, 9, 7, 0.85);
      border: 1px solid rgba(0, 255, 163, 0.12);
      color: #dcfff1;
      font-size: 0.9rem;
    }

    @media screen and (max-width: 900px) {
      .experience-header {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 640px) {
      .experience-section {
        padding: 5rem 1rem;
      }

      .timeline::before {
        display: none;
      }

      .timeline-item {
        padding-left: 0;
      }

      .timeline-dot {
        display: none;
      }

      .card-top {
        flex-direction: column;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <section className="experience-section">
        <div className="experience-shell">
          <div className="experience-header">
            <div>
              <div className="experience-kicker">Career / Delivery</div>
              <h2 className="experience-title">Professional Experience</h2>
              <p className="experience-lead">
                My work spans secure software delivery, application security,
                and hands-on VAPT exposure, with a current focus on shipping
                modern web products as a software developer.
              </p>
            </div>
            <div className="experience-summary">
              I approach each role as both a builder and a defender: ship
              features, understand the attack surface, and reduce risk before
              it becomes a production problem.
            </div>
          </div>

          <div className="timeline">
            {experiences.map((experience) => (
              <div key={experience.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="experience-card">
                  <div className="card-top">
                    <div>
                      <h3 className="experience-role">{experience.title}</h3>
                      <div className="experience-company">{experience.company}</div>
                    </div>
                    <div className="experience-badge">
                      {experience.type === "Internship" ? (
                        <ShieldCheck size={16} />
                      ) : (
                        <BriefcaseBusiness size={16} />
                      )}
                      {experience.type}
                    </div>
                  </div>

                  <div className="experience-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <ul className="description-list">
                    {experience.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="tech-row">
                    {experience.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
