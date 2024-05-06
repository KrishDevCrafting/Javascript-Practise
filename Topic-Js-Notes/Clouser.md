Explain the concept of closure in JavaScript and how it relates to scope:

Explanation: A closure in JavaScript is a function that remembers its lexical scope, even when the function is executed outside that scope. It allows functions to access and use variables from their outer function scope.


:Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting !! Thank you so much, Akshay for this :) :)
<script>
function outerFunction() {
    let outerVariable = "I'm from outer scope";
    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable from outer scope
    }
    return innerFunction;
}
const innerFunc = outerFunction();
innerFunc(); // Outputs: "I'm from outer scope"
</script>
