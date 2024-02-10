// function example() {
//   console.log("number");
//   console.log("time");
//   console.log("data");
//   example();
// }

// console.log(example());

// what is the use  of Recersion in Javascript..!
//Ans- In JavaScript, recursion is a programming technique where a function calls itself in order to solve a problem. It's particularly useful for tasks that can be broken down into smaller, similar sub-problems. Recursion can be used to solve a wide range of problems, including tree traversal, factorial calculation, Fibonacci sequence generation, and more.

//Formula n!=n×(n−1)×(n−2)×…×2×1
//5!=5×4×3×2×1=120
//
// Example usage

// const Factorial = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * Factorial(n - 1);
//   }
// };

// const value = Factorial(5);
// console.log(value);

// function UsingLoop(b) {
//   var result = 1;
//   for (i = 1; i <= b; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(`${UsingLoop}`, UsingLoop(5));
