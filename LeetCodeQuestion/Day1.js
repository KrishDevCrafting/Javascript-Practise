// Day one
// Create Hello World Function
//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = function () {
  return function () {
    return "Hello World..!";
  };
};

const f = createHelloWorld();
console.log(f());
 
// let num = function () {
//   return function () {
//     return "Deepak Bhai";
//   };
// };

// let a = num();
// console.log(a());
