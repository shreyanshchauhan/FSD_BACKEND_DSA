const http = require("http");
const user = [
    {id: 1, name: "John", age: 25},
    {id: 2, name: "Alex", age: 26},
    {id: 3, name: "Luke", age: 27},
];

const server = http.createServer(async(req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    const names = user.map((user) => {
        return user.name;
    });
    res.end(JSON.stringify(user));
});

server.listen(9001, () => {
    console.log("Server is running on port http://localhost:9001");
});