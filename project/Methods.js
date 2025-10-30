// Array -------------------------------------------------------
const nums = [1, 2, 3, 4, 5];

// map() – transforms each element
const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter() – keeps only matching elements
const even = nums.filter((n) => n % 2 === 0);
console.log(even); // [2, 4]

// reduce() – combines elements into a single value
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// forEach() – runs a function on each element (no return)
nums.forEach((n) => console.log(n * 10));

// find() – returns the first matching element
console.log(nums.find((n) => n > 3)); // 4

// some() – true if any element passes
console.log(nums.some((n) => n > 4)); // true

// every() – true if all elements pass
console.log(nums.every((n) => n > 0)); // true

// includes() – checks if value exists
console.log(nums.includes(3)); // true

// sort() – sorts array in place
console.log([...nums].sort((a, b) => b - a)); // [5, 4, 3, 2, 1]

// slice() – extracts a portion
console.log(nums.slice(1, 3)); // [2, 3]

// splice() – removes/replaces elements
const arr = [10, 20, 30, 40];
arr.splice(1, 2, 25); // remove 2 items, add 25
console.log(arr); // [10, 25, 40]

// String -------------------------------------------------------

const str = "Hello World";

// toUpperCase() / toLowerCase()
console.log(str.toUpperCase()); // HELLO WORLD

// includes()
console.log(str.includes("World")); // true

// slice(start, end)
console.log(str.slice(0, 5)); // Hello

// split()
console.log(str.split(" ")); // ["Hello", "World"]

// replace()
console.log(str.replace("World", "JS")); // Hello JS

// trim()
console.log("   JS   ".trim()); // "JS"

// startsWith() / endsWith()
console.log(str.startsWith("He")); // true
console.log(str.endsWith("ld")); // true

// Number and Math Methods -------------------------------------------------------
console.log(Number("42")); // 42
console.log(parseInt("3.14")); // 3
console.log(parseFloat("3.14")); // 3.14

console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.random()); // random 0–1
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1
console.log(Math.pow(2, 3)); //
console.log(Math.sqrt(16)); // 4
console.log(Math.abs(-10)); // 10

// Date Methods -------------------------------------------------------
const now = new Date();
console.log(now.toISOString());
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());

// Object Methods -------------------------------------------------------
const user = { name: "Mohith", age: 20 };
console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.values(user)); // ["Mohith", 20]
console.log(Object.entries(user)); // [["name", "Mohith"], ["age", 20]]
const cloned = Object.assign({}, user);
console.log(cloned); // { name: "Mohith", age: 20 }
const withNewProp = { ...user, role: "Developer" };
console.log(withNewProp); // { name: "Mohith", age: 20, role: "Developer" }
console.log(JSON.stringify(user)); // '{"name":"Mohith","age":20}'
console.log(JSON.parse('{"name":"Mohith","age":20}')); // { name: "Mohith", age: 20 }

// function Methods -------------------------------------------------------
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const person = { name: "Mohith" };
console.log(greet.call(person, "Hello", "!")); // Hello, Mohith! --- call(thisArg, arg1, arg2, ...)
console.log(greet.apply(person, ["Hi", "."])); // Hi, Mohith. --- apply(thisArg, [argsArray])

// bind() -------------------------------------------------------------
// Does not call the function immediately.
// Instead, it returns a new function that’s “bound” to the given this.
const boundGreet = greet.bind(person, "Hey"); // bind(thisArg, ...args)
console.log(boundGreet("?")); // Hey, Mohith?

// Promise and Async/Await Methods -------------------------------------------------------
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);

Promise.all([p1, p2]).then((values) => console.log(values)); // [10, 20]
Promise.race([p1, p2]).then((value) => console.log(value)); // 10
Promise.allSettled([p1, p2]).then((res) => console.log(res));

async function demo() {
  const result = await Promise.resolve("Done");
  console.log(result);
}
demo();

// utility / misc Methods -------------------------------------------------------
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof function () {}); // "function"

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({ a: 1 })); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(42)); // false
console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(encodeURIComponent("Hello World!")); // "Hello%20World%21"
console.log(decodeURIComponent("Hello%20World%21")); // "Hello World!"

// setTimeout / setInterval
setTimeout(() => console.log("After 1s"), 1000);
const id = setInterval(() => console.log("Looping..."), 500);
setTimeout(() => clearInterval(id), 2000);
