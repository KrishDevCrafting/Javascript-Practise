function ReverseArry(str) {
  var arry = []; //mistake
  for (let i = str.length - 1; i >= 0; i--) {
    arry += str[i]; // mistake
  }
  return arry;
}

console.log(ReverseArry("krish"));

function loopReverse(b) {
  let emptyVariable = [];

  for (let a = b.length - 1; a >= 0; a--) {
    emptyVariable += b[a];
  }
  return emptyVariable;
}

console.log(loopReverse("BMW M5 Serires!"));

// commit+++++++++++++++++

// last commit

function loopReverse(b) {
  let emptyVariable = "";

  for (let a = b.length - 1; a >= 0; a--) {
    emptyVariable += b[a];
    console.log(
      `Index: ${a}, Character: ${b[a]}, Current reversed string: ${emptyVariable}`
    );
  }
  return emptyVariable;
}

console.log(loopReverse("BMW M5 Serires!"));

// Problem: Find the Largest Number in an Array
// Write a function that takes an array of numbers as input and returns the largest number in the array.

function findLargestNumber(arr) {
  if (arr.length === 0) return null; // Handle empty array case

  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestNumber([1, 2, 3, 4, 5])); // Output: 5
console.log(findLargestNumber([-10, -20, -30, -5])); // Output: -5
console.log(findLargestNumber([100, 200, 300, 400, 500])); // Output: 500
console.log(findLargestNumber([])); // Output: null



//hello world!


// Problem: Find the Smallest Number in an Array