import React, { useContext } from 'react'
import { globalContext } from "../context/globalState";
import { numberWithCommas } from '../util/format';

export const Balance = () => {
    const { transactions } = useContext(globalContext)
    const amountes = transactions.map(element => element.amount)
    const tolal = amountes.reduce((acc, item) => acc += item, 0)
    return (
        <>
            <h4>Your Balance</h4>
            <h1 >${numberWithCommas(tolal)}</h1>
        </>
    )
}
