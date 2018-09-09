$(window).scroll(function () {
    var w$scroll =  $(this).scrollTop();

    if (!(w$scroll > 0 && w$scroll < 205)) {
    } else {
        $('.layer-1').css({'transform' : 'rotate3d(1, 0, 0,' + w$scroll/4 +  'deg)'})

        $('.layer-0').css({'opacity':w$scroll/200})
        $('.layer-2').css({'opacity':w$scroll/200})
        $('.layer-3').css({'opacity':w$scroll/200})
        $('.layer-4').css({'opacity':w$scroll/200})
        $('.layer-5').css({'opacity':w$scroll/200})

        $('.layer-0').css({'transform': 'translate3d(0px,' + w$scroll * -0.5 + 'px, 0px) rotate3d(1, 0, 0,' + w$scroll/4 + 'deg)'})
        $('.layer-2').css({'transform': 'translate3d(0px,' + w$scroll * 0.5 + 'px, 0px)  rotate3d(1, 0, 0,' + w$scroll/4 + 'deg)'})
        $('.layer-3').css({'transform': 'translate3d(0px,' + w$scroll * 0.7 + 'px, 0px)  rotate3d(1, 0, 0,' + w$scroll/4 + 'deg)'})
        $('.layer-4').css({'transform': 'translate3d(0px,' + w$scroll * 1.3 + 'px, 0px)  rotate3d(1, 0, 0,' + w$scroll/4 + 'deg)'})
        $('.layer-5').css({'transform': 'translate3d(0px,' + w$scroll * 1.8 + 'px, 0px)  rotate3d(1, 0, 0,' + w$scroll/4 + 'deg)'})
    }
});