## Try… catch

```jsx
try {
  // code
  const err = new Error("My message");
  throw err
  // or one line
  throw new Error("message")
  // throw - introducing my own errors, even if there is no error from engine.
} catch (error) {
  console.error("Got an error:", error.message);
  // handle error
  // error can be rethrown for further dependencies
  throw error
}

//further code
try {
//new code
} catch (error) {
console.error("the message for earlier error", error)
} finally {
 // code that always run, regardless if any error was catched
}
```

### Custom error

- Create a constructor function for your own error type:
    - it has to have a name,
    - message, passed as an argument,
    - stack copied from prototype of a new Error instance, see Task 3.

---

# Tasks

## 1. What will be the output of the following code?

```jsx
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}
//ReferenceError, p is not defined.
```

- ReferenceError
- SyntaxError
- TypeError
- No error, it prints 10

## 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors

```jsx
function processPayment(amount) {
  let balance = 5000;
  if (amount <= 0) {
    throw new Error("Are you trying to pay with smile?");
  }
  if (amount > balance) {
    throw new Error(
      "It's too expensive, you can't afford it."
    );
  }
  console.log("Your payment was succesfuly processed:", amount);
}

try {
  processPayment(500);
  processPayment(6000);
} catch (error) {
  console.error("We've got a problem:", error.message);
}
```

## 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

- UserError
- PaymentError
- ServerError
- EmailError

```jsx
function UserError(message) {
  this.name = "UserError";
  this.message = message;
  this.stack = new Error().stack;
}
//UserError.prototype = Object.create(Error.prototype);

function PaymentError(message) {
  this.name = "PaymentError";
  this.message = message;
  this.stack = new Error().stack;
}
//PaymentError.prototype = Object.create(Error.prototype);

function ServerError(message) {
  this.name = "ServerError";
  this.message = message;
  this.stack = new Error().stack;
}
//ServerError.prototype = Object.create(Error.prototype);

function EmailError(message) {
  this.name = "EmailError";
  this.message = message;
  this.stack = new Error().stack;
}
//EmailError.prototype = Object.create(Error.prototype);

try {
  throw new UserError("thas an usererror");
} catch (error) {
  console.error(error.name, error.message, error.stack);
}
```

## 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

```jsx
function fetchData(url) {
  if (url.slice(0, 5) !== "https") {
    throw new Error("Invalid URL");
  }
  console.log(url);
}
let url = "http://blabla.bla";
try {
  fetchData(url);
} catch (error) {
  console.error(error.message);
}
```

## 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

Example:

```jsx
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
}

function validateUser(userInput) {
  if (!userInput.username) {
    throw new ValidationError("Username cannot be empty");
  }
  if (userInput.age <= 0) {
    throw new ValidationError("Age must be a positive number");
  }
  console.log(userInput.username, userInput.age);
}

const userInput = { username: "", age: -2 };
try {
  validateUser(userInput);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number

```

## 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources

Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.

```js
function readFile(filePath) {
  if (!filePath) {
    throw new Error("File not found");
  }
  console.log(url);
}

try {
  readFile();
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Closing the file.");
}
```

## 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

```jsx

```

## 8. What is the purpose of throw in JavaScript?

- It catches an error
- **It stops the execution of a program (IF UNCATCHED)**
- **It creates a new error manually**
- It prints an error message

## 9. What does the finally block do in a try...catch statement?

- Runs only if an error occurs
- Runs only if no error occurs
- **Runs regardless of whether an error occurs or not**
- Stops the execution of the script

## 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object