import React, { useContext, useEffect } from 'react'
import { globalContext } from "../context/globalState";
import { Transaction } from "./Transaction";
export const TransactionList = () => {
    const { transactions, getTransaction } = useContext(globalContext)
    useEffect(() => {
        getTransaction()
    }, [])
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map((transaction) => (
                    <Transaction key={transaction._id} transaction={transaction} />
                ))}
            </ul>
        </>
    )
}
