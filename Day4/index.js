"use strict";

// Task 1
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
// default, bacause case sensitive

// Task 2
let amount = 3050;

if (amount % 100 == 0) console.log("withdrawal succesful");
else console.log("Invalid amount");


// Task 3
let num1 = 5,
  num2 = 7,
  operator = "+";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "%":
    console.log(num1 % num2);
    break;
  default:
    console.log("unsupported operator");
}

// Task 4
let age = 13,
  price = 0;

if (age < 18) price = 3;
else if (age <= 60) price = 10;
else price = 8;

console.log(price);

// Task 5
// I was too lazy. :)

// Task 6
let a = 50,
  b = 40,
  c = 30;

if (a == b && a == c) {
  console.log("Equilateral Triangle");
} else if (a == b || a == c || b == c) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
