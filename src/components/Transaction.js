import React, { useContext } from 'react'
import { globalContext } from "../context/globalState";
export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(globalContext)
    const sign = transaction.amount > 0 ? '+' : '-'
    return (
        <li className={transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
        </li>
    )
}
