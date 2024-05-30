import React from 'react';
import '../styles/projects.css';

import { projectArray } from '../utils/project';
const Projects = () => {
  return (
    <div className='projects-wrapper'>
      <div className='projects-heading-wrapper'>
        <h3 className='project-title'>Projects</h3>
        <a href='#footer' className='contact-project'>
          Contact Me
        </a>
      </div>
      <div className='projects-gird'>
        {projectArray.map((item, index) => {
          return (
            <div className='project-item' key={index}>
              <img src={item.imgBig} alt={item.imgBig} />
              <div class='project-button-container'>
                <a href='#' class='project-url'>
                  View code
                </a>
                <a href='#' class='project-url'>
                  VIEW project
                </a>
              </div>
              <div className='project-detail-wrapper'>
                <p className='project-name'>{item.name}</p>
                <span className='project-skill'>{item.skills}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
