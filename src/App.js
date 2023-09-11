import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import './App.css';
import Header from "./components/Header/Header";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  { id: "e3", title: "plasma TV", amount: 1999.49, date: new Date(2018, 6, 27) },
  { id: "e4", title: "cookies", amount: 20.49, date: new Date(2019, 8, 16) },
  
];

const App = () => {
  
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense , ...prevExpenses];
    });
  };

  return (
    <div>
    <Header/>
    <div className="App-bg">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
    </div>
  );
};

export default App;
