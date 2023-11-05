//* Let's try the split method / function

// Make an array either as [] or a string.
// const helloArray = ['h', 'e', 'l', 'l', 'o'];
// const message = 'How "are" you?';

//let splitMessageKeep2 = message.split(' ', 2); //returns ['How', '"are"']
//console.log(splitMessageKeep2); 

// Split with "regular expression" (regex):
//let splitMessageRegEx = message.split(/[.,!,?,"]/); // returns ['How', 'are', 'you']
//console.log(splitMessageRegEx); 

// Use split method and asign each substring to a variable:
//let userName = 'Terje Topland';
// split at every whitespace and asssign each element to a new variable.
//let [firstName, lastName] = userName.split(' ');
//console.log(firstName); // output: Terje

const splitUserName = (inputUserName) => {
    let [firstName, lastName] = inputUserName.split(' ');

    return {
        firstName: firstName,
        lastName: lastName
    };
    // With this return u return and object. In that way you can access which of them u want.
}

export const formUserNameHandler = (event) => {
    event.preventDefault();
    const inputUserName = document.getElementById('userName').value;

    const firstName = splitUserName(inputUserName).firstName;

    const welcomeDiv = document.getElementById('welcomeUser');
    welcomeDiv.textContent = `Welcome ${firstName}`;

    document.getElementById('userName').value = '';
}


