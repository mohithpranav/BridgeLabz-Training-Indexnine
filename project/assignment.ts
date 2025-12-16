// Build a generic Repository<T> class that stores items in memory.

// class Repository<T> {
//   public items: T[] = [];
//   public name: string;
//   public id: number;
//   public age: number;
//   constructor(name: string, id: number, age: number) {
//     this.name = name;
//     this.id = id;
//     this.age = age;
//   }

//   addmember() {
//     this.items.push([this.name, this.age, this.id] as unknown as T);
//     console.log(this.items);
//   }
// }
// const repo = new Repository<[string, number, number]>("Mohith", 1, 22);
// repo.addmember();
// console.log(repo.items);

class Repository<T> {
  private items: T[] = [];

  add(items: T): void {
    this.items.push(items);
  }

  getAll(): T[] {
    return this.items;
  }
}

type user = {
  name: string;
  id: number;
  age: number;
};

interface user1 {
  name: string;
  company: string;
  location: string;
}

let newRepo = new Repository<user>();
newRepo.add({
  name: "Mohith",
  id: 1,
  age: 19,
});
console.log(newRepo.getAll());

let compRepo = new Repository<user1>();
compRepo.add({
  name: "Mohith",
  company: "Google",
  location: "USA",
});
console.log(compRepo.getAll());
