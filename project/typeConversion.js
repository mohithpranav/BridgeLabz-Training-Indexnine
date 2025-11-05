// Type Conversion in JavaScript
function convertToNumber(value) {
  return Number(value);
}

function convertToString(value) {
  return String(value);
}
function convertToBoolean(value) {
  return Boolean(value);
}
module.exports = {
  convertToNumber,
  convertToString,
  convertToBoolean,
};

// Example usage:
console.log("----- Type Conversion Example -----");
console.log(convertToNumber("123"));
console.log(convertToString(123));
console.log(convertToBoolean(0));

console.log(convertToBoolean("Hello"));
console.log(convertToBoolean(""));
console.log(convertToBoolean(null));
console.log(convertToBoolean(undefined));
console.log(convertToBoolean([]));
console.log(convertToBoolean([1, 2, 3]));
console.log(convertToBoolean({}));
console.log(convertToBoolean({ key: "value" }));
console.log(convertToBoolean(NaN));
console.log("number edge cases:");
console.log(convertToBoolean(Infinity));
console.log(convertToBoolean(-1));
console.log(convertToBoolean(1));
console.log(convertToBoolean(100));
console.log(convertToBoolean(-100));
console.log(convertToBoolean(0.1));
console.log(convertToBoolean(-0.1));

// Additional examples

const data = { key: "value" };
console.log(JSON.stringify(data));
const parsedData = JSON.parse('{"key":"value"}');
console.log(JSON.stringify(parsedData));

console.log(parsedData.key);
console.log(JSON.stringify(parsedData));
