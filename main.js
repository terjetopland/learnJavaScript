document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menuButton');
    var menu = document.querySelector('.navBar .menu');

    menuButton.addEventListener('click', function () {
        // Toggle the menu visibility by changing the right style
        if (menu.style.right === '0%') {
            menu.style.right = '-100%';
        } else {
            menu.style.right = '0%';
        }
    });
});

