import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear; //return T or F
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        {/* {filteredExpenses.length === 0 && <p1>No expenses found</p1>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* {filteredExpenses.length === 0 ? (
          <p1>no expenses found</p1>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
