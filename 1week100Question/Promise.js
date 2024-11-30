//server connection with server.
//login with student.
// course selection.
// enroll in the class.

// function connectedToDiceserver() {
//   console.log("Connecting to the server....!");
//   setTimeout(() => {
//     console.log("conected");
//   }, 2000);
// }

// function Login() {
//   console.log("Login to the server!");
//   setTimeout(() => {
//     console.log("Student-login-Completed!");
//   }, 2000);
// }

// function selection(ab) {
//   setInterval(() => {
//     console.log("Course-selected Completed!");
//   }, 2000);
//   return ab;
// }

// function enroll() {
//   setTimeout(() => {
//     console.log("Class started!");
//   }, 2000);
// }

// connectedToDiceserver(() => {
//   Login(() => { 
//     enroll(selection());
//   });
// });

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

// function selection(next) {
//   console.log("Course selection in progress...");
//   setTimeout(() => {
//     console.log("Course selection Completed!");
//     next(); // Call the next function
//   }, 2000);
// }

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
