// import React, { useRef, useEffect } from 'react';

// const Skills = () => {
//   const skillsRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (skillsRef.current) {
//       observer.observe(skillsRef.current);
//     }

//     return () => {
//       if (skillsRef.current) {
//         observer.unobserve(skillsRef.current);
//       }
//     };
//   }, []);

//   const skillsData = [
//     {
//       category: 'Fullstack',
//       skills: [
//         { name: 'React', level: 90 },
//         { name: 'JavaScript', level: 85 },
//         { name: 'HTML/CSS', level: 80 },
//         { name: 'Node.js', level: 80 },
//         { name: 'Express', level: 75 },
//         { name: 'MongoDB', level: 70 },
//         { name: 'MySQL', level: 65 },
//         { name: 'Firebase', level: 60 },
//         { name: 'Python', level: 75 }, 
//       ],
//     },
//     {
//       category: 'Devops and Cloud',
//       skills: [
//         { name: 'Docker', level: 85 },
//         { name: 'Kubernetes', level: 75 },
//         { name: 'CI/CD', level: 60 },
//         { name: 'AWS', level: 85 }
//       ],
//     },
//     {
//       category: 'Operating System',
//       skills: [
//         { name: 'Kali Linux', level: 80 },
//         { name: 'Ubuntu', level: 80 },
//         { name: 'Windows Server Admin', level: 75 },
//       ],
//     },
//     {
//       category: 'Penetration Testing Tools',
//       skills: [
//         { name: 'Nmap', level: 70 },
//         { name: 'Hping3', level: 70 },
//         { name: 'Metasploit', level: 70 },
//         { name: 'Hydra', level: 60 },
//         { name: 'Burpsuite', level: 85 },
//         { name: 'John The Ripper', level: 85 },
//         { name: 'Owasp ZAP', level: 75 },
//         { name: 'SQL Map', level: 65 },
//         { name: 'APK Tool', level: 70 },
//         { name: 'MobSF', level: 70 },
//         { name: 'Frida', level: 70 },
//       ],
//     },
//   ];

//   const customStyles = `
//     .skills-section {
//       background-color: #111827;
//       min-height: 100vh;
//       color: #ffffff;
//       padding: 6rem 1rem;
//     }
    
//     .section-container {
//       max-width: 1400px;
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
    
//     .skills-content {
//       display: grid;
//       grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//       gap: 2rem;
//       max-height: none;
//     }
    
//     .skill-category {
//       background: rgba(31, 41, 55, 0.8);
//       padding: 2rem;
//       border-radius: 1rem;
//       box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
//       border: 1px solid #374151;
//       transition: all 0.3s ease;
//       height: fit-content;
//     }
    
//     .skill-category:hover {
//       transform: translateY(-5px);
//       box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
//       border-color: rgba(96, 165, 250, 0.3);
//       background: rgba(31, 41, 55, 0.9);
//     }
    
//     .category-title {
//       font-size: 1.4rem;
//       margin-bottom: 1.5rem;
//       color: #60a5fa;
//       font-weight: 700;
//       text-align: center;
//       padding-bottom: 0.5rem;
//       border-bottom: 2px solid rgba(96, 165, 250, 0.3);
//     }
    
//     .skills-list {
//       display: flex;
//       flex-direction: column;
//       gap: 1.2rem;
//     }
    
//     .skill-item {
//       background: rgba(55, 65, 81, 0.5);
//       padding: 1rem;
//       border-radius: 0.8rem;
//       transition: all 0.3s ease;
//     }
    
//     .skill-item:hover {
//       background: rgba(55, 65, 81, 0.8);
//       transform: translateX(5px);
//     }
    
//     .skill-info {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 0.8rem;
//     }
    
//     .skill-name {
//       font-weight: 600;
//       color: #ffffff;
//       font-size: 0.95rem;
//     }
    
//     .skill-percentage {
//       color: #8c9eff;
//       font-weight: 700;
//       font-size: 0.9rem;
//       background: rgba(140, 158, 255, 0.1);
//       padding: 0.2rem 0.6rem;
//       border-radius: 12px;
//       border: 1px solid rgba(140, 158, 255, 0.3);
//     }
    
//     .skill-bar {
//       height: 8px;
//       background: rgba(55, 65, 81, 0.8);
//       border-radius: 8px;
//       overflow: hidden;
//       box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
//     }
    
//     .skill-progress {
//       height: 100%;
//       background: linear-gradient(90deg, #60a5fa, #8c9eff, #60a5fa);
//       background-size: 200% 100%;
//       border-radius: 8px;
//       transition: width 1.5s ease-in-out;
//       animation: shimmer 2s infinite;
//       position: relative;
//     }
    
//     .skill-progress::after {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
//       animation: shine 2s infinite;
//     }
    
//     @keyframes shimmer {
//       0% { background-position: -200% 0; }
//       100% { background-position: 200% 0; }
//     }
    
//     @keyframes shine {
//       0% { transform: translateX(-100%); }
//       100% { transform: translateX(100%); }
//     }
    
//     /* Responsive Design */
//     @media screen and (max-width: 1200px) {
//       .skills-content {
//         grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//         gap: 1.5rem;
//       }
//     }
    
//     @media screen and (max-width: 768px) {
//       .skills-section {
//         padding: 5rem 1.5rem;
//       }
      
//       .section-title {
//         font-size: 2rem;
//       }
      
//       .skills-content {
//         grid-template-columns: 1fr;
//         gap: 1.5rem;
//       }
      
//       .skill-category {
//         padding: 1.5rem;
//       }
      
//       .category-title {
//         font-size: 1.2rem;
//       }
      
//       .skill-name {
//         font-size: 0.9rem;
//       }
      
//       .skill-percentage {
//         font-size: 0.8rem;
//         padding: 0.15rem 0.5rem;
//       }
//     }
    
//     @media screen and (max-width: 480px) {
//       .skills-section {
//         padding: 4rem 1rem;
//       }
      
//       .section-title {
//         font-size: 1.8rem;
//       }
      
//       .skill-category {
//         padding: 1.2rem;
//       }
      
//       .category-title {
//         font-size: 1.1rem;
//       }
      
//       .skills-list {
//         gap: 1rem;
//       }
      
//       .skill-item {
//         padding: 0.8rem;
//       }
//     }
    
//     /* Special layout for larger screens */
//     @media screen and (min-width: 1400px) {
//       .skills-content {
//         grid-template-columns: repeat(3, 1fr);
//       }
//     }
    
//     @media screen and (min-width: 1600px) {
//       .skills-content {
//         grid-template-columns: repeat(4, 1fr);
//       }
//     }
//   `;

//   return (
//     <>
//       <style>{customStyles}</style>
//       <div className="skills-section">
//         <div className="section-container" ref={skillsRef}>
//           <h2 className="section-title">Skills & Expertise</h2>
//           <div className="skills-content">
//             {skillsData.map((category, categoryIndex) => (
//               <div key={categoryIndex} className="skill-category">
//                 <h3 className="category-title">{category.category}</h3>
//                 <div className="skills-list">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div key={skillIndex} className="skill-item">
//                       <div className="skill-info">
//                         <span className="skill-name">{skill.name}</span>
//                         <span className="skill-percentage">{skill.level}%</span>
//                       </div>
//                       <div className="skill-bar">
//                         <div
//                           className="skill-progress"
//                           style={{ width: `${skill.level}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;


import React, { useRef, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Cloud, 
  Terminal, 
  Shield, 
  Lock, 
  Search, 
  Zap,
  Globe,
  Cpu,
  Monitor,
  Smartphone,
  Key,
  Eye,
  Bug,
  FileCode,
  Settings
} from 'lucide-react';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Icon mapping for skills
  const getSkillIcon = (skillName) => {
    const iconMap = {
      'React': <Code className="w-6 h-6" />,
      'JavaScript': <FileCode className="w-6 h-6" />,
      'HTML/CSS': <Globe className="w-6 h-6" />,
      'Node.js': <Server className="w-6 h-6" />,
      'Express': <Zap className="w-6 h-6" />,
      'MongoDB': <Database className="w-6 h-6" />,
      'MySQL': <Database className="w-6 h-6" />,
      'Firebase': <Cloud className="w-6 h-6" />,
      'Python': <Code className="w-6 h-6" />,
      'Docker': <Settings className="w-6 h-6" />,
      'Kubernetes': <Cloud className="w-6 h-6" />,
      'CI/CD': <Settings className="w-6 h-6" />,
      'AWS': <Cloud className="w-6 h-6" />,
      'Kali Linux': <Terminal className="w-6 h-6" />,
      'Ubuntu': <Terminal className="w-6 h-6" />,
      'Windows Server Admin': <Monitor className="w-6 h-6" />,
      'Nmap': <Search className="w-6 h-6" />,
      'Hping3': <Zap className="w-6 h-6" />,
      'Metasploit': <Bug className="w-6 h-6" />,
      'Hydra': <Key className="w-6 h-6" />,
      'Burpsuite': <Shield className="w-6 h-6" />,
      'John The Ripper': <Lock className="w-6 h-6" />,
      'Owasp ZAP': <Eye className="w-6 h-6" />,
      'SQL Map': <Database className="w-6 h-6" />,
      'APK Tool': <Smartphone className="w-6 h-6" />,
      'MobSF': <Smartphone className="w-6 h-6" />,
      'Frida': <Cpu className="w-6 h-6" />,
    };
    return iconMap[skillName] || <Code className="w-6 h-6" />;
  };

  const skillsData = [
    {
      category: 'Fullstack',
      skills: [
        { name: 'React' },
        { name: 'JavaScript' },
        { name: 'HTML/CSS' },
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'MongoDB' },
        { name: 'MySQL' },
        { name: 'Firebase' },
        { name: 'Python' }, 
      ],
    },
    {
      category: 'Devops and Cloud',
      skills: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'CI/CD' },
        { name: 'AWS' }
      ],
    },
    {
      category: 'Operating System',
      skills: [
        { name: 'Kali Linux' },
        { name: 'Ubuntu' },
        { name: 'Windows Server Admin' },
      ],
    },
    {
      category: 'Penetration Testing Tools',
      skills: [
        { name: 'Nmap' },
        { name: 'Hping3' },
        { name: 'Metasploit' },
        { name: 'Hydra' },
        { name: 'Burpsuite' },
        { name: 'John The Ripper' },
        { name: 'Owasp ZAP' },
        { name: 'SQL Map' },
        { name: 'APK Tool' },
        { name: 'MobSF' },
        { name: 'Frida' },
      ],
    },
  ];

  const customStyles = `
    .skills-section {
      background-color: #111827;
      min-height: 100vh;
      color: #ffffff;
      padding: 6rem 1rem;
    }
    
    .section-container {
      max-width: 1400px;
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
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .skill-item {
      background: rgba(55, 65, 81, 0.3);
      padding: 1.5rem;
      border-radius: 1rem;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 90px;
      cursor: pointer;
      border: 1px solid rgba(75, 85, 99, 0.3);
    }
    
    .skill-item:hover {
      background: rgba(55, 65, 81, 0.6);
      transform: translateY(-8px);
      box-shadow: 0 12px 25px rgba(96, 165, 250, 0.25);
      border: 1px solid rgba(96, 165, 250, 0.4);
    }
    
    .skill-icon {
      color: #60a5fa;
      margin-bottom: 0.5rem;
      transition: all 0.3s ease;
    }
    
    .skill-item:hover .skill-icon {
      color: #8c9eff;
      transform: scale(1.1);
    }
    
    .skill-name {
      font-weight: 600;
      color: #ffffff;
      font-size: 0.85rem;
      line-height: 1.2;
    }
    
    /* Responsive Design */
    @media screen and (max-width: 1200px) {
      .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        gap: 1.2rem;
      }
    }
    
    @media screen and (max-width: 768px) {
      .skills-section {
        padding: 5rem 1.5rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 1rem;
      }
      
      .skill-item {
        padding: 1.2rem;
        min-height: 80px;
      }
      
      .skill-name {
        font-size: 0.8rem;
      }
    }
    
    @media screen and (max-width: 480px) {
      .skills-section {
        padding: 4rem 1rem;
      }
      
      .section-title {
        font-size: 1.8rem;
      }
      
      .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
        gap: 0.8rem;
      }
      
      .skill-item {
        padding: 1rem;
        min-height: 70px;
      }
      
      .skill-name {
        font-size: 0.75rem;
      }
    }
    
    /* Special layout for larger screens */
    @media screen and (min-width: 1400px) {
      .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 1.8rem;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="skills-section">
        <div className="section-container" ref={skillsRef}>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {skillsData.flatMap(category => category.skills).map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <div className="skill-icon">
                  {getSkillIcon(skill.name)}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;