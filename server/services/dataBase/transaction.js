const transactionModel = require('../../models/Transaction')

exports.getDBTransactions = async () => {
    try {
        const result = await transactionModel.find()
        return result
    } catch (error) {
        console.log('error to get transaction from dataBase', error);
    }
}
exports.addDBTransaction = async (text, amount) => {
    try {
        const transaction = new transactionModel({ text, amount })
        const result = await transaction.save();
        return result
    } catch (error) {
        console.log('error to add transaction to dataBase', error);
        return error
    }
}
exports.deleteDBTransaction = async (_id) => {
    try {
        const result = await transactionModel.deleteOne({ _id })
        return result
    } catch (error) {
        console.log('error to add transaction to dataBase', error);
    }
}
