// JavaScript operators — concise examples for each

// 1) Arithmetic
console.log("--- Arithmetic ---");
console.log("1 + 2 =", 1 + 2);
console.log("5 - 3 =", 5 - 3);
console.log("4 * 3 =", 4 * 3);
console.log("10 / 2 =", 10 / 2);
console.log("10 % 3 =", 10 % 3);
console.log("2 ** 3 =", 2 ** 3);
let x = 1;
console.log("x++ =", x++, "(value after expression)", x);
x = 2;
console.log("++x =", ++x, "(value after expression)", x);

// 2) Assignment (incl. compound)
console.log("\n--- Assignment ---");
let a = 10;
a += 5;
console.log("a += 5 =>", a);
a -= 3;
console.log("a -= 3 =>", a);
a *= 2;
console.log("a *= 2 =>", a);
a /= 4;
console.log("a /= 4 =>", a);
a %= 4;
console.log("a %= 4 =>", a);
a **= 3;
console.log("a **= 3 =>", a);
let o = { val: 0 };
o.val ||= 5;
console.log("||= =>", o.val);
o = { val: null };
o.val ??= 7;
console.log("??= =>", o.val);

// 3) Comparison
console.log("\n--- Comparison ---");
console.log('1 == "1" =>', 1 == "1");
console.log('1 === "1" =>', 1 === "1");
console.log('2 != "2" =>', 2 != "2");
console.log('2 !== "2" =>', 2 !== "2");
console.log("3 > 2 =>", 3 > 2);
console.log("3 >= 3 =>", 3 >= 3);
console.log("Object.is(NaN, NaN) =>", Object.is(NaN, NaN));

// 4) Logical
console.log("\n--- Logical ---");
console.log("true && false =>", true && false);
console.log("true || false =>", true || false);
console.log("!true =>", !true);
console.log('null ?? "fallback" =>', null ?? "fallback");

// 5) Bitwise
console.log("\n--- Bitwise ---");
console.log("5 & 3 =>", 5 & 3);
console.log("5 | 2 =>", 5 | 2);
console.log("5 ^ 1 =>", 5 ^ 1);
console.log("~5 =>", ~5);
console.log("1 << 2 =>", 1 << 2);
console.log("-8 >> 2 =>", -8 >> 2);
console.log("8 >>> 2 =>", 8 >>> 2);

// 6) Unary
console.log("\n--- Unary ---");
console.log("typeof 42 =>", typeof 42);
console.log('+ "3" =>', +"3");
console.log("- 3 =>", -3);
console.log("void 0 =>", void 0);
const objDel = { p: 1, q: 2 };
delete objDel.p;
console.log("delete objDel.p =>", objDel);

// 7) Conditional / Ternary
console.log("\n--- Ternary ---");
console.log('(5 > 3) ? "yes" : "no" =>', 5 > 3 ? "yes" : "no");

// 8) Comma operator
console.log("\n--- Comma operator ---");
const commaResult = (function () {
  let aa = 1,
    bb = 2;
  return (aa = 3), (bb = 4), aa + bb;
})();
console.log("(a=3, b=4, a+b) =>", commaResult);

// 9) Member / Property / Call / New / Optional chaining
console.log("\n--- Member / Call / New / Optional chaining ---");
const person = {
  name: "A",
  getName() {
    return this.name;
  },
};
console.log("dot access =>", person.name);
console.log("bracket access =>", person["name"]);
console.log("call =>", person.getName());
class C {
  constructor(v) {
    this.v = v;
  }
}
console.log("new =>", new C(5).v);
const maybe = null;
console.log("optional chaining maybe?.prop =>", maybe?.prop);

// 10) Spread / Rest
console.log("\n--- Spread / Rest ---");
const arr1 = [1, 2];
const arr2 = [...arr1, 3];
console.log("array spread =>", arr2);
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };
console.log("object spread =>", obj2);
function sum(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}
console.log("rest params sum(1,2,3) =>", sum(1, 2, 3));

// 11) Structural / Other (instanceof, in, yield, await, return)
console.log("\n--- Other (instanceof, in, yield, await) ---");
console.log("[] instanceof Array =>", [] instanceof Array);
console.log("'a' in {a:1} =>", "a" in { a: 1 });
function* gen() {
  yield 1;
  yield 2;
}
const g = gen();
console.log("generator next =>", g.next().value, g.next().value);
async function demoAwait() {
  const v = await Promise.resolve(42);
  console.log("await =>", v);
}
demoAwait();

// 12) Misc: function call nuances
console.log("\n--- Function call nuances / comma in call ---");
function f(x, y) {
  return x + y;
}
console.log("f(1,2) =>", f(1, 2));

// End — keep module valid
export default {};
