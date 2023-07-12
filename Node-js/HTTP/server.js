const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write("<h1>Hello, node js</h1>")
    }
    res.end();
})

server.listen(5001);
console.log("The HTTP server is running on port 5001");
