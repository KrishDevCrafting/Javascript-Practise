//2635. Apply Transform Over Each Element in Array

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var map = function (arr) {
//   return function () {
//     return arr.map((num) => num + 1);
//   };
// };

// const a = map([1, 2, 3]);

// console.log(a());

var loop = function (array, fn) {
  return function () {
    const empty = [];
    for (const v in array) {
      empty.push(fn(array[v]), Number(v));
    }
    return empty;
  };
};

const num = fn([1, 2, 3]);
console.log(num());
