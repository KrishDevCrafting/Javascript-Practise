// var Purchase = {
//   shoes: 50,
//   GST: 1.2,
//   TotalPay: function () {
//     var output = Purchase.shoes * Purchase.GST;
//     console.log("Total_Price...!", output);
//   },
// };

// Purchase.TotalPay();

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

_Array = {};
