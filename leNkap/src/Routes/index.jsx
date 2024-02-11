import React from "react";
import { ReactDOM } from "react-dom";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components


import LoginForm from "../Login/LoginForm";
import Register from "../Register/Register";
import ExpenseTracker from "../Home";

export default function Index() {
  return (
    
      <Routes>
        <Route exact path="../componets/Login/LoginForm.jsx" Component={<LoginForm />}></Route>
        <Route path="../componets/Register/Register.jsx" Component={<Register />}></Route>
        <Route
          path="../Home/expenseTracker.jsx"
          Component={<ExpenseTracker />}
        ></Route>
      
      </Routes>
    
  );
}
