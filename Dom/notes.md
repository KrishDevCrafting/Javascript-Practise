DOM (Document Object Model)
The Document Object Model, or DOM for short, represents all page content as objects that can be modified.

The document object is the main “entry point” to the page. We can change or create anything on the page using it.

BOM (Browser Object Model)
The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.

The navigator object provides background information about the browser and the operating system.

common properties Use in navigator e.g navigator.userAgent about the current browser, and navigator.platform – about the platform (can help to differentiate between Windows/Linux/Mac etc).

alert(location.href); // shows current URL
if (confirm("Go to Wikipedia?")) {
location.href = "https://wikipedia.org"; // redirect the browser to another URL
}
The functions alert/confirm/prompt are also a part of the BOM: they are not directly related to the document, but represent pure browser methods for communicating with the user.

CSSOM specification
Describes stylesheets and style rules, manipulations with them, and their binding to documents

There’s a “root” object called window. It has two roles:

First, it is a global object for JavaScript code, as described in the chapter Global object.
Second, it represents the “browser window” and provides methods to control it.

DOM node classes
The root of the hierarchy is EventTarget, that is inherited by Node, and other DOM nodes inherit from it.

innerHTML: the contents
The innerHTML property allows to get the HTML inside the element as a string.

In other words, innerHTML+= does this:

The old contents is removed.
The new innerHTML is written instead (a concatenation of the old and the new one)

Beware: unlike innerHTML, writing to outerHTML does not change the element. Instead, it replaces it in the DOM.4

The querySelector() method returns the first element that matches a CSS selector.

To return all matches (not only the first), use the querySelectorAll() instead.

Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.

<!-- 23 july 2024 -->

textContent: pure text
The textContent provides access to the text inside the element: only text, minus all <tags>.

The “hidden” property
The “hidden” attribute and the DOM property specifies whether the element is visible or not.

We can use it in HTML or assign it using JavaScript, like this:

<div>Both divs below are hidden</div>

<div hidden>With the attribute "hidden"</div>

<div id="elem">JavaScript assigned the property "hidden"</div>

<script>
  elem.hidden = true;
</script>

Summary
Each DOM node belongs to a certain class. The classes form a hierarchy. The full set of properties and methods come as the result of inheritance.

<!--DOM tree-->
<!-- 24/6/2024 -->

According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.

All these objects are accessible using JavaScript, and we can use them to modify the page.

<script>
document.body.style.background = 'red'; // make the background red

setTimeout(() => document.body.style.background = '', 3000); // return back
</script>

The text inside elements forms text nodes, labelled as #text. A text node contains only a string. It may not have children and is always a leaf of the tree. !important
There are only two top-level exclusions:

1.Spaces and newlines before <head> are ignored for historical reasons.
2.If we put something after </body>, then that is automatically moved inside the body, at the end, as the HTML spec requires that all content must be inside <body>. So there can’t be any spaces after </body>.

Tables always have <tbody>

An interesting “special case” is tables. By DOM specification they must have <tbody> tag, but HTML text may omit it. Then the browser creates <tbody> in the DOM automatically.

For the HTML:
There are 12 node types. In practice we usually work with 4 of them:

document – the “entry point” into DOM.
element nodes – HTML-tags, the tree building blocks.
text nodes – contain text.
comments – sometimes we can put information there, it won’t be shown, but JS can read it from the DOM.

 <!-- 25/7/24 -->

Walking the DOM
The DOM allows us to do anything with elements and their contents, but first we need to reach the corresponding DOM object.

All operations on the DOM start with the document object. That’s the main “entry point” to DOM. From it we can access any node.

Here’s a picture of links that allow for travel between DOM nodes:

<!-- 26/7/24 -->

<!-- On top: documentElement and body -->

The topmost tree nodes are available directly as document properties:

<html> = document.documentElement
The topmost document node is document.documentElement. That’s the DOM node of the <html> tag.
<body> = document.body
Another widely used DOM node is the <body> element – document.body.
<head> = document.head
The <head> tag is available as document.head.

In the DOM world null means “doesn’t exist”
In the DOM, the null value means “doesn’t exist” or “no such node”.

Children: childNodes, firstChild, lastChild

There are two terms that we’ll use from now on:

Child nodes (or children) – elements that are direct children. In other words, they are nested exactly in the given one. For instance, <head> and <body> are children of <html> element.
Descendants – all elements that are nested in the given one, including children, their children and so on.
DOM collections
As we can see, childNodes looks like an array. But actually it’s not an array, but rather a collection – a special array-like iterable object.

There are two important consequences:

1. We can use for..of to iterate over it:
   <script>
   for (let node of document.body.childNodes) {
     alert(node); // shows all nodes from the collection
   }
   </script>
   2.That’s because it’s iterable (provides the Symbol.iterator property, as required).

Array methods won’t work, because it’s not an array:

<script>
alert(document.body.childNodes.filter); // undefined (there's no filter method)
</script>
<!-- 27/7/24 -->

Siblings and the parent

Siblings are nodes that are children of the same parent.

For instance, here <head> and <body> are siblings

Siblings are nodes that are children of the same parent.

For instance, here <head> and <body> are siblings:

<body> is said to be the “next” or “right” sibling of <head>,
<head> is said to be the “previous” or “left” sibling of <body>.
The next sibling is in nextSibling property, and the previous one – in previousSibling.

The parent is available as parentNode.

Element-only navigation
Navigation properties listed above refer to all nodes. For instance, in childNodes we can see both text nodes, element nodes, and even comment nodes if they exist.

But for many tasks we don’t want text or comment nodes. We want to manipulate element nodes that represent tags and form the structure of the page.

So let’s see more navigation links that only take element nodes into account:

The links are similar to those given above, just with Element word inside:

children – only those children that are element nodes.
firstElementChild, lastElementChild – first and last element children.
previousElementSibling, nextElementSibling – neighbor elements.
parentElement – parent element.

Why parentElement? Can the parent be not an element?
The parentElement property returns the “element” parent, while parentNode returns “any node” parent. These properties are usually the same: they both get the parent.

More links: tables
Till now we described the basic navigation properties.

Certain types of DOM elements may provide additional properties, specific to their type, for convenience.

Tables are a great example of that, and represent a particularly important case:

The <table> element supports (in addition to the given above) these properties:

table.rows – the collection of <tr> elements of the table.
table.caption/tHead/tFoot – references to elements <caption>, <thead>, <tfoot>.
table.tBodies – the collection of <tbody> elements (can be many according to the standard, but there will always be at least one – even if it is not in the source HTML, the browser will put it in the DOM).

<thead>, <tfoot>, <tbody> elements provide the rows property:

tbody.rows – the collection of <tr> inside.

<tr>:

tr.cells – the collection of <td> and <th> cells inside the given <tr>.
tr.sectionRowIndex – the position (index) of the given <tr> inside the enclosing <thead>/<tbody>/<tfoot>.
tr.rowIndex – the number of the <tr> in the table as a whole (including all table rows).

<td> and <th>:

td.cellIndex – the number of the cell inside the enclosing <tr>.
An example of usage:

<table id="table">
  <tr>
    <td>one</td><td>two</td>
  </tr>
  <tr>
    <td>three</td><td>four</td>
  </tr>
</table>

<script>
  // get td with "two" (first row, second column)
  let td = table.rows[0].cells[1];
  td.style.backgroundColor = "red"; // highlight it
</script>

<!-- 28/7/24 -->

Searching: getElement*, querySelector*
DOM navigation properties are great when elements are close to each other. What if they are not? How to get an arbitrary element of the page?

There are additional searching methods for that.

document.getElementById or just id
If an element has the id attribute, we can get the element using the method document.getElementById(id), no matter where it is.

querySelectorAll:

By far, the most versatile method, elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector.

Here we look for all <li> elements that are last children:

<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

for (let elem of elements) {
alert(elem.innerHTML); // "test", "passed"
}
</script>

querySelector

The call to elem.querySelector(css) returns the first element for the given CSS selector.

In other words, the result is the same as elem.querySelectorAll(css)[0], but the latter is looking for all elements and picking one, while elem.querySelector just looks for one. So it’s faster and also shorter to write.

matches
Previous methods were searching the DOM.

The elem.matches(css) does not look for anything, it merely checks if elem matches the given CSS-selector. It returns true or false.

The method comes in handy when we are iterating over elements (like in an array or something) and trying to filter out those that interest us.

<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // can be any collection instead of document.body.children
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("The archive reference: " + elem.href );
    }
  }
</script>

closest

Ancestors of an element are: parent, the parent of parent, its parent and so on. The ancestors together form the chain of parents from the element to the top.

The method elem.closest(css) looks for the nearest ancestor that matches the CSS-selector. The elem itself is also included in the search.

In other words, the method closest goes up from the element and checks each of parents. If it matches the selector, then the search stops, and the ancestor is returned.

<h1>Contents</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 2</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI

  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV

  alert(chapter.closest('h1')); // null (because h1 is not an ancestor)
</script>

getElementsBy
There are also other methods to look for nodes by a tag, class, etc.

Today, they are mostly history, as querySelector is more powerful and shorter to write.

So here we cover them mainly for completeness, while you can still find them in the old scripts.

elem.getElementsByTagName(tag) looks for elements with the given tag and returns the collection of them. The tag parameter can also be a star "\*" for “any tags”.
elem.getElementsByClassName(className) returns elements that have the given CSS class.
document.getElementsByName(name) returns elements with the given name attribute, document-wide. Very rarely used.

<table id="table">
  <tr>
    <td>Your age:</td>

    <td>
      <label>
        <input type="radio" name="age" value="young" checked> less than 18
      </label>
      <label>
        <input type="radio" name="age" value="mature"> from 18 to 50
      </label>
      <label>
        <input type="radio" name="age" value="senior"> more than 60
      </label>
    </td>

  </tr>
</table>

<script>
  let inputs = table.getElementsByTagName('input');

  for (let input of inputs) {
    alert( input.value + ': ' + input.checked );
  }
</script>

Live collections
All methods "getElementsBy\*" return a live collection. Such collections always reflect the current state of the document and “auto-update” when it changes.

In the example below, there are two scripts.

The first one creates a reference to the collection of <div>. As of now, its length is 1.
The second scripts runs after the browser meets one more <div>, so its length is 2.

<div>First div</div>

<script>
  let divs = document.getElementsByTagName('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 2
</script>

In contrast, querySelectorAll returns a static collection. It’s like a fixed array of elements.

If we use it instead, then both scripts output 1:

<!-- 29/7/24 -->

Attributes and properties

When the browser loads the page, it “reads” (another word: “parses”) the HTML and generates DOM objects from it. For element nodes, most standard HTML attributes automatically become properties of DOM objects.

For instance, if the tag is <body id="page">, then the DOM object has body.id="page".

But the attribute-property mapping is not one-to-one! In this chapter we’ll pay attention to separate these two notions, to see how to work with them, when they are the same, and when they are different.

DOM properties
We’ve already seen built-in DOM properties. There are a lot. But technically no one limits us, and if there aren’t enough, we can add our own.

DOM nodes are regular JavaScript objects. We can alter them.

For instance, let’s create a new property in document.body:

<script>
document.body.myData = {
  name: 'Caesar',
  title: 'Imperator'
};

alert(document.body.myData.title); // Imperator
</script>

These methods operate exactly with what’s written in HTML.

Also one can read all attributes using elem.attributes: a collection of objects that belong to a built-in Attr class, with name and value properties.

Here’s a demo of reading a non-standard property:

<body something="non-standard">
  <script>
    alert(document.body.getAttribute('something')); // non-standard
  </script>
</body>

Property-attribute synchronization
When a standard attribute changes, the corresponding property is auto-updated, and (with some exceptions) vice versa.

In the example below id is modified as an attribute, and we can see the property changed too. And then the same backwards:

<input>

<script>
  let input = document.querySelector('input');

  // attribute => property
  input.setAttribute('id', 'id');
  alert(input.id); // id (updated)

  // property => attribute
  input.id = 'newId';
  alert(input.getAttribute('id')); // newId (updated)
</script>
