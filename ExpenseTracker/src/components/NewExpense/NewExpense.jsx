import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSaveExpenseData = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    onAddExpense(newExpenseData);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='new-expense'>
      {isOpen ? (
        <ExpenseForm
          open={handleOpen}
          onSaveExpenseData={handleSaveExpenseData}
        />
      ) : (
        <button onClick={handleOpen}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
