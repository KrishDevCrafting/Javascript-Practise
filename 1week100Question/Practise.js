// function PrimeN(num) {
//   if (num <= 1) return false;
//   if (num <= 3) return true;

//   if (num % 2 === 0 || num % 3 === 0) return false;
//   for (let i = 5; i * i <= num; i + 6) {
//     if (num % i == 0 || num % (i + 2) === 0) return false;
//   }
//   return true;
// }

// console.log(PrimeN(2));

// commit

function FindPrime(value) {
  if (value <= 1) return false;
  if (value <= 3) return true;
  if (value % 2 === 0 || value % 3 === 0) return false;
  for (let i = 5; i * i <= value; i + 6) {
    if (value % 1 == 0 || value % (i + 2) === 0) return false;
  }
  return true;
}

console.log(FindPrime(2));
