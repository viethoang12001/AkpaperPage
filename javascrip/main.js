// fixed

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.querySelector('.main-header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('fixed-header');
        navbar.classList.remove('menu-absolute');
    } else {
        navbar.classList.remove('fixed-header');
        navbar.classList.add('menu-absolute');
    }
}