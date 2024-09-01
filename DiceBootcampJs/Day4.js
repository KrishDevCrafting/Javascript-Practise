const n = 7;
function milton(n) {
  if (n <= 1) {
    return console.log("not a Prime-number!");
  }

  for (let i = 0; i < n; i++) {}
}

// Reverse the String

function x(str) {
  return str.split("").reverse().join("");
}

console.log(x("hello"));

// function isPrime(n) {
//   // Corner case
//   if (n <= 1) return false;

//   // Check from 2 to n-1
//   for (let i = 2; i < n; i++) if (n % i == 0) return false;

//   return true;
// }

// // Driver Code

// isPrime(11) ? console.log("true") : console.log("false");
