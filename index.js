const http = require("http");
const PORT = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
  if (
    req.method == "POST" &&
    req.headers["content-type"] == "application/csp-report"
  ) {
    res.writeHead(204);
    req.setEncoding("utf-8");
    req.on("data", (data) => console.log(data));
    res.end();
  } else {
    res.writeHead(400);
    res.end();
  }
});

server.listen(PORT);
// The console outputs are in JSON format for any kind of log collectors which looks for stdout
console.log(
  JSON.stringify({
    message: `CSP reporter started at: http://localhost:${PORT}`,
  })
);
