# Client-Side JavaScript

## I.BOM and DOM

- Browser Object Model
- Document Object Model

### BOM

The browser object model (BOM) is a hierarchy of browser objects that are used to manipulate methods and properties associated with the Web browser itself.

- window object
- navigator object
- screen object
- history object
- location object
- document object (DOM)

[Diagram 1](https://camo.githubusercontent.com/f842a91bf6c0fa3a9afebf920e7294ebd2223689/68747470733a2f2f667a65726f2e6769746875622e696f2f6c686c2d6c656374757265732f6173736574732f62726f777365722d6170692e737667) [Diagram 2 from external source](https://image3.slideserve.com/6245083/browser-object-model-bom-l.jpg)

#### Window Object

- top-level object in the browser

```js
window.innerHeight;
window.innerWidth;
window.outerHeight;
window.outerWidth;
```

#### Navigator Object

```js
navigator.userAgent;

navigator.geolocation.getCurrentPosition(function(geo) {
  console.log(geo.coords.latitude + ', ' + geo.coords.longitude);
});
```

#### Location and History

```js
window.location.href = 'http://www.amazon.ca';
window.history.back();
window.history.forward();
```

### The DOM (Document Object Model)

- `window.document`

- Whenever a page is loaded into a browser, it creates a Document Object Model where each HTML element is an **object with properties** that can be accessed and manipulated with a programming language such as JavaScript.

- The html document is parsed by the browser rendering engine.

- The document is converted into the DOM. This means that each element, starting at the root, is represented by an object or node in a tree structure.

- The DOM is used to modify the content, structure or style of the document.

- Use `console.dir(document)` in devtools to display the DOM in a document

[Diagram from Wikipedia](https://en.wikipedia.org/wiki/Document_Object_Model#/media/File:DOM-model.svg)

## II. Manipulating the DOM

- The DOM can be manipulating the DOM with JavaScript

### document methods to find DOM elements

```js
document.getElementById;
document.getElementsByTagName;
document.getElementsByName;
document.querySelector;
document.querySelectorAll;
document.getElementsByClassName();
```

- Return either the first element or a collection of elements
- Selector can be HTML element, class or pseudo-class, id, or attribute

_Examples_

```js
// returns the specific div element with the id 'container'
document.getElementById('container');

// returns a list of elements that have the class 'fields'
document.getElementsByClassName('fields');

// returns a list of elements that have the name attribute with a value of 'add'
document.getElementsByName('add');

// returns a list of the elements that have the tag 'button'
document.getElementsByTagName('button');
```

### Creating an Element

- createElement and appendChild:

```js
document.createElement('element');
parentElement.appendChild(childElement);
```

- Update Existing Content

  - textContent - Text in the HTML
  - innerText - text as it appears visually ( not fully supported by all browser)
  - innerHTML - Text rendered as HTML

```js
const parentElement = document.querySelector('tbody');
const newElement = document.createElement('td');
const newElement.setAttribute('colspan','7');
const newElement.textContent = 'Weekly Average: 25';
const parentElement.appendChild(newElement);
```

[MDN Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

## III. Browser Events

The browser supports a lot of different events. We use this interface to listen for certain events that happen so we can react to them.

Today we will focus on DOM events, but there are many others. You can use events to implement features that rely on drag and drop, clipboard behaviour, and Gamepad support.

- click
- focus, blur
- keyup, keydown
- mouseup, mousedown, mouseover, mousemove
- scroll
- select

### Add an Event Listener

JavaScript can listen to a particular event on a DOM element:

```javascript
document
  .querySelector('input[type=submit]')
  .addEventListener('click', function(event) {
    event.preventDefault();
    console.log('clicking ok');
  });
```

Another event that we can use is the 'DOMContentLoaded' event. The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

There is a lot more information available in the `event` object that is passed to the callback. The details are well documented on [MDN click Event](https://developer.mozilla.org/en-US/docs/Web/Events/click).

```javascript
document.addEventListener('DOMContentLoaded', function(event) {
  console.log('The DOM is loaded!');
});
```

#### PreventDefault

When we handle events sometimes we want to ensure that they are not handled any further. In the example today we had a button that was part of a form. We only want to handle the click event on the button, and don't want to submit the form.

We can cancel events. Using the `Event.preventDefault()` method we can tell the browser that we are happy to do all the necessary work when the event is triggered.

[MDN Event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

Events are a very important in building complex user interaction in your web applications. It is important to review the documentation and get an overall understanding of the available events. No one expects you to remember them all, especially not the details. It is however important to know what is possible when interacting with the browser.

[MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events)

## IV. JQuery

jQuery is a fast, small, and feature-rich JavaScript library (not a framework! Remember?).

It makes things much simpler:

- HTML document traversal and manipulation
- Event handling
- Animation
- Ajax much simpler
- Works across a multitude of browsers

### DOM Traversal with jQuery

- [Get button, its parent, and its sibling and console.log them](https://jsfiddle.net/b3kj719g/)

### DOM Manipulation with jQuery

- [Change button colour on click](https://jsfiddle.net/76bdjLk3/1)

### Create HTML Dynamically with jQuery

- [Add pets HTML based on JS object](https://jsfiddle.net/81aer6oz/)

## V. Notes

Sometimes it's nice to use an online tool to play around with HTML, JS, and CSS at the same time. Here are some we mentioned and/or worked with today:

- [Javascript Tutor](http://pythontutor.com/javascript.html#mode=edit)
- [REPL](https://repl.it)
- [Plunkr](http://next.plnkr.co/)
- [jsFiddle](https://jsfiddle.net/)
- [CodePen](https://codepen.io/pen/)
