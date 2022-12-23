export const INITIAL_PASSWORD_STATE = {
  value: '',
  isValid: null,
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT_PASSWORD') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === 'INPUT_BLUR_PASSWORD') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return INITIAL_PASSWORD_STATE;
};

export default passwordReducer;
