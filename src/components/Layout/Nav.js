import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const Nav = () => {
  return (
    <nav>
      <div className="navlink">
        <a href="#about-me">About Me</a>
      </div>
      <div className="navlink">
        <a href="#projects">Projects</a>
      </div>
      <div className="navlink">
        <a
          href="https://drive.google.com/file/d/1QhcTiwjI-Enx9nyG-R-jCxcdGZWhT_IX/view"
          target="_blank"
          rel="noreferrer noopener"
        >
          Resume
        </a>
      </div>
      <div className="navlink">
        <a
          href="https://www.linkedin.com/in/jngong/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn profile link"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div className="navlink">
        <a
          href="https://github.com/jngong"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub profile link"
        >
          <GitHubIcon />
        </a>
      </div>
      <div className="navlink">
        <a href="#contact" aria-label="Contact form link">
          <EmailIcon />
        </a>
      </div>
    </nav>
  );
};
export default Nav;
