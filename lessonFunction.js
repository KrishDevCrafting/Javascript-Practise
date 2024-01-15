// Function in javascript

// function value(a, b) {
//   let sum = a + b;
//   console.log(sum);
// }

// value(5, 5);

// function listArrayItems(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(i + 1, arr[i]);
//   }
// }
// var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
// listArrayItems(colors);

// function listArrayItems(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(i + 1, arr[i]);
//   }
// }

// var arryvalue = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
// listArrayItems(arryvalue);

// Today i learn how to split the string using the (split) Method 13/1/24
// const sentence = "this is the sample";
// const wordsarray = sentence.split(" ");
// console.log(wordsarray);

// Reverse the String

// function x(str) {
//   return str.split("").reverse().join("");
// }

// const originalString = "Prachi";
// const a = x(originalString);

// console.log(a);

// function reverseString(y) {
//   return y.split("").reverse(" ").join("");
// }

// const a = "never give up";
// const b = reverseString(a);
//// console.log(b);

//Check for Palindrome:

// function palindrom(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// console.log(palindrom("teret"));

function Largestnumberofarr(arr) {
  return Math.max(...arr);
}

console.log(Largestnumberofarr([10, 20, 20, 40, 100]));

// In array use of the ... spread method
// const number = [10, 20, 30, 40, 50];
// const number2 = [60, 70, 80, 90, 100];

// const final = [...number, ...number2];
// console.log("combined arry", final);

//Q Generate Random Password
// function generateRandomPassword(length) {
//   const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length);
//     password += charset.charAt(randomIndex);
//   }
//   return password;
// }

// // Example usage:
// console.log(generateRandomPassword(10)); // Output: Random 8-character password

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
