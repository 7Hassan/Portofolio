import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faNode, faFigma, faNs8 } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Reactjs",
  "Nextjs",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS",
  "Tailwind",
  "SASS",
  "Nodejs",
  "MongoDB",
];

const labelsSecond = [
  "Figma",
  "Canva",
  "Photoshop"
];

const labelsThird = [
  "N8N",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <FontAwesomeIcon icon={faNode} size="3x" />
            <h3>Full Stack Web Developer</h3>
            <p>
              I have experience in building complete web applications from scratch. I’ve developed diverse projects, including e-commerce platforms, admin dashboards, and a full academy website with its own integrated dashboard. I’ve also implemented innovative ideas in competitions—such as “Masrofaty,” a smart application for managing daily expenses.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faFigma} size="3x" />
            <h3>UI&UX Designer</h3>
            <p>
              Before development begins, I design the full web experience on Figma. I can translate business ideas and requirements into user-centered interfaces that fit your audience’s needs. With solid UI/UX expertise and hands-on experience in Figma, I’m able to take a project smoothly from concept and design all the way to full development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <h3>Automation Engineering</h3>
            <p>
              I also have experience in building automation systems using n8n. I develop fully automated workflows that help businesses save time and operate more efficiently. My work includes building smart bots that handle customer interactions, automating message replies across different platforms, and creating complete order-management pipelines
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;