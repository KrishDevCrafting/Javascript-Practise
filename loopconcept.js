// first loop for
// for (let i = 1; i <= 5; i++) {
//   console.log("Hello,Loop in Js", i);
// }

// while

// let i = 1;
// while (i <= 10) {
//   console.log("while-loop", i);
//   i++;
// }
// table question in loop
// let n = 5;
// let m = 0;
// while (m < 10) {
//   ++m;
//   console.log("5 ka table ", n * m);
// }

// In our first looping task we want you to start by creating a simple loop that goes through all the items in the provided myArray and prints them out on the screen inside list items (i.e., <li> elements), which are appended to the provided list.
// let i = 5;
// while (i > 0) {
//   console.log(i);
//   i = i - 1;
// }
// console.log("Counting completed!");

// Topic D = 10/1/24 Nested loop

// here the example

// for (i = 1; i < 5; i++) {
//   for (l = 0; l < 6; l++) {
//     console.log(i, l);
//   }
// }

// for (var Num = 0; Num < 2; Num++) {
//   for (var secondNum = 0; secondNum < 10; secondNum++) {
//     console.log(Num + ", " + secondNum);
//   }
// }
// metal questions in loop

for (let i = 1; i < 10; i++) {
  if (i == 1) {
    console.log("Gold Medal");
  } else if (i == 2) {
    console.log("Silver Madel");
  } else if (i == 3) {
    console.log("Bronze Madel");
  } else {
    console.log(i);
  }
}

//for in switch statement example:
for (var i = 3; i <= 10; i++) {
  switch (true) {
    case i == 1:
      console.log("Gold Medal");
      break;
    case i == 2:
      console.log("sliver Medal");
      break;
    case i == 3:
      console.log("Bronze Medal");
      break;
    default:
      console.log(i);
      break;
  }
}

// Driver code

// This code is contributed by shivanisinghss2110

// const N = 8;

// console.log("Value of N: " + N);

// for (let i = 1; i <= N; i++) {
//   let rowOutput = "";
//   for (let j = 1; j <= N; j++) {
//     const min = i < j ? i : j;
//     rowOutput += N - min + 1;
//   }
//   console.log(rowOutput);
// }

// for (let v = 10; v > 0; v--) {
//   console.log(v);
// }

//“When we are no longer able to change a situation, we are challenged to change ourselves.”
//― Viktor E. Frankl, Man’s Search for Meaning

function generatePyramid() {
  const totalNumberofRows = 5;
  let output = "";

  for (let i = 1; i <= totalNumberofRows; i++) {
    for (let j = 1; j <= i; j++) {
      output += j + " ";
    }
    console.log(output);
    output = "";
  }
}

generatePyramid();
let num = "";
for (a = 1; a <= 5; a++) {
  for (b = 1; b <= a; b++) {
    num += a + " ";
  }
  console.log(num);
  num = "";
  // num = "";
}
//Done
