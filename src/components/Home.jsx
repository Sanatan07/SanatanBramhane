import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <div className="home-container" ref={homeRef}>
      <div className="home-content">
        <div className="greeting">Hello, I'm</div>
        <h1 className="name">Sanatan Bramhane</h1>
        <div className="title">
          <TypeAnimation
            sequence={[
              'Software Developer', 2000,
              'Application Security Engineer', 2000,
              'Information Security Consultant', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="description" style={{textAlign: 'justify'}}>
        Infosec professional skilled in secure application development, penetration testing, and vulnerability assessment. Proficient in Linux, Networking, Encryption/Decryption, TCP/IP, SSL/TLS applies security best practices to web and
        mobile applications. Experienced in web security, cryptographic analysis, OSINT, and DevSecOps, uses Burp Suite, Metasploit, OWASP ZAP, Nmap, and Python to build and test high-performing, secure applications
        </p>
        <div className="button-container">
          <a href="#contact" className="primary-button">Get In Touch</a>
          <a href="#projects" className="secondary-button">View Work</a>
        </div>
      </div>
    </div>
  );
};

export default Home;