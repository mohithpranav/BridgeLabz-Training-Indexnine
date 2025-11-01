console.log("----- Lexical this in Arrow Functions Example -----");
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
const timer = new Timer();
console.log(timer);