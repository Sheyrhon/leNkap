import React, { useState } from "react";
import AddTransaction from "../componets/Form/Form";

const Overview = (props) => {
  const [isAddBtnVisible, toggleAddBtn] = useState(false);

  
  return (
    <div className="wrapper">
      <div className="balnce-box">
        Balance: ${props.incomes - props.expenses}
        <button
          onClick={() => {
            toggleAddBtn(!isAddBtnVisible);
          }}
          className="add-transaction"
        >
          {isAddBtnVisible ? "Cancel" : "ADD"}
        </button>
      </div>
      {isAddBtnVisible && (
        <AddTransaction
          toggleAddBtn={toggleAddBtn}
          addTransaction={props.addTransaction}
        />
      )}
      {/* expense container, shows total expense and income */}
      <div className="expense-container">
        <div  isIncome ={false} className="expense-box"> 
        {/*  using isIncome to specify color  while styling 
        color: {props=>props.isIncome? "green":'red'}*/}
          Expense <span>${props.expenses}</span>
        </div>

        <div isIncome={true} className="expense-box">
          Income <span>${props.incomes}</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
