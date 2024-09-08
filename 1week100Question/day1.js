// started problem solving the question for logic buliding!
// Question1 Write a JavaScript function to check if a number is prime.
// Question (1)

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

console.log(hold(2));
// Question (2)
// Implement a JavaScript function to reverse a string.

const reverseString = (value) => {
  var empty = "";
  for (let i = value.length - 1; i >= 0; i--) {
    empty += value[i];
  }
  return empty;3

};

console.log(reverseString("Krish"));
// Question (3)
function checknumber(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checknumber(44));
// Question(4)
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
// question (5)
// Write a function to find the greatest common divisor (GCD) of two numbers in JavaScript.

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Example usage:
const num1 = 56;
const num2 = 98;
const result = gcd(num1, num2);
console.log(`GCD of ${num1} and ${num2} is: ${result}`);
// Question (6)
// Write a JavaScript function to check if a string is a palindrome.\

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Compare the cleaned string with its reversed version
  return cleanStr === cleanStr.split("").reverse().join("");
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true
// Question (7)
// Implement a function to find the second largest number in an array using JavaScript.

// Question (8)
// Implement a function to find the second largest number in an array using JavaScript.
function findSecondLargest(arr) {
  // If the array has less than 2 elements, return null
  if (arr.length < 2) {
    return null;
  }

  // Initialize variables to hold the largest and second largest numbers
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      // If the current number is greater than the largest, update both
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      // If the current number is between the largest and second largest, update second largest
      secondLargest = num;
    }
  }

  // If secondLargest is still -Infinity, it means there's no valid second largest number
  return secondLargest === -Infinity ? null : secondLargest;
}

// Example usage:
console.log(findSecondLargest([3, 5, 7, 1, 6])); // 6
console.log(findSecondLargest([10, 10, 9])); // 9
console.log(findSecondLargest([4])); // null
// Question(9)
// Function to Check if Two Strings Are Anagrams:
function areAnagrams(str1, str2) {
  // Helper function to clean and sort a string
  const cleanString = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");

  // Compare the cleaned and sorted versions of both strings
  return cleanString(str1) === cleanString(str2);
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
console.log(areAnagrams("Astronomer", "Moon starer")); // true
// Question (10)
//Write a function to generate the Fibonacci sequence up to n terms in JavaScript.

function generateFibonacci(n) {
  if (n <= 0) return [];

  const fib = [0, 1]; // Initialize the first two Fibonacci numbers

  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib.slice(0, n); // Return only up to n terms
}

// Example usage:
console.log(generateFibonacci(5)); // [0, 1, 1, 2, 3]
console.log(generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
