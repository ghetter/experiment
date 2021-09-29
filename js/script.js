$(document).ready(function(){

// Готовые, и нормально работающие скрипты

    // Навигационное меню. В зависимости от версии сайта, мобильная это версия или нет, будут срабатывать скрипты.
    // Для мобильных устройств не доступны события .hover, лишь события .click. На компьютерной версии, доступно и то, и другое.




    if($(window).width() < 1023)
    {
        $('.icon-menu').click(function(event){
            $(this).toggleClass('active');
            $('.primary-navigation__body').toggleClass('active');
            $('.menu__item-has-child').removeClass('toggled');
            $('.secondary-menu').removeClass('showed');
            $('.tertiary-menu').removeClass('showed');
        });

        $('.primary-menu__item.menu__item-has-child >div').click(function(event){
            $('.primary-menu__item.menu__item-has-child').toggleClass('toggled');
            $('.secondary-menu').toggleClass('showed');
        });

        $('.secondary-menu__item.menu__item-has-child >div').click(function(event){
            $('.secondary-menu__item.menu__item-has-child').toggleClass('toggled');
            $('.tertiary-menu').toggleClass('showed');
        });
    } else {
        $('.icon-menu').click(function(event){
            $(this).toggleClass('active');
            $('.primary-navigation__body').toggleClass('active');
        });

        $('.primary-menu__item.menu__item-has-child >div').click(function(event){
            $('.primary-menu__item.menu__item-has-child').toggleClass('toggled');
            $('.secondary-menu').toggleClass('showed');
        });

        $('.secondary-menu__item.menu__item-has-child >div').click(function(event){
            $('.secondary-menu__item.menu__item-has-child').toggleClass('toggled');
            $('.tertiary-menu').toggleClass('showed');
        });

        $('.primary-menu__item.menu__item-has-child').hover(function(event_pc){
            $('.primary-menu__item.menu__item-has-child').toggleClass('toggled');
            $('.secondary-menu').toggleClass('showed');
        });

        $('.secondary-menu__item.menu__item-has-child').hover(function(event_pc){
            $('.secondary-menu__item.menu__item-has-child').toggleClass('toggled');
            $('.tertiary-menu').toggleClass('showed');
        });
    }


    // Исчезновение кнопки "назад" в Pagintaion, когда мы находимся на первой странице

    $('.page-first').each(function(){
        if ($(this).hasClass('page-active')){
            $('.pagination__button-back').toggleClass('hidden')
        } else {
            $('.pagination__button-back').removeClass('hidden')
        }
    });

    // Исчезновение кнопки "вперёд" в Pagintaion, когда мы находимся на последней странице

    $('.page-last').each(function(){
        if ($(this).hasClass('page-active')){
            $('.pagination__button-next').toggleClass('hidden')
        } else {
            $('.pagination__button-next').removeClass('hidden')
        }
    });

    // При нажатии на кнопку "+1" или +более скрытые теги начинают отображаться.

    $('.item-wrapped').click(function(){
        $(this).addClass('unwrapped')
    })
});
