$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
  });
});

$(document).ready(function () {
  let len = $('.info__body').children().length;
  let x = len > 3;
  $('.info__body').slick({
    arrows: false,
    autoplay: x,
    slidesToShow: len,
    dots: x,
    infinite: x,
    draggable: x,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          draggable: true,
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          draggable: true,
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });


});

$(document).ready(function () {
  $('.reviews__body').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    dots: true,
    infinite: true,
    fade: true,
    speed:10000,
  });

});

$(document).ready(function () {
  $('.mentors__body').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed:10000,
    slidesToShow: 1,
    dots: true,
    infinite: true,
  });

});

