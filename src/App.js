import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense.js";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "car insurance",
    amount: 289.8,
    date: new Date(2019, 2, 21),
  },
  {
    id: "e2",
    title: "shopping",
    amount: 230,
    date: new Date(2022, 2, 22),
  },
  {
    id: "e3",
    title: "washing",
    amount: 289,
    date: new Date(2020, 2, 21),
  },
  {
    id: "e4",
    title: "bathing",
    amount: 289,
    date: new Date(2021, 2, 21),
  },
  {
    id: "e5",
    title: "bathing",
    amount: 289,
    date: new Date(2021, 2, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
