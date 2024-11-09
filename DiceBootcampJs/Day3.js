// map, filter,apply,bind! reduce ,map

function sum(a, b) {
  return a + b;
}

const A = function () {
  return 100;
};



const B = function () {
  return 200;
};

let rv = sum(A(), B());
console.log(rv);

function gun() {
  console.log("i am gun");
  return "gunnnn";
}
function fun(gun) {
  console.log("i am fun");
  gun();

  return "funnn";
}

fun(gun);

// forEach
// The forEach method in JavaScript is used to iterate over each element in an array and execute a provided function once for each array element.
let arr = [10, 20, 30, 40, 50];
function cb(maal) {
  console.log(maal);
  return maal;
}

arr.forEach(cb);

function test2() {
  console.log("i am test 2 ");
}

function testing(ab) {
  console.log("i am taesting 1");
  ab();
}

testing(test2);
