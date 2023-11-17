import { formUserNameHandler } from "./javaScriptFunctions/split.js";

document.getElementById('formUserName').addEventListener('submit', (eventObject) => {
    eventObject.preventDefault(); // Prevents refreshing...
    formUserNameHandler(eventObject);
} )
