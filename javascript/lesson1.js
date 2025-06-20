// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filterList(arr) {
  return arr.filter((item) => typeof item === "number");
}

console.log(filterList([1, 2, "a", "b"])); // ➞ [1, 2]
console.log(filterList([1, "a", "b", 0, 15])); // ➞ [1, 0, 15]
console.log(filterList(["x", 23, "y", 42]));

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getsum(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(getsum(1, 0)); // ➞ 1 (1 + 0)
console.log(getsum(1, 2)); // ➞ 3 (1 + 2)
console.log(getsum(0, 1)); // ➞ 1 (0 + 1)
console.log(getsum(1, 1)); // ➞ 1
console.log(getsum(-1, 2)); // ➞ 2 (-1 + 0 + 1 + 2)

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
  // Check length

  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  // Check if all characters are digits

  for (let i = 0; i < pin.length; i++) {
    if (pin[i] < "0" || pin[i] > "9") {
      return false;
    }
  }

  return true;
}

// question-4 You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

function likes(names) {}

for (let i = 0; i <= 5; i++) {
  console.log(i, "simple-loop!");
}
