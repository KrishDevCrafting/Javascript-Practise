// started problem solving the question for logic buliding!
// Question1 Write a JavaScript function to check if a number is prime.

const primeValue = 2;
function CheckPrimeN(primeValue) {
  if (primeValue) {
  }
}

function isPrime(num) {
  // Handle special cases
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime numbers

  // Eliminate multiples of 2 and 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check for factors from 5 to the square root of num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true; // num is a prime number
}
const hold = isPrime;

console.log(hold());
