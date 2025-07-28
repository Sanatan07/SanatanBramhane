// import React from 'react';
// import { Calendar, MapPin, ExternalLink } from 'lucide-react';

// const ExperienceComponent = () => {
//   // Full-time experiences
//   const fullTimeExperiences = [
//     {
//       id: 1,
//       title: "Technical Support Engineer",
//       company: "Saiyash Technologies Pvt Ltd",
//       location: "Pune, Maharashtra",
//       duration: "Jun 2026 - Present",
//       type: "Full-time",
//       description: [
//         "Manage Active Directory by adding/removing users, resetting passwords, assigning group permissions, and joining new systems to the Domain Controller.",
//         "Configure and maintain SSL certificates, ensuring secure communication and timely renewals.",
//         "Provide end-user support by troubleshooting Windows and Linux operating systems, including command-line diagnostics.",
//         "Automated the backup process of project files to OneDrive using Python scripting and scheduled cron jobs for regular execution.",
//         "Support and resolve Cisco AnyConnect VPN issues and ensure smooth access for remote users."
//       ],
//       technologies: ["Active Directory", "Domain Controller", "SSL", "VPN", "Windows", "Linux"],
//       website: "#"
//     },
//     {
//       id: 2,
//       title: "Secure Software Engineer",
//       company: "Tecmetaverse LLP",
//       location: "Pune, Maharashtra",
//       duration: "Nov 2024 - Apr 2025",
//       type: "Full-time",
//       description: [
//         "Developed and deployed 5+ static websites for real estate clients and cafes, improving their online visibility and reducing client turnaround time by 30%.",
//         "Integrated SSDLC practices across a major project, reducing security-related bugs by 60%",
//         "Performed comprehensive Web Application Penetration Testing, identifying and remediating 8+ vulnerabilities including XSS and IDOR, resulting in a more secure release.",
//         "Built 5+ secure RESTful APIs and 1 custom EspoCRM plugins, boosting CRM efficiency and saving ~20% manual effort for Knightsfin Estates' sales and support teams.",
//       ],
//       technologies: ["HTML/CSS", "Reactjs", "Nodejs", "Expressjs", "SQL"],
//       website: "#"
//     }
//   ];

//   // Internship experiences
//   const internshipExperiences = [
//     {
//       id: 3,
//       title: "Cybersecurity Engineer Intern",
//       company: "Cyient",
//       location: "Bengaluru",
//       duration: "Jul 2024 - Oct 2024",
//       type: "Internship",
//       description: [
//         "Assisted in creating a secure coding checklist for a C++ application to ensure compliance with best security practices","Automated Android OS patch identification by extracting data from the Android Security Bulletin, reducing outdated OS usage risk by 25–30%.",
//         "Developed a custom application that integrated Nmap, executed LinEnum scripts remotely, and included network pentesting tools, boosting testing efficiency by ~15%.",
//         "Researched and presented a comprehensive report on rail network security aligned with IEC 62443 standards."
//       ],
//       technologies: ["C++", "Python", "Nmap", "OSINT", "Linux", "IEC 62443"],
//       website: "#"
//     },
//     {
//       id: 4,
//       title: "Ethical Hacking Intern",
//       company: "Cyberdosti",
//       location: "Pune, Maharashtra",
//       duration: "May 2024 - July 2024",
//       type: "Internship",
//       description: [
//        "Learned and practiced web application penetration testing and network penetration testing methodologies.",
//        "Applied web and network pentesting skills on vulnerable environments like Metasploit’s Table 2 machine and DVWA (Damn Vulnerable Web Application).",
//        "Created a Python project for encoding and decoding messages using the Base64 algorithm; code available on GitHub.",
//        "Gained hands-on experience identifying vulnerabilities and exploiting common security flaws in controlled lab environments."
//       ],
//       technologies: ["OWASP Top 10", "Web Security", "Network Security", "Linux", "Python"],
//       website: "#"
//     }
//   ];

//   const ExperienceSection = ({ title, experiences, icon }) => (
//     <div className="mb-16">
//       <div className="flex items-center mb-12">
//         <div className="text-blue-400 mr-4">{icon}</div>
//         <h3 className="text-3xl font-bold text-white">{title}</h3>
//         <div className="flex-1 h-0.5 bg-gray-700 ml-6"></div>
//       </div>

//       <div className="relative">
//         {/* Timeline line */}
//         <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block"></div>
        
//         {experiences.map((exp, index) => (
//           <div key={exp.id} className="relative mb-12">
//             {/* Timeline dot */}
//             <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 shadow-lg hidden md:block"></div>
            
//             {/* Experience Card */}
//             <div className="md:ml-16 bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-blue-500/30">
//               <div className="p-8">
//                 {/* Header */}
//                 <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
//                   <div className="flex-1">
//                     <h4 className="text-2xl font-bold text-white mb-2">
//                       {exp.title}
//                     </h4>
//                     <div className="flex items-center text-blue-400 font-semibold text-lg mb-2">
//                       <span>{exp.company}</span>
//                       {exp.website !== "#" && (
//                         <ExternalLink className="ml-2 w-4 h-4" />
//                       )}
//                     </div>
//                   </div>
//                   <div className="flex flex-col md:items-end mt-4 md:mt-0">
//                     <span className="inline-block px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-sm font-medium mb-2">
//                       {exp.type}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Meta Information */}
//                 <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-gray-300">
//                   <div className="flex items-center">
//                     <Calendar className="w-4 h-4 mr-2 text-blue-400" />
//                     <span className="font-medium">{exp.duration}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <MapPin className="w-4 h-4 mr-2 text-blue-400" />
//                     <span>{exp.location}</span>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <div className="mb-6">
//                   <ul className="space-y-3">
//                     {exp.description.map((item, idx) => (
//                       <li key={idx} className="flex items-start">
//                         <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                         <span className="text-gray-300 leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Technologies */}
//                 <div>
//                   <h5 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">
//                     Technologies & Tools
//                   </h5>
//                   <div className="flex flex-wrap gap-2">
//                     {exp.technologies.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200 border border-gray-600"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <section className="py-16 px-4 bg-gray-900 min-h-screen">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             Professional Experience
//           </h2>
//           <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             My journey in cybersecurity and application security engineering
//           </p>
//         </div>

//         {/* Full-time Experience Section */}
//         <ExperienceSection 
//           title="Full-time Experience" 
//           experiences={fullTimeExperiences}
//           icon={<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//             <span className="text-white font-bold text-sm">FT</span>
//           </div>}
//         />

//         {/* Internships Section */}
//         <ExperienceSection 
//           title="Internships" 
//           experiences={internshipExperiences}
//           icon={<div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
//             <span className="text-white font-bold text-sm">IN</span>
//           </div>}
//         />

//       </div>
//     </section>
//   );
// };

// export default ExperienceComponent;


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
            <div className="header-underline"></div>
            <p className="header-description mx-auto" style={{ maxWidth: '42rem' }}>
              My journey in cybersecurity and application security engineering
            </p>
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