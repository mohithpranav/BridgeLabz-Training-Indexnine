// functions declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice");

function add(a, b) {
  return a + b;
}

console.log("Sum:", add(5, 10));

// Function expression
const saybye = function () {
  console.log("goodbye");
};

saybye();

// arrow function ---------------------------------------------------------------
const multiply = (a, b) => a * b;
{
  console.log(multiply(2, 4));
}

const greetUser = (username) => {
  console.log(`Welcome, ${username}!`);
};
greetUser("Mohith");

// Anonomous Function ---------------------------------------------------------------
setTimeout(() => {
  console.log("This will run after 2 sec");
}, 2000);

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("This runs immediately!");
})();

// function with default parameters -----------------------------------------
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Mohith"); // Hello, Mohith!
greet(); // Hello, Guest!

// Rest parameter ----------------------------------------------------
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Callback Functions --------------------------------------
function whoami(name, work) {
  console.log(`I am ${name}`);
  work();
}

function developerWork() {
  console.log("I write code");
}
whoami("Mohith", developerWork);

// Higher order function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const done = multiplier(5);
console.log(done(3));

// arrow function with map -----------------------------------------
const values = [1, 2, 3, 4];

const squared = values.map((n) => n * n);
console.log(squared);

// async await function -----------------------------------------
async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(res);
  const data = await res.json();
  console.log(data);
}
fetchData();

// function hoisting -----------------------------------------
sayhi();
reachOut();
function sayhi() {
  console.log("hi harsha");
}
var reachOut = () => {
  console.log("hey there");
};

// pure vs impure functions -----------------------------------------
function add(a, b) {
  return a + b; // Pure
}

let count = 0;
function increment() {
  count++; // Impure (depends on external state)
}
