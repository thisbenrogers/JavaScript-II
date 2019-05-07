// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const a = 3;
const addX = x => y => y + x;
const addTwelve = addX(12);
const b = addTwelve(a);
console.log("sample closure that adds 12 and 3:", b);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return ++x;
};
let x = 0;
x = counter(x);
console.log(x);
x = counter(x);
console.log(x);
x = counter(x);
console.log(x);
x = counter(x);
console.log(x);
x = counter(x);
console.log(x);
x = counter(x);
console.log(x);
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  let increment = () => (counter += 1);
  let decrement = () => (counter -= 1);
  let obj = { increment, decrement };
  return obj;
};
let y = counterFactory();

console.log(y.increment());
console.log(y.increment());
console.log(y.increment());
console.log(y.increment());
console.log(y.increment());
console.log(y.increment());
console.log(y.decrement());
console.log(y.increment());
console.log(y.decrement());
console.log(y.decrement());
console.log(y.decrement());
