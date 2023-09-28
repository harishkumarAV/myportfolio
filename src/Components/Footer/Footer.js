import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com">
            <BsTwitter />
          </a>
          <a href="https://linkedin.com">
            <SiLinkedin />
          </a>
          <a href="https://youtube.com">
            <BsYoutube />
          </a>

        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
            <span>About</span>
            <span>Experience</span>
            <span>Projects</span>
            <span>Contact</span>
        </div>
        <div className="footer-section-columns">
          <span>+91 9489184358</span>
          <span>avhk2003@gmail.com</span>
        </div>

      </div>

      <div className="footer-copyright">
        <span>&copy; Copyright 2023 All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
