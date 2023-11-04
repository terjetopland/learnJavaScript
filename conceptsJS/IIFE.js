// IIFE stands for "Immediately Innvoked Function Expression"
// It means a function that is living in its own scope and is called immediately after created.

(function () {
    const message = `I am invoked immediately after I was created`;
    console.log(message);
})();

(function helloAndre() {
    console.log('Hello Andre');
})();
