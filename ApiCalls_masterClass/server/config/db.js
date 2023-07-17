require('dotenv').config()
const mongoose = require("mongoose")

// database connections
const connectToDB = async () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log("DB CONNECTED");
    })
    .catch((error) => {
        console.log(error);
    })
}

module.exports = connectToDB;
