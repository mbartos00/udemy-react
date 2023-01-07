import React, { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
import Modal from '../UI/Modal';
import CartCheckout from './CartCheckout';
import CartCheckoutSummary from './CartCheckoutSummary';
import CartSummary, {
  StyledActionContainer,
  StyledAmountContainer,
} from './CartSummary';

const Cart = ({ onModalOpen }) => {
  const [step, setStep] = useState(1);
  const [orderedItems, setOrderedItems] = useState([]);
  const [error, setError] = useState('');
  const ctx = useContext(CartContext);

  const prevStep = () => {
    setStep(prev => prev - 1);
  };
  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const handleSuccess = ([items, clientDetails]) => {
    setOrderedItems([items, clientDetails]);
  };
  const handleFail = error => {
    setError(error);
  };

  const Checkout = () => {
    if (ctx.items.length > 0) {
      switch (step) {
        case 1:
          return (
            <CartSummary
              onModalOpen={onModalOpen}
              nextStep={nextStep}
            />
          );
        case 2:
          return (
            <CartCheckout
              prevStep={prevStep}
              nextStep={nextStep}
              onSuccess={handleSuccess}
              onFail={handleFail}
            />
          );
        case 3:
          return (
            <CartCheckoutSummary
              data={orderedItems}
              error={error}
            />
          );
        default:
      }
    } else {
      return (
        <>
          <StyledAmountContainer>
            <span>No food in cart</span>
          </StyledAmountContainer>
          <StyledActionContainer>
            <button onClick={onModalOpen}>Close</button>
          </StyledActionContainer>
        </>
      );
    }
  };

  return (
    <Modal onClose={onModalOpen}>
      <Checkout />
    </Modal>
  );
};

export default Cart;
