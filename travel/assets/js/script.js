let menuBtn = document.querySelector('.burger__menu-button');
let menu = document.querySelector('.burger__menu');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('burger__menu-active');
    menu.classList.toggle('burger__menu-active');
})

