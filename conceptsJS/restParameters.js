
const functionWithRestParam = (someString, ...moreStrings) => {
    console.log(someString);
    if(moreStrings) {
        for(let i = 0; i < moreStrings.length; i++) {
            console.log(moreStrings[i]);
        };
    };
};
let moreStrings = "moreStrings";
let explenation = `string in the Rest Parameter ${moreStrings}`;
let first = `first ${explenation}`;
let second = `second ${explenation}`;

functionWithRestParam("Hello there", first, second );
functionWithRestParam(10);
functionWithRestParam(true);

const test = functionWithRestParam(1, 2, 3, 4, 5 ,6)
console.log(test)