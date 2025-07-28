// import React, { useRef, useEffect } from 'react';

// const Education = () => {
//   const educationRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (educationRef.current) {
//       observer.observe(educationRef.current);
//     }

//     return () => {
//       if (educationRef.current) {
//         observer.unobserve(educationRef.current);
//       }
//     };
//   }, []);

//   const educationData = [
//     {
//       degree: 'B.E in Mechanical Engineering',
//       institution: 'Indira College of Engineering and Management',
//       location: 'Pune, Maharashtra',
//       period: '2019 - 2023',
//     },
//     {
//       degree: 'PGD in Cyber Security and Digital Forensics',
//       institution: 'CDAC',
//       location: 'Thiruvananthapuram, Kerala',
//       period: '2023 - 2024',
//       description: 'Specialized in and Vulnerability Assessment and Penetration Testing (VAPT), and Secure Software Development.',
//     },
//   ];

//   const certificationData = [
//     {
//       title: 'Fundamentals of Devsecops',
//       issuer: 'Tutorialspoint',
//     },
//     {
//       title: 'Ultimate Devsecops with Real World Scenarios',
//       issuer: 'Tutorialspoint',
//     },
//     {
//       title: 'Certified Penetration Testing Professional (CPENT)',
//       issuer: 'Ec-Council',
//       date: 'OnGoing',
//     },
//   ];

//   return (
//     <div className="section-container" ref={educationRef}>
//       <h2 className="section-title">Education & Certifications</h2>
      
//       <div className="education-content">
//         <div className="education-section">
//           <h3 className="subsection-title">Education</h3>
//           <div className="timeline">
//             {educationData.map((item, index) => (
//               <div key={index} className="timeline-item">
//                 <div className="timeline-marker"></div>
//                 <div className="timeline-content">
//                   <div className="timeline-period">{item.period}</div>
//                   <h4 className="timeline-title">{item.degree}</h4>
//                   <p className="timeline-institution">{item.institution}, {item.location}</p>
//                   <p className="timeline-description">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="certification-section">
//           <h3 className="subsection-title">Certifications</h3>
//           <div className="certifications-list">
//             {certificationData.map((item, index) => (
//               <div key={index} className="certification-item">
//                 <div className="certification-icon"></div>
//                 <div className="certification-details">
//                   <h4 className="certification-title">{item.title}</h4>
//                   <p className="certification-issuer">{item.issuer} • {item.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;


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

  const customStyles = `
    .education-section {
      background-color: #111827;
      min-height: 100vh;
      color: #ffffff;
      padding: 4rem 1rem;
    }
    
    .section-container {
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease;
    }
    
    .section-container.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .section-title {
      font-size: 2.5rem;
      margin-bottom: 3rem;
      position: relative;
      display: inline-block;
      color: #ffffff;
      font-weight: bold;
      text-align: center;
      width: 100%;
    }
    
    .section-title:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(45deg, #60a5fa, #8c9eff);
    }
    
    .education-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
    
    .subsection-title {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      color: #60a5fa;
      font-weight: 600;
    }
    
    .timeline {
      position: relative;
    }
    
    .timeline:before {
      content: '';
      position: absolute;
      top: 0;
      left: 15px;
      height: 100%;
      width: 2px;
      background: #60a5fa;
    }
    
    .timeline-item {
      position: relative;
      padding-left: 45px;
      margin-bottom: 3rem;
    }
    
    .timeline-marker {
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #111827;
      border: 3px solid #60a5fa;
      z-index: 1;
    }
    
    .timeline-period {
      display: inline-block;
      padding: 0.3rem 1rem;
      background: rgba(96, 165, 250, 0.1);
      color: #60a5fa;
      border-radius: 15px;
      font-size: 0.9rem;
      margin-bottom: 1rem;
      font-weight: 500;
    }
    
    .timeline-title {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: #ffffff;
      font-weight: 600;
    }
    
    .timeline-institution {
      font-size: 1rem;
      color: #8c9eff;
      margin-bottom: 1rem;
      font-weight: 500;
    }
    
    .timeline-description {
      font-size: 0.9rem;
      color: #d1d5db;
      line-height: 1.6;
    }
    
    .certifications-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .certification-item {
      display: flex;
      gap: 1.5rem;
      background: rgba(31, 41, 55, 0.8);
      padding: 1.5rem;
      border-radius: 10px;
      border: 1px solid #374151;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    
    .certification-item:hover {
      background: rgba(31, 41, 55, 1);
      transform: translateX(10px);
      border-color: rgba(96, 165, 250, 0.3);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    
    .certification-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(45deg, #60a5fa, #8c9eff);
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    .certification-icon:before {
      content: '🎓';
      font-size: 1.5rem;
    }
    
    .certification-details {
      flex: 1;
    }
    
    .certification-title {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #ffffff;
      font-weight: 600;
    }
    
    .certification-issuer {
      font-size: 0.9rem;
      color: #d1d5db;
      margin: 0;
    }
    
    @media screen and (max-width: 1024px) {
      .education-content {
        grid-template-columns: 1fr;
      }
      
      .certification-section {
        margin-top: 3rem;
      }
    }
    
    @media screen and (max-width: 768px) {
      .education-section {
        padding: 2rem 1rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .subsection-title {
        font-size: 1.5rem;
      }
      
      .education-content {
        gap: 2rem;
      }
    }
    
    @media screen and (max-width: 480px) {
      .timeline-item {
        padding-left: 35px;
      }
      
      .timeline-marker {
        width: 20px;
        height: 20px;
        left: 5px;
      }
      
      .timeline:before {
        left: 10px;
      }
      
      .certification-item {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }
      
      .certification-icon {
        align-self: center;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="education-section">
        <div className="section-container" ref={educationRef}>
          <h2 className="section-title">Education & Certifications</h2>
          
          <div className="education-content">
            <div className="education-section-content">
              <h3 className="subsection-title">Education</h3>
              <div className="timeline">
                {educationData.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-period">{item.period}</div>
                      <h4 className="timeline-title">{item.degree}</h4>
                      <p className="timeline-institution">{item.institution}, {item.location}</p>
                      {item.description && <p className="timeline-description">{item.description}</p>}
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
                      <p className="certification-issuer">{item.issuer}{item.date ? ` • ${item.date}` : ''}</p>
                    </div>
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