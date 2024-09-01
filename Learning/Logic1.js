function generateFibonacciSeries(numTerms) {
  // Initialize the Fibonacci series array with the first two terms
  let fibonacciSeries = [0, 1];

  // Generate subsequent terms of the Fibonacci series
  for (let i = 2; i < numTerms; i++) {
    // Calculate the next term by adding the previous two terms
    let nextTerm = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextTerm);
  }

  // Return the generated Fibonacci series
  return fibonacciSeries;
}

console.log(generateFibonacciSeries());

//Implement a JavaScript function to reverse a string.
function fn(value) {
  let reversedValue = "";
  // Loop through the string starting from the last character
  for (let i = value.length - 1; i >= 0; i--) {
    reversedValue += value[i]; // Append each character to the result
  }

  return reversedValue;
}

console.log(fn("Anand sir!"));

// Example usage:
// const myString = "JavaScript";
// const reversed = reverseString(myString);
// console.log(reversed);

// // Example usage: Generate Fibonacci series with 10 terms

// const fibonacciSeries = generateFibonacciSeries(5);
// console.log("Fibonacci Series:", fibonacciSeries);
//Fibonacci Example:
// function fibonacciSeries(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
//   }
// }

// function Recursion(TermnNum) {
//   const arry = [];
//   for (var i = 0; i < TermnNum; i++) {
//     arry.push(fibonacciSeries(i));
//   }
//   return arry;
// }

// console.log(Recursion(10));
