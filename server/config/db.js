const mongoose = require('mongoose');

const mongoDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connected to dataBase ");
    } catch (error) {
        console.log("error to connection ", error);
    }
}
module.exports = mongoDB