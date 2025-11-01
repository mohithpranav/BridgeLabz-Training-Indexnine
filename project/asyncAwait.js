// Async/Await Example
console.log("----- Async/Await Example -----");
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("revealed data"), 8000);
  });
};

async function getData() {
  console.log("waiting for data...");
  const data = await fetchData();
  console.log("fetching data...");
  console.log(data);
}

getData();

// Handling Multiple Async Functions Sequentially
async function data1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("data from function 1"), 2000);
  });
}

async function data2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("data from function 2"), 4000);
  });
}
async function fetchMultipleData() {
  console.log(await data1());
  console.log(await data2());
}

fetchMultipleData();
