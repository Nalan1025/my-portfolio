import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="footer-icons">
        <a
          href="https://github.com/Nalan1025"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/nalan-r-k-10112b303/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
