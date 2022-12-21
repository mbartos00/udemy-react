import React from 'react';
import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-weight: 500;
`;

const User = ({ username, age }) => {
  return (
    <StyledParagraph>
      {username} ({age} years old)
    </StyledParagraph>
  );
};

export default User;
