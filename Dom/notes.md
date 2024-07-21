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