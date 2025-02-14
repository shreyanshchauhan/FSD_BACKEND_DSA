const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1 style = 'background-color: black; color: white;'> Hello world </h1>`);
});

server.listen(9000, (err) => {
    if (err) {
        console.error(err);
    }
    console.log("server is running at http://localhost:9000");
});