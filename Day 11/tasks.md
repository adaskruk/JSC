# Tasks

## 1. What will be the output of the following code and why?

```jsx
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2

```

## 2. What will be the output and why?

```jsx
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()()); // 100
// testClosure() returns a function and second parenthesis () calls it

```

## 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

Just a copy of the last example from the video?

## 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.

## 5. What happens if a closure references an object?

- The object is garbage collected immediately
- The object remains in memory as long as the closure exists
- The object is automatically cloned
- None of the Above.

## 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functions.

```jsx
function counterWrapper(){
  let counter = 0;
  
  return {
    increment: function() {counter++},
    decrement: function() {counter--},
    reset: function() {counter = 0},
  }
}

const counter = counterWrapper();
```