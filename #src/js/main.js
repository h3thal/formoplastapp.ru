const btnMenu = document.getElementsByClassName('menu__btn')[0];
const menu = document.getElementsByClassName('links')[0];
const links = [document.getElementsByClassName('logo')[0].getElementsByTagName('a')[0]];

Object.values(document.getElementsByClassName('links')[0].getElementsByTagName('a')).forEach(function (el) {
  links.push(el);
});
console.log(links);
links[0].classList.add('active');
btnMenu.addEventListener('click', function () {
  this.classList.toggle('active');
  menu.classList.toggle('open');
});

// const links = document.getElementsByClassName('links')[0].getElementsByTagName('a');
Object.values(links).forEach( function (el) {
  el.addEventListener('click', event => {
    event.preventDefault();
    let h = form.getBoundingClientRect().height;
    if ( window.innerHeight > h) {
      y = document.getElementById(el.getAttribute('data-scroll')).getBoundingClientRect().top + pageYOffset - (window.innerHeight - h)/2;
    } else {
      y = document.getElementById(el.getAttribute('data-scroll')).getBoundingClientRect().top + pageYOffset - 100;
    }
    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
    
  })
});
document.getElementsByClassName('form_btn')[0].addEventListener('click', e => {
  e.preventDefault();
  let h = form.getBoundingClientRect().height
  let y;
  if ( window.innerHeight > h) {
    y = form.getBoundingClientRect().top + pageYOffset - (window.innerHeight - h)/2;
  } else {
    y = form.getBoundingClientRect().top + pageYOffset - 100;
  }
  window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
})
window.addEventListener('scroll', function () {
  
  links.forEach(function(el, i) {
    let y = document.getElementById(el.getAttribute('data-scroll')).getBoundingClientRect().top + pageYOffset - 300;  
    if (window.scrollY >= y) {
      console.log(el)
      if (document.getElementsByTagName('nav')[0].getElementsByClassName('active')[0].classList.contains('active')) {
          document.getElementsByTagName('nav')[0].getElementsByClassName('active')[0].classList.remove('active');
        }
      el.classList.add('active');
    }
  }) 
});
  // console.log(window.scrollY);
//   Object.values(links).forEach( function (el, i) {
//     let y = document.getElementById(el.getAttribute('data-scroll')).getBoundingClientRect().top + pageYOffset - 300;
//     if (window.scrollY >= y) {
//       if (document.getElementsByClassName('links')[0].getElementsByClassName('active')[0].classList.contains('active')) {
//           document.getElementsByClassName('links')[0].getElementsByClassName('active')[0].classList.remove('active');
//         }
//       el.classList.add('active');  
//     } 
//   });
// });
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