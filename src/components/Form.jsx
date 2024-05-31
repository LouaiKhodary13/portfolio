import { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';

const Form = () => {
  const [formValue, setFormValue] = useState({});
  const [state, handleSubmit] = useForm('xjvnqgld');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  useEffect(() => {
    if (state.succeeded) {
      setFormValue({});
    }
  }, [state]);
  return (
    <form className='footer-form' onSubmit={handleSubmit}>
      <label htmlFor='name' className='form-name'>
        Name
      </label>
      <input
        type='text'
        name='name'
        id='name'
        className='form-input'
        value={formValue.name || ''}
        onChange={handleInputChange}
      />
      <label htmlFor='email' className='form-name'>
        Email
      </label>
      <input
        type='email'
        name='email'
        id='email'
        className='form-input'
        value={formValue.email || ''}
        onChange={handleInputChange}
      />
      <label htmlFor='message' className='form-name'>
        Message
      </label>
      <textarea
        type='text'
        name='message'
        id='message'
        className='form-input text-area'
        value={formValue.message || ''}
        onChange={handleInputChange}
      />
      <button
        type='submit'
        className='contact-footer'
        disabled={state.submitting}
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
      {state.succeeded && (
        <p
          style={{
            display: 'none',
          }}
        >
          Message sent successfully!
        </p>
      )}
      {state.errors && (
        <p
          style={{
            display: 'none',
          }}
        >
          Error occurred while sending the message.
        </p>
      )}
    </form>
  );
};

export default Form;
