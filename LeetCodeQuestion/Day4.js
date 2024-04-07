// //2665. Counter II

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
// function createCounter(a, b, n) {
//   let count = n; // Initialize count with the provided value of n

//   return {
//     increment: function () {
//       count++;
//       return count;
//     },
//     decrement: function () {
//       count--;
//       return count;
//     },
//     reset: function () {
//       count = n;
//       return count;
//     },
//   };
// }

// const counter = createCounter(1, 1, 1);
// console.log(counter.increment()); // Output: 2
// console.log(counter.decrement()); // Output: 1
// console.log(counter.reset()); // Output: 1

// function evenOrOdd(number) {
//   if (number % 2 == 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }

// evenOrOdd(8549);

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function (init) {
  let count = init;
  function increment() {
    return ++count;
  }
  function decrement() {
   
    return --count;
  }
 
  function reset() {
    count = init;
    return count;
  }
  return { increment: increment, decrement: decrement, reset: reset };
};

const counter1 = createCounter(5);
console.log(counter1.increment());
console.log(counter1.decrement());
console.log(counter1.reset());
// var myObj = { a: 1, b: 2, c: 3 };

// Object.keys(myObj).forEach(function (key, index) {
//   myObj[key] *= 2;
// });

// console.log(myObj);

// let object = { Name: "Krish", Class: 12, School: "Internation-learning" };

// setTimeout(() => {
//   console.log("This will ne logged after 10 seconds", object);
// }, 5000);
