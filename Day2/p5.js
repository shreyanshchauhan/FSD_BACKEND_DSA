const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async(req, res) =>{
    res.writeHead(200, {"Content-Type":"application/json"});
    const data = await fs.readFile("data.json");
    res.end(data);
});

server.listen(4000, () => {
    console.log("Server is running on port http://localhost:4000");
});