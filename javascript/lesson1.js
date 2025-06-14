// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filterList(arr) {
  return arr.filter((item) => typeof item === "number");
}

console.log(filterList([1, 2, "a", "b"])); // ➞ [1, 2]
console.log(filterList([1, "a", "b", 0, 15])); // ➞ [1, 0, 15]
console.log(filterList(["x", 23, "y", 42])); // ➞ [23, 42]
