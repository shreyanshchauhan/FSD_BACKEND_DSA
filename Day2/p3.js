const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async(req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    const data = await fs.readFile("./index.html");
    res.end(data);
});

server.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});