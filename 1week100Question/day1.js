// started problem solving the question for logic buliding!
// Question1 Write a JavaScript function to check if a number is prime.


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

// Implement a JavaScript function to reverse a string.

const reverseString = (value) => {
  var empty = "";
  for (let i = value.length - 1; i >= 0; i--) {
    empty += value[i];
  }
  return empty;
};

console.log(reverseString("Krish"));

function checknumber(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checknumber(44));

// Write a JavaScript function to print the numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const logicQ = (n) => {
  for (let a = 1; a <= n; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
      console.log(a + "FizzBuzz!");
    } else if (a % 3 === 0) {
      console.log(a + "Fizz!");
    } else if (a % 5 === 0) {
      console.log(a + "Buzz!");
    } else {
      console.log(a);
    }
  }
};

const holdValue = logicQ;
console.log(holdValue(20));

// Write a function to find the greatest common divisor (GCD) of two numbers in JavaScript.

const GCD = (dv) => {
  for (let b = 1; b <= dv; b++) {
    if(b%dv)
  }
};
