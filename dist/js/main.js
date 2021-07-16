const btnMenu = document.getElementsByClassName('menu__btn')[0];
const menu = document.getElementsByClassName('links')[0];

btnMenu.addEventListener('click', function () {
  this.classList.toggle('active');
  menu.classList.toggle('open');
});

const links = document.getElementsByClassName('links')[0].getElementsByTagName('a');
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
window.addEventListener('scroll', function (e) {
  // console.log(window.scrollY);
  Object.values(links).forEach( function (el) {
    let y = document.getElementById(el.getAttribute('data-scroll')).getBoundingClientRect().top + pageYOffset - 300;
    if (window.scrollY >= y) {
      document.getElementsByClassName('links')[0].getElementsByClassName('active')[0].classList.remove('active');
      el.classList.add('active');
    }
  });
});
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    navText: 
    [
      '<img src="./img/left-arrow.png" alt="">',
      '<img src="./img/right-arrow.png" alt="">'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0:{
        items:1,
      },
      600:{
        items:2,
      },
      960:{
        items:3,
      }
    },
  });
});