
/* Added Javascript for hamburger menu.
   This functions turns on and off the display style when the hamburger menu icon is tapped/clicked on */

const html = document.querySelector("#mobile-nav-links");
const button = document.querySelector("#hamburger");

button.onclick = function hamburgerNav() {
    if(html.style.display === "flex") {
        html.style.display = "none";
    } else {
        html.style.display = "flex";
    }
}