//2723. Add Two Promises
//Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return (await promise1) + (await promise2);
};

// addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);

// function Promises1() {
//   setTimeout(() => {
//     console.log("After 2 sec Fulfile");
//   }, 2000);
// }

// function Promises2() {
//   setTimeout(() => {
//     console.log("After 2 sec Fulfile Promise 2");
//   }, 2000);
// }

// Promises1();
// Promises2();

var ecstasy = function () {
  setTimeout(() => {
    console.log("i just wanna be you're sweetheart");
  }, 10000);
  setTimeout(() => {
    console.log("fucking come here, give me your heart");
  }, 15000);
  setTimeout(() => {
    console.log("just you and me to infinity");
  }, 20000);
  setTimeout(() => {
    console.log("i can't fucking breath, too much ecstasy");
  }, 24000.5);
};

ecstasy();
