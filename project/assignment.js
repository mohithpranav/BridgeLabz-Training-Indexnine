// Build a generic Repository<T> class that stores items in memory.
var Repository = /** @class */ (function () {
  function Repository(name, id, age) {
    this.items = [];
    this.name = name;
    this.id = id;
    this.age = age;
  }
  Repository.prototype.addmember = function () {
    this.items.push(this.name, this.age, this.id);
    // console.log(this.items);
  };
  return Repository;
})();
var repo = new Repository("Mohith", 1, 22);
repo.addmember();
console.log(repo.items);
