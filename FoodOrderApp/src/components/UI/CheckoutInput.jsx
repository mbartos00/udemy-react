import styled from 'styled-components';

const StyledLabel = styled.label`
  font-weight: bold;
  margin-block: 0.25rem;
  display: block;
  margin-left: 0.5rem;

  &.invalid {
    color: #ca3e51;
  }
`;
const StyledInput = styled.input`
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 20rem;
  max-width: 100%;
  padding-inline: 0.5rem;

  &.invalid {
    border-color: #aa0b20;
    background-color: #ffeff1;
  }
`;

const CheckoutInput = ({ label, className, ...input }) => {
  return (
    <>
      <StyledLabel htmlFor={input.id}>{label}</StyledLabel>
      <StyledInput
        className={className}
        {...input}
      />
    </>
  );
};

export default CheckoutInput;
