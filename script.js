$('.carousel').slick();

var num = 98; //number of pixels before modifying styles
var scroll = false;
document.onscroll = function() {
    if( $(window).scrollTop() > num ) {
        $('.fixed-nav').addClass('fixed-div');
    }
    else {
        $('.fixed-nav').removeClass('fixed-div');
    }
};

$('.accordion li').on({
    mouseenter: function () {
        $(this).children('.accordion-item-div').addClass('open');
        $('#whiteHeader').addClass('wOpen');
        $('#logo').addClass('logopen');
        $('.fixed-nav').addClass('fxd-nav-open');
    },
    mouseleave: function () {
        $(this).children('.accordion-item-div').removeClass('open');
        $('#whiteHeader').removeClass('wOpen');
        $('#logo').removeClass('logopen');
        $('.fixed-nav').removeClass('fxd-nav-open');
    }
});
