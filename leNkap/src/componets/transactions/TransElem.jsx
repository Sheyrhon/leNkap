import React, { useState } from 'react'

const TransactionElement = (props) => {
    
  return (
    <div className='wrapper' isExpense ={props.data?.type==='Expense'}>
        <span>{props.data.description}</span>
        <span>${props.data.amount}</span>
        <span>{props.data.id}</span>
    </div>
  )
}

export default TransactionElement