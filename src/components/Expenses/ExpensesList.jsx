import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0)
    return (
      <h2 className='expenses-list__fallback'>Found no expenses</h2>
    );

  return (
    <ul className='expenses-list'>
      {filteredExpenses.map(({ id, title, amount, date }) => (
        <ExpenseItem
          key={id}
          title={title}
          amount={amount}
          date={date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
