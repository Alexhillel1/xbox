$(function () {
    $('.slider').slick({
        arrows: true,
        dots: true, 
        fade: true,
        autoplay: true,
        autoplaySpeed: 500,
        prevArrow: '<img class="slider__arrow slider__arrow-left"src="./img/left-arrow.svg"alt=""/>',
        nextArrow: '<img class="slider__arrow slider__arrow-right"src="./img/right-arrow.svg"alt=""/>'
      });
});