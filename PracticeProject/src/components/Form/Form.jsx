import React, { useState } from 'react';
import styled from 'styled-components';
import ErrorModal from '../UI/Modal/ErrorModal';
import StyledButton from '../UI/Button/Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  & label {
    display: block;
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  & input {
    margin-block: 0.6rem;
    padding: 0.6rem;
    width: 90%;
  }
  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

const Form = ({ onUserAdd }) => {
  const [userInput, setUserInput] = useState({
    username: '',
    age: '',
  });

  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState({});

  const handleUserInput = e => {
    setUserInput(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: 'Empty values in inputs',
        message: 'Please enter a valid name and age',
      });
      setIsValid(false);
      return;
    }
    if (Number(userInput.age) < 1) {
      setError({
        title: 'Invalid',
        message: "Age can't be < 1",
      });
      setIsValid(false);
      return;
    }

    onUserAdd(userInput);
    setUserInput({ username: '', age: '' });
  };

  const handleCloseModal = () => {
    setIsValid(true);
  };
  return (
    <>
      {!isValid && (
        <ErrorModal
          title={error.title}
          message={error.message}
          close={handleCloseModal}
        />
      )}
      <StyledForm onSubmit={handleFormSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          value={userInput.username}
          onChange={handleUserInput}
          id='username'
          type='text'
        />
        <label htmlFor='age'>Age(Years)</label>
        <input
          value={userInput.age}
          onChange={handleUserInput}
          id='age'
          type='number'
        />
        <StyledButton>Add User</StyledButton>
      </StyledForm>
    </>
  );
};

export default Form;
