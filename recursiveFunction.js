const recursiveFunc = (stopAfterItteration, count=0) => {
    const stop = 0;
    const max = 100;
    console.log(`This is a recursive function. ${count+1}. time the function runned`);

    if(stopAfterItteration-1 === stop || count === max) {
        return;
    }
    return recursiveFunc(stopAfterItteration-1, count+1)
    
};

recursiveFunc(20);
