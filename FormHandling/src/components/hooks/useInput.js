import { useState } from 'react';

const useInput = validate => {
  const [input, setInput] = useState('');
  const [inputTouched, setinputTouched] = useState(false);

  const isValid = validate(input);
  const hasError = !isValid && inputTouched;

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleInputBlur = e => {
    setinputTouched(e.target.value);
  };

  const reset = () => {
    setInput('');
    setinputTouched(false);
  };

  return {
    value: input,
    hasError,
    isValid,
    handleInputChange,
    handleInputBlur,
    reset,
  };
};

export default useInput;
