function fn() {
  var output = 7;
  return function () {
    console.log(output);
  };
}

// const ab = fn();

// console.log(ab());

console.log(fn());

console.log(fn());

function call() {
  const store = "Hello..!";
  document.getElementById("lunch").textContent + store;
}
