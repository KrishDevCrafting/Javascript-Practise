//fibonachi Series

// let num1 = 0;
// let num2 = 1;
// const number = 7;
// for (let i = 0; i < number; i++) {
//   let value = num1 + num2;
//   console.log(value);
// }

// function generateFibonacciSeries(numTerms) {
//   // Initialize the Fibonacci series array with the first two terms
//   let fibonacciSeries = [0, 1];

//   // Generate subsequent terms of the Fibonacci series
//   for (let i = 2; i < numTerms; i++) {
//     // Calculate the next term by adding the previous two terms
//     let nextTerm = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
//     fibonacciSeries.push(nextTerm);
//   }

//   // Return the generated Fibonacci series
//   return fibonacciSeries;
// }

// // Example usage: Generate Fibonacci series with 10 terms

// const fibonacciSeries = generateFibonacciSeries(5);
// console.log("Fibonacci Series:", fibonacciSeries);
//Fibonacci Example:
function fibonacciSeries(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
  }
}

function Recursion(TermnNum) {
  const arry = [];
  for (var i = 0; i < TermnNum; i++) {
    arry.push(fibonacciSeries(i));
  }
  return arry;
}

console.log(Recursion(10));

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  // Validate username and password
  if (username === "example" && password === "password") {
    sessionStorage.setItem("isLoggedIn", true);
    // Redirect or update UI
  } else {
    alert("Invalid username or password");
  }
});

document.getElementById("Show")
