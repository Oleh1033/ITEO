$(window).scroll(function () {
    var w$scroll =  $(this).scrollTop();

    console.log(w$scroll);
    if(w$scroll>10&&w$scroll<205){
        $('.layer-0').css({
            'transform' : 'translate(0px, '+ w$scroll*-1+'px)'
        });

        $('.layer-2').css({
            'transform' : 'translate(0px,'+ w$scroll*-0.5+'px)'
        })

        $('.layer-3').css({
            'transform' : 'translate(0px,'+ w$scroll*0.5+'px)'
        })
        $('.layer-4').css({
            'transform' : 'translate(0px,'+ w$scroll*1+'px)'
        })
        $('.layer-5').css({
            'transform' : 'translate(0px,'+ w$scroll*1.5+'px)'
        })
    }

    if(w$scroll>10&&w$scroll<250){
        var opacity = w$scroll/200;
        $('.layer-0').css({'opacity':opacity})
    }
 /*   if(w$scroll>10){
        var opacity = 1 - w$scroll/400;
        $('.layer-1').css({'opacity':opacity})
    }
   */
    if(w$scroll>10&&w$scroll<250){
        var opacity = w$scroll/200;
        $('.layer-2').css({'opacity':opacity})
    }
    if(w$scroll>10&&w$scroll<250){
        var opacity = w$scroll/200;
        $('.layer-3').css({'opacity':opacity})
    }
    if(w$scroll>10&&w$scroll<250){
        var opacity = w$scroll/200;
        $('.layer-4').css({'opacity':opacity})
    }
    if(w$scroll>10&&w$scroll<250){
        var opacity = w$scroll/200;
        $('.layer-5').css({'opacity':opacity})
    }

});