
import { user } from "./conceptsJS/immutableObject.js";
import { changeUser } from "./conceptsJS/immutableObject.js";
import { formUserNameHandler } from "./javaScriptFunctions/split.js";

document.getElementById('formUserName').addEventListener('submit', (eventObject) => {
    eventObject.preventDefault(); // Prevents refreshing...
    formUserNameHandler(eventObject);
} )

