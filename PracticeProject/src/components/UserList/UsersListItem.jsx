import React from 'react';
import styled from 'styled-components';
import User, { StyledParagraph } from './User';

const StyledUl = styled.ul`
  list-style: none;
  padding: 0.3rem;
  width: 100%;
`;
const StyledLi = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.6rem;
`;

const UsersListItem = ({ users }) => {
  if (users.length === 0) {
    return (
      <StyledUl>
        <StyledParagraph>There's no users</StyledParagraph>
      </StyledUl>
    );
  }

  if (users.length > 0) {
    return (
      <StyledUl>
        {users.map(({ username, age, id }) => (
          <StyledLi key={id}>
            <User
              username={username}
              age={age}
            />
          </StyledLi>
        ))}
      </StyledUl>
    );
  }
};

export default UsersListItem;
