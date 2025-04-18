import React, { useRef, useEffect } from 'react';

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

  return (
    <div className="section-container" ref={aboutRef}>
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <div className="image-placeholder">
            <span>JD</span>
          </div>
        </div>
        <div className="about-text">
          <p>
          I'm a passionate cybersecurity professional and full-stack developer with hands-on experience building secure, modern web applications. With a strong foundation in secure coding, penetration testing, and DevSecOps, I love combining functionality with security to create robust digital experiences.
          </p>
          <p>
          My journey started with a curiosity for ethical hacking and secure development, which led me to pursue a PG Diploma in Cyber Security & Forensics and dive deep into technologies like Python, React, Node.js, and MongoDB. Over the years, I’ve worked on everything from web app security testing to building AR-powered student ID systems and contributing to secure web development projects.
          </p>
          <p>
          When I'm not coding or analyzing vulnerabilities, you’ll find me exploring new cybersecurity tools, brushing up on the latest infosec trends, or occasionally geeking out over sci-fi and emerging tech.
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
          <a href="/resume.pdf" target="_blank" className="resume-button">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;