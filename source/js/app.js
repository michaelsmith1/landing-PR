(function () {

    var init = function () {
        setup_listener()
    };

    setup_listener = function () {

        $("form").submit(function() {
            $.ajax({
                type: "GET",
                url: "mail.php",
                data: $(this).serialize()
            }).done(function() {
                $('form').reset();
                alert("Спасибо за заявку! Мы скоро с вами свяжемся.");
                setTimeout(function() {
                    $.fancybox.close();
                }, 1000);
            });
            return false;
        });

        $('.slider-case').slick({
            appendArrows: '.case-control',
            prevArrow: '.case-control-prev',
            nextArrow: '.case-control-next',
            dots: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        $(".nav-nav__list__item__link").click(function(){
            var href = $(this).attr("href"),
                offs = $(href).offset().top - '90';
            $("html, body").animate({scrollTop: offs+"px"});
            return false;
        });

        $('.promo-list__item').on('click', function () {
            if(!$(this).hasClass('active')) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                $(this).parents('.offer').find('.promo__item.active').fadeOut(0);
                $(this).parents('.offer').find('.promo__item').eq($(this).index()).addClass('active').fadeIn();
            }
        });
        // menu
        $('.burger').click(function() {
            $(this).toggleClass('active');
            $('.nav-nav').toggleClass('active');
        });
        $('.nav-nav__list__item__link').click(function () {
            $('.nav-nav').removeClass('active');
        });
        // menu

        $('.callback__link').fancybox({
            'hideOnOverlayClick': 'true',
            'hideOnContentClick': 'true',
            'centerOnScroll': 'true',
            'autoScale': 'true',
            'height': '400',
        });
        new WOW().init(); /*Wow скрипт для анимаций, инициация*/
        var show = true;
        var countbox = ".preview";
        $(window).on("scroll", function(){
            if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height();        // Высота окна браузера
            var d_height = $(document).height();      // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if(w_top + 550 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
                $(".integer").spincrement({
                        from: 0,
                        // to: false,
                        decimalPlaces: 0,
                        decimalPoint: '',
                        thousandSeparator: ' ',
                        duration: 7000
                });
                show = false;
            }
        });

    };
    toggle_menu = function () {
        toggle.toggleClass('on');
    };

    return init()
})();

