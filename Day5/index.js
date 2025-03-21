"use strict";

// Task 1
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1, print = "*"; i <= 5; i++) {
  console.log(print);
  print += (" *");
} // not a nested loop, because not neccesairy

{// Task 2
let num = 3;
for (let i = 1; i <= 10; i++) {
  console.log(num, " x ", i, " = ", num * i);
}}

// Task 3
for (let i = 1, sum = 0; i < 500; i++) {
    if (i % 2 === 0) {
      continue;
    }
    sum += i;
    console.log(sum);
  }

// Task 4
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

// Task 5
let num = 12345,
  revNum = 0;
while (num > 0) {
  let digit = num % 10;
  revNum = revNum * 10 + digit;
  num -= digit;
  num /= 10;
}
console.log(revNum); // 54321
// Won't work with 0 at the end. I'd have to use string methods.