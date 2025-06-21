# Tasks

## 1. Pass a function to greet a user and then thank them

```jsx
function sayHallo(){
  console.log('Servus!');
}

function thankYou(callback){
  callback();
  console.log('Thank you, for your cooperation!');
}

thankYou(sayHallo);
```

## 2. Implement a calculator function that accepts two numbers and a callback to perform operations like add, subtract

```jsx
function calculator(a, b, operationCallback) {
  operationCallback(a, b);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

calculator(5, 3, add);
calculator(5, 3, subtract);
calculator(5, 3, divide);
calculator(5, 3, multiply);
```

Also test it with subtract, multiply, divide functions.

## 3. Create a delayedMessage function that prints a message after a delay using setTimeout

```jsx
function delayedMessage(message, delay, callback) {
  timer = setTimeout( () => {
    callback();
    console.log(message);
    }, delay
  )
}

// delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"))

```

## 4. Implement a function that filters numbers in an array based on a condition provided via callback

```jsx
function filterNumbers(arr, conditionCallback) {
  // Use loop and callback to return filtered array
  return arr.filter( e => {
    return conditionCallback(e);
  })
}

// Example: filterNumbers([1, 2, 3, 4], n => n > 2) // should return [3, 4]

```

## 5. Execute a sequence of tasks one after another using callbacks

```jsx
function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

// Call them in sequence using nested callbacks
task1(() =>{task2(task3)});
```