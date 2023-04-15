const dark = document.querySelector('#dm-toggle');
const body = document.body;
const hd = document.querySelector('.header');

dark.addEventListener('click', () => {
    body.classList.toggle('darkMode');
    dark.classList.toggle('dark--on');
    hd.classList.toggle('header--light');
});