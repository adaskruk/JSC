# Tasks

## 1. Create Your First Promise

- Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
- Log the result using .then().

```jsx
let promise = new Promise((resolve) => {
  setTimeout(() => resolve("Hello, Promises!"), 1000);
});

promise.then((result) => console.log(result));
```

## 2. Reject a Promise

- Create a Promise that immediately rejects with the message "Something went wrong!".
- Handle the error using .catch().

```jsx
new Promise((resolve, reject) => {
  reject("Something went wrong!");
}).catch((error) => console.error(error));
```

## 3. Simulate Coin Toss

Return a Promise that randomly resolves to "Heads" or "Tails" after 1 second.

```jsx
new Promise((resolve, reject) => {
  let result = Math.random() < 0.5 ? "Heads" : "Tails";
  setTimeout(() => resolve(result), 1000);
}).then((result) => console.log(result));
```

## 4. Promise with Condition

- Create a function checkAge(age) that returns a Promise.
- Resolve if age >= 18, reject otherwise.

```jsx
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) resolve("user of oge");
    else reject("user is a minor");
  });
}

checkAge(18).then((r) => console.log(r));
checkAge(17).catch((r) => console.error(r));
```

## 5. Chain Promises Sequentially

- Create three Promises that log:
    - "Step 1 done"
    - "Step 2 done"
    - "Step 3 done"
- Chain them using .then().

```jsx
new Promise((resolve, reject) => {
  resolve(console.log("Step 1 done"));
})
  .then(console.log("Step 2 done"))
  .then(console.log("Step 3 done"));
```

## 6. Value Transformation in Chain

- Create a Promise that resolves with 5.
- Chain .then() handlers to double it, then square it.
- Final output should be 100.

```jsx
new Promise((resolve, reject) => {
  resolve(5);
})
  .then((r) => r * 2)
  .then((r) => r * r)
  .then(console.log);
```

## 7. Chain with Random Rejection

- First .then() resolves to "Start".
- Second .then() randomly throws an error or returns "Continue".
- Handle rejection gracefully.

```jsx
new Promise((resolve, reject) => {
  resolve(console.log("My Promise"));
})
  .then(console.log("Start"))
  .then(() => {
    if (Math.random() < 0.5) {
      throw new Error("Whoopsie!");
    } else console.log("Continue");
  })
  .catch(console.error);
```

## 8. Multiple then() calls on same Promise

- Create a single resolved Promise.
- Attach two different .then() handlers to it.
- Explain that both run independently.

```jsx
let promise = new Promise((resolve, reject) => {
  resolve(1);
});

promise.then((r) => {
  r *= 2;
  console.log(r);
  return r;
});

promise.then((r) => {
  r *= 2;
  console.log(r);
  return r;
});

promise
  .then((r) => {
    r *= 2;
    console.log("proper chaining");
    console.log(r);
    return r;
  })
  .then((r) => {
    r *= 2;
    console.log(r);
    return r;
  });

// The output of first aproach is both times "2". It means, that it operates on the original result of the promise, and not the chained result...
```

## 9. Return New Promises in .then()

- Chain multiple .then() where each returns a new Promise with a delay and logs a step like:
    - “First”
    - “Second”
    - “Third”

```jsx
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First");
    resolve();
  }, 1000);
});

promise
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Second");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Third");
        resolve();
      }, 1000);
    });
  });
```

## 10. Implement fakeDBQuery()

- Create a function that simulates a DB query with a random delay and returns data (like a user object).
- Chain multiple fake queries.

```jsx
function createDBQuery() {
  function randomDelay() {
    return (Math.floor(Math.random() * 5) + 1) * 1000;
  }

  let promiseBank = [
    () => {
      return new Promise((resolve) => {
        let data = {
          user: "Bob",
          age: 21,
          admin: false,
        };
        setTimeout(() => resolve(data), randomDelay());
      });
    },
    () => {
      return new Promise((resolve) => {
        let data = {
          user: "Peter",
          age: 35,
          admin: true,
        };
        setTimeout(() => resolve(data), randomDelay());
      });
    },
    () => {
      return new Promise((resolve) => {
        let data = {
          user: "Mike",
          age: 16,
          admin: false,
        };
        setTimeout(() => resolve(data), randomDelay());
      });
    },
  ];

  function fakeDBQuery() {
    let promise;
    if (promiseBank.length > 0) {
      promise = promiseBank.pop()();
    } else {
      promise = new Promise((resolve, reject) => {
        let error = new Error("No user data available");
        setTimeout(() => reject(error), randomDelay());
      });
    }
    return promise;
  }

  return fakeDBQuery;
}

const fakeDBQuery = createDBQuery();

fakeDBQuery()
  .then((r) => {
    console.log(r);
    return fakeDBQuery();
  })
  .then((r) => {
    console.log(r);
    return fakeDBQuery();
  })
  .then((r) => {
    console.log(r);
    return fakeDBQuery();
  })
  .catch(console.error);

```