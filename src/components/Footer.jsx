import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import './Footer.css';


function Footer() {
  return(
  <footer className="footer">
    <p>2025 Irfan. All Rights Reserved.</p>

    <div className="socials">
      <a href="https://github.com/Irfan1819" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/irfan-basha-m-e-b46b7129b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    </div>
  </footer>
  );
  
}

export default Footer;