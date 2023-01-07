import React from 'react';
import styled from 'styled-components';
import MealItem from './MealItem';
import Card from '../UI/Card';
import useMeals from '../hooks/useMeals';
const StyledMain = styled.main`
  max-width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
`;

const Meals = () => {
  const { isLoading, error, meals } = useMeals();
  return (
    <StyledMain>
      <section>
        <Card>
          <ul>
            {error && (
              <p style={{ color: '#000', textAlign: 'center' }}>{error}</p>
            )}
            {isLoading ? (
              <p style={{ color: '#000', textAlign: 'center' }}>Loading...</p>
            ) : (
              meals.map(({ id, name, description, price }) => (
                <MealItem
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  price={price}
                />
              ))
            )}
          </ul>
        </Card>
      </section>
    </StyledMain>
  );
};

export default Meals;
