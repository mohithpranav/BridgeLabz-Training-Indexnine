// Promise Example-----------------------------------------------------------------
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) resolve("Sucessfully executed");
  else reject("Promise rejected");
});

myPromise
  .then((message) => console.log(message))
  .catch((error) => console.log(error))
  .finally(() => console.log("Execution finish"));

// delayed promise example -----------------------------------------------------------
const delayedPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Delay for 3 seconds"), 3000);
});

delayedPromise.then((result) => console.log(result));

// Promise chaining example
new Promise((resolve) => {
  resolve(2);
})
  .then((num) => {
    console.log(num);
    return num * 2;
  })
  .then((num) => {
    console.log(num);
    return num * 2;
  })
  .then((num) => {
    console.log(num);
    return num * 2;
  });

// promise all example -------------------------------------------------------------------
const p1 = Promise.resolve("First Promise");
const p2 = Promise.resolve("Second Promise");
const p3 = Promise.resolve("Third Promise");

Promise.all([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((err) => console.log(err));

// promise all setteled  ------------------------------------------------------------------
const promise1 = Promise.resolve("promise 1");
const promise2 = Promise.resolve("promise 2");
const promise3 = Promise.resolve("failure");

Promise.allSettled([promise1, promise2]).then((result) => console.log(result));

// promise race ----------------------------------------------------------------------------
Promise.race([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);

Promise.any([promise2, promise3]).then((result) => console.log(result));
