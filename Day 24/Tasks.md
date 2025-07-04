# Tasks

## 1. Create a function wait(ms) that returns a promise which resolves after ms milliseconds. Use async/await to log messages before and after the delay

```jsx
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside executor.");
      resolve("from wait");
    }, ms);
  });
}

async function handleProm() {
  console.log("Before.");
  let response = await wait(2000);
  console.log("After.", response);
}

handleProm();
```

## 2. Using async/await, log "One", then after 1 second log "Two", then "Three" after another 2 seconds. No setTimeout outside of promises

```jsx
function delayedMessage(numStr, s) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(numStr);
      resolve(numStr);
    }, s * 1000);
  });
}

async function handlePromise() {
  console.log(await delayedMessage("One", 0));
  console.log(await delayedMessage("Two", 1));
  console.log(await delayedMessage("Three", 2));
}

handlePromise();
```

## 3. Use fetch() with async/await to load a local JSON file (data.json) and display its contents in the console

```jsx
async function getData(params) {
  let response = await fetch("./data.json");
  let data = await response.json();
  console.log(data);
}

getData();
```

## 4. Use the public API `https://jsonplaceholder.typicode.com/users/1` to fetch and display the user’s name, email, and address on the page

```jsx
async function getData(url) {
  let response = await fetch(url);
  let data = await response.json();
  return [data.name, data.email, data.address.city];
}

async function showData() {
  let dataArr = await getData("https://jsonplaceholder.typicode.com/users/1");
  dataArr.forEach((data) => {
    const par = document.createElement("p");
    par.innerText = data;
    document.body.append(par);
  });
}

showData();
```

## 5. Modify the previous task to handle errors (e.g., wrong URL) and display a user-friendly error message in the DOM

```jsx
async function getData(url) {
  let response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    return data;
  } else {
    throw new Error("Cannot retrieve data from server.");
  }
}

async function showData() {
  try {
    let data = await getData("https://jsonplaceholder.typicode.com/users/1");
    let dataArr = [data.name, data.email, data.address?.city];
    dataArr.forEach((data) => {
      const par = document.createElement("p");
      par.innerText = data;
      document.body.append(par);
    });
  } catch (err) {
    let errorInfo = document.createElement("p");
    errorInfo.textContent = err;
    document.body.append(errorInfo);
  }
}

showData();
```

## 6. Refactor then/catch to async/await

```
// fetch("/api/data")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

async function tryFetch() {
  try {
    let res = await fetch("/api/data");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

tryFetch();
```

## Project Task

```
Insert link to html preview...
```

Let's Build a “Movie Explorer” App

Build an app that lets users search movies using the OMDB API:
`http://www.omdbapi.com/?apikey=yourkey&s=movieName`

Hints:

- Input box for search term
- Display movie title, poster, and year
- Show “No results found” if search fails
- Use async/await, DOM manipulation, and try/catch
