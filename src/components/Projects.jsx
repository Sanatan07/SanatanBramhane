// import React, { useRef, useEffect, useState } from 'react';
// import { Github, ExternalLink, Shield, Globe, User, Search, Lock, Code } from 'lucide-react';

// const Projects = () => {
//   const projectsRef = useRef(null);
//   const [filter, setFilter] = useState('all');

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (projectsRef.current) {
//       observer.observe(projectsRef.current);
//     }

//     return () => {
//       if (projectsRef.current) {
//         observer.unobserve(projectsRef.current);
//       }
//     };
//   }, []);

//   // Function to generate project-specific visual elements
//   const getProjectVisual = (projectTitle) => {
//     switch (projectTitle) {
//       case 'VAPT':
//         return {
//           gradient: 'linear-gradient(135deg, #ef4444, #dc2626, #991b1b)',
//           icons: [Shield, Lock, Search],
//           pattern: 'security'
//         };
//       case 'Web VAPT':
//         return {
//           gradient: 'linear-gradient(135deg, #3057d9ff, #3057d9ff, #3057d9ff)',
//           icons: [Lock, Shield, Search],
//           pattern: 'security'
//         };
//       case 'Market360':
//         return {
//           gradient: 'linear-gradient(135deg, #10b981, #059669, #047857)',
//           icons: [Globe, Code, User],
//           pattern: 'market'
//         };
//       case 'Portfolio Website':
//         return {
//           gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed, #6d28d9)',
//           icons: [User, Code, Globe],
//           pattern: 'portfolio'
//         };
//       default:
//         return {
//           gradient: 'linear-gradient(135deg, #60a5fa, #8c9eff)',
//           icons: [Code],
//           pattern: 'default'
//         };
//     }
//   };

//   const projects = [
//     {
//       id: 1,
//       title: 'Portfolio Website',
//       description: 'Interactive developer portfolio with 3D elements and animations.',
//       image: 'project6.jpg',
//       technologies: ['React', 'Nodejs'],
//       category: 'web',
//       github: 'https://github.com/Sanatan07/SanatanBramhane',
//       live: 'https://sanatanbramhane.vercel.app/',
//     },
//     {
//       id: 2,
//       title: 'Market360',
//       description:
//         'The Market 360 is a secure MERN-stack dropshipping app that safeguards user data while streamlining deal discovery, business automation, and affiliate marketing.',
//       image: 'project2.jpg',
//       technologies: ['React', 'Node.js', 'MongoDB', 'Secure Coding'],
//       category: 'fullstack',
//       live: 'https://market-360-frontend-zeta.vercel.app/',
//     },
//     {
//       id: 3,
//       title: 'Web App Pentesting on Unstop.comVAPT',
//       description:
//         'Performed Vulnerability Assessment and Penetration Testing on a unstop.com, identifying security flaws and providing remediation strategies.',
//       image: 'project1.jpg',
//       technologies: ['Nmap', 'Burpsuite', 'Nessus'],
//       category: 'VAPT',
//     },
//     {
//       id: 4,
//       title: 'Web Application Pentesting on DVWA',
//       description:
//         'Performed Vulnerability Assessment and Penetration Testing on a DVWA, identifying security flaws and providing remediation strategies.',
//       image: 'project1.jpg',
//       technologies: ['Burpsuite', 'SQLi', 'XSS','Command Execution',],
//       category: 'VAPT',
//       report: 'https://shorturl.at/ofQxk'
//     },
    
//   ];

//   const filteredProjects =
//     filter === 'all' ? projects : projects.filter((project) => project.category === filter);

//   const customStyles = `
//     .projects-section {
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
//       text-align: center;
//       width: 100%;
//     }
    
//     .section-title:after {
//       content: '';
//       position: absolute;
//       bottom: -10px;
//       left: 50%;
//       transform: translateX(-50%);
//       width: 60px;
//       height: 4px;
//       background: linear-gradient(45deg, #60a5fa, #8c9eff);
//     }
    
//     .project-filters {
//       display: flex;
//       justify-content: center;
//       margin-bottom: 3rem;
//       flex-wrap: wrap;
//       gap: 1rem;
//     }
    
//     .project-filters button {
//       padding: 0.8rem 2rem;
//       background: transparent;
//       color: #ffffff;
//       border: 2px solid rgba(96, 165, 250, 0.3);
//       border-radius: 50px;
//       cursor: pointer;
//       font-weight: 600;
//       font-size: 0.95rem;
//       transition: all 0.3s ease;
//       position: relative;
//       overflow: hidden;
//     }
    
//     .project-filters button::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: -100%;
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(135deg, #60a5fa, #8c9eff);
//       transition: left 0.3s ease;
//       z-index: -1;
//     }
    
//     .project-filters button:hover::before,
//     .project-filters button.active::before {
//       left: 0;
//     }
    
//     .project-filters button:hover,
//     .project-filters button.active {
//       color: #ffffff;
//       border-color: #60a5fa;
//       transform: translateY(-2px);
//       box-shadow: 0 5px 15px rgba(96, 165, 250, 0.4);
//     }
    
//     .projects-grid {
//       display: grid;
//       grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
//       gap: 2rem;
//     }
    
//     .project-card {
//       background: rgba(31, 41, 55, 0.8);
//       border-radius: 1rem;
//       overflow: hidden;
//       box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
//       border: 1px solid #374151;
//       transition: all 0.3s ease;
//       backdrop-filter: blur(10px);
//     }
    
//     .project-card:hover {
//       transform: translateY(-10px);
//       box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
//       border-color: rgba(96, 165, 250, 0.5);
//     }
    
//     .project-image {
//       width: 100%;
//       height: 200px;
//       overflow: hidden;
//       position: relative;
//     }
    
//     .project-visual {
//       width: 100%;
//       height: 100%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       position: relative;
//       overflow: hidden;
//     }
    
//     .security-pattern {
//       background: linear-gradient(135deg, #ef4444, #dc2626, #991b1b);
//     }
    
//     .security-pattern::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       background-image: 
//         radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 2px, transparent 2px),
//         radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 2px, transparent 2px),
//         radial-gradient(circle at 40% 60%, rgba(255,255,255,0.1) 1px, transparent 1px);
//       background-size: 30px 30px, 40px 40px, 20px 20px;
//       animation: float 6s ease-in-out infinite;
//     }
    
//     .market-pattern {
//       background: linear-gradient(135deg, #10b981, #059669, #047857);
//     }
    
//     .market-pattern::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       background-image: 
//         linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
//         linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
//         linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
//         linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%);
//       background-size: 20px 20px;
//       background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
//       animation: slide 8s linear infinite;
//     }
    
//     .portfolio-pattern {
//       background: linear-gradient(135deg, #8b5cf6, #7c3aed, #6d28d9);
//     }
    
//     .portfolio-pattern::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       background-image: 
//         radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 50%),
//         radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 50%);
//       background-size: 50px 50px;
//       animation: pulse 4s ease-in-out infinite;
//     }
    
//     .project-icons {
//       display: flex;
//       gap: 1rem;
//       z-index: 2;
//       position: relative;
//     }
    
//     .project-icon {
//       width: 2.5rem;
//       height: 2.5rem;
//       color: rgba(255, 255, 255, 0.9);
//       filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
//       animation: bounce 2s ease-in-out infinite;
//     }
    
//     .project-icon:nth-child(2) {
//       animation-delay: 0.2s;
//     }
    
//     .project-icon:nth-child(3) {
//       animation-delay: 0.4s;
//     }
    
//     .project-content {
//       padding: 2rem;
//     }
    
//     .project-title {
//       font-size: 1.5rem;
//       margin-bottom: 1rem;
//       color: #ffffff;
//       font-weight: 700;
//     }
    
//     .project-description {
//       font-size: 1rem;
//       color: #d1d5db;
//       margin-bottom: 1.5rem;
//       line-height: 1.7;
//       text-align: justify;
//     }
    
//     .project-tech {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 0.5rem;
//       margin-bottom: 2rem;
//     }
    
//     .tech-tag {
//       padding: 0.4rem 1rem;
//       background: rgba(96, 165, 250, 0.15);
//       border: 1px solid rgba(96, 165, 250, 0.3);
//       border-radius: 20px;
//       font-size: 0.85rem;
//       color: #60a5fa;
//       font-weight: 600;
//       transition: all 0.3s ease;
//     }
    
//     .tech-tag:hover {
//       background: rgba(96, 165, 250, 0.25);
//       border-color: rgba(96, 165, 250, 0.5);
//       transform: scale(1.05);
//     }
    
//     .project-links {
//       display: flex;
//       gap: 1rem;
//     }
    
//     .project-link {
//       display: flex;
//       align-items: center;
//       gap: 0.5rem;
//       color: #ffffff;
//       text-decoration: none;
//       font-size: 0.95rem;
//       font-weight: 600;
//       padding: 0.7rem 1.5rem;
//       border: 2px solid rgba(96, 165, 250, 0.3);
//       border-radius: 0.5rem;
//       transition: all 0.3s ease;
//       background: transparent;
//       position: relative;
//       overflow: hidden;
//     }
    
//     .project-link::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: -100%;
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(135deg, #60a5fa, #8c9eff);
//       transition: left 0.3s ease;
//       z-index: -1;
//     }
    
//     .project-link:hover::before {
//       left: 0;
//     }
    
//     .project-link:hover {
//       color: #ffffff;
//       border-color: #60a5fa;
//       transform: translateY(-2px);
//       box-shadow: 0 5px 15px rgba(96, 165, 250, 0.4);
//     }
    
//     .project-link svg {
//       width: 1rem;
//       height: 1rem;
//     }
    
//     @keyframes float {
//       0%, 100% { transform: translateY(0px); }
//       50% { transform: translateY(-10px); }
//     }
    
//     @keyframes slide {
//       0% { background-position: 0 0, 0 10px, 10px -10px, -10px 0px; }
//       100% { background-position: 20px 20px, 20px 30px, 30px 10px, 10px 20px; }
//     }
    
//     @keyframes pulse {
//       0%, 100% { opacity: 1; transform: scale(1); }
//       50% { opacity: 0.8; transform: scale(1.05); }
//     }
    
//     @keyframes bounce {
//       0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//       40% { transform: translateY(-10px); }
//       60% { transform: translateY(-5px); }
//     }
    
//     /* Responsive Design */
//     @media screen and (max-width: 768px) {
//       .projects-section {
//         padding: 5rem 1.5rem;
//       }
      
//       .section-title {
//         font-size: 2rem;
//       }
      
//       .projects-grid {
//         grid-template-columns: 1fr;
//         gap: 1.5rem;
//       }
      
//       .project-filters {
//         flex-direction: column;
//         align-items: center;
//         gap: 0.8rem;
//       }
      
//       .project-filters button {
//         width: 100%;
//         max-width: 200px;
//         padding: 0.7rem 1.5rem;
//       }
      
//       .project-content {
//         padding: 1.5rem;
//       }
      
//       .project-links {
//         flex-direction: column;
//         gap: 0.8rem;
//       }
      
//       .project-link {
//         justify-content: center;
//         text-align: center;
//       }
      
//       .project-icon {
//         width: 2rem;
//         height: 2rem;
//       }
//     }
    
//     @media screen and (max-width: 480px) {
//       .projects-section {
//         padding: 4rem 1rem;
//       }
      
//       .section-title {
//         font-size: 1.8rem;
//       }
      
//       .project-content {
//         padding: 1.2rem;
//       }
      
//       .project-title {
//         font-size: 1.3rem;
//       }
      
//       .project-description {
//         font-size: 0.9rem;
//       }
      
//       .project-icon {
//         width: 1.8rem;
//         height: 1.8rem;
//       }
//     }
    
//     @media screen and (min-width: 1200px) {
//       .projects-grid {
//         grid-template-columns: repeat(3, 1fr);
//       }
//     }
//   `;

//   return (
//     <>
//       <style>{customStyles}</style>
//       <div className="projects-section">
//         <div className="section-container" ref={projectsRef}>
//           <h2 className="section-title">Projects</h2>

//           <div className="project-filters">
//             <button
//               className={filter === 'all' ? 'active' : ''}
//               onClick={() => setFilter('all')}
//             >
//               All
//             </button>
//             <button
//               className={filter === 'web' ? 'active' : ''}
//               onClick={() => setFilter('web')}
//             >
//               Web
//             </button>
//             <button
//               className={filter === 'fullstack' ? 'active' : ''}
//               onClick={() => setFilter('fullstack')}
//             >
//               Fullstack
//             </button>
//             <button
//               className={filter === 'vapt' ? 'active' : ''}
//               onClick={() => setFilter('vapt')}
//             >
//               VAPT
//             </button>
//           </div>

//           <div className="projects-grid">
//             {filteredProjects.map((project) => {
//               const visual = getProjectVisual(project.title);
//               const IconComponents = visual.icons;
              
//               return (
//                 <div key={project.id} className="project-card">
//                   <div className="project-image">
//                     <div className={`project-visual ${visual.pattern}-pattern`}>
//                       <div className="project-icons">
//                         {IconComponents.map((IconComponent, index) => (
//                           <IconComponent key={index} className="project-icon" />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="project-content">
//                     <h3 className="project-title">{project.title}</h3>
//                     <p className="project-description">{project.description}</p>
//                     <div className="project-tech">
//                       {project.technologies.map((tech, index) => (
//                         <span key={index} className="tech-tag">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="project-links">
//                       {project.github && (
//                         <a
//                           href={project.github}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="project-link"
//                         >
//                           <Github /> Code
//                         </a>
//                       )}
//                       {project.live && (
//                         <a
//                           href={project.live}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="project-link"
//                         >
//                           <ExternalLink /> Live Demo
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;

import React, { useRef, useEffect, useState } from 'react';
import { Github, ExternalLink, Shield, Globe, User, Search, Lock, Code, FileText } from 'lucide-react';

const Projects = () => {
  const projectsRef = useRef(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  // Function to generate project-specific visual elements
  const getProjectVisual = (projectTitle) => {
    switch (projectTitle) {
      case 'Web App Pentesting on Unstop.com':
      case 'Web Application Pentesting on DVWA':
        return {
          gradient: 'linear-gradient(135deg, #ef4444, #dc2626, #991b1b)',
          icons: [Shield, Lock, Search],
          pattern: 'security'
        };
      case 'Market360':
        return {
          gradient: 'linear-gradient(135deg, #10b981, #059669, #047857)',
          icons: [Globe, Code, User],
          pattern: 'market'
        };
      case 'Portfolio Website':
        return {
          gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed, #6d28d9)',
          icons: [User, Code, Globe],
          pattern: 'portfolio'
        };
      default:
        return {
          gradient: 'linear-gradient(135deg, #60a5fa, #8c9eff)',
          icons: [Code],
          pattern: 'default'
        };
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Interactive developer portfolio with 3D elements and animations.',
      image: 'project6.jpg',
      technologies: ['React', 'Nodejs'],
      category: 'fullstack',
      github: 'https://github.com/Sanatan07/SanatanBramhane',
      live: 'https://sanatan-bramhane.vercel.app/',
    },
    {
      id: 2,
      title: 'Market360',
      description:
        'The Market 360 is a secure MERN-stack dropshipping app that safeguards user data while streamlining deal discovery, business automation, and affiliate marketing.',
      image: 'project2.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Secure Coding'],
      category: 'fullstack',
      live: 'https://market-360-frontend-zeta.vercel.app/',
    },
    {
      id: 3,
      title: 'Web App Pentesting on Unstop.com',
      description:
        'Performed Vulnerability Assessment and Penetration Testing on unstop.com, identifying security flaws and providing remediation strategies.',
      image: 'project1.jpg',
      technologies: ['Nmap', 'Burpsuite', 'Nessus'],
      category: 'vapt',
    },
    {
      id: 4,
      title: 'Web Application Pentesting on DVWA',
      description:
        'Performed Vulnerability Assessment and Penetration Testing on DVWA (Damn Vulnerable Web Application), identifying security flaws and providing remediation strategies.',
      image: 'project1.jpg',
      technologies: ['Burpsuite', 'SQLi', 'XSS', 'Command Execution'],
      category: 'vapt',
      report: 'https://shorturl.at/ofQxk'
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  const customStyles = `
    .projects-section {
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
    
    .project-filters {
      display: flex;
      justify-content: center;
      margin-bottom: 3rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .project-filters button {
      padding: 0.8rem 2rem;
      background: transparent;
      color: #ffffff;
      border: 2px solid rgba(96, 165, 250, 0.3);
      border-radius: 50px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .project-filters button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #60a5fa, #8c9eff);
      transition: left 0.3s ease;
      z-index: -1;
    }
    
    .project-filters button:hover::before,
    .project-filters button.active::before {
      left: 0;
    }
    
    .project-filters button:hover,
    .project-filters button.active {
      color: #ffffff;
      border-color: #60a5fa;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(96, 165, 250, 0.4);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      gap: 2rem;
    }
    
    .project-card {
      background: rgba(31, 41, 55, 0.8);
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      border: 1px solid #374151;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }
    
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      border-color: rgba(96, 165, 250, 0.5);
    }
    
    .project-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
      position: relative;
    }
    
    .project-visual {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
    
    .security-pattern {
      background: linear-gradient(135deg, #ef4444, #dc2626, #991b1b);
    }
    
    .security-pattern::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 2px, transparent 2px),
        radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 2px, transparent 2px),
        radial-gradient(circle at 40% 60%, rgba(255,255,255,0.1) 1px, transparent 1px);
      background-size: 30px 30px, 40px 40px, 20px 20px;
      animation: float 6s ease-in-out infinite;
    }
    
    .market-pattern {
      background: linear-gradient(135deg, #10b981, #059669, #047857);
    }
    
    .market-pattern::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
      animation: slide 8s linear infinite;
    }
    
    .portfolio-pattern {
      background: linear-gradient(135deg, #8b5cf6, #7c3aed, #6d28d9);
    }
    
    .portfolio-pattern::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 50%);
      background-size: 50px 50px;
      animation: pulse 4s ease-in-out infinite;
    }
    
    .project-icons {
      display: flex;
      gap: 1rem;
      z-index: 2;
      position: relative;
    }
    
    .project-icon {
      width: 2.5rem;
      height: 2.5rem;
      color: rgba(255, 255, 255, 0.9);
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
      animation: bounce 2s ease-in-out infinite;
    }
    
    .project-icon:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    .project-icon:nth-child(3) {
      animation-delay: 0.4s;
    }
    
    .project-content {
      padding: 2rem;
    }
    
    .project-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #ffffff;
      font-weight: 700;
    }
    
    .project-description {
      font-size: 1rem;
      color: #d1d5db;
      margin-bottom: 1.5rem;
      line-height: 1.7;
      text-align: justify;
    }
    
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
    
    .tech-tag {
      padding: 0.4rem 1rem;
      background: rgba(96, 165, 250, 0.15);
      border: 1px solid rgba(96, 165, 250, 0.3);
      border-radius: 20px;
      font-size: 0.85rem;
      color: #60a5fa;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .tech-tag:hover {
      background: rgba(96, 165, 250, 0.25);
      border-color: rgba(96, 165, 250, 0.5);
      transform: scale(1.05);
    }
    
    .project-links {
      display: flex;
      gap: 1rem;
    }
    
    .project-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #ffffff;
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 600;
      padding: 0.7rem 1.5rem;
      border: 2px solid rgba(96, 165, 250, 0.3);
      border-radius: 0.5rem;
      transition: all 0.3s ease;
      background: transparent;
      position: relative;
      overflow: hidden;
    }
    
    .project-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #60a5fa, #8c9eff);
      transition: left 0.3s ease;
      z-index: -1;
    }
    
    .project-link:hover::before {
      left: 0;
    }
    
    .project-link:hover {
      color: #ffffff;
      border-color: #60a5fa;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(96, 165, 250, 0.4);
    }
    
    .project-link svg {
      width: 1rem;
      height: 1rem;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes slide {
      0% { background-position: 0 0, 0 10px, 10px -10px, -10px 0px; }
      100% { background-position: 20px 20px, 20px 30px, 30px 10px, 10px 20px; }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }
    
    /* Responsive Design */
    @media screen and (max-width: 768px) {
      .projects-section {
        padding: 5rem 1.5rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .project-filters {
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
      }
      
      .project-filters button {
        width: 100%;
        max-width: 200px;
        padding: 0.7rem 1.5rem;
      }
      
      .project-content {
        padding: 1.5rem;
      }
      
      .project-links {
        flex-direction: column;
        gap: 0.8rem;
      }
      
      .project-link {
        justify-content: center;
        text-align: center;
      }
      
      .project-icon {
        width: 2rem;
        height: 2rem;
      }
    }
    
    @media screen and (max-width: 480px) {
      .projects-section {
        padding: 4rem 1rem;
      }
      
      .section-title {
        font-size: 1.8rem;
      }
      
      .project-content {
        padding: 1.2rem;
      }
      
      .project-title {
        font-size: 1.3rem;
      }
      
      .project-description {
        font-size: 0.9rem;
      }
      
      .project-icon {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
    
    @media screen and (min-width: 1200px) {
      .projects-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="projects-section">
        <div className="section-container" ref={projectsRef}>
          <h2 className="section-title">Projects</h2>

          <div className="project-filters">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={filter === 'fullstack' ? 'active' : ''}
              onClick={() => setFilter('fullstack')}
            >
              Fullstack
            </button>
            <button
              className={filter === 'vapt' ? 'active' : ''}
              onClick={() => setFilter('vapt')}
            >
              VAPT
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => {
              const visual = getProjectVisual(project.title);
              const IconComponents = visual.icons;
              
              return (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <div className={`project-visual ${visual.pattern}-pattern`}>
                      <div className="project-icons">
                        {IconComponents.map((IconComponent, index) => (
                          <IconComponent key={index} className="project-icon" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <Github /> Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <ExternalLink /> Live Demo
                        </a>
                      )}
                      {project.report && (
                        <a
                          href={project.report}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FileText /> Report
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;