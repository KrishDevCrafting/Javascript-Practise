function findThePrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }
  // find the multipe of 5
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

console.log(findThePrime(2));

// Implement to javasscript function to reverse a string..

function ReverseString(str) {
  let value = "";

  for (let a = str.length - 1; a >= 0; a--) {
    value += str[a];
  }
  return value;
}

const print = ReverseString("I told you never..!");

console.log(print);
