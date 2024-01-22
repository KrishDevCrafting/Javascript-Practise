//Using Array Literal
// let power = ["one", "two", "three", "four"];
// console.log([...power]);

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
// const value = (x, y, z) => {
//   return x + y + z;
// };
// // 1. single value using array
// const num = [10, 20, 40];

// const result = value(...num);
// console.log(result);

// 2. Combining Arrays:
// const _array = ["Gojo", "Naruto", "Denji"];
// const _array2 = ["Itachi", "Sasuke", "Maki"];

// const combined = [..._array, ..._array2];
// console.log(combined);

// Topic Arrays are Objects 17/1/24

//In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods

//Arrays signal that the assigned values all belong to a group. These values are ordered in a sequence and each one can be accessed through its index number in that sequence. In this video, you learned how to build an array in JavaScript. You also learned how JavaScript sequences array items using an index value.

// Understanding push() or Pop() Method in Array

// Push() or Pop()
// var $push = [];
// $push.push("Apple");
// $push.push("Mango");
// $push.push("Graps");

// $push.pop();
// console.log($push);

// function wall(one, two, three, four) {
//   var arr = [];
//   arr.push(one);
//   arr.push(two);
//   arr.push(three);
//   arr.push(four);
//   console.log(arr);
// }

// console.log("itachi", "Sasuke", "Madara", "Aizen");

// math object

console.log(Math.floor(20.5));

// function randompassword(length) {
//   let charater = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLNOPQRSTUVWXYZ";
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     const randomI = Math.floor(Math.random() * charater.length);
//     password += charater.charAt(randomI);
//   }
//   return password;
// }
// const num = randompassword(5);
// // console.log(randompassword(80));
// console.log(num);

// const Arrrow = (str) => {
//   let character = "987654321";
//   let pass = "";
//   for (let n = 0; n <= str; n++) {
//     const randomI = Math.floor(Math.random() * character.length);
//     pass += character.charAt(randomI);
//   }
//   return pass;
// };

// const number = Arrrow(2);
// console.log(number);

const practise = (ing) => {
  let character = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLNOPQRSTUVWXYZ123456789";
  let power = "";
  for (let p = 0; p < ing; p++) {
    const randompassword = Math.floor(Math.random() * character.length);
    power += character.charAt(randompassword);
  }

  return power;
};

console.log(practise(6));

// function darkweb(web, app) {
//   if (web < 10) {
//     console.log("Naruto");
//   } else if (web <= 20) {
//     console.log("itachi");
//   } else if (app <= 2) {
//     console("Madara");
//   } else if (dama < 4) {
//     console.log("Aizen");
//   } else if (app <= 2) {
//     console.log("Sasuke");
//   }
// }
// darkweb(2, 2);

// Object.values() Method:
// const Women = {
//   Name: "Vhisaka",
//   Role: "Junior-Engineer",
//   Speciality: "Communication",
// };

// const h = Object.values(Women);
// console.log(h);

// Purpose: It returns an array containing the values of the enumerable properties of an object.

// Object.entries() Method:
// let myObject = {
//   name: "Rohan",
//   Age: "22",
//   City: "Bangalore",
// };
// myObject.salary = 55000;

// const valuesArray = Object.entries(myObject);
// console.log(valuesArray);
// Purpose: It returns an array containing the key-value pairs of the enumerable properties of an object.
