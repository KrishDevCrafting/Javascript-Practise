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

console.log(FindPrime(2));

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

function Gcd(a, b) {
  let result = Math.min(a, b);
  while (result > 0) {
    if (a % result == 0 && b % result == 0) {
      break;
    }
    result--;
  }
  return result;
}

console.log(Gcd(98, 56));

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

let a = 10;
let b = 20;

a = a + b;
b = a - b;

console.log("a:", a);
console.log("b:", b);

// Using Bitwise XOR:
let c = 5;
let d = 10;

c = c ^ d; // a now becomes 15 (XOR of 5 and 10)
d = c ^ d; // b becomes 5 (XOR of 15 and 10)
c = c ^ d; // a becomes 10 (XOR of 15 and 5)

console.log("a:", a); // 10
console.log("b:", b); // 5
