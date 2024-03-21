/* Let´s make a fizzbuzz game
Every number between 1 - 100:
can be divided by 3 = fizz
can be divided by 5 = buzz
can be divided by both 3 and 5 = fizzbuzz
else number 
*/
let fizz = 'fizz';
let buzz = 'buzz';
let magicNumberOne = 3;
let magicNumberTwo = 5;


for (let i = 1; i <= 100; i++) {
    let wordOut = "";
    let hit = false;

    if (i % magicNumberOne === 0) {
        wordOut += fizz;
        hit = true;
    }
    if (i % magicNumberTwo === 0) {
        wordOut += buzz;
        hit = true;
    }
   !hit ? wordOut = i : null;

    console.log(wordOut);

}