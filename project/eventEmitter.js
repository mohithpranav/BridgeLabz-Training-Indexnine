// event emitter and promises
const EventEmitter = require("events");

const events = new EventEmitter();

events.on("greet", () => {
  console.log("hey there");
});

events.emit("greet");

// Callback example
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 3000);
}
fetchData((msg) => {
  console.log(msg);
});

fetchData((sam) => {
  console.log(sam);
});

// Promise example
const newPromise = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("done") : reject("failure");
});

newPromise.then((msg) => console.log(msg));
newPromise.catch((err) => console.log(err));

// async await example
function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });
}

async function call() {
  const data = await wait();
  console.log(data);
}

call();

console.log(process.pid); // Process ID
console.log(process.cwd()); // Current working directory
console.log(process.platform); // OS platform

// process.exit(); // stops execution

const os = require("os");

console.log(os.type()); // OS type
console.log(os.platform()); // windows, linux, etc.
console.log(os.freemem()); // free RAM
console.log(os.totalmem()); // total RAM
console.log(os.hostname()); // computer name

const buf = Buffer.from("Hello");
console.log(buf);

const fs = require("fs");

const readStream = fs.createReadStream("project/notes.txt", "utf-8");

readStream.on("open", (chunk) => {
  console.log("Stream opened");
});

readStream.on("data", (chunk) => {
  console.log("Chunk received:\n", chunk);
});

const name = process.argv[2];
console.log(`Hello, ${name}! Welcome to the Node.js application.`);
console.log(process.argv);
