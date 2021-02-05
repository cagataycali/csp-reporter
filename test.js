const http = require("http");
const fs = require("fs");

fs.readFile("./test.html", function (err, html) {
  if (err) {
    throw err;
  }
  http
    .createServer(function (request, response) {
      response.writeHeader(200, {
        "Content-Type": "text/html",
        "Content-Security-Policy":
          "default-src 'self'; report-uri http://localhost:8000", // Change the report-uri value if you want to test your reporter
      });
      response.write(html);
      response.end();
    })
    .listen(3000);
    console.log("Test server started at: http://localhost:3000");
});
