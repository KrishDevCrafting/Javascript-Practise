function findThePrime(num) {
  if (num < 1) return false;
  if (num < 3) return true;

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
