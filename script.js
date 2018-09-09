$(window).scroll(function () {
    var w$scroll =  $(this).scrollTop();

    if(w$scroll>0&&w$scroll<205){
        $('.layer-0').css({'transform' : 'translate(0px, '+ w$scroll*-1+'px)'});
        $('.layer-2').css({'transform' : 'translate(0px,'+ w$scroll*0.5+'px)'})
        $('.layer-3').css({'transform' : 'translate(0px,'+ w$scroll*0.5+'px)'})
        $('.layer-4').css({'transform' : 'translate(0px,'+ w$scroll*1+'px)'})
        $('.layer-5').css({'transform' : 'translate(0px,'+ w$scroll*1.5+'px)'})
    }

    if(w$scroll>0&&w$scroll<250){$('.layer-0').css({'opacity':w$scroll/200})}
    if(w$scroll>0&&w$scroll<250){$('.layer-2').css({'opacity':w$scroll/200})}
    if(w$scroll>0&&w$scroll<250){$('.layer-3').css({'opacity':w$scroll/200})}
    if(w$scroll>0&&w$scroll<250){$('.layer-4').css({'opacity':w$scroll/200})}
    if(w$scroll>0&&w$scroll<250){$('.layer-5').css({'opacity':w$scroll/200})}

    if(w$scroll>0&&w$scroll<205) {
        $('.layer-1').css({'transform' : 'rotate3d(1, 0, 0,' + w$scroll/3.9 +  'deg)'});
    }

});