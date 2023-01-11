import { createSlice } from '@reduxjs/toolkit';
const INITIAL_COUNTER_STATE = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_COUNTER_STATE,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'toggle':
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };
//     case 'increment':
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     case 'increase':
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     case 'decrement':
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     default:
//       return state;
//   }
// };
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
