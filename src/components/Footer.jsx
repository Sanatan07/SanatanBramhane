// import React from 'react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
  
//   const customStyles = `
//     .footer-component {
//       background-color: #111827;
//       padding: 4rem 2rem 2rem;
//       color: #ffffff;
//       min-height: auto;
//     }
    
//     .footer-content-grid {
//       max-width: 1024px;
//       margin: 0 auto;
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       gap: 2rem;
//       margin-bottom: 3rem;
//     }
    
//     .footer-logo-text {
//       font-size: 1.8rem;
//       font-weight: 700;
//       background: linear-gradient(45deg, #60a5fa, #8c9eff);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//     }
    
//     .footer-nav-links {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//     }
    
//     .footer-nav-links a {
//       color: #d1d5db;
//       text-decoration: none;
//       transition: color 0.3s ease;
//       font-weight: 500;
//       padding: 0.5rem 0;
//     }
    
//     .footer-nav-links a:hover {
//       color: #60a5fa;
//     }
    
//     .footer-social-links {
//       display: flex;
//       gap: 1rem;
//     }
    
//     .footer-social-icon {
//       color: #d1d5db;
//       text-decoration: none;
//       transition: color 0.3s ease;
//       font-weight: 500;
//     }
    
//     .footer-social-icon:hover {
//       color: #60a5fa;
//     }
    
//     .footer-bottom-section {
//       max-width: 1024px;
//       margin: 0 auto;
//       text-align: center;
//       padding-top: 2rem;
//       border-top: 1px solid #374151;
//     }
    
//     .footer-bottom-text {
//       color: #d1d5db;
//       font-size: 0.9rem;
//       margin: 0;
//     }
    
//     @media screen and (max-width: 1024px) {
//       .footer-content-grid {
//         grid-template-columns: 1fr;
//         text-align: center;
//         gap: 2.5rem;
//       }
      
//       .footer-nav-links {
//         align-items: center;
//       }
      
//       .footer-social-links {
//         justify-content: center;
//         flex-wrap: wrap;
//       }
//     }
    
//     @media screen and (max-width: 768px) {
//       .footer-component {
//         padding: 3rem 1.5rem 1.5rem;
//       }
      
//       .footer-content-grid {
//         gap: 2rem;
//         margin-bottom: 2rem;
//       }
      
//       .footer-logo-text {
//         font-size: 1.5rem;
//       }
      
//       .footer-social-links {
//         gap: 0.5rem;
//       }
      
//       .footer-social-icon {
//         font-size: 0.875rem;
//       }
//     }
    
//     @media screen and (max-width: 480px) {
//       .footer-social-links {
//         flex-direction: column;
//         align-items: center;
//       }
      
//       .footer-social-icon {
//         width: auto;
//         max-width: none;
//         text-align: left;
//       }
//     }
//   `;
  
//   return (
//     <>
//       <style>{customStyles}</style>
//       <footer className="footer footer-component">
//         <div className="footer-content footer-content-grid">
//           <div className="footer-logo">
//             <span className="footer-logo-text">DevSecureX</span>
//           </div>
          
//           {/* <div className="footer-links footer-nav-links">
//             <a href="#home">Home</a>
//             <a href="#about">About</a>
//             <a href="#skills">Skills</a>
//             <a href='#experience'>Experience</a>
//             <a href="#projects">Projects</a>
//             <a href="#education">Education</a>
//             <a href="#contact">Contact</a>
//           </div> */}
          
//           <div className="footer-social footer-social-links">
//             <a href="https://github.com/Sanatan07" target="_blank" rel="noopener noreferrer" className="social-icon footer-social-icon">GitHub</a>
//             <a href="https://www.linkedin.com/in/sanatanbramhane/" target="_blank" rel="noopener noreferrer" className="social-icon footer-social-icon">LinkedIn</a>
//             <a href="https://x.com/Sanatan781" target="_blank" rel="noopener noreferrer" className="social-icon footer-social-icon">Twitter</a>
//             <a href="https://x.com/Sanatan781" target="_blank" rel="noopener noreferrer" className="social-icon footer-social-icon">HackerRank</a>
//             <a href="https://x.com/Sanatan781" target="_blank" rel="noopener noreferrer" className="social-icon footer-social-icon">TryHackMe</a>
//           </div>
//         </div>
        
//         <div className="footer-bottom footer-bottom-section">
//           <p className="footer-bottom-text">&copy; {currentYear} Sanatan Bramhane. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const customStyles = `
    .footer-component {
      background-color: #111827;
      padding: 4rem 2rem 2rem;
      color: #ffffff;
      min-height: auto;
    }
    
    .footer-content-grid {
      max-width: 1024px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
    }
    
    .footer-logo-text {
      font-size: 1.8rem;
      font-weight: 700;
      background: linear-gradient(45deg, #60a5fa, #8c9eff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .footer-social-links {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }
    
    .footer-social-icon {
      color: #d1d5db;
      text-decoration: none;
      transition: all 0.3s ease;
      font-weight: 500;
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      position: relative;
    }
    
    .footer-social-icon:hover {
      color: #60a5fa;
      background: rgba(96, 165, 250, 0.1);
      transform: translateY(-2px);
    }
    
    .footer-bottom-section {
      max-width: 1024px;
      margin: 0 auto;
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid #374151;
    }
    
    .footer-bottom-text {
      color: #d1d5db;
      font-size: 0.9rem;
      margin: 0;
    }
    
    @media screen and (max-width: 768px) {
      .footer-component {
        padding: 3rem 1.5rem 1.5rem;
      }
      
      .footer-content-grid {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
        margin-bottom: 2rem;
      }
      
      .footer-logo-text {
        font-size: 1.5rem;
      }
      
      .footer-social-links {
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .footer-social-icon {
        font-size: 0.875rem;
        padding: 0.4rem 0.6rem;
      }
    }
    
    @media screen and (max-width: 480px) {
      .footer-social-links {
        gap: 0.75rem;
      }
      
      .footer-social-icon {
        font-size: 0.8rem;
        padding: 0.3rem 0.5rem;
      }
    }
  `;
  
  return (
    <>
      <style>{customStyles}</style>
      <footer className="footer footer-component">
        <div className="footer-content footer-content-grid">
          <div className="footer-logo">
            <span className="footer-logo-text">DevSecureX</span>
          </div>
          
          <div className="footer-social footer-social-links">
            <a href="https://github.com/Sanatan07" target="_blank" rel="noopener noreferrer" className="social-icon footer-social-icon">GitHub</a>
            <a href="https://www.linkedin.com/in/sanatanbramhane/" target="_blank" rel="noopener noreferrer" className="social-icon footer-social-icon">LinkedIn</a>
            <a href="https://x.com/Sanatan781" target="_blank" rel="noopener noreferrer" className="social-icon footer-social-icon">Twitter</a>
            <a href="https://x.com/Sanatan781" target="_blank" rel="noopener noreferrer" className="social-icon footer-social-icon">HackerRank</a>
            <a href="https://x.com/Sanatan781" target="_blank" rel="noopener noreferrer" className="social-icon footer-social-icon">TryHackMe</a>
          </div>
        </div>
        
        <div className="footer-bottom footer-bottom-section">
          <p className="footer-bottom-text">&copy; {currentYear} Sanatan Bramhane. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;