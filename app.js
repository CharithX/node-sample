// app.js
const http = require("http");
const add = require("./add");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello, Docker!\nResult of adding 5 and 7 = ${add(5, 7)}\n`);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
