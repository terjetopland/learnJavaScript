// Call stack and execution order with three functions

const fOne = () => {
    console.log(`I am the first function.`);
};
const fTwo = () => {
    console.log(`I am the second function.`);
    fOne();
};
const fThree = () => {
    console.log(`I am the third function.`);
    fTwo();
};

// When calling fThree() it will be put in the stack.
// Then fTwo() will be put in the stack.
// Then fOne() will be put in the stack.
// Then fOne() will be removed from the stack, then fTwo() and at last fThree()
fThree();

