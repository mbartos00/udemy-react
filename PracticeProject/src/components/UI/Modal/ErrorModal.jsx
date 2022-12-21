import Card from '../Card/Card';
import StyledButton from '../Button/Button';

import styled from 'styled-components';

const StyledCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
`;

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const StyledHeader = styled.header`
  width: 100%;
  background: #4f005f;
  padding: 1rem;

  h2 {
    margin: 0;
    color: white;
  }
`;

const StyledContentDiv = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
`;

const StyledFooter = styled.footer`
  padding: 1rem;
  display: flex;
  margin: 0 auto;
`;

const StyledModalButton = styled(StyledButton)`
  width: 100%;
  padding: 0.8rem 1.5rem;
`;

const ErrorModal = ({ title, message, close }) => {
  const handleClick = () => {
    close(true);
  };
  return (
    <>
      <StyledBackdrop onClick={handleClick} />
      <StyledCard>
        <StyledHeader>
          <h2>{title}</h2>
        </StyledHeader>

        <StyledContentDiv>{message}</StyledContentDiv>

        <StyledFooter>
          <StyledModalButton onClick={handleClick}>
            Okay
          </StyledModalButton>
        </StyledFooter>
      </StyledCard>
    </>
  );
};

export default ErrorModal;
