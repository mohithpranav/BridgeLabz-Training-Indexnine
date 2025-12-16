// Interfaces.ts

interface User {
  name: string;
  age: number;
  email: string;
}

function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

const u1: User = {
  name: "Mohith",
  age: 13,
  email: "mohith@gmail.com",
};

console.log(isLegal(u1));
