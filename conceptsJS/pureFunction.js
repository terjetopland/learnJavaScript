console.log('Pure functions & side effects\n');

//* Pure functions should be:
/*
    - Predictable
    - Readable
    - Reusable
    - Testable

    - Produces the same output for the same input
*/

//* Pure function:
function sayHelloName(name) {
    console.log(`Hello ${name}`);
}

sayHelloName(`Terje`); // Hello Terje
sayHelloName(`Peder`); // Hello Peder



//*Unpure function:
//! Not good practice
let hi = 'hi';
function sayHiName(name) {
    console.log(`${hi} ${name}`); // This is called a side effect.
}

sayHiName(`Terje`); // Hi Terje
hi = `Changed the variable and the output of the function will change.`;
sayHiName(`Terje`); // Changed the variable and the output of the function will change. Terje

//* A better aproach for the same function would be:
function sayHiName2(greetingsMessage, name) {
    console.log(`${greetingsMessage} ${name}`);
}

sayHiName2(`Hello World and`, `Terje`);
