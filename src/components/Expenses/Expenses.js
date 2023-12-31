import React, { useContext, useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import ExpenseContext from "../../store/expense-context";

const Expenses = () => {
  const expenseCtx = useContext(ExpenseContext)
  
  // const [filteredYear, setFilteredYear] = useState("all");
  // const filteredExpenses = expenseCtx.expenses.filter((expense) => {
      
  //   if (filteredYear === "all") return expense;

  //   return expense.date.getFullYear().toString() === filteredYear;
  // });'

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          // selected={expenseCtx.filteredYear}
          // onSetFilteredYear={setFilteredYear}
        />
        <ExpensesChart/>
        <ExpensesList />
      </Card>
    </div>
  );
};

export default Expenses;
