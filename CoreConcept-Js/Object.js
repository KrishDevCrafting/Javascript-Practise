// let user = {
//     name: "John",
//     age: 30
//   };

//   let key = prompt("What do you want to know about the user?", "name");

//   // access by variable
//   alert( user[key] ); // John (if enter "name")

let lassi = {
  Energy: "78cal",
  Protein: "1.9g",
  Totalfat: "1.8g",
  Saturatedfat: "1.3g",

  addedSuger: "11g",
};

const access = lassi["Totalfat"];

console.log(access);

// "key" in object
// for (key in object) {
//     // executes the body for each key among object properties
//   }
for (var key in lassi) {
  console.log(key);
}
