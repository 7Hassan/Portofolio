import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsApp from '@mui/icons-material/WhatsApp';
import me from '../assets/images/Me.jpeg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={me} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/7Hassan" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/hassan-hossam/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://wa.me/201027045352" target="_blank" rel="noreferrer"><WhatsApp /></a>
          </div>
          <h1>Hassan Hossam</h1>
          <p>Web Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/7Hassan" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/hassan-hossam/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://wa.me/201027045352" target="_blank" rel="noreferrer"><WhatsApp /></a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;