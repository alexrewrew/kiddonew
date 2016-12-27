$(document).ready(function () {

    $(window).on('load resize', function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $(".navbar-brand").css('opacity', '1');
            } else {
                $(".navbar-brand").css('opacity', '0');
            }
        });
    });
    //menu
    /*$('.menu').click(function () {
     $('#nav-icon').toggleClass('open');
     $('.main_menu').toggleClass('opened');
     });


     $('.menu_list li a').click(function () {
     $('#nav-icon').removeClass('open');
     $('.main_menu').removeClass('opened');

     });



     $(document).mouseup(function (e) {
     var div = $(".opened");
     if (!div.is(e.target) &&
     div.has(e.target).length === 0) {
     $('#nav-icon').removeClass('open');
     $('.main_menu').removeClass('opened');
     }
     });*/

    //slide anchors
    $(".smooth").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $('#main_carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 2
            },
            1280: {
                items: 3
            }
        }
    });
    $('#product_carousel').owlCarousel({
        loop: true,
        nav: false,
        items: 1
    });
    $('#header_carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 1
    });
    $('#slider_baby').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 1
    });


    $('.owl-prev').hover(
        function () {
            $('.left_hover').css({left: 15/*, opacity:1*/});
        },
        function () {
            $('.left_hover').css({left: 110/*, opacity:0*/});
        }
    );
    $('.owl-next').hover(
        function () {
            $('.right_hover').css({right: 15/* , opacity:1*/});
        },
        function () {
            $('.right_hover').css({right: 110/*, opacity:0*/});
        }
    )

    /* $('.right_header_front').hover(function () {
     $('.andrew_hover').css('right', '0');
     });*/


    // parallax
    /*if ($(window).width() > '1200') {

     $.fn.moveIt = function () {
     var $window = $(window);
     var instances = [];
     $(this).each(function () {
     instances.push(new moveItItem($(this)));
     });
     window.onscroll = function () {
     var scrollTop = $window.scrollTop();
     instances.forEach(function (inst) {
     inst.update(scrollTop);
     });
     }
     }
     var moveItItem = function (el) {
     this.el = $(el);
     this.speed = parseInt(this.el.attr('data-scroll-speed'));
     };
     moveItItem.prototype.update = function (scrollTop) {
     var pos = scrollTop / this.speed;
     this.el.css('transform', 'translateY(' + -pos + 'px)');
     };
     };
     $(function () {
     $('[data-scroll-speed]').moveIt();
     });*/

    // accordion
    /*$('.panel-title > a').click(function () {
     $('.panel-title > a').removeClass('active_pan');
     $(this).addClass('active_pan');
     /!*$('.accordion_angle').attr('src', '../img/icons/angle-down3.svg');*!/
     });*/

    //overflow
    /*$('.button').click(function() {
     $('body').css('overflow', 'hidden');
     });*/

    //new parallax
});
