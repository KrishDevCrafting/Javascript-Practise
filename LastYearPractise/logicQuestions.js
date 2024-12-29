// Question1 Write a JavaScript function to check if a number is prime.

function CheckPrime(ab) {
  if (ab <= 1) return false;
  if (ab <= 3) return true;

  if (ab % 2 === 0 || ab % 3 === 0) return false; // eliminate the multiple of the 2 and 3

  for (let i = 5; i * i <= ab; i += 6) {
    if (ab % i === 0 || ab % (i + 2) == 0) return false;
  }
  return true;
}

console.log(CheckPrime(2));

//

function anything() {
  (function () {
    console.log("Hello-anonymous-function!");
  });
  console.log("Hello-world");
}

const hm = anything();
console.log(hm);
// commit

const reverseloop = (str) => {
  var variable = "";
  for (let i = str.length - 1; i >= 0; i--) {
    variable += str[i];
  }

  return str;
};

console.log(reverseloop("Laila or majnu"));

function fizzBuzz(nb) {
  for (let a = 1; a <= nb; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
      console.log(a + "FizzBuzz!");
    } else if (a % 3 === 0) {
      console.log(a + "fizz!");
    } else if (a % 5 === 0) {
      console.log(a + "buzz!");
    } else {
      console.log(a);
    }
  }
}

fizzBuzz(10);

// commit -m "heheh
//
// find the largest number in the 3
function largestNumber(nb1, nb2, nb3) {
  let largest = nb1;

  if (nb2 > largest) largest = nb2;

  if (nb3 > largest) largest = nb3;

  return largest;
}
console.log(largestNumber(10, 20, 30));

let deadline = new Date("dec 31, 2024 13:37:25").getTime();

// To call defined fuction every second
let x = setInterval(function () {
  // Getting current time in required format
  let now = new Date().getTime();

  // Calculating the difference
  let t = deadline - now;

  // Getting value of days, hours, minutes, seconds
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);

  // Output the remaining time
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Output for over time
  if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
