// Array Manipulation:

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
// const Method = flatten.map(ad);
// function ad(para) {
//   return para.flat();
// }
console.log(nestedArray);
//console.log(Method);

// How would you remove duplicates from an array?

// value 1 index[0] === [0]  true
// value 2 index[1] === [1]  true
// value 3 index[2] === [2]  true
// value 3 index[3] === [3]  false
// value 5 index[4] === [4]  true
// value 6 index[5] === [5]  true
// value 6 index[6] === [5]  false
// value 7 index[7] === [6]  false
// value 7 index[8] === [6]  false
// value 8 index[10] ===[7]  true

//Q3 // How do you reverse an array without using the built-in reverse method?

// const arrayToReverse = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const reversedArray = arrayToReverse.reduceRight(
//   (accumulator, currentValue) => {
//     accumulator.push(currentValue);
//     return accumulator;
//   },
//   []
// );

// console.log(reversedArray);

const arrayToReverse = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversedArray = [];

for (let i = arrayToReverse.length - 1; i >= 0; i--) {
  reversedArray.push(arrayToReverse[i]);
}

console.log(reversedArray);

const Method2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const empty = [];
for (let a = Method2.length - 1; a >= 0; a--) {
  empty.push(Method2[a]);
}

console.log(empty);

const master = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const etySpace = [];
for (let fn = master.length - 1; fn > 0; fn--) {
  etySpace.push(master[fn]);
}

console.log(etySpace);
