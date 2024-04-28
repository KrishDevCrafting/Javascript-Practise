// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // Resolve with a value
    } else {
      reject(new Error("Random number is too low")); // Reject with an error
    }
  }, 1000); // Simulating a delay of 1 second
});

// Consuming the promise
myPromise
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.error("Rejected:", error.message);
  });
