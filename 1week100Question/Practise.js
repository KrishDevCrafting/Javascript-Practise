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
