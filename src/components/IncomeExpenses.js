import React, { useContext } from 'react'
import { globalContext } from "../context/globalState";
import { numberWithCommas } from '../util/format';
export const IncomeExpenses = () => {
    const { transactions } = useContext(globalContext)
    const amounts = transactions.map(Element => Element.amount)
    const income = amounts.filter(Element => Element > 0).reduce((acc, item) => acc += item, 0)
    const expense = amounts.filter(Element => Element < 0).reduce((acc, item) => acc += item, 0)
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${numberWithCommas(Math.abs(expense))}</p>
            </div>
        </div>
    )
}
