import React, { useEffect, useRef } from "react";
import { GraduationCap, BadgeCheck } from "lucide-react";

const educationData = [
  {
    degree: "PGD in Cyber Security and Digital Forensics",
    institution: "CDAC",
    location: "Thiruvananthapuram, Kerala",
    period: "2023 - 2024",
    description:
      "Focused on vulnerability assessment and penetration testing, digital forensics, and secure software development fundamentals.",
  },
  {
    degree: "B.E in Mechanical Engineering",
    institution: "Indira College of Engineering and Management",
    location: "Pune, Maharashtra",
    period: "2019 - 2023",
    description:
      "Built the engineering foundation that later evolved into software development and application security work.",
  },
];

const certificationData = [
  {
    title: "Certified Penetration Testing Professional (CPENT)",
    issuer: "EC-Council",
    date: "19 Aug 2025 - 1 Sep 2026",
  },
  {
    title: "Fundamentals of DevSecOps",
    issuer: "Tutorialspoint",
  },
  {
    title: "Ultimate DevSecOps with Real World Scenarios",
    issuer: "Tutorialspoint",
  },
];

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const element = educationRef.current;
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
    .education-section {
      min-height: 100vh;
      padding: 6rem 1rem;
      background: linear-gradient(180deg, rgba(4, 12, 10, 0.96), rgba(3, 8, 7, 0.98));
      color: #f4fff8;
    }

    .education-shell {
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease;
    }

    .education-shell.animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    .education-kicker {
      color: #8efdd1;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-size: 0.82rem;
      margin-bottom: 1rem;
    }

    .education-title {
      font-size: clamp(2.2rem, 4vw, 3.4rem);
      margin-bottom: 2rem;
    }

    .education-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
    }

    .education-panel {
      border-radius: 1.4rem;
      border: 1px solid rgba(0, 255, 163, 0.14);
      background: linear-gradient(180deg, rgba(7, 23, 18, 0.92), rgba(4, 12, 10, 0.96));
      padding: 1.5rem;
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
    }

    .panel-header {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 1.4rem;
    }

    .panel-icon {
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 0.9rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #00ffa3, #63d6ff);
      color: #02110b;
    }

    .panel-title {
      font-size: 1.15rem;
      color: #effff7;
      font-weight: 700;
    }

    .record-list {
      display: grid;
      gap: 1rem;
    }

    .record-card {
      padding: 1rem;
      border-radius: 1rem;
      background: rgba(2, 9, 7, 0.84);
      border: 1px solid rgba(0, 255, 163, 0.12);
    }

    .record-period {
      display: inline-flex;
      padding: 0.4rem 0.8rem;
      border-radius: 999px;
      background: rgba(0, 255, 163, 0.1);
      color: #b9ffdf;
      border: 1px solid rgba(0, 255, 163, 0.16);
      font-size: 0.85rem;
      margin-bottom: 0.8rem;
    }

    .record-title {
      color: #effff7;
      font-size: 1.05rem;
      margin-bottom: 0.45rem;
    }

    .record-subtitle {
      color: #73ffd0;
      margin-bottom: 0.6rem;
    }

    .record-description {
      color: #bfd8ce;
      line-height: 1.75;
      margin: 0;
    }

    @media screen and (max-width: 900px) {
      .education-grid {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 640px) {
      .education-section {
        padding: 5rem 1rem;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="education-section">
        <div className="education-shell" ref={educationRef}>
          <div className="education-kicker">Training / Credentials</div>
          <h2 className="education-title">Education & Certifications</h2>

          <div className="education-grid">
            <div className="education-panel">
              <div className="panel-header">
                <div className="panel-icon">
                  <GraduationCap size={18} />
                </div>
                <div className="panel-title">Education</div>
              </div>
              <div className="record-list">
                {educationData.map((item) => (
                  <div key={item.degree} className="record-card">
                    <div className="record-period">{item.period}</div>
                    <h3 className="record-title">{item.degree}</h3>
                    <div className="record-subtitle">
                      {item.institution}, {item.location}
                    </div>
                    <p className="record-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="education-panel">
              <div className="panel-header">
                <div className="panel-icon">
                  <BadgeCheck size={18} />
                </div>
                <div className="panel-title">Certifications</div>
              </div>
              <div className="record-list">
                {certificationData.map((item) => (
                  <div key={item.title} className="record-card">
                    {item.date && <div className="record-period">{item.date}</div>}
                    <h3 className="record-title">{item.title}</h3>
                    <div className="record-subtitle">{item.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
