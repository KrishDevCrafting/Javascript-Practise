# (Function Programming)

There are many more concepts and ideas in functional programming.

Here are some of the most important ones:

First-class functions

Higher-order function

Pure functions and side-effects

There are many other concepts and priciples in functional programming, but for now, let's stick to these three.

1.=>First-class functions
It is often said that functions in JavaScript are “first-class citizens”. What does that mean?

It means that a function in JavaScript is just another value that we can:

pass to other functions

save in a variable

return from other functions

In other words, a function in JavaScript is just a value - from this vantage point, almost no different then a string or a number.
For example, in JavaScript, it's perfectly normal to pass a function invocation to another function.
// Example:
function addTwoNums(a, b) {
console.log(a + b)
}

function randomNum() {
return Math.floor((Math.random() \* 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
getNumber = randomNum
} else {
getNumber = specificNum
}

## addTwoNums(getNumber(), getNumber())

###############################################################################

2)Higher-order functions

A higher-order function is a function that has either one or both of the following characteristics:

It accepts other functions as arguments

It returns functions when invoked

There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language. The language itself allows me to pass a function to another function, or to return a function from another function.

Continuing from the previous section, consider the following code, in which I'm re-defining the addTwoNums() function so that it is a higher-order function:
function addTwoNums(getNumber1, getNumber2) {
console.log(getNumber1() + getNumber2());
}

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

3)Pure functions and side-effects
Another concept of functional programming are pure functions.

A pure function returns the exact same result as long as it's given the same values.

An example of a pure function is the addTwoNums() function from the previous section:
function addTwoNums(a, b) {
    console.log(a + b)
}
addTwoNums(5,6); // 11
... the output will always be the same.