const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/upload") {
    const writeStream = fs.createWriteStream("./uploaded_file");

    // Pipe the incoming data to the file
    req.pipe(writeStream);

    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("File upload completed");
    });
  } else {
    res.writeHead(404);
    res.end("Route not found");
  }
});

server.listen(3000, () => {
  console.log("Upload server running at http://localhost:3000");
});

function test() {
  let x = 10;
  debugger;
  x = x + 5;
  return x;
}
test();
