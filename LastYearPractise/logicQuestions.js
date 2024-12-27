// Question1 Write a JavaScript function to check if a number is prime.

function CheckPrime(ab) {
  if (ab <= 1) return false;
  if (ab <= 3) return true;

  if (ab % 2 === 0 || ab % 3 === 0) return false; // eliminate the multiple of the 2 and 3

  for (let i = 5; i * i <= ab; i += 6) {
    if (ab % i === 0 || ab % (i + 2) == 0) return false;
  }
  return true;
}

console.log(CheckPrime(2));

//

function anything() {
  (function () {
    console.log("Hello-anonymous-function!");
  });
  console.log("Hello-world");
}

const hm = anything();
console.log(hm);
// commit

const reverseloop = (str) => {
  var variable = "";
  for (let i = str.length - 1; i >= 0; i--) {
    variable += str[i];
  }

  return str;
};

console.log(reverseloop("Laila or majnu"));

function fizzBuzz(nb) {
  for (let a = 1; a <= nb; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
      console.log(a + "FizzBuzz!");
    } else if (a % 3 === 0) {
      console.log(a + "fizz!");
    } else if (a % 5 === 0) {
      console.log(a + "buzz!");
    } else {
      console.log(a);
    }
  }
}

fizzBuzz(10);

// commit -m "heheh
//
// find the largest number in the 3
function largestNumber(nb) {
  for (let i = 0; i < nb; i++) {
    console.log(i,"Loop");
  }
}

largestNumber(5)