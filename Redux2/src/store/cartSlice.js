import { createSlice } from '@reduxjs/toolkit';

const INITIAL_CART_STATE = {
  items: [],
  quantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_CART_STATE,
  reducers: {
    replaceCart(state, action) {
      state.quantity = action.payload.quantity;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );
      state.quantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: action.payload.id,
          price: action.payload.price,
          quantity: 1,
          totalPrice: action.payload.price,
          name: action.payload.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeFromCart(state, action) {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );
      state.quantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
