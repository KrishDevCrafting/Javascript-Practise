// const Celebrate = () => {
//   let a = "happy";
//   if (a === "happy") {
//     console.log("Happy Holi...!");
//   } else {
//     console.log("error");
//   }
// };

// Celebrate();

// const Code = (arry) => {
//   var arry = [1, 2, 3, 4, 5];
//   let k = 2;
//   if (k == 2) {
//     console.log("hey");
//     arry.pop();
//   } else {
//     console.log("byee");
//   }
//   console.log(arry);
// };

// Code();

// const work = () => {
//   for (let num = 1; num <= 5; num++) {
//     console.log(num);
//   }
// };

// work();
//console.log(Math.floor(1, 2));
// what we have 12345
// what the output if the k = 2 the output is 34512
// function loop(i) {
//   while (i > 0) {
//     console.log(i);
//     i--;
//   }
//   return i;
// }

// console.log(loop(20));
//reverse loop hai

// function add(a, b) {
//   return a + b;
// }

// console.log(add(9, 5));

//Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

//Easy question hai
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

const num = createCounter(10);
console.log(num);
console.log(num);
console.log(num);
