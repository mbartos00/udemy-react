import React, { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../store/cart-context';
import MealItemForm from './MealItemForm';

const StyledMealItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  color: black;

  & h3 {
    margin: 0 0 0.25rem 0;
  }

  & .description {
    font-style: italic;
  }

  & .price {
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
  }
`;

const MealItem = ({ id, name, description, price }) => {
  const ctx = useContext(CartContext);

  const handleAddItem = amount => {
    ctx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <StyledMealItem id={id}>
      <div>
        <h3>{name}</h3>
        <p className='description'>{description}</p>
        <p className='price'>{`$${price.toFixed(2)}`}</p>
      </div>
      <div>
        <MealItemForm
          id={id}
          onAddItem={handleAddItem}
        />
      </div>
    </StyledMealItem>
  );
};

export default MealItem;
