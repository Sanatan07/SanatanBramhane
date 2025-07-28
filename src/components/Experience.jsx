import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  // Full-time experiences
  const fullTimeExperiences = [
    {
      id: 1,
      title: "Technical Support Engineer",
      company: "Saiyash Technologies Pvt Ltd",
      location: "Pune, Maharashtra",
      duration: "Jun 2026 - Present",
      type: "Full-time",
      description: [
        "Manage Active Directory by adding/removing users, resetting passwords, assigning group permissions, and joining new systems to the Domain Controller.",
        "Configure and maintain SSL certificates, ensuring secure communication and timely renewals.",
        "Provide end-user support by troubleshooting Windows and Linux operating systems, including command-line diagnostics.",
        "Automated the backup process of project files to OneDrive using Python scripting and scheduled cron jobs for regular execution.",
        "Support and resolve Cisco AnyConnect VPN issues and ensure smooth access for remote users."
      ],
      technologies: ["Active Directory", "Domain Controller", "SSL", "VPN", "Windows", "Linux"],
      website: "#"
    },
    {
      id: 2,
      title: "Secure Software Engineer",
      company: "Tecmetaverse LLP",
      location: "Pune, Maharashtra",
      duration: "Nov 2024 - Apr 2025",
      type: "Full-time",
      description: [
        "Developed and deployed 5+ static websites for real estate clients and cafes, improving their online visibility and reducing client turnaround time by 30%.",
        "Integrated SSDLC practices across a major project, reducing security-related bugs by 60%",
        "Performed comprehensive Web Application Penetration Testing, identifying and remediating 8+ vulnerabilities including XSS and IDOR, resulting in a more secure release.",
        "Built 5+ secure RESTful APIs and 1 custom EspoCRM plugins, boosting CRM efficiency and saving ~20% manual effort for Knightsfin Estates' sales and support teams.",
      ],
      technologies: ["HTML/CSS", "Reactjs", "Nodejs", "Expressjs", "SQL"],
      website: "#"
    }
  ];

  // Internship experiences
  const internshipExperiences = [
    {
      id: 3,
      title: "Cybersecurity Engineer Intern",
      company: "Cyient",
      location: "Bengaluru",
      duration: "Jul 2024 - Oct 2024",
      type: "Internship",
      description: [
        "Assisted in creating a secure coding checklist for a C++ application to ensure compliance with best security practices","Automated Android OS patch identification by extracting data from the Android Security Bulletin, reducing outdated OS usage risk by 25–30%.",
        "Developed a custom application that integrated Nmap, executed LinEnum scripts remotely, and included network pentesting tools, boosting testing efficiency by ~15%.",
        "Researched and presented a comprehensive report on rail network security aligned with IEC 62443 standards."
      ],
      technologies: ["C++", "Python", "Nmap", "OSINT", "Linux", "IEC 62443"],
      website: "#"
    },
    {
      id: 4,
      title: "Ethical Hacking Intern",
      company: "Cyberdosti",
      location: "Pune, Maharashtra",
      duration: "May 2024 - July 2024",
      type: "Internship",
      description: [
       "Learned and practiced web application penetration testing and network penetration testing methodologies.",
       "Applied web and network pentesting skills on vulnerable environments like Metasploit's Table 2 machine and DVWA (Damn Vulnerable Web Application).",
       "Created a Python project for encoding and decoding messages using the Base64 algorithm; code available on GitHub.",
       "Gained hands-on experience identifying vulnerabilities and exploiting common security flaws in controlled lab environments."
      ],
      technologies: ["OWASP Top 10", "Web Security", "Network Security", "Linux", "Python"],
      website: "#"
    }
  ];

  const customStyles = `
    .experience-section {
      background-color: #111827;
      min-height: 100vh;
      color: #ffffff;
    }
    
    .section-header {
      color: #60a5fa;
      margin-right: 1rem;
    }
    
    .section-title {
      color: #ffffff;
      font-size: 2rem;
      font-weight: bold;
    }
    
    .section-divider {
      height: 2px;
      background-color: #374151;
      flex: 1;
      margin-left: 1.5rem;
    }
    
    .timeline-line {
      position: absolute;
      left: 2rem;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: #374151;
    }
    
    .timeline-dot {
      position: absolute;
      left: 1.5rem;
      width: 1rem;
      height: 1rem;
      background-color: #3b82f6;
      border-radius: 50%;
      border: 4px solid #1f2937;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    
    .experience-card {
      background-color: #1f2937;
      border: 1px solid #374151;
      border-radius: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    
    .experience-card:hover {
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
      border-color: rgba(59, 130, 246, 0.3);
    }
    
    .experience-title {
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    
    .company-name {
      color: #60a5fa;
      font-weight: 600;
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }
    
    .type-badge {
      background-color: #2563eb;
      color: #dbeafe;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 500;
      display: inline-block;
    }
    
    .meta-info {
      color: #d1d5db;
    }
    
    .meta-icon {
      color: #60a5fa;
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }
    
    .description-list {
      list-style: none;
      padding: 0;
    }
    
    .description-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 0.75rem;
    }
    
    .description-bullet {
      width: 8px;
      height: 8px;
      background-color: #3b82f6;
      border-radius: 50%;
      margin-top: 0.5rem;
      margin-right: 0.75rem;
      flex-shrink: 0;
    }
    
    .description-text {
      color: #d1d5db;
      line-height: 1.625;
    }
    
    .tech-section-title {
      color: #60a5fa;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.75rem;
    }
    
    .tech-badge {
      background-color: #374151;
      color: #e5e7eb;
      border: 1px solid #4b5563;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 500;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      display: inline-block;
      transition: all 0.2s ease;
    }
    
    .tech-badge:hover {
      background-color: #2563eb;
      color: #ffffff;
    }
    
    .header-underline {
      width: 6rem;
      height: 4px;
      background-color: #3b82f6;
      margin: 0 auto 1.5rem auto;
    }
    
    .header-description {
      color: #d1d5db;
      font-size: 1.25rem;
    }
    
    .section-icon {
      width: 2rem;
      height: 2rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-weight: bold;
      font-size: 0.875rem;
    }
    
    .ft-icon {
      background-color: #2563eb;
    }
    
    .in-icon {
      background-color: #16a34a;
    }
    
    @media (max-width: 768px) {
      .timeline-line,
      .timeline-dot {
        display: none;
      }
      
      .experience-card {
        margin-left: 0 !important;
      }
    }
  `;

  const ExperienceSection = ({ title, experiences, iconType }) => (
    <div className="mb-5" style={{ marginBottom: '4rem' }}>
      <div className="d-flex align-items-center mb-4" style={{ marginBottom: '3rem' }}>
        <div className="section-header">
          <div className={`section-icon ${iconType === 'ft' ? 'ft-icon' : 'in-icon'}`}>
            {iconType === 'ft' ? 'FT' : 'IN'}
          </div>
        </div>
        <h3 className="section-title mb-0">{title}</h3>
        <div className="section-divider"></div>
      </div>

      <div className="position-relative">
        {/* Timeline line */}
        <div className="timeline-line d-none d-md-block"></div>
        
        {experiences.map((exp, index) => (
          <div key={exp.id} className="position-relative mb-4" style={{ marginBottom: '3rem' }}>
            {/* Timeline dot */}
            <div className="timeline-dot d-none d-md-block"></div>
            
            {/* Experience Card */}
            <div className="experience-card p-4" style={{ marginLeft: '4rem', padding: '2rem' }}>
              {/* Header */}
              <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                <div className="flex-grow-1">
                  <h4 className="experience-title">
                    {exp.title}
                  </h4>
                  <div className="d-flex align-items-center company-name">
                    <span>{exp.company}</span>
                    {exp.website !== "#" && (
                      <ExternalLink className="ms-2" style={{ width: '1rem', height: '1rem' }} />
                    )}
                  </div>
                </div>
                <div className="d-flex flex-column align-items-md-end mt-3 mt-md-0">
                  <span className="type-badge">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Meta Information */}
              <div className="d-flex flex-column flex-sm-row gap-3 mb-4 meta-info">
                <div className="d-flex align-items-center">
                  <Calendar className="meta-icon" />
                  <span className="fw-medium">{exp.duration}</span>
                </div>
                <div className="d-flex align-items-center">
                  <MapPin className="meta-icon" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <ul className="description-list">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="description-item">
                      <div className="description-bullet"></div>
                      <span className="description-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="tech-section-title">
                  Technologies & Tools
                </h5>
                <div>
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <style>{customStyles}</style>
      <section className="experience-section py-5 px-3">
        <div className="container" style={{ maxWidth: '1024px' }}>
          {/* Header */}
          <div className="text-center mb-5" style={{ marginBottom: '4rem' }}>
            <h2 className="display-4 fw-bold text-white mb-3">
              Professional Experience
            </h2>
          </div>

          {/* Full-time Experience Section */}
          <ExperienceSection 
            title="Full-time Experience" 
            experiences={fullTimeExperiences}
            iconType="ft"
          />

          {/* Internships Section */}
          <ExperienceSection 
            title="Internships" 
            experiences={internshipExperiences}
            iconType="in"
          />
        </div>
      </section>
    </>
  );
};

export default Experience;