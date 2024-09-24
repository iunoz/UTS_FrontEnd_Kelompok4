const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none"; // Hide the menu
    } else {
        navMenu.style.display = "block"; // Show the menu
    }
});