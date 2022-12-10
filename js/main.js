$( document ).ready(function() {
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


<<<<<<< HEAD
   
});
AOS.init(); 
=======
    
});

  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $('.modal__close');
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialogue = $(".modal__dialogue");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialogue.addClass("modal__dialogue-visible");

  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialogue = $(".modal__dialogue");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialogue.removeClass("modal__dialogue-visible");

  }
});
>>>>>>> 6fe10f9a5c6ad57811b5f84a4034e0a4c8536100
