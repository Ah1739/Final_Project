$(function () {
    'use strict';
    // Start Loading Screen
    $('div.loading-screen').css({
        width: $(window).width(),
        height: $(window).height()
    });
    $(window).on('resize', function () {
        $('div.loading-screen').css({
            width: $(window).width(),
            height: $(window).height()
        });
    });
    // End Loading Screen
    // Start Navigation Bar
    $(window).on('scroll', function () {
        var windowScroll = $(window).scrollTop(),
            navigationElement = $('.navigation-bar');
        if (windowScroll > 50) {
            if (!navigationElement.hasClass('style')) {
                navigationElement.addClass('style');
            }
        } else {
            navigationElement.removeClass('style');
        }
    });
    // End Navigation Bar
    // Start Carousel
    $('.carousel').carousel({
        interval: 15000
    });
    (function carouselSection() {
        var windowHeight = $(window).height(),
            navigationElement = $('.navigation-bar').innerHeight(),
            carouselElement = $('.carousel-section, .carousel-section .container .row, .carousel-item, .carousel-item-another');
        carouselElement.css({
            minHeight: windowHeight - navigationElement + 100
        });
    }());
    $(window).on('resize', function () {
        (function carouselSection() {
            var windowHeight = $(window).height(),
                navigationElement = $('.navigation-bar').innerHeight(),
                carouselElement = $('.carousel-section, .carousel-section .container .row, .carousel-item');
            carouselElement.css({
                minHeight: windowHeight - navigationElement + 100
            });
        }());
    });
    // End Carousel
    // Start Most Ordering
    $('.most_ordering .list-inline .list-inline-item').on('click', function () {
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.pizza, .drink, .burger, .pasta').hide();
        $($(this).attr('data-class')).fadeIn(1000);
    });
    // End Most Ordering
    // Start Fixed Button
    $(window).on('scroll', function () {
        var windowScroll = $(window).scrollTop();
        if (windowScroll > 400) {
            $('.fixed_button').fadeIn(600);
        } else {
            $('.fixed_button').fadeOut(600);
        }
    });
    $('.fixed_button').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    // End Fixed Button
    $(window).on('scroll', function () {
        $('.our-chef .row > div:not(":first-child")').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 320) {
                $(this).children('.bordering').addClass('transform');
            } else {
                $(this).children('.bordering').removeClass('transform');
            }
        });
    });
});

// Start Loading Screen

$(window).on('load', function () {
    $('div.loading-screen').delay(5000).fadeOut(function () {
        $('body').css('overflow', 'auto');
    });
});

// End Loading Screen