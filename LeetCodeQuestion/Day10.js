//2703. Return Length of Arguments Passed
//Write a function argumentsLength that returns the count of arguments passed to it.
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

console.log(argumentsLength(1, 2, 3));
/**
 * argumentsLength(1, 2, 3); // 3
 */

// let arr = [{}, "krish", 20, []];

// console.log(arr.length);
