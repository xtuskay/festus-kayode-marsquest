
import React from "react";
import githubIcon from "../../assets/icons/github-mark.png";
import linkedinIcon from "../../assets/icons/LI-Logo.png";
import "./Footer.scss"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__social-links">
          <a href="https://github.com/xtuskay" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github" className="footer__icon" />
          </a>
          <a href="https://www.linkedin.com/in/festus-kayode-marsquest" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin" className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
