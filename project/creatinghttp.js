// const http = require("http");
// const server = http.createServer();
// const port = 3000;

// server.listen(port, () => {
//   console.log(`server running in ${port}`);
// });

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
];

function getTopStudents(students) {
  const topStudents = new Map();
  //   topStudents.values = value[];

  for (const student of students) {
    // if (student.grade === "A") {
    //   topStudents[A] = student;
    // } else if (student.grade) {
    //   topStudents[B] = student;
    // } else topStudents[C] = student;
    topStudents[student.grade] = student.name;
  }
  console.log(topStudents);
}

getTopStudents(students);
