import { useState } from 'react';

const useOrder = () => {
  const [loading, setLoading] = useState(false);

  const sendRequest = async data => {
    setLoading(true);
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/orders.json`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendRequest };
};

export default useOrder;
