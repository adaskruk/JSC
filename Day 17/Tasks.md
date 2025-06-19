# Tasks

## 1. Find the Most Frequent Word in a Paragraph

Consider the following HTML:

```html
<div id="text">This is a test. This test is only a test.</div>

```

Now, find and display the most frequently occurring word. Also put a count of occurrence beside it.

Hints:

- Use document.querySelector() or getElementById() to select the paragraph.
- Convert the text into an array of words.
- Use querySelector() to display the most frequent word along with the count inside another `<div>`.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My code</title>
    <script defer src="./test.js"></script>
  </head>
  <body>
    <h1>Task 1</h1>
    <div id="text">This is a test. This test is only a test.</div>
    <div id="solution"></div>
  </body>
</html>
```

```jsx
"use strict";

const textElemContent = document.querySelector("#text").textContent;
const solutionElem = document.querySelector("#solution");
const textArr = textElemContent.match(/\w+/g);
// Using .split(' ') generated words with interpunction, so I used match with Regex.
const freq = textArr.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
const mostRepeated = Object.entries(freq).reduce((max, cur) =>
  cur[1] > max[1] ? cur : max
);

solutionElem.textContent = `The most repeated word is "${mostRepeated[0]}" (${mostRepeated[1]} times).`;
```

## 2. Create a zebra pattern

Consider the following HTML:

```html
<ul id="cars">
    <li>BMW</li>
    <li>Mahindra</li>
    <li>Audi</li>
    <li>Toyota</li>
    <li>Honda</li>
    <li>Hundai</li>
    <li>Tata</li>
    <li>Suzuki</li>
</ul>

```

Now put alternate colors and background colors to each of the list tags. for example,

- If the BMW is in white color text, the background should be in black color.
- Then for the next car it will be reversed, the color is black and the background is white.
- Then again the next one is white color and background black
- So on.

```jsx
"use strict";
const { log } = console;

const listElem = document.querySelectorAll("#cars li");
log(listElem);
listElem.forEach((element, i) => {
  log(element);
  if (i % 2 == 0) {
    element.style.color = "white";
    element.style.backgroundColor = "black";
  } else {
    element.style.color = "black";
    element.style.backgroundColor = "white";
  }
});
```

## 3. Write different ways we can access DOM and what they returns

```
1. **getElementById**
2. **getElementByClassName**(”className”)
    1. returns an array-like *HTMLCollection*
3. **getElementByTagName**(”tagName”)
4. **querySelector**(”CSSRules”)
    1. returns the **first** matching element
5. **querySelectorAll**()
    1. returns a NodeList - it’s a static Array!
```

## 4. Find and Replace Text Inside a Page

Write a script that finds all occurrences of a word inside a `<p>` tag and replaces them with another word dynamically.

```html
<body>
    <h1>Test my code</h1>
    <p id="editText">This is a sentense to be edited. I'm gonna do the task tomorrow, because tomorrow is gonna be a good day to begin. The change beginns tomorrow.</p>
    <p>That's how it looked originaly. <br>This is a sentense to be edited. I'm gonna do the task tomorrow, because tomorrow is gonna be a good day to begin. The change beginns tomorrow.</p>
  </body>
```

```jsx
const pElem = document.querySelector("p");
//const pElem = document.querySelector("p#editText");
// only p tag works, because it's the first one
// I'd use ID though, to avoid matching the wrong element, if there were more.
pElem.textContent = pElem.textContent.replaceAll("tomorrow", "today");
```

## 5. Extract and Count Unique Links from a Page

Count all the unique hyperlinks (`<a>`) in a page and display their count.

```
I'm not sure, what should be unique. The text inside the tag or the href value?
I proceed with the href value.
```

```html
  <body>
    <h1>Test my code</h1>
    <p>Here are some links:</p>
    <a href="https://www.google.com">Google</a><br />
    <a href="https://www.google.com">Google</a><br />
    <a href="https://www.google.com">Google</a><br />
    <a href="https://www.facebook.com">Facebook</a><br />
    <a href="https://www.yahoo.com">Yahoo</a><br />
    <a href="https://www.yahoo.com">Yahoo</a><br />
    <div id="result"></div>
  </body>
```

```jsx
const { log } = console;
const aElems = document.querySelectorAll("a");
const resultElem = document.querySelector("div#result");
const grouped = Object.groupBy(aElems, (elem) => elem.href);
for (const link in grouped) {
  grouped[link] = grouped[link].length;
}
let edited = Object.entries(grouped).map(
  (elem) => `"${elem[0]}" occures <strong>${elem[1]}</strong> times. <br>`
);
const result = edited.join("");
resultElem.innerHTML = result;
```