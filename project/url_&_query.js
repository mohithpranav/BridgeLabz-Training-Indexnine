const path = require("path");
const url = require("url");
const crypto = require("crypto");

const myUrl = new URL("https://www.example.com:8000/path/name?query=string");

console.log("Href:", myUrl.href);
console.log("Hostname:", myUrl.hostname);
console.log("Pathname:", myUrl.pathname);
console.log("Search Params:", myUrl.searchParams);
console.log("Port:", myUrl.port);

const password = "password123";
const hash = crypto.createHash("sha256").update(password).digest("hex");
console.log(`Hash: ${hash}`);
