// import React, { useContext } from 'react';

// import Chart from '../Chart/Chart';
// import ExpenseContext from '../../store/expense-context';

// const ExpensesChart = (props) => {
//   const chartDataPoints = [
//     { label: 'Jan', value: 0 },
//     { label: 'Feb', value: 0 },
//     { label: 'Mar', value: 0 },
//     { label: 'Apr', value: 0 },
//     { label: 'May', value: 0 },
//     { label: 'Jun', value: 0 },
//     { label: 'Jul', value: 0 },
//     { label: 'Aug', value: 0 },
//     { label: 'Sep', value: 0 },
//     { label: 'Oct', value: 0 },
//     { label: 'Nov', value: 0 },
//     { label: 'Dec', value: 0 },
//   ];

//   const expenseCtx = useContext(ExpenseContext)

//   for (const expense of expenseCtx.filteredExpenses) {
//     // console.log('expense of expenses', expense  )
//     const date = new Date(expense.date)
//     const expenseMonth = date.getMonth(); // starting at 0 => January =>z 0
//     chartDataPoints[expenseMonth].value += expense?.amount;
//   }

//   return <Chart dataPoints={chartDataPoints} />;
// };

// export default ExpensesChart;