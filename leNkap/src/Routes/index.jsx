import React from "react";
import { ReactDOM } from "react-dom";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

//screens
import HomeScreen from "../Screens/Home";
import CreateAccountScreen from "./../Screens/createAccountScreen";
import ExpensesScreen from "./../Screens/expensesScreen";
import SplashScreen from "./../Screens/splashScreen";

export default function Index() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={<SplashScreen />}></Route>
        <Route path="/Home" Component={<HomeScreen />}></Route>
        <Route
          path="/CreateAccountScreen"
          Component={<CreateAccountScreen />}
        ></Route>
        <Route path="/ExpensesScreen" Component={<ExpensesScreen />}></Route>
      </Routes>
    </Router>
  );
}
