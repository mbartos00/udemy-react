export const INITIAL_CART_STATE = {
  items: [],
  totalAmount: 0,
};

export const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const newAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartIndex = state.items.findIndex(item => {
      return item.id === action.item.id;
    });

    const existingCartItem = state.items[existingCartIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: newAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingCartIndex = state.items.findIndex(item => {
      return item.id === action.id;
    });
    const existingCartItem = state.items[existingCartIndex];
    const newAmount = state.totalAmount - existingCartItem.price;

    let newItems;

    if (existingCartItem.amount === 1) {
      newItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      newItems = [...state.items];
      newItems[existingCartIndex] = updatedItem;
    }

    return {
      items: newItems,
      totalAmount: newItems.length !== 0 ? newAmount : 0,
    };
  }

  return INITIAL_CART_STATE;
};
