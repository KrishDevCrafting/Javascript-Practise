// Prime numbers are those natural numbers divisible by only 1 and the number itself.
// function PrimeN(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;

//   if (num % 2 === 0 || num % 3 === 0) return false;
//   for (let i = 5; i * i <= num; i + 6) {
//     if (num % i == 0 || num % (i + 2) === 0) return false;
//   }
//   return true;
// }

// console.log(PrimeN(2));

// commit

function FindPrime(value) {
  if (value <= 1) return false;
  if (value <= 3) return true;
  if (value % 2 === 0 || value % 3 === 0) return false;
  for (let i = 5; i * i <= value; i + 6) {
    if (value % 1 == 0 || value % (i + 2) === 0) return false;
  }
  return true;
}

console.log(FindPrime(1));

function findU(value) {
  if (value <= 1) return false;
  if (value <= 3) return true;
  if (value % 2 == 0 || value % 3 == 0) return false;

  for (let i = 5; i * i <= value; i + 6) {
    if (value % 1 == 0 || (value % i) + 2 === 0) return false;
  }
  return true;
}

// const reverseLoop = (str) => {
//   var Hold = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     Hold += str[i];
//   }
//   return Hold;
// };

// console.log(reverseLoop("Suzune!"));

// The Greatest Common Divisor (GCD), also known as the Highest Common Factor (HCF), of two numbers is the largest number that divides both of them without leaving a remainder. For example, the GCD of 20 and 28 is 4 because 4 is the largest number that can divide both 20 and 28 exactly.
// Javascript program to find GCD of two numbers
// Function to return gcd of a and b

function Gcd(ab, fn) {
  while (fn !== 0) {
    let temp = fn;
    fn = ab % fn;
    ab = temp;
  }
  return ab;
}

console.log(Gcd(48, 18), "Code!");

function reverseArray(arr) {
  let variable = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    variable.push(arr[i]);
  }
  return variable;
}

console.log(reverseArray("Kabira!"));

function reverseString(str) {
  let hold = "";
  for (let v = str.length - 1; v >= 0; v--) {
    hold += str[v];
  }
  return hold;
}

console.log(reverseString("metro!"));

function generateFibonacci(n) {
  if (n <= 0) return [];

  const fib = [0, 1]; // Initialize the first two Fibonacci numbers

  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib.slice(0, n); // Return only up to n terms
}

console.log(generateFibonacci(10));

// hello
// Repo checkga
// Implement a function to swap two variables in JavaScript without using a temporary variable.
function SwapValue(a, b) {
  console.log(`Before swap: a = ${a}, b = ${b}`);
  [a, b] = [b, a];
  console.log(`After swap: a = ${a}, b = ${b}`);
  return [a, b];
}

let x = 5;
let y = 10;

[x, y] = SwapValue(x, y);
console.log(`Swapped values: x = ${x}, y = ${y}`);
// Write a function that returns the sum of all elements in an array in JavaScript.

function ART(strring) {
  let valueForHold = 0;
  for (let i = 0; i < strring.length; i++) {
    valueForHold += strring[i];
  }
  return valueForHold;
}

console.log(ART([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const Rich = (para) => {
  let holdValue = 0;

  for (let ac = 1; ac < para.length; ac++) {
    holdValue += para[ac];
  }
  return holdValue;
};

console.log(Rich([1, 2, 3, 4, 5, 6, "krish-kuntal"]));

function callAddArray(bf) {
  let addValue = 0;
  for (let gf = 1; gf < bf.length; gf++) {
    addValue += bf[gf];
  }

  return addValue;
}

console.log(callAddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Add-Array!"]));

// How do you find the missing number in an array of integers from 1 to n?

function isPrime(n) {
  let flag = true;
  for (let i = 2; i < n; i++) {
    console.log(i);
    if (n % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// 1 , 7
// 2 -> 6 n%2

console.log(isPrime(15));
// Implement an algorithm to find the most frequent element in an array.

function findElement(remainder) {
  const obj = {};
  var maxCount = 0;
  var frequency = null;

  for (let i = 0; i < remainder.length; i++) {
    const elem = remainder[i];

    if (obj[elem]) {
      obj[elem]++;
    } else {
      obj[elem] = 1;
    }

    if (obj[elem] > maxCount) {
      maxCount = obj[elem];
      frequency = elem;
    }
  }

  return frequency;
}

const printValue = findElement([1, 2, 3, 4, 5, 5, 6, 7, 7, 8]);
console.log(printValue);

const SweetHeart = (kiss, floor) => {
  let fuckingChaseMe = [];
  let Give = 0;
  let heart = 0;

  while (Give < kiss.length && heart < floor.length) {
    if (kiss[Give] < floor[heart]) {
      fuckingChaseMe.push(kiss[Give]);
      Give++;
    } else {
      fuckingChaseMe.push(floor[heart]);
      floor++;
    }
  }

  while (Give < kiss.length) {
    fuckingChaseMe.push(kiss[Give]);
    Give++;
  }

  while (heart < floor.length) {
    fuckingChaseMe.push(floor[heart]);
    heart++;
  }

  return fuckingChaseMe;
};

let kiss = [1, 2, 3];
let floor = [4, 5, 6];

let print20 = SweetHeart(kiss, floor);

console.log(print20);

// Work or not

var compare = 45;
let compare2 = 44;

console.log(compare > compare2);
