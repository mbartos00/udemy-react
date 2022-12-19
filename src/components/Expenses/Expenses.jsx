import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = ({ expenses }) => {
  const [pickedYear, setPickedYear] = useState('2022');

  const handleYearChange = (year) => {
    setPickedYear(year);
  };

  const filteredExpenses = expenses.filter(
    ({ date }) => date.getFullYear() == pickedYear
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selectedYear={pickedYear}
        onSaveYearChange={handleYearChange}
      />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
