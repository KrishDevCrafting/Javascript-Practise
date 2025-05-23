// started problem solving the question for logic buliding!
// Question1 Write a JavaScript function to check if a number is prime.
// Question (1)

function isPrime(num) {
  // Handle special cases
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime numbers

  // Eliminate multiples of 2 and 3
  if (num % 2 === 0 || num % 3 === 0) return false;
console.log(num,"value-check");

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
  return empty;
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
// What does anagram mean? An anagram is a word or phrase formed by rearranging the letters in another word or phrase.
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
// function car(speed) {
//   if (speed <= 50) return console.log("Good");
//   if (speed > 50) return console.log("bad");
// }
// car(55);

// Write a JavaScript function to reverse the order of elements in an array.
function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

console.log(reverseArray("RTX"));

// Implement a function to swap two variables in JavaScript without using a temporary variable.
function swapUsingDestructuring(a, b) {
  console.log(`Before swap: a = ${a}, b = ${b}`);
  [a, b] = [b, a]; // Swap values using destructuring
  console.log(`After swap: a = ${a}, b = ${b}`);
  return [a, b]; // Return the swapped values
}

// Example usage:
let x = 5;
let y = 10;
[x, y] = swapUsingDestructuring(x, y); // Using array destructuring to update x and y
console.log(`Swapped values: x = ${x}, y = ${y}`);

// Method 1: Using Arithmetic Operations
function swapUsingArithmetic(a, b) {
  console.log(`Before swap: a = ${a}, b = ${b}`);
  a = a + b; // Step 1: Add both variables
  b = a - b; // Step 2: Subtract the new b from the sum to get the original a
  a = a - b; // Step 3: Subtract the new b from the sum to get the original b
  console.log(`After swap: a = ${a}, b = ${b}`);
  return [a, b]; // Return the swapped values
}

// Write a function that returns the sum of all elements in an array in JavaScript.
function sumArrayUsingLoop(arr) {
  let sum = 0; // Initialize sum to zero
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add each element to the sum
  }
  return sum; // Return the total sum
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(`Sum of array elements: ${sumArrayUsingLoop(numbers)}`); // Output: 15

// How do you find the missing number in an array of integers from 1 to n?
function findMissingNumber(arr, n) {
  // Calculate expected sum of numbers from 1 to n
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of the elements in the array
  const actualSum = arr.reduce((acc, num) => acc + num, 0);

  // The missing number is the difference between the expected sum and the actual sum
  return expectedSum - actualSum;
}

// Example usage
const arr = [1, 2, 4, 5, 6]; // Missing number is 3
const n = 6; // We are expecting numbers from 1 to 6
console.log(findMissingNumber(arr, n)); // Output: 3

// Write a JavaScript function to find the missing number in an array of integers from 1 to n.

function findA(number) {
  const valueNumber = [];

  const maxN = Math.max(...number);

  for (let mn = 1; mn <= maxN; mn++) {
    if (!number.includes(mn)) {
      valueNumber.push(mn);
    }
  }
  return valueNumber;
}

console.log(findA([1, 2, 3, 4, 6, 7, 10]));

// Implement an algorithm to find the most frequent element in an array.

function mostFrequentElement(arr) {
  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequent = null;

  // Step 1: Count the frequency of each element
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    // If the element is not yet in the object, set its count to 1, otherwise increase it
    if (frequencyMap[elem]) {
      frequencyMap[elem]++;
    } else {
      frequencyMap[elem] = 1;
    }

    // Step 2: Keep track of the most frequent element
    if (frequencyMap[elem] > maxCount) {
      maxCount = frequencyMap[elem];
      mostFrequent = elem;
    }
    console.log(elem);
  }

  return mostFrequent;
}

// Example usage
const repeatNumber = [1, 3, 2, 1, 4, 1, 2, 3, 3, 3];
console.log(mostFrequentElement(repeatNumber)); // Output: 3

// Write a function in JavaScript to merge two sorted arrays.
// Sorting an array means arranging the elements of the array in a certain order.
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];                           
  let i = 0; // pointer for arr1
  
  let j = 0; // pointer for arr2

  // Traverse both arrays and compare elements
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++; // Move pointer for arr1
    } else {
      mergedArray.push(arr2[j]);
      j++; // Move pointer for arr2
    }
  }

  // If there are remaining elements in arr1, add them to mergedArray
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2, add them to mergedArray
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage:
let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
let result2 = mergeSortedArrays(array1, array2);
console.log(result2); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
