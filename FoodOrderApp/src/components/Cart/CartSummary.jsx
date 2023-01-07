import CartItem from './CartItem';
import styled from 'styled-components';
import { useContext } from 'react';
import CartContext from '../store/cart-context';

export const StyledActionContainer = styled.div`
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  & button:hover,
  & button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  & button.button--alt {
    color: #8a2b06;
  }

  & button.button {
    background-color: #8a2b06;
    color: white;
  }
`;

export const StyledAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const StyledUl = styled.ul`
  max-height: 40rem;
  overflow-y: scroll;
`;

const CartSummary = ({ nextStep, onModalOpen }) => {
  const handleAddItem = item => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const handleRemoveItem = id => {
    ctx.removeItem(id);
  };

  const handleClick = () => {
    nextStep();
  };

  const ctx = useContext(CartContext);

  return (
    <>
      <StyledUl>
        {ctx.items.map(({ id, name, price, amount }) => {
          return (
            <CartItem
              key={id}
              id={id}
              name={name}
              price={price}
              amount={amount}
              onAddItem={handleAddItem.bind(null, {
                id,
                name,
                price,
                amount,
              })}
              onRemoveItem={handleRemoveItem.bind(null, id)}
            />
          );
        })}
      </StyledUl>

      <StyledAmountContainer>
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
      </StyledAmountContainer>

      <StyledActionContainer>
        <button onClick={onModalOpen}>Close</button>

        <button
          onClick={handleClick}
          className='button'
        >
          Order
        </button>
      </StyledActionContainer>
    </>
  );
};

export default CartSummary;
