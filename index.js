const http = require("http");

http.createServer((req, res) => {
  res.statusCode = 500; // 💣 simulate failure
  res.end("broken");
}).listen(3000);