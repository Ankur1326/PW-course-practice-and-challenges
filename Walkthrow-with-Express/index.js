const express = require('express')

const app = express()

const PORT = 2030
const HOSTNAME = 'localhost';

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/contact', (req, res) => {
    res.send('contact page')
})

app.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}: ${PORT}`);
})

