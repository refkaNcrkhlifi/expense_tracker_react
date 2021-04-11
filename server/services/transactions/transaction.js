const { getDBTransactions, addDBTransaction, deleteDBTransaction } = require('../dataBase/transaction')
exports.getTransaction = async (req, res) => {
    try {
        const transaction = await getDBTransactions()
        res.status(200).send({ secess: true, data: transaction })
    } catch (error) {
        res.status(500).send({ secess: false, error: 'server error' })
    }
}
exports.addTransaction = async (req, res) => {
    const { text, amount } = req.body
    if (!text || !amount) {
        return res.status(400).send({ secess: false, error: 'text and amount are requred' })

    }
    const transaction = await addDBTransaction(text, amount)
    res.status(200).send({ secess: true, data: transaction })

}
exports.deleteTransaction = async (req, res) => {
    const { id } = req.params
    const transaction = await deleteDBTransaction(id)
    if (transaction.ok === 1) {
        res.status(200).send({ secess: true, data: {} })
    } else {
        res.status(500).send({ secess: false, data: 'server error' })
    }
}