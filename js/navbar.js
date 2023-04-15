const nav = document.querySelector('.menu__button');
const action = document.querySelector('.nav__navbar');
const form = document.querySelector('.form-label');


nav.addEventListener('click', () => {
    action.classList.toggle('nav__navbar--active');
    nav.classList.toggle('menu__button--active');
    form.classList.toggle('text-white');
})