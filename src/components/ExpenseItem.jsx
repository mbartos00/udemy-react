import React from 'react';
import './ExpenseItem.css';
const date = new Date().toLocaleDateString();

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>{date}</div>
      <div className='expense-item__description'>
        <h2>Insurance</h2>
        <div className='expense-item__price'>$232</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
