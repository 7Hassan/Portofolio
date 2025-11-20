import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/7Hassan" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/hassan-hossam/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="https://wa.me/201027045352" target="_blank" rel="noreferrer"><WhatsApp /></a>

      </div>
    </footer>
  );
}

export default Footer;