import { useState } from 'react';

const useCheckoutInputValid = inputValues => {
  const [error, setError] = useState({
    name: '',
    street: '',
    city: '',
    postalCode: '',
  });

  const [isInputValid, setIsInputValid] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const isValid = () => {
    setError({
      name: '',
      street: '',
      city: '',
      postalCode: '',
    });
    setIsInputValid({
      name: true,
      street: true,
      city: true,
      postalCode: true,
    });
    if (inputValues.name === '' || inputValues.name.trim().length < 1) {
      setError(prev => ({ ...prev, name: 'Please enter valid name' }));
      setIsInputValid(prev => ({ ...prev, name: false }));
    }
    if (inputValues.street === '' || inputValues.street.trim().length < 1) {
      setError(prev => ({ ...prev, street: 'Please enter valid street' }));
      setIsInputValid(prev => ({ ...prev, street: false }));
    }
    if (inputValues.city === '' || inputValues.city.trim().length < 1) {
      setError(prev => ({ ...prev, city: 'Please enter valid city' }));
      setIsInputValid(prev => ({ ...prev, city: false }));
    }
    if (inputValues.postalCode === '') {
      setError(prev => ({
        ...prev,
        postalCode: 'Please enter valid postal code (XX-XXX)',
      }));
      setIsInputValid(prev => ({ ...prev, postalCode: false }));
    }
  };

  return { isInputValid, error, isValid };
};

export default useCheckoutInputValid;
