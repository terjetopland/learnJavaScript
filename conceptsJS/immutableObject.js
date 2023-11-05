// console.log('Let us learn about object immutable Object');

export const user = {
    'name': 'Per',
    'age': 99,
    'country': 'Norway'
}

export const changeUser = (user, userName) => {
    if(user) {
        user.name = userName;
    }
}

// console.log(user);


Object.defineProperty(user, 'isAdmin', {
    value: false,
    writable: true,
    enumerable: true
});

// console.log(user);


//* Now lets prevent extension:
// Object.preventExtensions(user);

//user['phone'] = '9999999';
// console.log('Trying to mutate the userObject after preventExtensions:', user);


//* Now lets seal:
// Object.seal(user);
//delete user.name;
// console.log('Trying to delete propperty "name" after sealing the object: ', user);
// It's not possible after sealing it


//* Now lets freeze:
// const frozenUserObject = Object.freeze(user);
// console.log('frozenUserObject', user);

//? Why freeze?
// Make it immutable
// to be shure that it is not having any sideeffects throughout your program
// You can do the same thing with arrays.