class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) return "No elements in Stack";
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str);
  }
}

const s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.printStack();
s.pop();
// s.peek();
s.printStack();
console.log(s.isEmpty());
console.log(s.peek());

// Queue implementation
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str);
  }
}
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.printQueue();
console.log(q.dequeue());
console.log(q.front());
console.log(q.isEmpty());
q.printQueue();
