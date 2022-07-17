$(document).scroll(function(){
    if($(this).scrollTop() >0){
        $('header').css({'webkit-filter':'blur(10px)', 'filter':'blur(10px)'});
    }else{
        $('header').css({'webkit-filter':'', 'filter':''});
    }
});