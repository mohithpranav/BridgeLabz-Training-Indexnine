// Async/Await Example
console.log("----- Async/Await Example -----");
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("revealed data"), 3000);
  });
};
const fetchData2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("revealed data1"), 5000);
  });
};

async function getData() {
  console.log("waiting for data...");
  const data = await fetchData();
  console.log(data);
  const data2 = await fetchData2();

  console.log(data2);
  console.log("fetching data...");
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
