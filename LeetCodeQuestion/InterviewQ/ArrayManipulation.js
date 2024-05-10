// Array Manipulation:

// How do you reverse an array without using the built-in reverse method?

// How would you remove duplicates from an array?
const array = [1, 2, 2, 3, 3, 4, 4, 5, 5];

const newArray = array.filter(fn);

console.log(newArray);

function fn(value, index, self) {
  return self.indexOf(value) === index;
}

// let string = "hello World";

// var num = string.indexOf("W");
// var num2 = string.length("h");

// console.log(num);
// console.log(num2);

// Can you write a function to flatten a nested array?
const flatten = [1, 2, [3, 4], 5, [6, 7], 8];
console.log(flatten);

const nestedArray = flatten.reduce((a, b) => a.concat(b), []);
const Method = flatten.map(ad);
function ad(para) {
  return para.flat();
}
console.log(nestedArray);
console.log(Method);
