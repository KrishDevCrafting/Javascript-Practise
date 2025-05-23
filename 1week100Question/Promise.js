Yu//server connection with server.
//login with student.
// course selection.
// enroll in the class.

// function connectedToDiceserver(next) {
//   console.log("Connecting to the server....!");
//   setTimeout(() => {
//     console.log("Connected");
//     next(); // Call the next function
//   }, 2000);
// }

// function Login(next) {
//   console.log("Logging in to the server!");
//   setTimeout(() => {
//     console.log("Student-login-Completed!");
//     next(); // Call the next function
//   }, 2000);
// }
 function selection(next) {
   console.log("Course selection in progress...");
  setTimeout(() => {
    console.log("Course selection Completed!");
     next(); // Call the next function
 }, 2000);
}

// function enroll() {
//   console.log("Enrolling in class...");
//   setTimeout(() => {
//     console.log("Class started!");
//   }, 2000);
// }

// // Sequential Execution
// connectedToDiceserver(() => {
//   Login(() => {
//     selection(() => {
//       enroll();
//     });
//   });
// });

// call back Test!
//question? Create the program which use the callback for navigate the person A to desire place which we called B?

function navigate(next) {
  console.log("navigating-started!");

  setTimeout(() => {
    console.log("first Go straight!");
    next();
  }, 2000);
}

function turn(next) {
  setTimeout(() => {
    console.log("Then turn left");
    next();
  }, 2000);
}

function straight(next) {
  setTimeout(() => {
    console.log("now go straight without taking any turn!");
    next();
  }, 2000);
}

function finall() {
  setTimeout(() => {
    console.log("You reach your Destination!");
  }, 2000);
}

navigate(() => {
  turn(() => {
    straight(() => {
      finall();
    });
  });
});

// Code Using Promises

function connectedToDiceserver() {
  return new Promise((resolve) => {
    console.log("Connecting to the server....!");
    setTimeout(() => {
      console.log("Connected");
      resolve(); // Resolve the promise when done
    }, 2000);
  });
}

function Login() {
  return new Promise((resolve) => {
    console.log("Logging in to the server!");
    setTimeout(() => {
      console.log("Student-login-Completed!");
      resolve(); // Resolve the promise when done
    }, 2000);
  });
}

function selection() {
  return new Promise((resolve) => {
    console.log("Course selection in progress...");
    setTimeout(() => {
      console.log("Course selection Completed!");
      resolve(); // Resolve the promise when done
    }, 2000);
  });
}

function enroll() {
  return new Promise((resolve) => {
    console.log("Enrolling in class...");
    setTimeout(() => {
      console.log("Class started!");
      resolve(); // Resolve the promise when done
    }, 2000);
  });
}

// Sequential Execution Using Promises
connectedToDiceserver()
  .then(() => Login())
  .then(() => selection())
  .then(() => enroll())
  .catch((error) => console.error("An error occurred:", error));
// commited 2.0

let number = 12344545;

console.log(number);
// juhsadfgo
// useless commit
// best birthday gift 