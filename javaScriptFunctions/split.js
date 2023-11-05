//* Let's try the split method / function

// Make an array either as [] or a string.
const helloArray = ['h', 'e', 'l', 'l', 'o'];
const message = 'How "are" you?';

let splitMessageKeep2 = message.split(' ', 2);
//console.log(splitMessageKeep2); //returns ['How', '"are"']

// Split with "regular expression" (regex):
let splitMessageRegEx = message.split(/[.,!,?,"]/);
//console.log(splitMessageRegEx);

// Use split method and asign each substring to a variable:
let userName = 'Terje Topland';
// split at every whitespace and asssign each element to a new variable.
let [firstName, lastname] = userName.split(' ');
//console.log(firstName); // output: Terje

