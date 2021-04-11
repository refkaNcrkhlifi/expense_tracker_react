const express = require('express')
const dotenv = require('dotenv')
const mongoDB = require('./config/db')
const path = require('path')
const transaction = require("./route/transaction")
dotenv.config({ path: './config/config.env' })
const morgan = require('morgan')

const app = express()
app.use(express.json())
if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'))
}
app.use('/api/transaction', transaction)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("../build"))

    app.get("*", (req, res) => { res.sendFile(path.relative(__dirname, "..", "build", "index.html")) })
}
mongoDB()
const PORT = process.env.NODE_PORT || 3000

app.listen(PORT, () => console.log("listning on port :", PORT))

