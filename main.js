import { formUserNameHandler } from "./javaScriptFunctions/split.js";

const formUserName = document.getElementById('formUserName');

if (formUserName) {
    addEventListener('submit', (eventObject) => {
        eventObject.preventDefault(); // Prevents refreshing...
        formUserNameHandler(eventObject);
    })
}

document.addEventListener('DOMContentLoaded', async function () {
    var menuButton = document.getElementById('menuButton');
    var menu = document.querySelector('.navBar .menu');

    if (menuButton) {
        menuButton.addEventListener('click', async function () {
            // Toggle the menu visibility by changing the right style
            if (menu.style.right === '0%') {
                menu.style.right = '-100%';
            } else {
                menu.style.right = '0%';
            }
        });
    }
});

