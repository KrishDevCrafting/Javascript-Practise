for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 8000);
}

// Question what is the Output of this Code

//Importand Topic Closures
// function createAdder(a) {
//   function f(b) {
//     const sum = a + b;
//     return sum;
//   }
//   return f;
// }
// const f = createAdder(3);
// console.log(f(4)); // 7
