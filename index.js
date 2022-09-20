/** # Parents list

Let's print all the elements that are parents of the element `cite` to the console.

We want to print them as a string in the following format:

```
html > body > main > section > blockquote > footer > cite
```

We want the string to start from the most outer parent to the element cite we started from.

Extra: Can you also add to the same string the classes each parent has, for example: `section.page > blockquote`
**/

// const cite = document.querySelector("cite");

// console.log(
//   "parentElement ==>",
//   cite,
//   cite.parentElement,
//   cite.parentElement.parentElement,
//   cite.parentElement.parentElement.parentElement,
//   cite.parentElement.parentElement,
//   cite.parentElement.parentElement.parentElement.parentElement,
//   cite.parentElement.parentElement,
//   cite.parentElement.parentElement.parentElement.parentElement.parentElement,
//   cite.parentElement.parentElement,
//   cite.parentElement.parentElement.parentElement.parentElement.parentElement
//     .parentElement
// );

// Create empty array to collect  names with their classes
const parentsList = [];
// Get starting element
let currentElement = document.querySelector("cite");
// We need to do it once for the first element
let currentElementName = currentElement.nodeName;

parentsList.unshift(currentElementName.toLowerCase());
currentElement = currentElement.parentElement;

// Keep looping until there are no more parents
while (currentElement) {
  let currentElementName = currentElement.nodeName;
  parentsList.unshift(currentElementName.toLowerCase());
  // Update current element to its parent
  // if there is no parent currentElement will become null and the while loop will break
  currentElement = currentElement.parentElement;
}

// Print to the console as a string
console.log(parentsList.join(" > "));
