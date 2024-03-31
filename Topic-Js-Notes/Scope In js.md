# Scope In js

scope refers to the accessibility or visibility of variables and functions in different parts of your code during runtime. Understanding scope is crucial for writing organized and maintainable code.


Global Scope: Variables declared outside of any function, or at the top-level of a script, have global scope. They can be accessed from anywhere in your code, including inside functions.
var globalVariable = 'I am a global variable';

function foo() {
  console.log(globalVariable); // Accessible
}


2.Local Scope: Variables declared inside a function have local scope. They are only accessible within the function in which they are declared.

function bar() {
  var localVariable = 'I am a local variable';
  console.log(localVariable); // Accessible
}

console.log(localVariable); // Error: localVariable is not defined

3.In addition to these, JavaScript also has block scope introduced by the let and const keywords. Variables declared using let and const are scoped to the nearest enclosing block (i.e., within curly braces {}), rather than to the entire function.
function baz() {
  if (true) {
    let blockScopedVariable = 'I am block-scoped';
    console.log(blockScopedVariable); // Accessible
  }
  console.log(blockScopedVariable); // Error: blockScopedVariable is not defined
}

Understanding scope is crucial because it affects variable visibility, prevents naming conflicts, and helps in managing variable lifetime. Variables declared in a narrower scope (e.g., local scope) take precedence over variables declared in a wider scope (e.g., global scope) when they share the same name.`1