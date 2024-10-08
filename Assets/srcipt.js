// srcipt.js
function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
   const icon = document.querySelector(".hamburger-icon");
   menuLinks.classList.toggle('active'); // Toggles the active class
   icon.classList.toggle('active'); // Toggles the active class
}
