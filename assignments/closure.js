// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const a = 3;
const addX = x => y => y + x;
const addTwelve = addX(12);
const b = addTwelve(a);
console.log("sample closure that adds 12 and 3:", b);
