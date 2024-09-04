// started problem solving the question for logic buliding!
// Question1 Write a JavaScript function to check if a number is prime.

// const primeValue = 2;
// function CheckPrimeN(primeValue) {
//   if (primeValue) {
//   }
// }

// function isPrime(num) {
//   // Handle special cases
//   if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
//   if (num <= 3) return true; // 2 and 3 are prime numbers

//   // Eliminate multiples of 2 and 3
//   if (num % 2 === 0 || num % 3 === 0) return false;

//   // Check for factors from 5 to the square root of num
//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) return false;
//   }

//   return true; // num is a prime number
// }
// const hold = isPrime;

// console.log(hold());

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

// function logicalQ() {
//   for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     }else{

//     }
//   }
// }

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
