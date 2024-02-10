import React, { useState } from "react";

export default function Form() {
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });
  const { title, amount, date, category, description } = inputState;
  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };
  return (
    <Form>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Salary Title"
          onChange={handleInput("title")}
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          value={amount}
          name={"amount"}
          placeholder="Salary amount"
          onChange={handleInput("amount")}
        />
      </div>
      <div className="input-control">
        
      </div>
    </Form>
  );
}
