const fs = require('fs');

// const data = fs.readFileSync("./data.txt"); //buffer

const data = fs.readFileSync("./data.txt", "utf-8"); //string format

console.log(data);