import { formUserNameHandler } from "./javaScriptFunctions/split.js";
import { flipCardInOrder } from "./flipCardGame.js";
import { hitTheBoxesGame } from "./hitTheBoxesGame/hitTheBoxesGame.js";

const formUserName = document.getElementById('formUserName');

if (formUserName) {
    addEventListener('submit', (eventObject) => {
        eventObject.preventDefault(); // Prevents refreshing...
        formUserNameHandler(eventObject);
    })
}

// It's to make the cards disappear and have clickable event.
flipCardInOrder();
hitTheBoxesGame();



// some styling isn't to easy to solve with plain css. Hence this is provided.
document.addEventListener('DOMContentLoaded', () => {
    let menuButton = document.getElementById('menuButton');
    let menu = document.querySelector('.navBar .menu');
    let menuClicked = false;

    if (menuButton) {
        menuButton.addEventListener('click', async function () {
            // Toggle the menu
            if (menu.style.right === '0%') {
                menu.style.right = '-100%';
                menuClicked = false;
            } else {
                menu.style.right = '0%';
                menuClicked = true;
            }
        });
    }

    document.body.addEventListener('click', (event) => {
        // Check if the clicked element is the menu button or within the menu
        const isClickInsideMenuButton = menuButton.contains(event.target);
        const isClickInsideMenu = menu.contains(event.target);

        // Check if the menu is open and the click is outside both the button and the menu
        if (menuClicked && !isClickInsideMenuButton && !isClickInsideMenu) {
            menu.style.right = '-100%';
            menuClicked = false;
        }
    });
});




