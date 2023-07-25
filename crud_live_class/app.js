require('dotenv').config();
const express = require('express')
const cors = require("cors") // Cross origin request
const connectToDB = require(`./config/db.js`);
const usermodels = require('./models/usermodels.js');

const app = express();
// Express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// init connection to database
connectToDB();

const userRoutes = require('./routes/userRoutes.js')
app.use('/', userRoutes)


// export default app;
module.exports = app;  