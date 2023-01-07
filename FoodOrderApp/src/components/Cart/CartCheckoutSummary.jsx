import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 5rem;
  padding-block: 2rem;
  h1 {
    margin-bottom: 1rem;
  }
`;

const StyledMealsSummary = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-block: 0.5rem;
`;

const Border = styled.div`
  border: 1px solid #1e1f1e21;
`;

const StyledAddressSummary = styled(StyledMealsSummary)`
  flex-direction: column;
`;

const CartCheckoutSummary = ({ data, error }) => {
  if (error === '') {
    const [order, clientData] = data;
    return (
      <>
        <StyledContainer>
          <div>
            <h1>Your Order:</h1>
            <Border>
              {order.map(({ id, name, amount, price }) => {
                return (
                  <StyledMealsSummary key={id}>
                    <h4>{name}</h4>
                    <p>x{amount}</p>
                    <p>${price}</p>
                  </StyledMealsSummary>
                );
              })}
            </Border>
          </div>
          <div>
            <h1>Your details:</h1>
            <Border>
              <StyledAddressSummary>
                <h4>{clientData.clientName}</h4>
                <p>{clientData.street}</p>
                <p>{clientData.city}</p>
                <p>{clientData.postalCode}</p>
              </StyledAddressSummary>
            </Border>
          </div>
        </StyledContainer>
      </>
    );
  } else {
    return <h2>{error || 'Error occured'}</h2>;
  }
};

export default CartCheckoutSummary;
