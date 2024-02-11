import React from "react";
import { ReactDOM } from "react-dom";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components


// import LoginForm from "../componets/Login/LoginForm";
import Register from "../Register/Register";
import ExpenseTracker from "../Home/index";
import Login from "../Login/Login";

export default function Index() {
  return (
    
      <Routes>
        <Route path="Register" Component={Register}></Route>
        <Route exact path="Login" Component={Login }></Route>
        
        <Route
          path="ExpenseTracker"
          Component={ExpenseTracker}
        ></Route>
      
      </Routes>
    
  );
}
