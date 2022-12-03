const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

var menuButton = document.querySelector(".menu-dopdown-btn");
menuButton.addEventListener('click', function () {
  console.log("Клик по кнопке меню")
  document
    .querySelector('.navbar')
    .classList.toggle('navbar--visible')
  document
    .querySelector('.navbar-container')
    .classList.toggle('navbar-container--visible')
  document
    .querySelector('.navbar-list')
    .classList.toggle('navbar-list--visible')


    
});