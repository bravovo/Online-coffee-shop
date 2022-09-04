let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
	menu.classList.toggle('active');
})