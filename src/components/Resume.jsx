import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <h2 className="resume-title">Resume</h2>
      <a href="/resume.pdf" download className="resume-btn">
        📄 Download Resume
      </a>
    </section>
  );
};

export default Resume;
