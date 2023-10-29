// Typical example of using recursive function would be to make a factorial function.
const factorialRecursive = (number, originalNumber=0, calculated=1) => {
    if(originalNumber === 0) {
        originalNumber = number;
    }
    if(number === 1) {
        console.log(`Factorial of ${originalNumber} is: ${calculated}`);
        return ;
    }
    calculated *= number;
    console.log(`... iteration and result is: ${calculated}`)
    return number * factorialRecursive(number-1, originalNumber, calculated);
} 


const recursiveFunc = (stopAfterItteration, count=0) => {
    const stop = 0;
    const max = 100;
    console.log(`This is a recursive function. ${count+1}. time the function runned`);

    if(stopAfterItteration-1 === stop || count === max) {
        return;
    }
    return recursiveFunc(stopAfterItteration-1, count+1)
    
};



factorialRecursive(5);

recursiveFunc(20);
