import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaGitAlt, FaPython, FaLinux, FaAws } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 color="#e34c26" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
    { name: 'Bootstrap', icon: <FaBootstrap color="#7952b3" /> },
    { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
    { name: 'React.js', icon: <FaReact color="#61dbfb" /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
