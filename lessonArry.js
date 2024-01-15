// const gojo = () => {
//   let arr = ["one", null, 77];
//   let arr2 = ["two", "three", "four", 5];
//   const combined = [...arr, ...arr2];
//   console.log(combined);
// };

// gojo();

// Example function that accepts multiple arguments
// const sum = (a, b, c) => {
//   return a + b + c;
// };

// // Using the spread operator to pass multiple arguments
// const numbers = [1, 2, 3];
// const result = sum(...numbers);

// console.log(result); // Output: 6
const value = (x, y, z) => {
  return x + y + z;
};
// 1. single value using array
const num = [10, 20, 40];

const result = value(...num);
console.log(result);

// 2. Combining Arrays:
// const _array = ["Gojo", "Naruto", "Denji"];
// const _array2 = ["Itachi", "Sasuke", "Maki"];

// const combined = [..._array, ..._array2];
// console.log(combined);
