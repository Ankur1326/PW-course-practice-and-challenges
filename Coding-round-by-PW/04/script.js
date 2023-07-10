const hamburgerMenu = document.querySelector(".hamburger-menu")
const navbar = document.querySelector("nav");
hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
    navbar.classList.toggle("active");
    
})