//* Explanation of scopes.
//! The naming of the variables is bad practice, 
//! but is meant to better understand the concept of scope.


// * #1: Block scope:

// Making a scope with curly braces
{
    let letOnlyInThisScope = "Let is only here";
    const constOnlyInThisScope = "Const is only here";
    var varIsAccesableOutsideThisScope = "Var can be accessed outside this scope";
}

// Try to access the variables

// console.log(letOnlyInThisScope); // will fail
// We got this error
    //! ReferenceError: letOnlyInThisScope is not defined
// Lets comment it out.

// The same will happen to the next one, so we comment it out.
// console.log(constOnlyInThisScope); // will fail

//  Can be accessed out of the scope it was declared.
console.log(varIsAccesableOutsideThisScope); 
// Output:
// "Var can be accessed outside this scope"



// * #2: Function scope:

// Create a function
function functionScope() {
    let letInFunctionScope = "Let in a function cannot be accessed outside";
    const constInFunctionScope = "Const in function cannot be accessed outside";
    var varInFunctionScope = "var in a function cannot be accesssed outside"

    // The varaiables can only be accessed from here:
    console.log(letInFunctionScope);
    console.log(constInFunctionScope);
    console.log(varInFunctionScope);
}

// If try to access var here...
// console.log(varInFunctionScope);
// ... we will get the same error again:
//! ReferenceError: varInFunctionScope is not defined

// Instead call the function to get the desired result:
functionScope();
// Output:
// Let in a function cannot be accessed outside
// Const in function cannot be accessed outside
// var in a function cannot be accesssed outside


//* #3: Global scope:
let letInGlobalScope = "Let in a global scope can be accessed everywhere";
const constInGlobalScope = "Const in a global scope can be accessed everywhere";
var varInGlobalScope = "var in a global scope can be accessed everywhere"

// Create a function to see that the variables are accessable inside

function printGlobalVariables() {
    console.log(letInGlobalScope);
    console.log(constInGlobalScope);
    console.log(varInGlobalScope);
}

// Call the function
printGlobalVariables();