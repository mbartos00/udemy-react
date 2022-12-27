import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import CartIcon from '../UI/CartIcon';
import CartContext from '../store/cart-context';

const StyledButton = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #2c0d00;
  }
  &.icon {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }
  & .badge {
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }

  & :hover .badge,
  & :active .badge {
    background-color: #92320c;
  }
  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const HeaderCartButton = ({ onModalOpen }) => {
  const ctx = useContext(CartContext);
  const [isClicked, setIsClicked] = useState(false);
  const numOfCartItems = ctx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const handleClick = () => {
    onModalOpen(true);
  };

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setIsClicked(true);

    const timer = setTimeout(() => {
      setIsClicked(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  return (
    <StyledButton
      className={isClicked && 'bump'}
      onClick={handleClick}
    >
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>{numOfCartItems}</span>
    </StyledButton>
  );
};

export default HeaderCartButton;
