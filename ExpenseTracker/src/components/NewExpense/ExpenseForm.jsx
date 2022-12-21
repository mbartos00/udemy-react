import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, open }) => {
  const [inputValues, setinputValues] = useState({
    title: '',
    amount: 0,
    date: '',
  });

  const handleCancelClick = (e) => {
    e.preventDefault();
    open(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const date = new Date(inputValues.date);
    const expenseData = {
      ...inputValues,
      date,
    };
    onSaveExpenseData(expenseData);
    open(false);

    setinputValues({ title: '', amount: '', date: '' });
  };

  const handleInputChange = (e) => {
    setinputValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            value={inputValues.title}
            onChange={handleInputChange}
            id='title'
            type='text'
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            value={inputValues.amount}
            onChange={handleInputChange}
            id='amount'
            type='number'
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            value={inputValues.date}
            onChange={handleInputChange}
            id='date'
            type='date'
            min='2019-01-01'
            max='2025-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={handleCancelClick}>Cancel</button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
