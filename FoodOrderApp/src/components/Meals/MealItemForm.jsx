import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';

import Input from '../UI/Input';

const StyledMealForm = styled.form`
  text-align: right;
  & button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  & button:hover,
  & button:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

const MealItemForm = ({ id, onAddItem }) => {
  const [isFormValid, setisFormValid] = useState(true);

  const amountInputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const eneterdStringValue = amountInputRef.current.value;
    const convertedValue = Number(amountInputRef.current.value);
    if (
      eneterdStringValue.trim().length === 0 ||
      eneterdStringValue < 1 ||
      eneterdStringValue > 5
    ) {
      setisFormValid(false);
      return;
    }
    onAddItem(convertedValue);
  };

  return (
    <StyledMealForm onSubmit={handleSubmit}>
      <Input
        label='Amount'
        ref={amountInputRef}
        input={{
          type: 'number',
          id: 'amount_' + id,
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+Add</button>
      {!isFormValid && <p>Please enter a valid amount (1-5)</p>}
    </StyledMealForm>
  );
};

export default MealItemForm;
