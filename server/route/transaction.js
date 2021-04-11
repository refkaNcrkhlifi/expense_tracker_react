const express = require('express')
const { getTransaction, addTransaction, deleteTransaction } = require('../services/transactions/transaction')
const router = express.Router();
router.get('/', getTransaction)
router.post('/addTransaction', addTransaction)
router.delete('/deleteTransaction/:id', deleteTransaction)

module.exports = router