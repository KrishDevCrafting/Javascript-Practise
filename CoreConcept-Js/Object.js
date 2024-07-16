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

// // “this” in methods
// It’s common that an object method needs to access the information stored in the object to do its job.

// For instance, the code inside user.sayHi() may need the name of the user.

// To access the object, a method can use the this keyword.

// The value of this is the object “before dot”, the one used to call the method.

// For instance:

// let user = {
//   name: "jeo",
//   age: "18",
//   sayhi() {
//     console.log(this.age);
//   },
// };

// user.sayhi();
//use fo this
// this is a special keyword that refers to the context in which the current code is executing.
const obj = {
  value: 42,
  method: function () {
    console.log(this.value); // obj.value

    function innerFunction() {
      console.log(this.value); // undefined in strict mode, global object in non-strict mode
    }
    innerFunction();

    const arrowFunction = () => {
      console.log(this.value); // obj.value (lexically inherited)
    };
    arrowFunction();
  },
};

obj.method();
// when you want true or false value..!
var people = {
  car: "bmw",
};

console.log("car" in people);
//find type of which is the string:
console.log(typeof(people.car));