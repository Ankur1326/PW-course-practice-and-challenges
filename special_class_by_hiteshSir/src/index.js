import express from "express"
// const express = require('express')
const app = express()
const port = 3000

// const { default: mongoose } = require("mongoose");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// (async () => {
//     try {
//         // db connection
//         await mongoose.connect('dbstring')
//         console.log("DB connected successfully");

//         // for express 
//         app.on("error", (err) => {
//             console.log("ERROR: ", err);
//             throw err
//         })

//         const onListening = () => {
//             console.log(`Listening on port ${port}`);
//         }
//         app.listen(port, () => {})

//     } catch (err) {
//         console.error("ERROR: ", err);
//         throw err
//     }
// })()