import React, { useEffect, useState } from 'react'
import TransactionElement from '../componets/transactions/TransElem'
import './style.css'
const Transaction = (props) => {
    const [filterTransactions, updatefilteredTransactions] = useState(props.transaction);
    const [searchTransaction, updateTransaction ]= useState('');
    const filteredData = (searchTransaction)=>{
        if (!searchTransaction || !searchTransaction.trim().length){
            updatefilteredTransactions(props.transaction)
            return ;
        }
        let transfered = [...props.transaction];
        transfered = transfered.filter((data)=>
        data.description.toLowerCase().includes(searchTransaction.toLowerCase().trim())
        );
        updatefilteredTransactions(transfered)
    };
    useEffect(()=>filteredData(searchTransaction), [props.transaction]);

  return (
    <div className='transaction'>
        <h2>Transactions</h2>
        <div className="input-box">
            <input type="text"
            placeholder='Search'
            value={searchTransaction} 
            onChange={(e)=>{updateTransaction(e.target.value);
            filteredData(e.target.value);}} />
            {filterTransactions?.length ? filterTransactions.map((data)=>(
                <TransactionElement data={data}/>
            ))
        :""}
        {/* if there are no transactions nothing should appear otherwise use the  map method to i
        iterate over the data and display */}
        </div>
    </div>
  )
}

export default Transaction