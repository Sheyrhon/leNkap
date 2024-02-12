import React, { useEffect, useState } from "react";
import Overview from "./overview";
import Transaction from "./transaction";
import Logout from "../componets/Logout/Logout";
import Profile from "../componets/profile/profile";
import Login from "../componets/Login/Login";
import { LoginContext } from "../context/LoginContext";



const ExpenseTracker = () => {
  const [transaction, updateTransaction] = useState([]);
  const [expenses, updateExpense] = useState(0);
  const [incomes, updateIncome] = useState(0);
  const [showProfile, setShowProfile] =useState(false)
  const [username, setUserName] = useState('')
  const CalculateBalance = () => {
    let expense = 0;
    let income = 0;
    //if data is an expense add the data to the expense otherwise add the data to income
    transaction.map((data) => {
      data.type === "Expense"
        ? (expense = expense + data.amount)
        : (income = income + data.amount);
    });
    updateExpense(expense);
    updateIncome(income);
  };
  useEffect(() => CalculateBalance(), [transaction]);
  // update existing transactions
  const addTransaction = (data) => {
    const transactionArray = [...transaction];
    //  spread operator
    transactionArray.push(data);
    updateTransaction(transactionArray);
  };

  return (
    <div className="wrapper">
     
      
     
      <h1>Expense Tracker</h1>
      <Overview
        addTransaction={addTransaction}
        expenses={expenses}
        incomes={incomes}
      />
      <Transaction transaction={transaction} />
      {/* <Logout/> */}
    </div>
  );
};

export default ExpenseTracker;
