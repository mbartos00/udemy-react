import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import MealsSummary from './components/Meals/MealsSummary';
import CartProvider from './components/store/CartProvider';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <CartProvider>
      {isModalOpen && <Cart onModalOpen={handleModalOpen} />}
      <Header onModalOpen={handleModalOpen} />
      <MealsSummary />
      <Meals />
    </CartProvider>
  );
};

export default App;
