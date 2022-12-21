import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 100%;
  background-color: #fff;
  color: #000;
  border-radius: 13px;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const Card = ({ children, className }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;
