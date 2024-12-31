function ReverseArry(str) {
  var arry = []; //mistake
  for (let i = str.length - 1; i >= 0; i--) {
    arry += str[i]; // mistake
  }
  return arry;
}

console.log(ReverseArry("krish"));

function loopReverse(b) {
  let emptyVariable = [];

  for (let a = b.length - 1; a >= 0; a--) {
    emptyVariable += b[a];
  }
  return emptyVariable;
}

console.log(loopReverse("BMW M5 Serires!"));

// commit+++++++++++++++++

// last commit

function loopReverse(b) {
  let emptyVariable = "";

  for (let a = b.length - 1; a >= 0; a--) {
    emptyVariable += b[a];
    console.log(
      `Index: ${a}, Character: ${b[a]}, Current reversed string: ${emptyVariable}`
    );
  }
  return emptyVariable;
}

console.log(loopReverse("BMW M5 Serires!"));
