const hamburgerMenu = document.querySelector(".hamburger");
const topNav = document.querySelector("nav");
const header = document.querySelector("header");


hamburgerMenu.addEventListener("click", _ => {
    topNav.classList.toggle("show-nav");
    topNav.classList.toggle("hide-nav");
    header.classList.toggle("show-nav");
    hamburgerMenu.classList.toggle("close-burger");
});

// This is to avoid selecting text when clicking the menu button open and close
// quickly
hamburgerMenu.addEventListener("dblclick", e => e.preventDefault());