# Tasks

## 1. Create a table of two columns, `situation` and `value`. Now add the rows for every situations and the value of `this` in that situation. Please cover the following situations

- At the Global
- Inside an Object Method
- Inside the Standalone non-Arrow Function
- Inside an Arrow Function(standalone)
- Inside an Arrow Function(as object method)
- Inside an object created with the Constructor Function

Please add examples for each of the scenarios.

| Situation | Value |
| --- | --- |
| Global level | window (even when use strict) |
| Object Method | Implicit binding to the object |
| Standalone non-arrow function | window (undefined) |
| Arrow function (standalone) | parent scope |
| Arrow function (as object method) |  |
| Inside an object created with a constructor function | same as object method |

## 2. What is the problem here? Fix it to log the correct name and explain the fix

```jsx
const user = {
  name: "tapaScript",
  //greet: () => {
  greet: function(){
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
// Arrow function doesn't have this, so it couldn't bind to the object it was called on.
```

## 3. Can you explain what is the problem here and fix the issue to log the correct name?

```jsx
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
//greetFn();
greetFn.call(obj);

// Function is called not as an object method, so not imlicitly bound to any object. Call/apply/bind solve the problem.

```

## 4. What is the problem with the following code? Why isn't it logging the name correctly?

```jsx
const user = {
  name: "Alex",
  greet: function () {
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();

// The inner function is called quasi separately from the object, not as a method with implicitly bound this. Using an arrow function, or dropping the nesting solves the problem.
```

## 5. Create a `Sports` constructor function that takes `name` and `number of players` as arguments and assigns them using `this` keyword. Then, create two sports instances and log their details

```jsx
function Sport(name, plNum) {
  this.name = name;
  this.plNum = plNum;
  this.describe = function (){
    console.log(`${this.name} has ${this.plNum} players.`)
    };
}

const basketball = new Sport("Basketball", 10);
const chess = new Sport("Chess", 2);

basketball.describe();
chess.describe();

```

## 6. Can you attach the car1's `describe()` method to car2 object? Give all possible solutions that you can think of

```jsx
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

car2.describe = car1.describe

```

## 7. What will be the output of the following code and why?

```jsx
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

//B, exactly the same as in Task 2.
```

Options are:

- A: "Charlie" and "Charlie"
- **B: "Charlie" and undefined**
- C: "Charlie" and "" (empty string)
- D: undefined and "Charlie"