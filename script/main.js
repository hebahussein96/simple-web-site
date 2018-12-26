// global $, alert, console
$(function (){
   'use strict'
// Adjust Header Height
var myHeader = $('.header'),
    mySlider = $('.bxslider');
    myHeader.height($(window).height());

$(window).resize(function () {
    
    myHeader.height($(window).height());   
    mySlider.each(function () {
        $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) / 2 );
    });
});

// Links add active class
$('.links ul li a').click(function () {
   $(this).parent().addClass('active').siblings().removeClass('active');
});
// Adjust BxSlider List Item Center
mySlider.each(function () {
    $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) / 2 );
});

// trigger the BxSlider
mySlider.bxSlider();
// Smooth Scroll To Div
$('.links ul li a').click(function () {
    $('html, body').animate({
        scrollTop : $('#' + $(this).data('value')).offset().top
    },1000 );
});
// Our Auto Slider Code
(function autoSlider() {
    $('.slider .active').each(function () {
        if(!$(this).is(':last-child')){
            $(this).delay(3000).fadeOut(1000, function () {
                $(this).removeClass('active').next().addClass('active').fadeIn();
                autoSlider();
            });

            } else{
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
        }
    })
    
}());
// trigger mixitup
  
$('#container').mixItUp();
// Adjust shuffle Lists
$('.shuffle li').click(function () {
  
    $(this).addClass('selected').siblings().removeClass('selected');
   
   });
  // trigger NiceScroll
$('html').niceScroll({
    cursorcolor: "#1ABC9C",
    cursorborder: "1px solid 1ABC9C"
});
 
});
