const path = require("path");
const fs = require("fs");

console.log(__dirname);

console.log(path.join(__dirname, "file.js"));
console.log(path.resolve(__dirname, "file.js"));

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
