import '../styles/footer.css';
import github from '../assets/images/icon-github.svg';
import frontendmentor from '../assets/images/icon-frontend-mentor.svg';
import linkedin from '../assets/images/icon-linkedin.svg';
import twitter from '../assets/images/icon-twitter.svg';
import ringfooter from '../assets/images/pattern-rings.svg';
const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-wrapper'>
          <div className='footer-heading-container'>
            <h2 className='footer-title'>Contact</h2>
            <p className='footer-info'>
              i would love to hear about your project and how i could help.
            </p>
          </div>
          <form className='footer-form'>
            <label htmlFor='name' className='form-name'>
              Name
            </label>
            <input type='text' name='name' id='name' className='form-input' />
            <label htmlFor='email' className='form-name'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='form-input'
            />
            <label htmlFor='message' className='form-name'>
              Message
            </label>
            <textarea
              type='text'
              name='text'
              id='text'
              className='form-input text-area'
            />
            <button type='submit' className='contact-footer'>
              send message
            </button>
          </form>
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
