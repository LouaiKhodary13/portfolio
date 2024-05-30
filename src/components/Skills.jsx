import React from 'react';
import '../styles/skills.css';
import ring from '../assets/images/pattern-rings.svg';

const Skills = () => {
  return (
    <>
      <div className='skills-sec'>
        <div className='skill-wrapper'>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>React</h3>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>TypeScript</h3>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>Javascript</h3>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>Redux</h3>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>NPM</h3>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>Tailwind</h3>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>Material UI</h3>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>Chakra UI</h3>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>SCSS</h3>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>Wordpress</h3>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>GIT</h3>
            </div>
          </div>
          <div class='grid-item'>
            <div className='skill-info'>
              <h3 className='skill-title'>GitHub</h3>
            </div>
          </div>
        </div>
      </div>
      <div class='underline-end-skill'></div>
    </>
  );
};

export default Skills;
