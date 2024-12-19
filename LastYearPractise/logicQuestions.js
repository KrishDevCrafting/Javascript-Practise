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
