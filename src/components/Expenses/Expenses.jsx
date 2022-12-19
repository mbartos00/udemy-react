import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ expenses }) => {
  const [pickedYear, setPickedYear] = useState('2022');

  const handleYearChange = (year) => {
    setPickedYear(year);
  };
  return (
    <div>
      <ExpensesFilter
        selectedYear={pickedYear}
        onSaveYearChange={handleYearChange}
      />
      <Card className='expenses'>
        {expenses.map(({ id, title, amount, date }) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
