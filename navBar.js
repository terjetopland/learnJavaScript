//* Thanks to @CSwithNJ that provided me with this solution to make an element in pure html, js.

// find the class name in the document
document.getElementsByClassName('navBar');
const nav = document.querySelector('.navBar');
// Use fetch to get the actual document
fetch('/navBar.html') 
.then( res => res.text())
.then( data => {
    nav.innerHTML = data;
});