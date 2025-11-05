const path = require("path");
const fs = require("fs");

console.log(__dirname);

console.log(path.join(__dirname, "fileSystem.js"));
console.log(path.resolve(__dirname, "fileSystem.js"));

// read number of the file spaces
function main(fileName) {
  fs.readFile(fileName, "utf-8", function (err, data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] == " ") {
        total++;
      }
    }
    console.log("Total spaces: " + (total + 1));
  });
}

main(process.argv[2]);

//-----------------------------------------------------------------------------------------------------

console.log("Start of blocking code");
const data = fs.readFileSync("myfile.txt", "utf8"); // Blocks here
console.log(data);
console.log("Blocking operation completed");

// Displaying the content read synchronously-----------------------------------------------------
// Non-blocking code example
console.log("Start of non-blocking code");
fs.readFile("myfile.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Non-blocking operation completed");
});
console.log("This runs before the file is read");

// Writing to a file asynchronously----------------------------------------------------------------
fs.writeFile("output.txt", "Hello, World!", (err) => {
  if (err) throw err;
  console.log("File has been written");
});

fs.writeFileSync("outputSync.txt", "Hello, Sync World!");

const pathName = path.join(__dirname, "../outputSync.txt");
console.log(pathName);

// Appending to a file asynchronously----------------------------------------------------------------
const syncData = fs.readFile(pathName, "utf8", (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
fs.appendFileSync("outputSync.txt", `Hey there \n`);

console.log(syncData);
