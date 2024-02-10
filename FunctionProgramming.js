// var currentOne = 100;
// var currentTwo = 500;

// const Add = (a, b) => {
//   return a + b;
// };
// const Total = Add(currentOne, currentTwo);
// console.log(Total, "Value...!");

// Return values from functions!
//What does all of this mean?

// It means that by JavaScript allowing me to use the return keyword as described above, I can have multiple function calls, returning data and manipulating values, based on whatever coding challenge I have in front of me.

// Being able to return custom values is one of the foundations that makes functional programming possible.
// function doubleIt(num) {
//   return num * 2;
// }
// function objectMaker(val) {
//   return {
//     prop: val,
//   };
// }
// let num = objectMaker(doubleIt(500));
// console.log(num, "final-Value");
// function getDistance(mph, h) {
//   return mph * h;
// }
// var mph = 10;
// var h = 2;
// var distance = getDistance(mph, h);

// console.log(distance); // <====== THIS HERE!

function addTwoNums(a, b) {
  console.log(a + b);
}

function randomNum() {
  return Math.floor(Math.random() * 10 + 1);
}
function specificNum() {
  return 42;
}

var useRandom = true;

var getNumber;

if (useRandom) {
  getNumber = randomNum;
} else {
  getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber());
