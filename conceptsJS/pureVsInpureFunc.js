
// Pure functions output are not dependent on other variables or functions and will produse the same outoput every time.
const greetPureFunc = (name) => {
    console.log(`Hello ${name}`);
};


// Inpure function
// Create a variable
let hello = `Hello`;
// Create function
const greetInpureFunc = (name) => {
    console.log(`${hello} ${name}`);
};

// call pureFunc twice. Should produce the same output.
greetPureFunc(`Terje`);
greetPureFunc(`Terje`);

// call the impureFunc once, then change the global variable hello and call it again.
greetInpureFunc(`Terje`);
hello = `Hi`;
greetInpureFunc(`Terje`); // The output should have been changed here.
