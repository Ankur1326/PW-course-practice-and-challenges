require('dotenv').config();
const express = require('express')
const cors = require("cors") // Cross origin request
const connectToDB = require(`./config/db.js`)

const app = express();
// Express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// init connection to database
connectToDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('')

// export default app;
module.exports = app;  