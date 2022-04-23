$(function () {
    'use strict';

    // banner slider start
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        prevArrow: '<i class="fas fa-circle-arrow-left prevArrow"></i>',
        nextArrow: '<i class="fas fa-circle-arrow-right nextArrow"></i>'
    });

    //venobox for portfolio part
    $('.venobox').venobox();

    // service slider start
    $('.serv_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: '0',
        prevArrow: '<i class="fas fa-chevron-up prevArrow"></i>',
        nextArrow: '<i class="fas fa-chevron-down nextArrow"></i>'
    });

    // testimonial slider start
    $('.test_img_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        centerMode: true,
        centerPadding: '0',
        asNavFor: '.test_text_slider',
        prevArrow: '<i class="fas fa-chevron-up prevArrow"></i>',
        nextArrow: '<i class="fas fa-chevron-down nextArrow"></i>'
    });

    $('.test_text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.test_img_slider',
        arrows: false,
    });

    // counter part
    $('.count').counterUp({
        delay: 10,
        time: 1500,
    });
})