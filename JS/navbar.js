// Ambil elemen menu-icon dan nav-link
const menuIcon = document.querySelector('.menu-icon');
const navLink = document.querySelector('.nav-link');

// Tambahkan event listener pada menu-icon
menuIcon.addEventListener('click', function() {
    // Toggle class "show" untuk nav-link
    navLink.classList.toggle('show');
});