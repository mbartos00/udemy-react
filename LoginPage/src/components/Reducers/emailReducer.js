export const INITIAL_EMAIL_STATE = {
  value: '',
  isValid: null,
};

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT_EMAIL') {
    return {
      value: action.val,
      isValid: action.val.includes('@'),
    };
  }
  if (action.type === 'INPUT_BLUR_EMAIL') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return INITIAL_EMAIL_STATE;
};

export default emailReducer;
