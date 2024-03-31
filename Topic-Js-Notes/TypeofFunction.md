                                                  Anonymous Function

It is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

<script> 
	var greet = function () { 
		console.log("Welcome to GeeksforGeeks!"); 
	}; 
	
	greet(); 
</script>

                                            Arrow functions

ES6 introduced a new and shorter way of declaring an anonymous function, which is known as Arrow Functions. In an Arrow function, everything remains the same, except here we don’t need the function keyword also. Here, we define the function by a single parenthesis and then ‘=>’ followed by the function body.


Arrow Functions in JavaScript:

Arrow functions are a new syntax introduced in ES6 (ECMAScript 6) for writing anonymous functions. They provide a concise way to define a function.

Syntax:

var myFunction = (param1, param2, …) => {
   statements
};

// or

() => { statements }

The function above the code is the same as:

var myFunction = function(param1, param2, …) {
  statements
};

Note that the function does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

For example, the following function is an arrow function:

const getAge = () => 26;

The function below the code is:

