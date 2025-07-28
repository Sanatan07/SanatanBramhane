// import React, { useRef, useEffect } from 'react';
// import jdImg from '../assets/jd_img.jpg'

// const About = () => {
//   const aboutRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (aboutRef.current) {
//       observer.observe(aboutRef.current);
//     }

//     return () => {
//       if (aboutRef.current) {
//         observer.unobserve(aboutRef.current);
//       }
//     };
//   }, []);

//   const handleResumeClick = () => {
//     window.open('/Sanatan.pdf', '_blank');
//   };

//   const customStyles = `
//     .about-section {
//       background-color: #111827;
//       min-height: 100vh;
//       color: #ffffff;
//       padding: 6rem 1rem;
//     }
    
//     .section-container {
//       max-width: 1200px;
//       margin: 0 auto;
//       opacity: 0;
//       transform: translateY(50px);
//       transition: all 0.8s ease;
//     }
    
//     .section-container.animate-in {
//       opacity: 1;
//       transform: translateY(0);
//     }
    
//     .section-title {
//       font-size: 2.5rem;
//       margin-bottom: 3rem;
//       position: relative;
//       display: inline-block;
//       color: #ffffff;
//       font-weight: bold;
//     }
    
//     .section-title:after {
//       content: '';
//       position: absolute;
//       bottom: -10px;
//       left: 0;
//       width: 60px;
//       height: 4px;
//       background: linear-gradient(45deg, #60a5fa, #8c9eff);
//     }
    
//     .about-content {
//       display: grid;
//       grid-template-columns: 1fr 2fr;
//       gap: 3rem;
//     }
    
//     .about-image {
//       display: flex;
//       justify-content: center;
//       align-items: flex-start;
//     }
    
//     .image-placeholder {
//       width: 280px;
//       height: 280px;
//       border-radius: 20px;
//       background: linear-gradient(45deg, #60a5fa, #8c9eff);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 5rem;
//       font-weight: 700;
//       color: #ffffff;
//       box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//       transition: all 0.3s ease;
//     }
    
//     .image-placeholder:hover {
//       transform: translateY(-10px);
//       box-shadow: 0 25px 50px -12px rgba(96, 165, 250, 0.4);
//     }
    
//     .about-text p {
//       margin-bottom: 1.5rem;
//       line-height: 1.8;
//       color: #d1d5db;
//       font-size: 1.1rem;
//     }
    
//     .personal-info {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       gap: 1.5rem;
//       margin: 2rem 0;
//       background: rgba(31, 41, 55, 0.5);
//       padding: 2rem;
//       border-radius: 1rem;
//       border: 1px solid #374151;
//     }
    
//     .info-item {
//       display: flex;
//       flex-direction: column;
//       gap: 0.5rem;
//     }
    
//     .info-label {
//       font-weight: 600;
//       color: #60a5fa;
//       font-size: 0.9rem;
//       text-transform: uppercase;
//       letter-spacing: 0.05em;
//     }
    
//     .info-value {
//       color: #ffffff;
//       font-size: 1.1rem;
//       font-weight: 500;
//     }
    
//     .resume-button {
//       display: inline-block;
//       padding: 1rem 2rem;
//       background: linear-gradient(45deg, #60a5fa, #8c9eff);
//       color: #ffffff;
//       border: none;
//       border-radius: 0.5rem;
//       font-weight: 600;
//       font-size: 1rem;
//       cursor: pointer;
//       transition: all 0.3s ease;
//       text-decoration: none;
//       box-shadow: 0 4px 15px rgba(96, 165, 250, 0.3);
//     }
    
//     .resume-button:hover {
//       transform: translateY(-3px);
//       box-shadow: 0 10px 25px rgba(96, 165, 250, 0.5);
//       background: linear-gradient(45deg, #3b82f6, #6366f1);
//     }
    
//     .resume-button:active {
//       transform: translateY(-1px);
//     }
    
//     /* Responsive Design */
//     @media screen and (max-width: 1024px) {
//       .about-content {
//         grid-template-columns: 1fr;
//         gap: 2rem;
//       }
      
//       .about-image {
//         margin-bottom: 2rem;
//         justify-content: center;
//       }
      
//       .image-placeholder {
//         width: 220px;
//         height: 220px;
//         font-size: 4rem;
//       }
      
//       .personal-info {
//         grid-template-columns: 1fr;
//         gap: 1rem;
//       }
//     }
    
//     @media screen and (max-width: 768px) {
//       .about-section {
//         padding: 5rem 1.5rem;
//       }
      
//       .section-title {
//         font-size: 2rem;
//         text-align: center;
//       }
      
//       .about-content {
//         gap: 2rem;
//       }
      
//       .image-placeholder {
//         width: 200px;
//         height: 200px;
//         font-size: 3.5rem;
//       }
      
//       .about-text p {
//         font-size: 1rem;
//       }
      
//       .personal-info {
//         padding: 1.5rem;
//       }
      
//       .resume-button {
//         width: 100%;
//         text-align: center;
//       }
//     }
    
//     @media screen and (max-width: 480px) {
//       .about-section {
//         padding: 4rem 1rem;
//       }
      
//       .section-title {
//         font-size: 1.8rem;
//       }
      
//       .image-placeholder {
//         width: 180px;
//         height: 180px;
//         font-size: 3rem;
//       }
      
//       .personal-info {
//         padding: 1rem;
//       }
      
//       .info-item {
//         text-align: center;
//       }
//     }
//   `;

//   return (
//     <>
//       <style>{customStyles}</style>
//       <div className="about-section">
//         <div className="section-container" ref={aboutRef}>
//           <h2 className="section-title">About Me</h2>
//           <div className="about-content">
//             <div className="about-image">
//               <div className="image-placeholder">
//                 <img src={jdImg}></img>
//               </div>
//             </div>
//             <div className="about-text">
//               <p>
//                 I'm a passionate cybersecurity professional and full-stack developer with hands-on experience building secure, modern web applications. With a strong foundation in secure coding, penetration testing, and DevSecOps, I love combining functionality with security to create robust digital experiences.
//               </p>
//               <p>
//                 My journey started with a curiosity for ethical hacking and secure development, which led me to pursue a PG Diploma in Cyber Security & Forensics and dive deep into technologies like Python, React, Node.js, and MongoDB. Over the years, I've worked on everything from web app security testing to building AR-powered student ID systems and contributing to secure web development projects.
//               </p>
//               <p>
//                 When I'm not coding or analyzing vulnerabilities, you'll find me exploring new cybersecurity tools, brushing up on the latest infosec trends, or occasionally geeking out over sci-fi and emerging tech.
//               </p>
//               <div className="personal-info">
//                 <div className="info-item">
//                   <span className="info-label">Name:</span>
//                   <span className="info-value">Sanatan Bramhane</span>
//                 </div>
//                 <div className="info-item">
//                   <span className="info-label">Email:</span>
//                   <span className="info-value">sanatan.bramhane@outlook.com</span>
//                 </div>
//                 <div className="info-item">
//                   <span className="info-label">Location:</span>
//                   <span className="info-value">Pune, Maharashtra</span>
//                 </div>
//                 <div className="info-item">
//                   <span className="info-label">Availability:</span>
//                   <span className="info-value">Open to opportunities</span>
//                 </div>
//               </div>
//               <button onClick={handleResumeClick} className="resume-button">
//                 Download Resume
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;


import React, { useRef, useEffect } from 'react';
import jdImg from '../assets/jd_img.jpg'

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const handleResumeClick = () => {
    window.open('/Sanatan.pdf', '_blank');
  };

  const customStyles = `
    .about-section {
      background-color: #111827;
      min-height: 100vh;
      color: #ffffff;
      padding: 6rem 1rem;
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
    }
    
    .section-title:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(45deg, #60a5fa, #8c9eff);
    }
    
    .about-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
    }
    
    .about-image {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
    
    .image-placeholder {
      width: 280px;
      height: 280px;
      border-radius: 20px;
      background: linear-gradient(45deg, #60a5fa, #8c9eff);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 5rem;
      font-weight: 700;
      color: #ffffff;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      transition: all 0.3s ease;
      overflow: hidden;
      position: relative;
    }
    
    .image-placeholder img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
    
    .image-placeholder:hover {
      transform: translateY(-10px);
      box-shadow: 0 25px 50px -12px rgba(96, 165, 250, 0.4);
    }
    
    .about-text p {
      margin-bottom: 1.5rem;
      line-height: 1.8;
      color: #d1d5db;
      font-size: 1.1rem;
    }
    
    .personal-info {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin: 2rem 0;
      background: rgba(31, 41, 55, 0.5);
      padding: 2rem;
      border-radius: 1rem;
      border: 1px solid #374151;
    }
    
    .info-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    .info-label {
      font-weight: 600;
      color: #60a5fa;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .info-value {
      color: #ffffff;
      font-size: 1.1rem;
      font-weight: 500;
    }
    
    .resume-button {
      display: inline-block;
      padding: 1rem 2rem;
      background: linear-gradient(45deg, #60a5fa, #8c9eff);
      color: #ffffff;
      border: none;
      border-radius: 0.5rem;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      box-shadow: 0 4px 15px rgba(96, 165, 250, 0.3);
    }
    
    .resume-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(96, 165, 250, 0.5);
      background: linear-gradient(45deg, #3b82f6, #6366f1);
    }
    
    .resume-button:active {
      transform: translateY(-1px);
    }
    
    /* Responsive Design */
    @media screen and (max-width: 1024px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .about-image {
        margin-bottom: 2rem;
        justify-content: center;
      }
      
      .image-placeholder {
        width: 220px;
        height: 220px;
        font-size: 4rem;
      }
      
      .personal-info {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
    
    @media screen and (max-width: 768px) {
      .about-section {
        padding: 5rem 1.5rem;
      }
      
      .section-title {
        font-size: 2rem;
        text-align: center;
      }
      
      .about-content {
        gap: 2rem;
      }
      
      .image-placeholder {
        width: 200px;
        height: 200px;
        font-size: 3.5rem;
      }
      
      .about-text p {
        font-size: 1rem;
      }
      
      .personal-info {
        padding: 1.5rem;
      }
      
      .resume-button {
        width: 100%;
        text-align: center;
      }
    }
    
    @media screen and (max-width: 480px) {
      .about-section {
        padding: 4rem 1rem;
      }
      
      .section-title {
        font-size: 1.8rem;
      }
      
      .image-placeholder {
        width: 180px;
        height: 180px;
        font-size: 3rem;
      }
      
      .personal-info {
        padding: 1rem;
      }
      
      .info-item {
        text-align: center;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="about-section">
        <div className="section-container" ref={aboutRef}>
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="image-placeholder">
                <img src={jdImg} alt="Sanatan Bramhane" />
              </div>
            </div>
            <div className="about-text">
              <p>
                I'm a passionate cybersecurity professional and full-stack developer with hands-on experience building secure, modern web applications. With a strong foundation in secure coding, penetration testing, and DevSecOps, I love combining functionality with security to create robust digital experiences.
              </p>
              <p>
                My journey started with a curiosity for ethical hacking and secure development, which led me to pursue a PG Diploma in Cyber Security & Forensics and dive deep into technologies like Python, React, Node.js, and MongoDB. Over the years, I've worked on everything from web app security testing to building AR-powered student ID systems and contributing to secure web development projects.
              </p>
              <p>
                When I'm not coding or analyzing vulnerabilities, you'll find me exploring new cybersecurity tools, brushing up on the latest infosec trends, or occasionally geeking out over sci-fi and emerging tech.
              </p>
              <div className="personal-info">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Sanatan Bramhane</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">sanatan.bramhane@outlook.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Pune, Maharashtra</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Availability:</span>
                  <span className="info-value">Open to opportunities</span>
                </div>
              </div>
              <button onClick={handleResumeClick} className="resume-button">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;