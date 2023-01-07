import { useContext, useState } from 'react';
import styled from 'styled-components';
import useCheckoutInputValid from '../hooks/useCheckoutInputValid';
import useOrder from '../hooks/useOrder';
import CartContext from '../store/cart-context';
import CheckoutInput from '../UI/CheckoutInput';

const StyledForm = styled.form`
  margin: 1rem 0;
  height: 19rem;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  & p {
    margin-block: 0.2rem;
    text-align: center;
    color: #ca3e51;
  }
`;

const StyledActionsDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 3rem;

  & button {
    font: inherit;
    color: #5a1a01;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    padding: 0.5rem 2rem;

    &:hover,
    &:active {
      background-color: #ffe6dc;
    }
  }

  & .submit {
    border: 1px solid #5a1a01;
    background-color: #5a1a01;
    color: white;

    &:hover,
    &:active {
      background-color: #7a2706;
    }
  }
`;

const CartCheckout = ({ prevStep, nextStep, onSuccess, onFail }) => {
  const cartCtx = useContext(CartContext);

  const { sendRequest, loading } = useOrder();

  const [inputValues, setInputValues] = useState({
    name: '',
    street: '',
    city: '',
    postalCode: '',
  });

  const { isInputValid, error, isValid } = useCheckoutInputValid(inputValues);

  const handleInputChange = e => {
    setInputValues(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleBackButtonClick = () => {
    prevStep();
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    isValid();
    if (!Object.keys(isInputValid).every(k => inputValues[k])) return;
    const orderData = [
      ['order', cartCtx.items],
      ['total price', cartCtx.totalAmount],
      ['client details', inputValues],
    ];
    try {
      await sendRequest(Object.fromEntries(orderData));
      const { name: clientName, street, city, postalCode } = inputValues;
      onSuccess([cartCtx.items, { clientName, street, city, postalCode }]);
      nextStep();
    } catch (error) {
      onFail(error.message);
      nextStep();
      throw new Error(error);
    }
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <div>
        <CheckoutInput
          className={isInputValid.name ? '' : 'invalid'}
          label='Your Name'
          value={inputValues.name}
          onChange={handleInputChange}
          id='name'
          type='text'
        />
        {!isInputValid.name && <p>{error.name}</p>}

        <CheckoutInput
          label='Street'
          className={isInputValid.street ? '' : 'invalid'}
          value={inputValues.street}
          onChange={handleInputChange}
          id='street'
          type='text'
        />

        {!isInputValid.street && <p>{error.street}</p>}
        <CheckoutInput
          label='City'
          className={isInputValid.city ? '' : 'invalid'}
          value={inputValues.city}
          onChange={handleInputChange}
          id='city'
          type='text'
        />
        {!isInputValid.city && <p>{error.city}</p>}
        <CheckoutInput
          label='Postal Code'
          className={isInputValid.postalCode ? '' : 'invalid'}
          value={inputValues.postalCode}
          onChange={handleInputChange}
          id='postalCode'
          type='text'
        />

        {!isInputValid.postalCode && <p>{error.postalCode}</p>}
      </div>
      <StyledActionsDiv>
        <button
          type='button'
          onClick={handleBackButtonClick}
        >
          Get Back
        </button>
        <button className='submit'>
          {!loading ? 'Confirm' : 'Submitting'}
        </button>
      </StyledActionsDiv>
    </StyledForm>
  );
};

export default CartCheckout;
