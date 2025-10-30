// constructor in JS
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Mohiht", 12);
const person2 = new Person("Sam", 21);

console.log(person1.name);
console.log(person2);

// Adding Methods to a constructor ------------------------------------------------------- before es6
function Student(name, college) {
  this.name = name;
  this.college = college;

  // add methods directly inside
  this.WhoIsthis = function () {
    console.log(`Hey this is ${name}`);
  };

  // Using prototypes means all objects share the same method (not copied for each object).
  Student.prototype.collegeName = function () {
    console.log(`I am from ${college}`);
  };
}

const p1 = new Student("Mohith", "SRM");
// console.log(p1.WhoIsthis());
p1.WhoIsthis();
p1.collegeName();

// ES6 Class Syntax (Modern Constructor) --------------------------------------------------
class Employee {
  constructor(name, company = "Amazon", age) {
    this.name = name;
    this.company = company;
    this.age = age;
  }

  sayHi = () => {
    console.log(`Hey ${this.name}`);
    console.log(this);
  };
}

const employee1 = new Employee("Sam", "Flipkart", 12);
const employee2 = new Employee("Mohith", undefined, 21);
employee1.sayHi();
console.log(employee2.company); // default constructor is "Amazon"
// default constructor --------------------------------------------------------
