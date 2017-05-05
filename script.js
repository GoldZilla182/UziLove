$('.carousel').slick();

var num = 768.59; //number of pixels before modifying styles
var scroll = false;
document.onscroll = function() {
    if( $(window).scrollTop() > num ) {
        $('.fixed-nav').addClass('scrolling');
    }
    else {
        $('.fixed-nav').removeClass('scrolling');
    }
};

