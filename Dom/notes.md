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



