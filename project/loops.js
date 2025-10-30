// basics for loops
// for (initilation; condition; update) {
//   // code block to be executed
// }

for (let i = 0; i < 4; i++) {
  console.log(i);
}
// Output: 0 1 2 3

//break statement ------------------------------------------------
for (let i = 0; i <= 6; i++) {
  if (i === 3) break; // Exit the loop when i is 3
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // output 1 2 4 5
}

// Nested Loops ----------------------------------------------------------------
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// Infinite loop with break statement ------------------------------------------------
for (;;) {
  console.log("Running...");
  break;
}

// Multiple variables in for loop
for (let i = 0, j = 0; i < 3, j < 3; i++, j++) {
  console.log(`i: ${i}, j: ${j}`);
}

// command line argument to control loop iterations ------------------------------------------------
const n = process.argv[3];
console.log(n);
for (let i = new Number(n); i > 0; i--) {
  console.log(i);
}

// forEach loop with Array, Map, and Object --------------------------------------------
const fruits = ["pineapple", "mango", "cherry", "banana"];
let items = new Map();

let data = {};
fruits.forEach((ele) => {
  console.log(ele.length);
  data[ele.length] = ele;
});

// Using Map
fruits.forEach((ele) => {
  items.set(ele.length, ele);
});

items.forEach((val, key) => {
  console.log(key, val);
});

console.log(typeof data);

// Using Object
Object.entries(data).forEach(([key, val]) => console.log([key, val]));

let obj = {};

fruits.forEach((ele) => {
  obj[ele.length] = ele;
});

obj.manoged = "mango";

// for in loop with Object ------------------------------------------------
// Used to iterate over keys (property names) of an object.
const user = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// loop for...of Loop — For Iterable Values (ES6+) ---------------------------------
// Used for iterable objects like arrays, strings, Maps, Sets, etc.
const nums = [10, 20, 30];
for (let num of nums) {
  console.log(num);
}

for (let char of "JS") {
  console.log(char);
}

// for await...of loop (ES2018+) ---------------------------------
async function getData() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
  ];

  const promises = urls.map((u) => fetch(u).then((res) => res.json()));
  for await (let data of promises) {
    console.log(data);
  }
}
getData();

// Labelled Loops (Advanced) ----------------------------------------------
outerLoop: for (let i = 1; i <= 3; i++) {
  innerLoop: for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) break outerLoop;
    console.log(i, j);
  }
}

// Summary of loops ------------------------------------------------
const arr = [1, 2, 3];
const user1 = { name: "Mohith", role: "Developer", age: 20 };

// Classic for
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// for...in
for (let key in user1) console.log(key, ":", user1[key]);

// for...of
for (let key in user1) console.log(key, ":", user1[key]);

// for...of
for (let key of Object.keys(user1)) console.log(key, ":", user1[key]);

// for...of
for (let num of arr) console.log(num * 2);

// forEach
arr.forEach((num) => console.log(num + 10));

// while loop
let i = 0;
while (i < 5) {
  console.log("While Count:", i);
  i++;
}

// do...while loop
let j = 0;
do {
  console.log("Do While Count:", j);
  j++;
} while (j < 5);

// Infinite loop with break
let k = 0;
for (;;) {
  if (k >= 3) break;
  console.log("Infinite Loop Count:", k);
  k++;
}
