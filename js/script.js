$(document).ready(function(){

    $('.icon-menu').click(function(event){
    $(this).toggleClass('active');
        $('body').toggleClass('locked');
        $('.menu__body').toggleClass('active');
        $('.header__logo').toggleClass('active');
        $('.menu__link').addClass('burgered');
    });

    $('.notexpandable').click(function(event){
        $('.icon-menu').removeClass('active');
        $('.menu__body').removeClass('active');
        $('.header__logo').removeClass('active');
        $('body').removeClass('locked');
    });

    $('.link-expandable').click(function(event){
        $(this).toggleClass('expanded');
    });

});

if ($('.menu__body').hasClass('active')){
    $('body').addClass('locked');
}

else {
    $('body').removeClass('locked');
}

function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';}}}
ibg();
