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
      align-items: stretch;
      min-height: calc(100vh - 12rem - 3rem);
    }
    
    .about-image {
      display: flex;
      justify-content: center;
      align-items: stretch;
      height: 100%;
    }
    
    .image-placeholder {
      width: 100%;
      max-width: 350px;
      height: 100%;
      border-radius: 20px;
      background: linear-gradient(45deg, #60a5fa, #8c9eff);
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      transition: all 0.3s ease;
      overflow: hidden;
      position: relative;
    }
    
    .image-placeholder img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 20px;
    }
    
    .image-placeholder:hover {
      transform: translateY(-10px);
      box-shadow: 0 25px 50px -12px rgba(96, 165, 250, 0.4);
    }
    
    .about-text {
      display: flex;
      flex-direction: column;
      height: fit-content;
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
      width: fit-content;
      margin-top: auto;
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
        position: static;
      }
      
      .image-placeholder {
        max-width: 280px;
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
        max-width: 250px;
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
        max-width: 180px;
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
               I'm a security-concious software engineer passionate about building and securing modern digital systems. I focus on product security, helping teams integrate security across the development lifecycle — from design to deployment.
              </p>
              <p>
                My interest in security sparked during my final semester of engineering through an elective on IoT, where I discovered how vulnerable connected systems can be. That curiosity led me to explore web and mobile app security, diving into tools like Burp Suite, OWASP ZAP, Frida, and Metasploit to uncover and understand real-world vulnerabilities like IDOR, XSS, and insecure authentication.
              </p>
              <p>
                I enjoy working at the intersection of DevSecOps and application security, using tools like Docker, AWS, Kubernetes, and Python to automate secure development and testing workflows.
              </p>
              <p>
               When I’m not hunting bugs, you’ll find me hiking mountains, grinding in Valorant, or building passion projects that merge my love for web development and offensive security.
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