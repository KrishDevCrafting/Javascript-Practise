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

According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.

All these objects are accessible using JavaScript, and we can use them to modify the page.

<script>
document.body.style.background = 'red'; // make the background red

setTimeout(() => document.body.style.background = '', 3000); // return back
</script>

The text inside elements forms text nodes, labelled as #text. A text node contains only a string. It may not have children and is always a leaf of the tree. !important
There are only two top-level exclusions:

Spaces and newlines before <head> are ignored for historical reasons.
If we put something after </body>, then that is automatically moved inside the body, at the end, as the HTML spec requires that all content must be inside <body>. So there can’t be any spaces after </body>.

