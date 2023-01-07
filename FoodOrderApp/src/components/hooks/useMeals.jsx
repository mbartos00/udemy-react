import { useEffect, useState } from 'react';

const useMeals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setError('');
        setIsLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/:meals.json`
        );
        const data = await response.json();

        const fetchedMeals = [];
        for (const key in data) {
          fetchedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
          setMeals(fetchedMeals);
        }
      } catch (err) {
        setError(err.message || 'Error occured');
        throw new Error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);
  return { isLoading, error, meals };
};

export default useMeals;
