## 1. Traverse and Toggle Classes

Build a navigation menu. On click of a list item:

- Traverse up to parent `<ul>`
- Remove .active class from all `<li>`
- Add .active only to the clicked `<li>`

```jsx
// Done in the Task of the previous day...
```

## 2. Highlight Text Using Range

Use the Range API to highlight a portion of a paragraph by wrapping it with a `<mark>` tag.

```html
<p id="text">The following text: bla bla bla, should be wrapped in mark.</p>
```

```
const text = document.getElementById("text");
const range = document.createRange();
range.setStart(text.firstChild, 20);
range.setEnd(text.firstChild, 31);

const mark = document.createElement('mark');
range.surroundContents(mark);

const fragment = range.cloneContents();
const tempDiv = document.createElement('div');
tempDiv.appendChild(fragment);
console.log(tempDiv.innerHTML);

```

## 3. Use DocumentFragment for Performance

Insert 100 list items into the DOM using:

- Plain DOM methods (one by one)
- DocumentFragment (all at once)

```jsx
const container = document.getElementById("container");

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  const li = document.createElement("li");
  fragment.appendChild(li);
  // PLAIN: container.appendChild('li');
}

container.appendChild(fragment)
```

## 4. Build a “Smart Cloner”

Create a UI with an element and a “Clone” button. Use cloneNode(true) and cloneNode(false) and show the difference visually.

```jsx
const source = document.getElementById("source");
const target = document.getElementById("target");
const cloneBtn = document.getElementById("clone");
cloneBtn.addEventListener("click", cloneContent);

function cloneContent(e) {
  // const copy = source.cloneNode(); clones only the parent node (<div></div> without childnodes)
  const copy = source.cloneNode(true); // clones node with its subtree
  target.appendChild(copy);
}
```

## 5. MutationObserver Watcher

Create a div and use MutationObserver to log whenever:

- A new child is added
- The class attribute changes
- Text is modified

```jsx
const target = document.getElementById("target");
const list = document.getElementById("list");
const btn = document.getElementById("change");
btn.addEventListener("click", change);
const observer = new MutationObserver(callback);

function callback(mutationList, observer) {
  for (let mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.", mutation);
    }
    if (mutation.type === "characterData") {
      console.log(mutation);
    }
    if (mutation.type === "attributes") {
      console.log(`Attribute ${mutation.attributeName} has been changed.`);
    }
  }
}

observer.observe(target, {
  subtree: true,
  characterData: true,
  attributes: true,
  childList: true,
});

function change(e) {
  const li = document.createElement("li");
  li.textContent = "new Point";
  list.append(li);
  list.classList.add("active");
  target.childNodes[0].textContent = "new text";
}
```