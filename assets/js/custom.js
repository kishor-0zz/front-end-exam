(function ($) {
    //preloader js
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    })

    /*==== Multipage header Section Start here =====*/
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').on('hover', function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({
                left: newpos
            });
        }
    });
    $('.menu li a').on('click', function (e) {
        var element = $(this).parent('li');
        if (parseInt($(window).width()) < 992) {
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        }


    });

    $('.header-bar').on('click', function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    })

    //Header
    var fixed_top = $("header");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            fixed_top.addClass("header-fixed fadeInUp");
        } else {
            fixed_top.removeClass("header-fixed fadeInUp");
        }
    });

    /*==== Multipage header Section End here =====*/

    //============ Scroll to top js =========
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').css({
                'bottom': '7%',
                'opacity': '1',
                'transition': 'all .5s ease'
            });
        } else {
            $('.scrollToTop').css({
                'bottom': '-30%',
                'opacity': '0',
                'transition': 'all .5s ease'
            })
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });






























})(jQuery);