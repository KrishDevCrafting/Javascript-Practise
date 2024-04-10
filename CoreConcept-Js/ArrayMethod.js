// ALL Array Method in Javascript...!

// const a = [1, 2, 3, 4, 5];
// const b = a.join("-");
// console.log(b);
// this is the join method in array..!

// const c = ["KRISH", "RAHUL", "DEEPAK"];

// const d = c.push("RACHIT");
// console.log(c, d);

// Add the value in last array...! with help of push

// const e = ["Egg", "Tomato", "Onion", "Cauliflower", "Carrot"];
// const f = e.pop();
// console.log(e);
// the purpose of Pop is Remove Last Array...!

// const g = ["CPU", "GPU", "RAM", "SSD", "TRANSISTER"];

// const h = g.shift();
// console.log(g);
//It work same as the pop method main differnt is (it's remove the first element from array)...!

// const i = ["One", "ten", "hundred", "thousand", "tenthousand", "Crore"];

// const j = i.unshift("TenCrore....!");
// console.log(i);
//Unshit add the value in array in the (First value of the array...!)

// Map === is just nothing a transformation of array means (double,triple,binary the array value)
function double(x) {
  return x * 2;
}
const Triple = (x) => {
  return x * 3;
};
const k = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const output = k.map(double);
const outputTriple = k.map(Triple);

console.log(output, outputTriple);

// function binary(y) {
//   return y.toString(2);
// }
// const f = [2, 3, 4, 5, 6];
// const value = f.map(binary);
// console.log(value, `${binary}`);

/////// (FLITERN-METHOD)
// It creates a new array containing only those elements from the original array that meet the condition specified in the callback function. This helps in extracting or selecting elements that satisfy certain criteria, effectively "filtering" out unwanted elements.
