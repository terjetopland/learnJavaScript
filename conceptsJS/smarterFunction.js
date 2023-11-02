//* In this file I will make pure functions 
//* and make a Higher order function that takes a function as a parameter

function add(number, add) {
    return number + add;
}
function subtract(number, subtract) {
    return number - subtract;
}
function mulitply(number, mulitply) {
    return number * mulitply;
}
function divide(number, divide) {
    return number / divide;
}
function modolus(number, modolus) {
    return number % modolus;
}
function highOrderOperator( arrayOfNumbers, operatorFunction, aNumberToOperateOn ) {
    let result = [];

    for(const elem of arrayOfNumbers) {
        result.push(operatorFunction(elem, aNumberToOperateOn));
    }

    return result;
}

function printOneByOneArray(someArray) {
    for(const resNumber of someArray) {
        console.log(resNumber);
    }
}

const arrayOfNumbers = [1, 2, 3, 4, 5];
const resultModolus = highOrderOperator(arrayOfNumbers, modolus, 4);
const resultSubtract = highOrderOperator(arrayOfNumbers, subtract, 4);
printOneByOneArray(resultModolus);
printOneByOneArray(resultSubtract);