import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const handleSaveExpenseData = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    onAddExpense(newExpenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </div>
  );
};

export default NewExpense;
