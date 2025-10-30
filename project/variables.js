// Using var ------------------------------------------------------------
var x = 10;
console.log(x); // 10

var x = 20; // redeclaration allowed
console.log(x); // 20

if (true) {
  var y = 30; // function scoped
}
console.log(y); // 30 (accessible outside block)

// Using let --------------------------------------------------------------
let a = 10;
a = 20; // ✅ allowed

// let a = 30; ❌ Error (redeclaration not allowed in same scope)

if (true) {
  let a = 50; // different block, allowed
  console.log(a); // 50
}
console.log(a); // 20

console.log(b); // ❌ ReferenceError
let b = 100;

// Using const --------------------------------------------------------------
const p = 50;
// p = 20; ❌ Error (reassignment not allowed)
// const p = 30; ❌ Error (redeclaration not allowed)

if (true) {
  const p = 100; // different block, allowed
  console.log(p); // 100
}
console.log(p); // 50

// Const with objects and arrays -----------------------------------------------
const user = { name: "Mohith", age: 20 };
user.age = 21; // ✅ allowed
// user = {}; ❌ Error

const arr = [1, 2, 3];
arr.push(4); // ✅ allowed
// arr = [5, 6]; ❌ Error

console.log(user); // { name: "Mohith", age: 21 }
console.log(arr); // [1, 2, 3, 4]

// Hoisting with var, let, and const, Summary -----------------------------------------
function testVar() {
  console.log(a); // undefined (hoisted)

  var a = 30;
  let b = 40;
  const c = 50;
  console.log(a, b, c); // 30, 40, 50

  if (true) {
    var a = 60; // same variable (function scoped)
    let b = 70; // new variable (block scoped)
    const c = 80;
    console.log(a, b, c); // 60, 70, 80
  }
  console.log(a, b, c); // 60, 40, 50
}

testVar();
