import React, { useReducer } from 'react';
import CartContext from './cart-context';
import { cartReducer, INITIAL_CART_STATE } from '../Reducers/cartReducer';

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

  const addItemToCart = item => {
    dispatch({ type: 'ADD', item: item });
  };

  const removeItemFromCart = id => {
    dispatch({ type: 'REMOVE', id: id });
  };

  const clearCartHandler = () => {
    dispatch({ type: 'CLEAR' });
  };

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
