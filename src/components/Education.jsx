import React, { useRef, useEffect } from 'react';

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const educationData = [
    {
      degree: 'B.E in Mechanical Engineering',
      institution: 'Indira College of Engineering and Management',
      location: 'Pune, Maharashtra',
      period: '2019 - 2023',
    },
    {
      degree: 'PGD in Cyber Security and Digital Forensics',
      institution: 'CDAC',
      location: 'Thiruvananthapuram, Kerala',
      period: '2023 - 2024',
      description: 'Specialized in and Vulnerability Assessment and Penetration Testing (VAPT), and Secure Software Development.',
    },
  ];

  const certificationData = [
    {
      title: 'Fundamentals of Devsecops',
      issuer: 'Tutorialspoint',
    },
    {
      title: 'Ultimate Devsecops with Real World Scenarios',
      issuer: 'Tutorialspoint',
    },
    {
      title: 'Certified Penetration Testing Professional (CPENT)',
      issuer: 'Ec-Council',
      date: 'OnGoing',
    },
  ];

  return (
    <div className="section-container" ref={educationRef}>
      <h2 className="section-title">Education & Certifications</h2>
      
      <div className="education-content">
        <div className="education-section">
          <h3 className="subsection-title">Education</h3>
          <div className="timeline">
            {educationData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{item.period}</div>
                  <h4 className="timeline-title">{item.degree}</h4>
                  <p className="timeline-institution">{item.institution}, {item.location}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="certification-section">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-list">
            {certificationData.map((item, index) => (
              <div key={index} className="certification-item">
                <div className="certification-icon"></div>
                <div className="certification-details">
                  <h4 className="certification-title">{item.title}</h4>
                  <p className="certification-issuer">{item.issuer} • {item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
