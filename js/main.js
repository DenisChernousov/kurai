$(function () {
  $('.camping__slider').slick({
    arrows: false,
    dots: true
  });
  $('.card__items').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,

  });
  $('.card__items-adpt').slick({
    arrows: false,
    dots: false,
 

  });
  $('.gallery__slider').slick({
    arrows: true,
    dots: false,
    // adaptiveheight: true,
    // adaptivewidth: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
  });
  $('.reviews__min').slick({
    arrows: false,
    dots: false,


  });
  $('.gallery__slider-min').slick({
    arrows: false,
    dots: false,
  
  });
});
