const http = require("http")

const PORT = 2020
const HOSTNAME = 'localhost'

const server = http.createServer((req, res) => {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({error: "Server Error!"}))

})

server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
})