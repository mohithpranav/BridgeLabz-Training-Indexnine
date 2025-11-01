// class and object in JavaScript ----------------------------------------------------------
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  horn() {
    return "Beep beep!";
  }
}

const myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar);
console.log(myCar.horn());

// inheritance in JavaScript ---------------------------------------------------------------
console.log("----- Inheritance Example -----");
class ElectricCar extends Car {
  constructor(brand, model, year, batteryCapacity) {
    super(brand, model, year);
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    return "Charging the electric car.";
  }

  getBatteryStatus() {
    return `Battery capacity: ${this.batteryCapacity} kWh`;
  }
}
const myElectricCar = new ElectricCar("Tesla", "Model 3", 2021, 75);
console.log(myElectricCar);
console.log(myElectricCar.horn());
console.log(myElectricCar.charge());
console.log(myElectricCar.getBatteryStatus());

// encapsulation in JavaScript -----------------------------------------------------------
console.log("----- Encapsulation Example -----");
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc1 = new BankAccount();
acc1.deposit(100);
console.log(acc1.getBalance());

// polymorphism in JavaScript ------------------------------------------------------------
console.log("----- Polymorphism Example -----");
// Method overriding example
console.log("----- Method Overriding Example -----");
class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

const myDog = new Dog();
const myCat = new Cat();
console.log(myDog.speak());
console.log(myCat.speak());

// Method overloading example (simulated using default parameters)
console.log("----- Method Overloading Example -----");
class Calculator {
  add(a, b, c = 0) {
    return a + b + c;
  }
}
const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.add(2, 3, 4));

// abstraction in JavaScript -------------------------------------------------------------
console.log("----- Abstraction Example -----");
class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}
const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.area());
