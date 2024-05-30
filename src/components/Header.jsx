import React from 'react';
import '../styles/header.css';
import github from '../assets/images/icon-github.svg';
import frontendmentor from '../assets/images/icon-frontend-mentor.svg';
import linkedin from '../assets/images/icon-linkedin.svg';
import twitter from '../assets/images/icon-twitter.svg';

const Header = () => {
  return (
    <header>
      <h2 className='logo'>Louai Khodary</h2>
      <ul className='social-links'>
        <li>
          <a
            href='https://github.com/LouaiKhodary13'
            target='_blank'
            rel='noreferrer'
          >
            <img src={github} alt={github} />
          </a>
        </li>
        <li>
          <a
            href='https://www.frontendmentor.io/profile/LouaiKhodary13'
            target='_blank'
            rel='noreferrer'
          >
            <img src={frontendmentor} alt={frontendmentor} />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/louai-khodary-b29347302/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={linkedin} alt={linkedin} />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src={twitter} alt={twitter} />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
