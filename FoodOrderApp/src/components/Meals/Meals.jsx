import React from 'react';
import styled from 'styled-components';
import MealItem from './MealItem';
import Card from '../UI/Card';

const StyledMain = styled.main`
  max-width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
`;

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const Meals = () => {
  return (
    <StyledMain>
      <section>
        <Card>
          <ul>
            {DUMMY_MEALS.map(({ id, name, description, price }) => (
              <MealItem
                key={id}
                id={id}
                name={name}
                description={description}
                price={price}
              />
            ))}
          </ul>
        </Card>
      </section>
    </StyledMain>
  );
};

export default Meals;
