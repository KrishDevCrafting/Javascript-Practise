var Purchase = {
  shoes: 50,
  GST: 1.2,
  TotalPay: function () {
    var output = Purchase.shoes * Purchase.GST;
    console.log("Total_Price...!", output);
  },
};

Purchase.TotalPay();












// function Calculate() {
//   let shoes = 899;
//   let GST = 1.5;
//   let sum = shoes * GST;
//   return sum;
// }

// console.log("Total Price==>",Calculate());

// let Purchase2 = {
//   Watch: 1000,
//   Phone: 50000,
//   TotalPrice: function () {
//     var amount = this.Watch + this.Phone;
//     console.log(amount, "Total Amount..!");
//   },
// };
// Purchase2.TotalPrice();
// //This KeyWord Which essential means this Object.
// // Program need to be efficent
// //.....(Great work 9/2/24)

// let $Object = {
//   Item1: 100,
//   Item2: 500,
//   minus: function () {
//     const minus = this.Item1 - this.Item2;
//     console.log(minus, "Minus-Amount..!");
//   },
// };
// $Object.minus();
// // Graet work 10/2/24

// var car = {
//   Engine: "7hp",
//   Cylinder: 4,
//   Data: function () {
//     var Data = `${this.Engine}${this.Cylinder}`;
//     console.log(Data);
//   },
// };

// car.Data();

let example = {
  a: "krish",
  b: "Love",
  c: "BMW",
  $concat: function () {
    var $concat = `${this.a}${" "}${this.b}${" "}${this.c}`;
    console.log($concat, "...!");
  },
};

example.$concat();

_Array = {
  k: ["krish"],
  u: ["Rachit"],
  t: ["Deepak"],
  r: ["Vaishu"],
  Tree: function () {
    var Tree = `${this.k}${this.r}${this.NewValue}`;
    console.log(Tree);
  },
};
_Array.NewValue = "By-Object-Method..!";
_Array.Tree();
_Array.u.push("Add-Value");
console.log(_Array.u);

//OOP helps developers to mimic the relationship between objects in the real world. In a way, it helps you to reason about relationships between things in your software, just like you would in the real world. Thus, OOP is an effective approach to come up with solutions in the code you write. OOP also:

// Allows you to write modular code,

// Makes your code more flexible and

//The thing to remember about Objects is that they exist in a hierarchal structure. Meaning that the original base or super class for everything is the Object class, all objects derive from this class. This allows us to utilize the Object.create() method. to create or instansiate objects of our classes.

// Makes your code reusable.

class Car {}

var Bugati = Object.create(Car);
console.log(Car);
