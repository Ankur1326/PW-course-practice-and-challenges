const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Home page')
})

app.get('/youtube', (req, res) => {
    res.send('youtube')
})

app.get('/instagram', (req, res) => {
    res.json({
        success: true,
        message: "welcome to PW instagram"
    })
})

app.get('/linkedin', (req, res) => {
    res.send('linkedin')
})

module.exports = app;