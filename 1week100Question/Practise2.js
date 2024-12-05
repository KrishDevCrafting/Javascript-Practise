function ReverseArry(str) {
  var arry = []; //mistake
  for (let i = str.length - 1; i >= 0; i--) {
    arry += str[i]; // mistake
  }
  return arry;
}

console.log(ReverseArry("krish"));

function hello(fn) {
  let arrayValue = [];
  for (let ab = fn.length - 1; ab >= 0; ab--) {
    arrayValue += fn[ab];
  }

  return arrayValue;
}

console.log(hello("Hello-world!"));
