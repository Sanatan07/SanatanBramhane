import React, { useRef, useEffect } from 'react';

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

  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 80 },
      ],
    },
    {
      category: 'Contarization Tools',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 60 },
      ],
    },
    {
      category: 'Scripting Language',
      skills: [
        { name: 'Python Scripting', level: 80 },
        { name: 'Shell Scripting', level: 50 },
        { name: 'Bash Scripting', level: 40 }
      ],
    },
    {
      category: 'Operating System',
      skills: [
        { name: 'Kali Linux', level: 80 },
        { name: 'Ubuntu', level: 80 },
        { name: 'Windows Server Administration', level: 75 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'MySQL', level: 65 },
        { name: 'Firebase', level: 60 },
        { name: 'C/C++', level: 75 }, 
      ],
    },
    {
      category: 'Penetration Testing Tools',
      skills: [
        { name: 'Nmap', level: 70 },
        { name: 'Hping3', level: 70 },
        { name: 'Metasploit', level: 70 },
        { name: 'Hydra', level: 60 },
        { name: 'Burpsuite', level: 85 },
        { name: 'John The Ripper', level: 85 },
        { name: 'Owasp ZAP', level: 75 },
        { name: 'SQL Map', level: 65 },
        { name: 'APK Tool', level: 70 },
        { name: 'MobSF', level: 70 },
        { name: 'Frida', level: 70 },
      ],
    },
    {
      category: 'Cloud Computing',
      skills: [
        { name: 'AWS IAM', level: 85 },
        { name: 'AWS CloudWatch', level: 75 },
        { name: 'AWS EC2', level: 80 },
        { name: 'AWS EBS', level: 60 },
        { name: 'AWS AMI', level: 85 },
        { name: 'AWS ELB', level: 60 },
        { name: 'AWS VPC', level: 55 },
        { name: 'AWS Route53', level: 80 },
      ],
    },
  ];

  return (
    <div className="section-container" ref={skillsRef}>
      <h2 className="section-title">Skills</h2>
      <div className="skills-content">
        {skillsData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
