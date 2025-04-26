import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with React.js and Vite.',
      tech: ['React', 'CSS', 'Vite'],
      link: '#'
    },

  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">
              {project.tech.join(' • ')}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
