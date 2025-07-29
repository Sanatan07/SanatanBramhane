// import React, { useEffect, useRef } from 'react';
// import { TypeAnimation } from 'react-type-animation';

// const Home = () => {
//   const homeRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (homeRef.current) {
//       observer.observe(homeRef.current);
//     }

//     return () => {
//       if (homeRef.current) {
//         observer.unobserve(homeRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="home-container" ref={homeRef}>
//       <div className="home-content">
//         <div className="greeting">Hello, I'm</div>
//         <h1 className="name">Sanatan Bramhane</h1>
//         <div className="title">
//           <TypeAnimation
//             sequence={[
//               'Software Developer', 2000,
//               'Application Security Engineer', 2000,
//               'Information Security Consultant', 2000,
//             ]}
//             wrapper="span"
//             speed={50}
//             repeat={Infinity}
//           />
//         </div>
//         <p className="description" style={{textAlign: 'justify'}}>
//         Infosec professional skilled in secure application development, penetration testing, and vulnerability assessment. Proficient in Linux, Networking, Encryption/Decryption, TCP/IP, SSL/TLS applies security best practices to web and
//         mobile applications. Experienced in web security, cryptographic analysis, OSINT, and DevSecOps, uses Burp Suite, Metasploit, OWASP ZAP, Nmap, and Python to build and test high-performing, secure applications
//         </p>
//         <div className="button-container">
//           <a href="#contact" className="primary-button">Get In Touch</a>
//           <a href="#projects" className="secondary-button">View Work</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



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

  const customStyles = `
    .home-section {
      background-color: #111827;
      min-height: 100vh;
      color: #ffffff;
      position: relative;
      overflow: hidden;
    }
    
    .home-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease;
      position: relative;
      z-index: 2;
    }
    
    .home-container.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .home-content {
      max-width: 800px;
    }
    
    .greeting {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      color: #60a5fa;
      font-weight: 500;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.2s;
    }
    
    .name {
      font-size: 4.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      color: #ffffff;
      line-height: 1.1;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.4s;
      background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .title {
      font-size: 2.2rem;
      font-weight: 600;
      margin-bottom: 2rem;
      color: #8c9eff;
      height: 3rem;
      display: flex;
      align-items: center;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.6s;
    }
    
    .title span {
      background: linear-gradient(135deg, #60a5fa 0%, #8c9eff 50%, #c084fc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
    }
    
    .description {
      font-size: 1.2rem;
      max-width: 700px;
      margin-bottom: 3rem;
      line-height: 1.8;
      color: #d1d5db;
      text-align: justify;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 0.8s;
    }
    
    .button-container {
      display: flex;
      gap: 1.5rem;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards 1s;
    }
    
    .primary-button, .secondary-button {
      padding: 1.2rem 2.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 0.5rem;
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 160px;
    }
    
    .primary-button {
      background: linear-gradient(135deg, #60a5fa, #8c9eff);
      color: #ffffff;
      box-shadow: 0 4px 15px rgba(96, 165, 250, 0.4);
      border: 2px solid transparent;
    }
    
    .primary-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }
    
    .primary-button:hover::before {
      left: 100%;
    }
    
    .primary-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(96, 165, 250, 0.5);
      background: linear-gradient(135deg, #3b82f6, #6366f1);
    }
    
    .secondary-button {
      background: transparent;
      color: #ffffff;
      border: 2px solid #60a5fa;
      position: relative;
    }
    
    .secondary-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: linear-gradient(135deg, #60a5fa, #8c9eff);
      transition: width 0.3s ease;
      z-index: -1;
    }
    
    .secondary-button:hover::before {
      width: 100%;
    }
    
    .secondary-button:hover {
      color: #ffffff;
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(96, 165, 250, 0.3);
      border-color: #8c9eff;
    }
    
    /* Background decoration */
    .home-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(140, 158, 255, 0.1) 0%, transparent 50%);
      z-index: 1;
    }
    
    .home-section::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300px;
      height: 300px;
      background: linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(140, 158, 255, 0.1));
      border-radius: 50%;
      transform: translate(-50%, -50%);
      filter: blur(100px);
      z-index: 1;
      animation: float 6s ease-in-out infinite;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translate(-50%, -50%) translateY(0px);
      }
      50% {
        transform: translate(-50%, -50%) translateY(-20px);
      }
    }
    
    /* Responsive Design */
    @media screen and (max-width: 768px) {
      .home-container {
        padding: 0 1.5rem;
        text-align: center;
      }
      
      .name {
        font-size: 3.5rem;
        line-height: 1.2;
      }
      
      .title {
        font-size: 1.8rem;
        height: 2.5rem;
        justify-content: center;
      }
      
      .description {
        font-size: 1.1rem;
        text-align: center;
      }
      
      .button-container {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
      
      .primary-button, .secondary-button {
        width: 100%;
        max-width: 280px;
        padding: 1rem 2rem;
      }
    }
    
    @media screen and (max-width: 480px) {
      .greeting {
        font-size: 1.4rem;
      }
      
      .name {
        font-size: 2.8rem;
      }
      
      .title {
        font-size: 1.5rem;
        height: 2rem;
      }
      
      .description {
        font-size: 1rem;
        line-height: 1.6;
      }
      
      .primary-button, .secondary-button {
        font-size: 1rem;
        padding: 0.9rem 1.8rem;
      }
    }
    
    @media screen and (max-width: 360px) {
      .name {
        font-size: 2.4rem;
      }
      
      .title {
        font-size: 1.3rem;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="home-section">
        <div className="home-container" ref={homeRef}>
          <div className="home-content">
            <div className="greeting">Hello, I'm</div>
            <h1 className="name">Sanatan Bramhane</h1>
            <div className="title">
              <TypeAnimation
                sequence={[
                  'Product Security', 2000,
                  'Application Security', 2000,
                  'Software Engineer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="description">
              Hi, I’m Sanatan — part software engineer, part digital locksmith. I don’t just write code; I poke at its weak spots, lock the doors, and set digital traps for bugs. Whether I’m securing APIs or outfragging opponents in Valorant, I live for challenges that require sharp thinking and sharper tools. If it’s broken, I’ll fix it — or exploit it first, just to be sure.
            </p>
            <div className="button-container">
              <a href="#contact" className="primary-button">Get In Touch</a>
              <a href="#projects" className="secondary-button">View Work</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;