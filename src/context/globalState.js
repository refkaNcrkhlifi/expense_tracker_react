import axios from 'axios'
import React, { createContext, useReducer } from 'react'
import appReducer from "../reducer/appReducer"

const initialState = {
    transactions: [],
    error: null,
    laoding: true
}
export const globalContext = createContext(initialState)

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState)
    const getTransaction = async () => {
        try {
            const result = await axios.get("/api/transaction")
            console.log("ress=====>>", result);
            dispatch({
                type: "GET_TRANSACTIONS",
                payload: result.data.data
            })
        } catch (error) {
            dispatch({
                type: "TRANSACTIONS_ERROR",
                payload: error.response.data.error
            })

        }

    }
    const deleteTransaction = async (id) => {
        try {
            await axios.delete(`/api/transaction/deleteTransaction/${id}`)
            dispatch({
                type: "DELETE_TRANSACTION",
                payload: id
            })
        } catch (error) {
            dispatch({
                type: "TRANSACTIONS_ERROR",
                payload: error.response.data.error
            })
        }
    }
    const addTransaction = async (text, amount) => {
        const config = {
            headers:
                { "Content_Type": "application/json" }
        }
        try {
            const result = await axios.post("/api/transaction/addTransaction", { text, amount }, config)
            dispatch({
                type: "ADD_TRANSACTION",
                payload: result.data.data
            })
        } catch (error) {
            dispatch({
                type: "TRANSACTIONS_ERROR",
                payload: error.response.data.error
            })
        }
    }

    return <globalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        laoding: state.laoding,
        deleteTransaction,
        addTransaction,
        getTransaction
    }}>{children}</globalContext.Provider>
}
export default GlobalProvider