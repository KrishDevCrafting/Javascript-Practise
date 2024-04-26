function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

const person1 = new Person("Alice");
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
