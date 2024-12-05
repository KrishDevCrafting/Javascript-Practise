//To Be Or Not To Be

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
/**
//  * @param {string} val
//  * @return {Object}
//  */
// var expect = function (val) {
//   var val = {
//     a: 5,
//   };

//   if (val.a === 5) {
//     console.log("work");
//   } else {
//     console.log("not work..!");
//   }
// };

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
//function Hosting
// console.log(sum(2, 2));
// function sum(a, b) {
//   return a + b;
// }

// const expect = function (val) {
//   function toBe(val2) {
//     if (val == val2) {
//       return true;
//     } else {
//       return "Not Equal";
//     }
//   }

//   function notToBe(val2) {
//     if (val == val2) {
//       return "Equal";
//     } else {
//       return true;
//     }
//   }

//   return { toBe, notToBe }; // <== Return an object with the functions as properties
// };

// console.log(expect(5).toBe(7));
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  function toBe(val2) {
    if (val == val2) {
      return true;
    } else {
      return "Not Equal";
    }
  }
  function notToBe(val2) {
    if (val == val2) {
      return "Equal";
    } else {
      return true;
    }
  }
  return { toBe, notToBe };
};

console.log(expect(5).toBe(5));


