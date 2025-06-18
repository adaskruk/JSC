"use strict";

function guessNum(r = false) {
    if (r) console.log("It's such a fun, isn't it? Here we go again!");
  
    const num = Math.floor(Math.random() * 10) + 1;
    let isCancelled = false;
  
    for (let i = 1; i <= 10; i++) {
      if (i == 10) {
        console.log("This is the last chance, get your shit together!");
      }
  
      let answ = prompt("Guess my number! (between 1 and 10)");
  
      if (answ === null) {
        console.log("You've exited the game.");
        isCancelled = true;
        break;
      } else if (answ < num) {
        console.log("Too low.");
      } else if (answ > num) {
        console.log("Too high.");
      } else if (answ == num) {
        console.log(`You've guessed at the ${i}. try!`);
        break;
      } else {
        console.log("You didn't enter a number.");
      }
    }
    if (isCancelled) return;
    let again = confirm("Do you wanna try again?");
    if (again) {
      guessNum(again);
    } else {
      console.log("That was fun, cheers!");
      return;
    }
  }
  guessNum();