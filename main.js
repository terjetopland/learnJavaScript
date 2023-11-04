
import { user } from "./conceptsJS/immutableObject.js";
import { changeUser } from "./conceptsJS/immutableObject.js";

// factorialRecursive(6);
// console.log(user);
console.log(user);
const newUser = user;
changeUser(newUser, 'user');
console.log(newUser);
