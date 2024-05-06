function fn() {
  var output = 7;
  return function () {
    console.log(output);
  };
}

// const ab = fn();

// console.log(ab());
console.log(fn());
