const lexicalFunc = (giveMeYourFirstNumber) => {
    return sumTheNumbers = (addingNumber) => {
        return console.log(giveMeYourFirstNumber + addingNumber);
    };
};

// calling the lexical func and the value will be stored for later use
const add10 = lexicalFunc(10);
const add5 = lexicalFunc(5);

add10(10); //should give the output 20
add5(10); //should give the  output 15