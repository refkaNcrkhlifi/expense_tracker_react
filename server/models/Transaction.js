const mongoose = require('mongoose')

const transactionShema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'please add text']
    },
    amount: {
        type: Number,
        required: [true, 'please add positive or negative number']
    },
    createdAt: {
        type: Date, default: Date.now
    }

})

module.exports = mongoose.model("transaction", transactionShema)
