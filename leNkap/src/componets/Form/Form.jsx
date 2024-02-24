import { useEffect, useState } from "react";


const AddTransaction = (props) => {
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [type, setType] = useState("Income");
  const AddNewTrans = () => {
    props.addTransaction({
      amount: Number(amount),
      description,
      type,
      id: Date.now,
    });
    console.log({ amount, description, type });
    props.toggleAddBtn();
  };
  return (
    <div className="add-transaction-container">
      <div className="input-box">
        <input
          type="number"
          placeholder="Amount"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="input-box-radio" style={{justifyContent:'space-between',marginBottom:5, alignContent:"center"}}>
        <input
          type="radio"
          id="income"
          name="type"
          value="Income"
          checked={type === "Income"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
        <input
          type="radio"
          id="expense"
          name="type"
          value="Expense"
          checked={type === "Expense"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <div className="add-transaction">
          <button 
          style={{width:150, 
           
            height:50,
            borderRadius:5,
            
          }}
          onClick={AddNewTrans}>Add Transaction</button>
        </div>
      </div>
    </div>
  );
};
export default AddTransaction;
