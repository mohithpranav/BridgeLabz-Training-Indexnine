const http = require("http");
const server = http.createServer();
const port = 3000;

server.on("request", (req, res) => {
  if (req.url === "/") {
    return res.end("home page");
  } else if (req.url === "/profile") {
    return res.end("profile");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end("Contact Page");
  }
  res.statusCode = 404;
  res.end("error 404");
});

server.listen(port, () => {
  console.log(`Connected to the ${port} port`);
});

// Error Handling Example
try {
  let x = 10;
  let y = x.toUpperCase(); // ❌ error: x is a number, cannot use toUpperCase
  console.log(y);
} catch (err) {
  console.log("Error occurred:", err.message);
}
