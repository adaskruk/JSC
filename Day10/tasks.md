# Tasks

## 1. What will be the output of the following code and why?

```js
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();

// "Bob" 
// The inner function reads the value of user from its lexical environment (1. level out), which was assigned before the function call of inner().
```

## 2. What is the mistake in the code below?

```js
let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

// As mentioned in the comment, the variable total seats outside of the function which is changing it. It might be poluted by other code.
```

## 3. Create a function with a nested function and log a variable from the parent function.

```jsx
// I could just copy the exmaple from task 1...
function outer(){
  let message = "declared and assigned inside the outer function, I feel closures are coming ;D";
  function inner(){
    console.log("called from inside of the inner function:", message)
  }
  inner();
}
```

## 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

```
It's really just repeating the examples from the video...
let prevents variable from being spilled outside of the code block - learnt!
A loop is not a function, so var spills variable outside of the block of a loop,
but stays contained inside a function.
```

## 5. Write a function that tries to access a variable declared inside another function.

```
In this case nothing would allow it, nor let neither var. Both specifiers respect function (which is indeed also a block) scope.
```

## 6. What will be the output and why?

```jsx
console.log(a);
let a = 10;
// Error of accesing an uninitialized variable.

```

## 7. Where is the `age` variable accessible?

```jsx
function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age);
// B, C
```

Options:

- A: In Global
- **B: Only inside showAge**
- **C: It will cause an error**
- D: None of the above

## 8. What will be the output and explain the output?

```jsx
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
// "Hi", because its declared in the immediate lexical environment of the inner(). The globar variable is shadowed.
```

## 9. What will be the output and why?

```jsx
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();

// "Inner", moreover the both other x stay unchanged.
```

## 10. What will be the output and why?
```jsx
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();
// A closure, here we have it! The lexical environment of the returned function stays in the memory as long as the function is reachable, here by the constant reduce.
// "-1"
// "-2"
```
