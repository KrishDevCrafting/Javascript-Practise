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

// Question of multiple of 5\

function multiples(n) {
  for (let ab = 1; ab <= n; ab++) {
    if (ab % 3 === 0 && ab % 5 === 0) {
      return console.log("fizzbuzz!");
    } else if (ab % 3 === 0) {
      console.log(ab + "fizz!");
    } else if (ab % 5 === 0) {
      console.log(ab + "buzz");
    } else {
      console.log(ab);
    }
  }
}

multiples(20);

// GCD vali

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
