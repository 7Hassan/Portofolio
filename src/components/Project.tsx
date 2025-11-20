import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://www.schoola.academy/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%" /></a>
          <a href="https://www.schoola.academy/" target="_blank" rel="noreferrer"><h2>Schoola – Academic Website</h2></a>
          <p>
            I developed a complete system for Schoola Academy consisting of two main parts:
            <br />
            - A full admin dashboard for managing students, tracking enrollments, organizing courses, and handling operational tasks inside the academy.
            <br />
            - A modern landing page that introduces the academy, explains its vision and curriculum, and allows parents to explore programs and understand the learning journey.
          </p>
        </div>
        <div className="project">
          <a href="https://siggma.wixsite.com/sigma" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%" /></a>
          <a href="https://siggma.wixsite.com/sigma" target="_blank" rel="noreferrer"><h2>Whoop Kids – Smart Health Tracking Concept</h2></a>
          <p>
            This project focuses on re-designing the Whoop wristband to make it suitable for children by modifying its structure and adapting it to their daily use. I created a full concept website to present the idea, including a high-fidelity prototype that explains the features and purpose of the product.
            I also designed a dedicated mobile application on Figma that allows parents to monitor their child’s health, activity, and daily performance in a simple and intuitive way.
          </p>
        </div>
        <div className="project">
          <a href="https://masroofati.vercel.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
          <a href="https://masroofati.vercel.app/" target="_blank" rel="noreferrer"><h2>Masroofati – Personal Finance Management</h2></a>
          <p>
            This application is a complete tool for managing personal income and expenses, allowing users to track their financial performance easily. The system enables adding daily income and spending while generating clear weekly, monthly, and yearly charts that visualize cash flow and overall financial health.
          </p>
        </div>

        <div className="project">
          <a href="https://gold-gym-eta.vercel.app/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%" /></a>
          <a href="https://gold-gym-eta.vercel.app/" target="_blank" rel="noreferrer"><h2>QuickFit – Simple & Fast Workout Assistant</h2></a>
          <p>
            This project is a minimal, distraction-free fitness application designed to help users reach their training goals quickly and easily. The focus of the app is on instant access to workouts without time-consuming registration steps or unnecessary notifications.
            The concept is built around a clean, straightforward interface where anyone can start training immediately, making the workout experience faster, simpler, and more accessible for all users.
          </p>
        </div>
        <div className="project">
          <a href="https://cera-website.vercel.app/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%" /></a>
          <a href="https://cera-website.vercel.app/" target="_blank" rel="noreferrer"><h2>E-commerce Clothing Website</h2></a>
          <p>
            An online store built for selling clothing, featuring product browsing, filtering, cart management, and a smooth checkout experience. The platform is designed with a clean UI and optimized for fast performance to improve the shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;