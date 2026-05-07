const http = require("http");

http.createServer((req, res) => {
  res.end("Innodeploy Version v1.0.7");
}).listen(3000);
// v1.0.5
