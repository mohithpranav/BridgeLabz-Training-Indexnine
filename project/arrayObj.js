const data = [
  { id: 1, name: "Aman", grade: "A" },
  { id: 2, name: "Mohan", grade: "B" },
  { id: 3, name: "Ishaan", grade: "C" },
  { id: 4, name: "Ravi", grade: "A" },
  { id: 5, name: "Priya", grade: "B" },
  { id: 6, name: "Simran", grade: "C" },
];

const newMap = new Map();

for (let item of data) {
  if (!newMap.has(item.grade)) {
    newMap.set(item.grade, []);
  }
  newMap.get(item.grade).push(item.name);
}
console.log(newMap);

// data.forEach((item) => {
//   if (!newMap.has(item.grade)) {
//     newMap.set(item.grade, []);
//   }
//   newMap.get(item.grade).push(item.name);
// });
// console.log(newMap);

// data.sort((a, b) => a.grade.localeCompare(b.grade));
// console.log(data);
