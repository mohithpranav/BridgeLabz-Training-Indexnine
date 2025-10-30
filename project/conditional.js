// JavaScript conditionals — concise examples

// 1) if
const n = 5;
if (n > 0) {
  console.log("n is positive");
}

// 2) if...else
const isOpen = false;
if (isOpen) {
  console.log("open");
} else {
  console.log("closed");
}

// 3) if...else if...else
const score = 75;
if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else {
  console.log("F");
}

// 4) Guard clause / early return
console.log("\n--- guard clause / early return ---");
function divide(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}
console.log("divide(10,2) =>", divide(10, 2));
console.log("divide(10,0) =>", divide(10, 0));

// 5) Ternary (conditional) operator
console.log("\n--- ternary ---");
const age = 20;
console.log("canVote =>", age >= 18 ? "yes" : "no");

// 6) Switch
console.log("\n--- switch ---");
const day = 2;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
  case 3:
    console.log("Midweek");
    break;
  default:
    console.log("Other day");
}

// 7) Logical short-circuit for conditional execution
console.log("\n--- logical short-circuit ---");
const debug = true;
debug && console.log("debugging enabled"); // runs only if debug is truthy
const maybeVal = null;
const fallback = maybeVal || "default"; // || uses truthy/falsy
console.log("fallback =>", fallback);

// 8) Nullish coalescing (treats null/undefined as "missing")
console.log("\n--- nullish coalescing ---");
const explicitNull = null;
console.log("explicitNull ?? 0 =>", explicitNull ?? 0);

// 9) Optional chaining in conditionals
console.log("\n--- optional chaining ---");
const user = { profile: { name: "Mohith" } };
console.log("user?.profile?.name =>", user?.profile?.name);
const missing = null;
console.log('missing?.prop ?? "no prop" =>', missing?.prop ?? "no prop");
