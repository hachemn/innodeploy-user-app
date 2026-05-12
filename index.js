const http = require("http");
const client = require("prom-client");

const register = new client.Registry();

client.collectDefaultMetrics({ register });

const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
});

register.registerMetric(httpRequestsTotal);

const server = http.createServer(async (req, res) => {

  if (req.url === "/metrics") {
    res.setHeader("Content-Type", register.contentType);
    res.end(await register.metrics());
    return;
  }

  httpRequestsTotal.inc();

  //res.end("Innodeploy Version v1.0.9");
  res.send("Hello from Canary Rollout 🚀");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
