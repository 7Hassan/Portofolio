import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">@Schoola</h4>
            <p>
              Responsible for designing and developing the full academy platform, including creating a complete web application for the academy and building an integrated dashboard for managing students, courses, and daily operations.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Mentor</h3>
            <h4 className="vertical-timeline-element-subtitle">@Mahart Misr</h4>
            <p>I was responsible for managing projects and transforming ideas into practical technical solutions. My role included guiding trainees through the full process of building their own websites, providing technical support, and ensuring each project reached a functional, high-quality final version. I helped participants understand real development workflows and turn their concepts into complete web applications
              in Fayoum and Port Said
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Internship @ALEX</h4>
            <p>
              During this internship, I gained hands-on experience in modern web development, focusing on building real projects using React, and backend with Nodejs. The program emphasized problem-solving, teamwork, and applying software engineering best practices. I also worked on practical tasks that improved my understanding of full-stack workflows and how to deliver production-ready applications.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;