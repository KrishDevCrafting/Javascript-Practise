function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

const person1 = new Person("Krishu");
person1.sayHello(); // Output: Hello, my name is Alice.

function Age(look) {
  this.look = look;
}

Age.prototype.where = function () {
  console.log(`You're age is ${this.look}`);
};
const hold = new Age(12);
hold.where();

// const person2 = Object.create(Person.prototype);
// person2.name = "Bob";
// person2.sayHello(); // Output: Hello, my name is Bob.

// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // 