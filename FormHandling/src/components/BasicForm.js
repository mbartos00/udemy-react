/* eslint-disable no-unused-vars */
import useInput from './hooks/useInput';

const BasicForm = props => {
  const {
    value: nameInput,
    hasError: nameHasError,
    isValid: isNameValid,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    reset: resetName,
  } = useInput(value => value.trim() !== '');

  const {
    value: lastNameInput,
    hasError: lastNameHasError,
    isValid: isLastNameValid,
    handleInputChange: handleLastNameChange,
    handleInputBlur: handleLastNameBlur,
    reset: resetLastName,
  } = useInput(value => value.trim() !== '');

  const {
    value: emailInput,
    hasError: emailHasError,
    isValid: isEmailValid,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    reset: resetEmail,
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (isNameValid && isLastNameValid && isEmailValid) {
    formIsValid = true;
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    resetName();
    resetLastName();
    resetName();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input
            className={nameHasError ? 'invalid' : ''}
            value={nameInput}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            type='text'
            id='name'
          />
          {nameHasError && <p>Enter a first name</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input
            className={lastNameHasError ? 'invalid' : ''}
            value={lastNameInput}
            onChange={handleLastNameChange}
            onBlur={handleLastNameBlur}
            type='text'
            id='name'
          />
          {lastNameHasError && <p>Enter a first name</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          className={emailHasError ? 'invalid' : ''}
          value={emailInput}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          type='text'
          id='name'
        />
        {emailHasError && <p>Enter a first name</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
