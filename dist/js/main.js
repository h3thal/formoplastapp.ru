const btnMenu = document.getElementsByClassName('menu__btn')[0];
const menu = document.getElementsByClassName('links')[0];

btnMenu.addEventListener('click', function () {
  this.classList.toggle('active');
  menu.classList.toggle('open');
});

const links = document.getElementsByClassName('links')[0].getElementsByTagName('a');
console.log(typeof links)
Object.values(links).forEach( function (el) {
  el.addEventListener('click', event => {
    event.preventDefault();
    let y = document.getElementById(el.getAttribute('data-scroll')).getBoundingClientRect().top + pageYOffset - 100;
    window.scrollTo(
      {
        top: y,
        behavior: "smooth"
    });
    
  })
});
document.addEventListener('scroll', e => {
  console.log(window.scrollY);
})