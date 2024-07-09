// Define a class
class Person {
  // Constructor method to initialize object properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  // Method to increment age
  haveBirthday() {
    this.age += 1;
    console.log(`Happy birthday! I am now ${this.age} years old.`);
  }
}

// Create an instance of the class
const person1 = new Person("Alice", 30);

// Use the class methods
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person1.haveBirthday(); // Output: Happy birthday! I am now 31 years old.

//___________________________________________________________________________________________________________//

// Practise What i know
class Car {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.add = a + b;
  }
  call() {
    console.log(`added Number ${this.add}`);
  }
}

const outPut = new Car(2, 2);
outPut.call();


// Usage: typeWriter('Hello, World!', 'myElement', 100);
