// ES6 introduced several new features to JavaScript, including:
// Property Shorthand   -----------------------------------------------------------
console.log("----- Property Shorthand Example -----");
const name = "Alice";
const age = 30;

// before ES6
const person1 = {
  name: name,
  age: age,
};
console.log(person1);

// after ES6
const person2 = {
  name,
  age,
};
console.log(person2);

// Method Shorthand  ---------------------------------------------------------------
console.log("----- Method Shorthand Example -----");
// before ES6
const calculator1 = {
  add: function (a, b) {
    return a + b;
  },
};
console.log(calculator1.add(2, 3));

// after ES6
const calculator2 = {
  add(a, b) {
    return a + b;
  },
};
console.log(calculator2.add(2, 3));

// Computed Property Names ----------------------------------------------------------------
// You can use variables or expressions as property names by wrapping them in [].
const propName = "score";
const player = {
  [propName]: 100,
};
console.log("----- Computed Property Names Example -----");
console.log(player);

// Template Literals ------------------------------------------------------------------------
// before template literals
const user1 = "Bob";
const greeting = "Hello, " + user1 + "! Welcome to ES6 features.";
console.log(greeting);
// after template literals
const user2 = "Bob";
console.log(`Hello, ${user2}! Welcome to ES6 features.`);

// Default Parameters ------------------------------------------------------------------------
console.log("----- Default Parameters Example -----");
// before ES6
function multiply1(a, b) {
  b = b || 1;
  return a * b;
}
console.log(multiply1(5, 2));
console.log(multiply1(5));

// after ES6
function multiply2(a, b = 1) {
  return a * b;
}
console.log(multiply2(5, 2));
console.log(multiply2(5));

// Destructuring Assignment ---------------------------------------------------------------
console.log("----- Destructuring Assignment Example -----");
// before ES6
const personA = { firstName: "Charlie", lastName: "Brown" };
const firstName1 = personA.firstName;
const lastName1 = personA.lastName;
console.log(firstName1, lastName1);
// after ES6
const personB = { firstName: "Charlie", lastName: "Brown" };
const { firstName, lastName } = personB;
console.log(firstName, lastName);

// Spread Operator ---------------------------------------------------------------
console.log("----- Spread Operator Example -----");
// before ES6
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined1 = arr1.concat(arr2);
console.log(combined1);

// after ES6
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const combined2 = [...arr3, ...arr4];
console.log(combined2);

// spread operator with objects ------------------------------------------------
// Expands (spreads) elements from an array/object into individual values.
// Think: “Spread out the values.”
console.log("----- Spread Operator with Objects Example -----");
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

const arr = [1, 2, 3, 4, 5];
const newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5, 4, 5]

// rest operator ---------------------------------------------------------------
// Purpose: Collects multiple elements/arguments into a single variable.
// Think: “Gather the rest of the values.”
console.log("----- Rest Operator Example -----");
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// rest operator with other parameters
function showDetails(first, second, ...others) {
  console.log(first); // 1
  console.log(second); // 2
  console.log(others); // [3, 4]
}
showDetails(1, 2, 3, 4);

// Arrow Functions ----------------------------------------------------------------
console.log("----- Arrow Functions Example -----");
const add = (a, b) => a + b;
console.log(add(2, 3));

// Arrow function with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

// filtering with arrow functions
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

// Lexical this in Arrow Functions ------------------------------------------------
console.log("----- Lexical this in Arrow Functions Example -----");
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
const timer = new Timer();
