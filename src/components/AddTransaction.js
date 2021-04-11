import React, { useContext, useState } from 'react'
import { globalContext } from "../context/globalState";
export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(globalContext)
    // const onSubmit = e => {
    //     e.preventDeafault()
    //     addTransaction(text, amount)
    // }
    return (
        <>
            <h3>Add new transaction</h3>
            {/* <form > */}
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                >Amount <br />
            (negative - expense, positive - income)</label
                >
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn" onClick={() => { addTransaction(text, amount) }} >Add transaction</button>
            {/* </form> */}
        </>
    )
}
