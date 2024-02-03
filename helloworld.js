hello = "krish";
console.log(hello);

let useofvariable = 44;
console.log(useofvariable);

// data types in javascript
// primitive data type //
// nn bb ss u

let a = null;
let b = 108;
let c = true; //can also false
let d = BigInt("567");
let e = "genship impact";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);

// objective in js non primitive
const item = {
  harry: true,
  rem: false,
  ram: 40,
  subaruko: undefined,
};
console.log(item["ram"]);

let ear = "burds";
let career = "driving";
let coding = "practise";
console.log(ear + career);

// for fun create a dictnory

const dict = {
  dismayed: "dispointment",
  yakka: "work especially hard work",
  Serendipity:
    "The occurrence of finding pleasant or valuable things by chance.",
  Perseverance:
    "The persistent determination to achieve a goal despite obstacles or setbacks",
  Ambivalence:
    "The state of having mixed feelings or contradictory ideas about something or someone",
  Pervasive: "Spreading widely throughout an area or group; prevalent",
  Resilience:
    "The ability to bounce back or recover quickly from difficulties or adversity",
  Altruism: "Selfless concern for the well-being and happiness of others",
  Euphoria: "A feeling of intense excitement, happiness, or well-being",
  Conundrum: "A difficult problem or situation that is challenging to solve.",
  Clandestine:
    "Kept secret or done secretly, often for illegal or deceptive purposes.",
  Mellifluous: "Pleasant to the ear; flowing with sweetness or honeyed tones.",
  Epiphany: "A moment of sudden realization or understanding.",
  Ostentatious:
    "Intended to attract attention and impress others; showy or flashy",
  Pragmatic:
    "Dealing with things sensibly and realistically, based on practical rather than theoretical considerations",
  Ubiquitous: "Present, appearing, or found everywhere",
  Paradigm:
    "A typical example or pattern of something a framework that forms the basis for understanding or interpreting something",
};
console.log(dict.Conundrum);
console.log(dict.Mellifluous);
console.log(dict.Resilience);

console.log(dict.Epiphany);

console.log(dict.Altruism);

const anime = {
  Naruto: "sasuke",
  Madara: "Obito",
  Itachi: "sezue",
};

console.log(anime.Madara);

// oprater

let x = 3;
let y = 4;
let z = 6;

console.log(x + y);
console.log(y / 6);
console.log("x-y=", x - y);
console.log("x**y =", x ** y);
console.log("x%y =", x % y);
console.log("x%y=", x % y);

// increment and descrement

console.log("x++ =", x++);
console.log("++x =", ++x);
console.log("--x =", --x);
console.log("x-- =", x--);
console.log("x =", x);
console.log("x-- =", x--);

//    let x = 3;
//    console.log('x++ =', x++);   // Output: x++ = 3
//    console.log('++x =', ++x);   // Output: ++x = 5
//    console.log('--x =', --x);   // Output: --x = 4
//    console.log('x-- =', x--);   // Output: x-- = 4
//    console.log('x =', x);       // Output: x = 3
//    console.log('x-- =', x--);   // Output: x-- = 3

// Assignment Opreators

let assignment = 1;
assignment += 5;
console.log(assignment);

// comparison oprators

let comp1 = 6;
let comp2 = "7";

console.log("comp1==comp2 is", comp1 == comp2);

console.log("comp1!=comp2 is", comp1 != comp2);
console.log("comp1===comp2 is", comp1 === comp2);
console.log("comp1==comp2 is", comp1 !== comp2);

// logiacl opreator

// In JavaScript, logical operators are used to perform logical operations on boolean values. There are three logical operators in JavaScript:

// 1. **AND operator (`&&`)**: This operator returns `true` if both operands are `true`, otherwise it returns `false`. It evaluates the second operand only if the first operand is `true`. Here's the truth table for the AND operator:

//    | Operand 1 | Operand 2 | Result |
//    |-----------|-----------|--------|
//    |   `true`  |  `true`   | `true` |
//    |   `true`  |  `false`  | `false`|
//    |   `false` |  `true`   | `false`|
//    |   `false` |  `false`  | `false`|

// 2. **OR operator (`||`)**: This operator returns `true` if either of the operands is `true`, otherwise it returns `false`. It evaluates the second operand only if the first operand is `false`. Here's the truth table for the OR operator:

//    | Operand 1 | Operand 2 | Result |
//    |-----------|-----------|--------|
//    |   `true`  |  `true`   | `true` |
//    |   `true`  |  `false`  | `true` |
//    |   `false` |  `true`   | `true` |
//    |   `false` |  `false`  | `false`|

// 3. **NOT operator (`!`)**: This operator negates the boolean value of its operand. If the operand is `true`, it returns `false`, and if the operand is `false`, it returns `true`.

//    | Operand | Result |
//    |---------|--------|
//    | `t<script src="helloworld.js"></script>rue`  | `false`|
//    | `false` | `true` |

// These logical operators can be used to make decisions and perform conditional execution of code in JavaScript. They are commonly used in `if` statements, `while` loops, and other control structures.

// let hp =prompt("hey whats you age");
// hp = Number.parseInt(hp) //converting the string to a number
// if(hp>66)
// {
// alert("Welcome Sir");
// }
// else{
//     alert('Nikal yaha se');
// }

// let age = prompt("What is your Age");

// if (age >= 18) {
//   alert("You are an adult.");
// } else {
//   alert("You are a minor.");
// }

// let Marks =prompt('Grade card')
// if (Marks>=90){
//     alert('A');
// }
// else if(Marks>=80){
//     alert('B');
// }
// else if (Marks>=70){
//     alert('C');
// }
// else if (Marks>=60){
//     alert('D');
// }
// else if(Marks>=50){
//     alert('F')
// }

//Question 1: Write a JavaScript code that checks if a number is even or odd
// let  mizuhara = prompt('check the number');

// if(mizuhara % 2 ==0){
//     alert('ture');

// }
// else()

// let num =prompt("Enter the number");

// if(num % 2 == 0){
//     alert("even");
// }
// else {
//     alert("odd");
// }

// question 1.Write a program that takes a number as input and checks if it's positive, negative, or zero. Display an appropriate message based on the input

// let sum = parseInt(prompt("Check number it's posstive,negative, or zero"))
// if(sum>0){
//     alert('the number is positive');
// }
// else if(sum<0){
//     alert('the number is negative');
// }
// else{
//     alert('the number is zero');
// }

//Question 2:Write a program that checks if a given year is a leap year or not. A leap year is a year that is divisible by 4 but not divisible by 100, except if it's also divisible by 400.
// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }

// let year = prompt("Enter a year: ");
// let LeapYear = LeapYear(year);

// if (LeapYear) {
//   alert("The year " + year + " is a leap year.");
// } else {
//   alert("The year " + year + " is not a leap year.");
// }

let n = 10;
let string = "JavaScript";
for (let i = 0; i < 200; i++) console.log(string);

//Topic for in loop
//  Question: What is the purpose of a for-in loop?
//Answer: A for-in loop is used to iterate over the properties of an object. It allows you to access each property name (key) one by one

// Question: What is the syntax of a for-in loop in JavaScript?
//The syntax of a for-in loop is as follows:

let obj = {
  Harry: 99,
  Deepak: 98,
  Rachit: 88,
  Krish: 99.9,
};

for (let a in obj) {
  console.log("Marks of " + a + " " + "are" + obj[a]);
}
// for of Loop

for (let y of "Foolish,Krish") {
  console.log(y);
}
