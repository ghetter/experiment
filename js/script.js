$(document).ready(function(){

// Навигационное меню <начало>
    // Иконка для мобильных устройств
    $('.icon-menu').click(function(event){
        $('body').toggleClass('locked');
        $(this).toggleClass('active');
        $('.primary-navigation__body').toggleClass('active');
    });
    
    $('.primary-menu__item.menu__item-has-child').hover(function(event){
        $('.secondary-menu').addClass('showed')
    }, function(){
        $('.secondary-menu').removeClass('showed')
    });

    $('.secondary-menu__item.menu__item-has-child').hover(function(event){
        $('.tertiary-menu').addClass('showed')
    }, function(){
        $('.tertiary-menu').removeClass('showed')
    }, $('.secondary-menu__item.menu__item-has-child').click(function(event){
        $('.tertiary-menu').toggleClass('showed')
    }));

// Навигационное меню </конец>
// Поиск <начало>
    $('.search__button').hover(function(event){
        $(this).toggleClass('focused')
    }, function(){
        $(this).removeClass('focused')
    });

// Поиск </конец>
    $('.page-first').each(function(){
        if ($(this).hasClass('page-active')){
            $('.pagination__button-back').toggleClass('hidden')
        } else {
            $('.pagination__button-back').removeClass('hidden')
        }
    });

    $('.page-last').each(function(){
        if ($(this).hasClass('page-active')){
            $('.pagination__button-next').toggleClass('hidden')
        } else {
            $('.pagination__button-next').removeClass('hidden')
        }
    });

    $('.item-wrapped').click(function(){
        $(this).addClass('unwrapped')
    })
});
