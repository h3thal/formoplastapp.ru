const btnMenu = document.getElementsByClassName('menu__btn')[0];
const menu = document.getElementsByClassName('links')[0];

btnMenu.addEventListener('click', function () {
  this.classList.toggle('active');
  menu.classList.toggle('open');
});