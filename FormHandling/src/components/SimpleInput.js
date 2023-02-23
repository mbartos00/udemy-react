import { useState } from 'react';

const SimpleInput = props => {
  const [input, setInput] = useState({
    name: '',
    email: '',
  });
  const [error, setError] = useState({
    nameError: '',
    emailError: '',
  });
  const [inputInvalid, setinputInvalid] = useState({
    name: false,
    email: false,
  });

  const handleNameError = () => {
    if (input.name.trim() !== '' || input.name.trim().length > 3) {
      setinputInvalid(prev => ({ ...prev, name: false }));
      setError(prev => ({ ...prev, nameError: '' }));
    }
    if (input.name.trim() === '' || input.name.trim().length < 3) {
      setinputInvalid(prev => ({ ...prev, name: true }));

      setError(prev => ({
        ...prev,
        nameError: 'Invalid name (length must be > 3)',
      }));
    }
  };

  const handleNameChange = e => {
    setInput(prev => ({ ...prev, name: e.target.value }));
  };

  const handleEmailError = () => {
    if (input.email.trim() !== '' || input.email.trim().includes('@')) {
      setinputInvalid(prev => ({ ...prev, email: false }));

      setError(prev => ({ ...prev, emailError: '' }));
    }
    if (input.email.trim() === '' || !input.email.trim().includes('@')) {
      setinputInvalid(prev => ({ ...prev, email: true }));

      setError(prev => ({
        ...prev,
        emailError: 'Invalid email (must contain @ symbol)',
      }));
    }
  };

  const handleEmailChange = e => {
    setInput(prev => ({ ...prev, email: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleNameError();
    handleEmailError();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          className={inputInvalid.name ? 'invalid' : ''}
          value={input.name}
          onChange={handleNameChange}
          onBlur={handleNameError}
          type='text'
          id='name'
        />
        {inputInvalid.name && <p className='error-text'>{error.nameError}</p>}
        <label htmlFor='email'>Your email</label>
        <input
          className={inputInvalid.email ? 'invalid' : ''}
          value={input.email}
          onChange={handleEmailChange}
          onBlur={handleEmailError}
          type='email'
          id='email'
        />
        {inputInvalid.email && <p className='error-text'>{error.emailError}</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
