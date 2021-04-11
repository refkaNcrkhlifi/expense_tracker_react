
const appReducer = (state, action) => {
    switch (action.type) {
        case "GET_TRANSACTIONS":
            return {
                ...state,
                transactions: action.payload,
                laoding: false
            }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(Element => Element._id !== action.payload)
            }
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case "TRANSACTIONS_ERROR":
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}
export default appReducer