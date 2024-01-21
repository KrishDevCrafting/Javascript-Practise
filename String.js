// Today 21/1/24
var greeting = "hobby";
console.log(greeting.length);

var user = "hello ";
var user2 = "Lisa";
console.log(user.concat(user2));

// var letters = ["a", "b", "c"];
// for (let i = 0; i < letters.length; i++) console.log(letters[i]);
// {
// }

// var veggies = ["oninon", "persley", "carrot"];
// console.log(`${veggies}`, veggies.length);
// console.log(veggies[0]);
// console.log(veggies[1]);

// for(let i =0; i< veggies.length; i++){
// console.log(veggies[i]);
// }

// To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method:
//charAt() Example:
var place = "Watch";
console.log(place.charAt(1));
const value = place.charAt(4);
console.log(value);

//2) The concat() method joins two strings:
//Example:
var a = " krish";
var b = " Love";
var c = " Sports-Cars...";

console.log(a.concat(b, c));
//3) The indexOf returns the location of the first position that matches a character:
//Ex:-
// var d = "Bottle"
// console.log(d.lastIndexOf('t'));

//4) The split method chops up the string into an array of sub-strings:

//Ex
// const e = "c o l o r";
// console.log(e.split(" "));

// console.log(e.toUpperCase());

//5) Here's a list of all the methods covered in this cheat sheet:

// charAt()

// concat()

// indexOf()

// lastIndexOf()

// split()

// toUpperCase()

// toLowerCase()


let clothes = []

clothes.push("T-shirt")
clothes.push("CargoPants")
clothes.push("Black-Shirt")
clothes.push("Pajama")
clothes.push("Joger")


clothes.pop(4)
console.log(clothes[2]);

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);
