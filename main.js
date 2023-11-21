import { formUserNameHandler } from "./javaScriptFunctions/split.js";

const formUserName = document.getElementById('formUserName');

if (formUserName) {
    addEventListener('submit', (eventObject) => {
        eventObject.preventDefault(); // Prevents refreshing...
        formUserNameHandler(eventObject);
    })
}

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


// in learnCSS add card if card is clicked
document.addEventListener('DOMContentLoaded', () => {
    let firstCard = document.getElementById('firstCard')
    let secondCard = document.getElementById('secondCard');
    let thirdCard = document.getElementById('thirdCard');

    if (secondCard) {
        firstCard.addEventListener('click', () => {
            if (secondCard.style.opacity < '1') {
                secondCard.style.cursor = 'pointer';
                secondCard.style.opacity = '1';
                firstCard.style.opacity = '0';
            }
        });
        secondCard.addEventListener('click', () => {
            if (secondCard.style.opacity > '0') {
                secondCard.style.cursor = 'default';
                secondCard.style.opacity = '0';
            }
        });
    }

    if (thirdCard) {
        secondCard.addEventListener('click', () => {
            if (thirdCard.style.opacity < '1') {
                thirdCard.style.cursor = 'pointer';
                thirdCard.style.opacity = '1';
            }
        });
        thirdCard.addEventListener('click', () => {
            if (thirdCard.style.opacity > '0') {
                thirdCard.style.cursor = 'default';
                thirdCard.style.opacity = '0';
                firstCard.style.opacity = '1';

                let changeTextFirstTime = false;
                let frontText = firstCard.querySelector('.flipCardFront > div');
                if (frontText && !changeTextFirstTime) {
                    frontText.textContent = 'You found me again';
                    changeTextFirstTime = true;
                }
            }
        });
    }
});

