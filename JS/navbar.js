// Ambil elemen menu-icon dan nav-link
const menuIcon = document.querySelector('.menu-icon');
const navLink = document.querySelector('.nav-link');

// Tambahkan event listener pada menu-icon
menuIcon.addEventListener('click', function() {
    // Toggle class "show" untuk nav-link
    navLink.classList.toggle('show');
});

// function untuk back to top button dengan library jquery
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});
