import React, { useRef, useEffect, useState } from 'react';

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

  const projects = [
    {
      id: 1,
      title: 'VAPT',
      description: 'Performed Vulnerability Assessment and Penetration Testing on a web application, identifying security flaws and providing remediation strategies.',
      image: 'project1.jpg',
      technologies: ['Nmap', 'Burpsuite', 'Nessus'],
      category: 'web',
    },
    {
      id: 2,
      title: 'Market360',
      description: 'The Market 360 is a secure MERN-stack dropshipping app that safeguards user data while streamlining deal discovery, business automation, and affiliate marketing.',
      image: 'project2.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Secure Coding'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://market-360-frontend-zeta.vercel.app/',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Interactive developer portfolio with 3D elements and animations.',
      image: 'project6.jpg',
      technologies: ['React', 'Nodejs'],
      category: 'web',
      github: 'https://github.com',
      live: 'https://sanatanbramhane.vercel.app/',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    
    // <div className="section-container" ref={projectsRef}>
    //   <h2 className="section-title">Projects</h2>
      
    //   <div className="project-filters">
    //     <button 
    //       className={filter === 'all' ? 'active' : ''} 
    //       onClick={() => setFilter('all')}
    //     >
    //       All
    //     </button>
    //     <button 
    //       className={filter === 'web' ? 'active' : ''} 
    //       onClick={() => setFilter('web')}
    //     >
    //       Web
    //     </button>
    //     <button 
    //       className={filter === 'fullstack' ? 'active' : ''} 
    //       onClick={() => setFilter('fullstack')}
    //     >
    //       Fullstack
    //     </button>
    //   </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className="image-placeholder">
                <span>{project.title.substring(0, 2)}</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="github-icon"></i> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="live-icon"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
