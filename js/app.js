"use strict";

//=require ../blocks/**/*.js
$(document).ready(function () {
  // open modal
  $('.js-open-swap').click(function () {
    $('.js-modal-swap').fadeIn();
    $('.js-mask').fadeIn();
    $('body').addClass('overflov');
  }); //close modal

  $('.js-mask, .js-modal-close').click(function () {
    $('.js-modal').fadeOut();
    $('.js-mask').fadeOut();
    $('body').removeClass('overflov');
  }); //yak scroll

  $(document).ready(function () {
    $(".menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({
        scrollTop: top
      }, 1500);
    });
    $(document).ready(function () {
      $('.header__dropbtn').click(function () {
        $('.header__dropbtn').toggleClass('header__dropdown-open');
        $('.header__dropdown-content').toggleClass('header__dropdown-open');
      });
    });
  });
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  $(document).ready(function () {
    $('.menu__burger').click(function () {
      $('.menu__burger').toggleClass('open-menu');
      $('.header__menu').toggleClass('open-menu');
    });
  });
});