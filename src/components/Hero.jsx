import React from 'react';
import '../styles/hero.css';
import louai from '../assets/images/louai.jpg';

const Hero = () => {
  return (
    <>
      <section>
        <div className='hero-heading-wrapper'>
          <h2 className='hero-intro-heading'>
            Nice to meet you!
            <br />
            Im <span className='underline'>Louai Khodary</span>.
          </h2>
          <p className='hero-intro-details'>
            Im a frontend developer passionate about building accessible web
            apps that users love.
          </p>
          <p className='contact-text'>Contact Me</p>
        </div>
        <div className='hero-img-wrapper'>
          <img src={louai} alt={louai} className='hero-img' />
        </div>
      </section>
      <div className='underline-end'></div>
    </>
  );
};

export default Hero;
