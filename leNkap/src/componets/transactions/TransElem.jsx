import React, { useState } from "react";
import '../../Home/style.css'

const TransactionElement = (props) => {
  return (
    <div className="wrapper"
    style={{display:"flex", justifyContent:'space-between', padding:10}} isExpense={props.data?.type === "Expense"}>
{/* <span>{props.data.Date.now}</span> */}
        <span >{props.data.description}</span>
        <span>${props.data.amount}</span>
      
    </div>
  );
};

export default TransactionElement;
