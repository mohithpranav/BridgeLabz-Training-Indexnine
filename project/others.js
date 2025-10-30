// set
// const mySet = new Set();
mySet.add(10);
mySet.add(4);
mySet.add(0);
mySet.add(5);
console.log(mySet);

mySet.delete("hey");
console.log(mySet);
console.log(mySet.size);

// WeakSet -It can only contain objects--------------------------------------------------
// WeakSet only accepts an iterable of objects (like an array of objects), not a plain object.
let obj1 = { name: "Sam" };
let obj2 = new WeakSet([{ name: "Mohan" }, obj1]);
console.log(obj2); // Is not enumerable (you can’t iterate or see contents)
console.log(obj2.has(obj1));

obj1 = null; // now obj1 is eligible for garbage collection
console.log(obj2.has(obj1)); //

// WeakMap - It can only contain objects as keys --------------------------------------------------
let wmObj1 = { id: 1 };
let wmObj2 = { id: 2 };

const myWeakMap = new WeakMap();
myWeakMap.set(wmObj1, " Object One");
myWeakMap.set(wmObj2, " Object Two");
console.log(myWeakMap); // Is not enumerable (you can’t iterate or see contents)
console.log(myWeakMap.get(wmObj1));
