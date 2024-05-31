import '../styles/footer.css';
import github from '../assets/images/icon-github.svg';
import frontendmentor from '../assets/images/icon-frontend-mentor.svg';
import linkedin from '../assets/images/icon-linkedin.svg';
import Form from './Form';
const Footer = () => {
  return (
    <>
      <footer id='footer'>
        <div className='footer-wrapper'>
          <div className='footer-heading-container'>
            <h2 className='footer-title'>Contact</h2>
            <p className='footer-info'>
              i would love to hear about your project and how i could help.
            </p>
          </div>
          <Form />
        </div>
        <div className='underline-end'></div>

        <div className='footer-social'>
          <h2>Louai Khodary</h2>
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
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
