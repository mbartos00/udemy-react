const { createSlice } = require('@reduxjs/toolkit');

const INITIAL_UI_STATE = { isVisible: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState: INITIAL_UI_STATE,
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
