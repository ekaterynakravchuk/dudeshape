$(function() {
    $('.reviews__slider').slick();
    $('.blog__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="blog__prev-arrow"><img src="images/prev-arrow.svg"></button>',
        nextArrow: '<button class="blog__next-arrow"><img src="images/next-arrow.svg"></button>'
    });
})